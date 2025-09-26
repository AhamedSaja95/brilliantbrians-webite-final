import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("Received form submission:", {
      name: `${body.firstName} ${body.lastName}`,
      email: body.email,
      subject: body.subject,
    });

    // Create FormData for Web3Forms with minimal fields
    const formData = new FormData();
    formData.append("access_key", "418f910e-32e1-4185-a0a8-b72b38606e11");
    formData.append("name", `${body.firstName} ${body.lastName}`);
    formData.append("email", body.email);
    formData.append("message", body.message);

    // Optional fields
    if (body.phone) {
      formData.append("phone", body.phone);
    }
    if (body.subject) {
      formData.append("subject", `Brilliant Brains: ${body.subject}`);
    }

    console.log("Sending request to Web3Forms...");

    // Submit to Web3Forms with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    console.log("Web3Forms response status:", response.status);
    console.log(
      "Web3Forms response headers:",
      Object.fromEntries(response.headers.entries())
    );

    // Check if the response is successful
    if (!response.ok) {
      console.error(
        `Web3Forms API error: ${response.status} ${response.statusText}`
      );
      return NextResponse.json(
        { success: false, message: `Email service error: ${response.status}` },
        { status: 500 }
      );
    }

    // Get response text first to check what we're getting
    const responseText = await response.text();
    console.log("Web3Forms raw response:", responseText.substring(0, 500));

    // Try to parse as JSON
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Failed to parse Web3Forms response as JSON:", parseError);
      console.error("Response was:", responseText.substring(0, 200));
      return NextResponse.json(
        { success: false, message: "Invalid response from email service" },
        { status: 500 }
      );
    }

    console.log("Parsed Web3Forms result:", result);

    if (result.success) {
      return NextResponse.json(
        { success: true, message: "Email sent successfully" },
        { status: 200 }
      );
    } else {
      console.error("Web3Forms returned failure:", result);
      return NextResponse.json(
        { success: false, message: result.message || "Failed to send email" },
        { status: 400 }
      );
    }
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error("Web3Forms request timed out");
      return NextResponse.json(
        { success: false, message: "Request timed out" },
        { status: 408 }
      );
    }

    console.error("API Route Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
