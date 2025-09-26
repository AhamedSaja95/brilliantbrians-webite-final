import { HeroSection } from "@/components/hero-section";
import TutoringPrograms from "@/components/tutoring-programs";
import TestimonialSection from "@/components/testimonial-section";
import StartJourneySection from "@/components/start-journey-section";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <HeroSection />

      {/* Tutoring Programs */}
      <TutoringPrograms />

      {/* Testimonial Section */}
      <TestimonialSection />

      <StartJourneySection />

      <Footer />
    </div>
  );
}
