"use client";

import Image from "next/image";
import { MessageSquareHeart } from "lucide-react";
import GradientBadge from "./ui/gradient-badge";

export default function StartJourneySection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decorative elements matching the theme */}
      <div className="absolute inset-0">
        {/* Professional floating elements */}
        <div className="absolute top-32 right-20 w-80 h-80 bg-gradient-to-br from-[#2151A1]/8 to-[#d93b3b]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-to-br from-[#d93b3b]/6 to-[#2151A1]/6 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-[#2151A1]/4 to-[#d93b3b]/4 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Illustration */}
          <div className="relative h-full flex items-center justify-center lg:order-1">
            <div className="relative z-10">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#2151A1]/10 to-[#d93b3b]/10 rounded-2xl blur-xl"></div>
              <Image
                src="/cta.png"
                alt="Young student with glasses and a blue hoodie"
                width={500}
                height={500}
                className="relative w-full max-w-sm md:max-w-md lg:max-w-none mx-auto"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="text-center lg:text-left lg:order-2">
            {/* Enhanced Gradient Badge matching other sections */}
            <GradientBadge
              text="START YOUR JOURNEY"
              icon={MessageSquareHeart}
              variant="accent"
              size="lg"
              glow={true}
              shimmer={true}
              className="mb-8"
            />

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-800 mb-6 leading-[1.15]">
              Not sure what your child needs? Let's figure it out{" "}
              <span className="text-[#2151A1]">together.</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Every student is different. Our first session is all about
              understanding goals, struggles, and strengths, so we can plan the
              best way forward.
            </p>

            <div className="mb-12">
              <a
                href="tel:+61468384001"
                className="inline-flex items-center justify-center bg-[#2151A1] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#d93b3b] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#2151A1]/25"
              >
                Start with a Free Session
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
