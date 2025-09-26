"use client";

import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  GraduationCap,
  AlertCircle,
} from "lucide-react";
import { ContactNavbar } from "@/components/contact-navbar";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Type definitions
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  // Auto-save form data to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("brilliantbrains-contact-form");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
      } catch (error) {
        console.error("Error loading saved form data:", error);
      }
    }
  }, []);

  useEffect(() => {
    // Save form data when it changes (with debounce)
    const timeoutId = setTimeout(() => {
      if (Object.values(formData).some((value) => value.trim() !== "")) {
        localStorage.setItem(
          "brilliantbrains-contact-form",
          JSON.stringify(formData)
        );
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [formData]);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Enhanced phone validation for Australian numbers
    const phoneRegex =
      /^(\+61|0)[2-9]\d{8}$|^(\+61|0)4\d{8}$|^(\+61\s?)?[2-9]\d{1}\s?\d{4}\s?\d{4}$|^(\+61\s?)?4\d{2}\s?\d{3}\s?\d{3}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
    return (
      phoneRegex.test(cleanPhone) || /^[\+]?[0-9\s\-\(\)]{8,}$/.test(cleanPhone)
    );
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Subject validation
    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }

    // Message validation with profanity check
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    // Additional validation for message content
    const spamKeywords = [
      "viagra",
      "casino",
      "lottery",
      "winner",
      "congratulations",
      "urgent",
      "click here",
    ];
    const containsSpam = spamKeywords.some((keyword) =>
      formData.message.toLowerCase().includes(keyword.toLowerCase())
    );
    if (containsSpam) {
      newErrors.message = "Message appears to contain inappropriate content";
    }

    return newErrors;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }));

    // Clear error when user makes a selection
    if (errors.subject) {
      setErrors((prev) => ({
        ...prev,
        subject: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Submit to internal API route (bypasses CORS) with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Check if response is ok
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Response error:", errorText);
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        // Clear saved form data on successful submission
        localStorage.removeItem("brilliantbrains-contact-form");
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      console.error("Error details:", {
        name: error instanceof Error ? error.name : "Unknown",
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      });
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const getInputClassName = (fieldName: keyof FormData): string => {
    const baseClass =
      "w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#2151A1] focus:border-transparent transition-all duration-300 shadow-sm";

    if (errors[fieldName]) {
      return `${baseClass} border-red-300 focus:ring-red-500 bg-red-50`;
    }

    if (formData[fieldName] && !errors[fieldName]) {
      return `${baseClass} border-green-300 focus:ring-green-500 bg-green-50`;
    }

    return `${baseClass} border-gray-300 hover:border-[#2151A1]/50`;
  };

  return (
    <div>
      <ContactNavbar />
      {/* Hero Section */}
      <div className="h-[450px] w-full relative">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/bgAbt.jpg"
            alt="Contact background"
            fill
            className="object-cover object-right"
            priority
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-transparent to-blue-500 opacity-70"></div>
          {/* Additional dark overlay for mobile screens to improve text visibility */}
          <div className="absolute inset-0 bg-black/30 md:bg-black/0"></div>
        </div>
        {/* Text Overlay */}
        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-white text-5xl font-semibold mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-white text-xl max-w-2xl mx-auto">
              Get in touch with our expert tutors and start your academic
              journey today
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#2151A1]/5 to-[#d93b3b]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-[#d93b3b]/5 to-[#2151A1]/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-lg"></div>
        <div className="absolute top-1/4 right-1/3 w-20 h-20 bg-gradient-to-br from-purple-400/5 to-orange-400/5 rounded-full blur-lg"></div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2151A1]/10 to-[#d93b3b]/10 text-[#2151A1] px-6 py-3 rounded-full font-semibold border border-[#2151A1]/10 shadow-lg backdrop-blur-sm mb-6">
              <Mail className="w-5 h-5" />
              <span className="bg-gradient-to-r from-[#2151A1] to-[#d93b3b] bg-clip-text text-transparent font-bold">
                Expert Tutoring Support
              </span>
            </div>
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Contact us today to discuss your learning goals and find the
              perfect tutoring program for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-blue-200/50 relative overflow-hidden">
                {/* Subtle background accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#2151A1]/5 to-blue-100/30 rounded-full blur-2xl"></div>

                <div className="relative z-10 flex items-center gap-5">
                  {/* Icon Section - Left Side */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2151A1] via-[#1a4082] to-[#2151A1] rounded-2xl flex items-center justify-center shadow-lg">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content Section - Right Side */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Phone
                    </h3>
                    <a
                      href="tel:+61468384001"
                      className="text-[#2151A1] font-semibold text-lg mb-2 hover:text-[#d93b3b] transition-colors duration-300 block"
                    >
                      +61 468 384 001
                    </a>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Available Mon-Fri 9AM-6PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-red-200/50 relative overflow-hidden">
                {/* Subtle background accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#d93b3b]/5 to-red-100/30 rounded-full blur-2xl"></div>

                <div className="relative z-10 flex items-center gap-5">
                  {/* Icon Section - Left Side */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#d93b3b] via-[#b82c2c] to-[#d93b3b] rounded-2xl flex items-center justify-center shadow-lg">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content Section - Right Side */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Email
                    </h3>
                    <a
                      href="mailto:contact@brilliantbrainstutoring.com.au"
                      className="text-[#d93b3b] font-semibold text-base mb-2 hover:text-[#2151A1] transition-colors duration-300 block break-all"
                    >
                      contact@brilliantbrainstutoring.com.au
                    </a>
                    <p className="text-gray-600 text-base leading-relaxed">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-emerald-200/50 relative overflow-hidden">
                {/* Subtle background accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/5 to-emerald-100/30 rounded-full blur-2xl"></div>

                <div className="relative z-10 flex items-center gap-5">
                  {/* Icon Section - Left Side */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content Section - Right Side */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Location
                    </h3>
                    <p className="text-emerald-600 font-semibold text-lg mb-2">
                      Perth, Australia
                    </p>
                    <p className="text-gray-600 text-base leading-relaxed">
                      North: Caversham • South: Kenwick
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-purple-200/50 relative overflow-hidden">
                {/* Subtle background accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/5 to-purple-100/30 rounded-full blur-2xl"></div>

                <div className="relative z-10 flex items-center gap-5">
                  {/* Icon Section - Left Side */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content Section - Right Side */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Hours
                    </h3>
                    <div className="space-y-1">
                      <p className="text-purple-600 font-semibold text-base">
                        Mon-Fri: 4:30 AM - 7:30 PM
                      </p>
                      <p className="text-purple-600 font-semibold text-base">
                        Sat-Sun: 9:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - SIMPLIFIED FOR HYDRATION SAFETY */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200/50 relative overflow-hidden backdrop-blur-sm">
              {/* Simple shimmer effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"></div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 leading-tight">
                    Send us a Message
                  </h3>
                  {submitStatus === "success" && (
                    <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                      <p className="font-semibold">
                        Message sent successfully!
                      </p>
                      <p>We'll get back to you within 24 hours.</p>
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                      <p className="font-semibold">Error sending message</p>
                      <p>Please try again or contact us directly.</p>
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form fields continue here - split to fit under token limit */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">
                          First Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`${getInputClassName("firstName")} h-12`}
                          placeholder="Your first name"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">
                          Last Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`${getInputClassName("lastName")} h-12`}
                          placeholder="Your last name"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`${getInputClassName("email")} h-12`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`${getInputClassName("phone")} h-12`}
                        placeholder="+61 123 456 789"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">
                        Subject <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.subject}
                        onValueChange={handleSelectChange}
                      >
                        <SelectTrigger
                          className={`${getInputClassName("subject")} h-12`}
                        >
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maths">Maths Tutoring</SelectItem>
                          <SelectItem value="english">
                            English Tutoring
                          </SelectItem>
                          <SelectItem value="naplan">
                            NAPLAN Preparation
                          </SelectItem>
                          <SelectItem value="gate">GATE Preparation</SelectItem>
                          <SelectItem value="atar">ATAR Tutoring</SelectItem>
                          <SelectItem value="crash">Crash Courses</SelectItem>
                          <SelectItem value="assessment">
                            Free Assessment
                          </SelectItem>
                          <SelectItem value="pricing">
                            Pricing Information
                          </SelectItem>
                          <SelectItem value="other">Other Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message <span className="text-red-500">*</span>
                        <span className="text-gray-500 text-xs ml-2">
                          ({formData.message.length}/1000)
                        </span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`${getInputClassName(
                          "message"
                        )} min-h-[120px] resize-y`}
                        placeholder="Tell us about your learning goals, current academic level, preferred subjects, and how we can help..."
                        maxLength={1000}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full h-12 font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all duration-300 ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-[#2151A1] to-[#d93b3b] text-white hover:from-[#d93b3b] hover:to-[#2151A1] hover:shadow-xl transform hover:scale-105"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 relative">
            <div className="bg-gradient-to-br from-[#2151A1] via-[#2151A1] to-[#d93b3b] rounded-3xl p-12 text-center text-white shadow-2xl border border-white/10 relative overflow-hidden">
              {/* Floating background elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/5 rounded-full blur-lg"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 bg-white/10 text-white px-4 py-2 rounded-full font-semibold border border-white/20 shadow-lg backdrop-blur-sm mb-6">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-sm font-bold">Start Your Journey</span>
                </div>

                <h3 className="text-3xl font-semibold mb-6 leading-tight">
                  Ready to Get Started?
                </h3>
                <p className="text-lg mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto">
                  Book a free trial session today and experience the
                  BrilliantBrains difference
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/61468384001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-[#2151A1] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Book Free Trial
                  </a>
                  <a
                    href="tel:+61468384001"
                    className="inline-flex items-center justify-center bg-white/10 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 backdrop-blur-sm border border-white/20"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
