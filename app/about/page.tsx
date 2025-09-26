import Image from "next/image";
import AboutUs from "@/components/about-us";
import { ContactNavbar } from "@/components/contact-navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "About Us - Brilliant Brains Tutoring",
  description:
    "Learn about Brilliant Brains, Perth's leading tutoring centre. Meet our founder Sharmi and discover our mission to help students excel through personalized education.",
  keywords:
    "about brilliant brains, perth tutoring, founder sharmi, education mission, tutoring centre perth",
};

export default function AboutPage() {
  return (
    <div>
      <ContactNavbar />
      {/* Hero Section */}
      <div className="h-[450px] w-full relative">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/whiteBoard.jpg"
            alt="About Us background"
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
              About Us
            </h1>
            <p className="text-white text-xl max-w-2xl mx-auto">
              Discover our passion for education and commitment to helping
              students achieve academic success.
            </p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="min-h-screen">
        <AboutUs />
      </div>

      <Footer />
    </div>
  );
}
