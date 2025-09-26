"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import GradientBadge from "./ui/gradient-badge";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isVisible = useRef(false);

  // Function to handle smooth scrolling to the tutoring programs section
  const scrollToTutoringPrograms = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById("tutoring-programs");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const heroText = heroTextRef.current;
    const heroImage = heroImageRef.current;

    if (!container || !heroText || !heroImage) return;

    // Educational characters and symbols (optimized set)
    const characterSet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "M",
      "X",
      "Y",
      "Z",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "+",
      "-",
      "×",
      "÷",
      "=",
      "√",
      "π",
      "∞",
      "∆",
      "∑",
    ];

    // Brand colors matching your theme (optimized)
    const colors = [
      "#2151A1", // Primary blue
      "#d93b3b", // Secondary red
      "#4a90e2", // Accent blue
      "#94a3b8", // Gray
    ];

    // Optimized floating elements creation with memory management
    function createFloatingElements(count: number) {
      if (!container || !heroText || !heroImage || !isVisible.current) return;

      // Clear existing elements to prevent memory leaks
      clearFloatingElements();

      const textRect = heroText.getBoundingClientRect();
      const imageRect = heroImage.getBoundingClientRect();
      const PADDING = 50; // Buffer zone around content
      const fragment = document.createDocumentFragment();

      for (let i = 0; i < count; i++) {
        let x: number, y: number, validPosition: boolean;
        let attempts = 0;

        // Get hero section boundaries (use container dimensions for absolute positioning)
        const heroRect = container.getBoundingClientRect();

        do {
          x = Math.random() * heroRect.width;
          y = Math.random() * heroRect.height;

          const isOverText =
            x > textRect.left - heroRect.left - PADDING &&
            x < textRect.right - heroRect.left + PADDING &&
            y > textRect.top - heroRect.top - PADDING &&
            y < textRect.bottom - heroRect.top + PADDING;
          const isOverImage =
            x > imageRect.left - heroRect.left - PADDING &&
            x < imageRect.right - heroRect.left + PADDING &&
            y > imageRect.top - heroRect.top - PADDING &&
            y < imageRect.bottom - heroRect.top + PADDING;

          validPosition = !isOverText && !isOverImage;
          attempts++;
        } while (!validPosition && attempts < 50); // Reduced attempts for performance

        if (validPosition) {
          const el = document.createElement("div");
          el.className = "floating-char";
          el.textContent =
            characterSet[Math.floor(Math.random() * characterSet.length)];
          el.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            font-size: ${Math.random() * 1 + 1.2}rem;
            font-weight: 700;
            color: ${colors[Math.floor(Math.random() * colors.length)]};
            user-select: none;
            pointer-events: none;
            opacity: 0.8;
            z-index: 1;
            animation: floatUp ${Math.random() * 20 + 15}s linear infinite;
            animation-delay: ${Math.random() * -30}s;
            will-change: transform;
          `;
          fragment.appendChild(el);
        }
      }

      // Batch DOM update for better performance
      container.appendChild(fragment);
    }

    // Function to clear floating elements and prevent memory leaks
    function clearFloatingElements() {
      if (!container) return;
      const elements = container.querySelectorAll(".floating-char");
      elements.forEach((el) => el.remove());
    }

    function debounce<T extends (...args: never[]) => void>(
      func: T,
      delay: number
    ): (...args: Parameters<T>) => void {
      let timeout: NodeJS.Timeout;
      return function (...args: Parameters<T>) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
      };
    }

    // Reduced element count for better performance
    const elementCount = Math.min(12, Math.floor(window.innerWidth / 100));

    // Setup intersection observer for performance
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.current = entry.isIntersecting;
          if (entry.isIntersecting) {
            createFloatingElements(elementCount);
          } else {
            clearFloatingElements();
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observerRef.current.observe(container);

    // Debounced resize handler with visibility check
    const handleResize = debounce(() => {
      if (isVisible.current) {
        createFloatingElements(
          Math.min(12, Math.floor(window.innerWidth / 100))
        );
      }
    }, 300);

    window.addEventListener("resize", handleResize);

    return () => {
      // Comprehensive cleanup
      window.removeEventListener("resize", handleResize);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearFloatingElements();
    };
  }, []);

  return (
    // Modified to always fit 100vh on all devices except mobile
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ minHeight: "100vh" }}
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www.tutorchase.com/images/hero-desk.webp"
          alt="Professional tutoring background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* Floating Elements Container - Above background */}
      <div ref={containerRef} className="absolute inset-0 z-10"></div>

      {/* CSS Animations - Using standard style tag with proper typing */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes floatUp {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0.9;
            }
            100% {
              transform: translateY(-100vh) rotate(360deg);
              opacity: 0;
            }
          }

          .floating-char {
            font-family: "Geist", sans-serif;
          }
        `,
        }}
      />

      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Modified grid to ensure proper vertical centering and 100vh height */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-screen py-16 md:py-20"
          style={{ minHeight: "100vh" }}
        >
          {/* Left Content */}
          <div ref={heroTextRef} className="space-y-8 md:space-y-10 max-w-2xl">
            {/* Enhanced Gradient Badge */}
            <GradientBadge
              text="Australia's Leading Tutoring"
              icon={GraduationCap}
              variant="accent"
              size="lg"
              glow={true}
              shimmer={true}
              className="mt-8 sm:mt-0"
            />

            {/* Main Title */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.2] text-gray-800 mb-4 md:mb-6"
              style={{ textShadow: "var(--text-shadow-strong)" }}
            >
              <span className="block">
                <span className="relative inline-block text-[#2151A1]">
                  Tutoring
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-3 md:h-4"
                    viewBox="0 0 183 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M1.99999 7.49999C28.4321 3.01429 85.3429 -2.49999 181 7.49999"
                      stroke="#d93b3b"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
              <span className="block text-[#2151A1]">That Transforms </span>
              <span className="block text-[#2151A1]">Learning</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mb-6 md:mb-8">
              At Brilliant Brains, we’re dedicated to transforming education and
              inspiring excellence. True to our slogan: We guide. You grow. We
              offer expert-led classes tailored to your child's learning style,
              making learning effective, fun, and flexible.
            </p>

            {/* Star Rating with Australian Flag */}
            <div className="flex items-center space-x-2 flex-wrap">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 md:w-5 md:h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-600">
                4.9/5 based on
              </span>
              <span className="text-xs sm:text-sm font-semibold text-gray-800">
                628 reviews
              </span>
              <div className="flex items-center space-x-1">
                {/* Australian Flag */}
                <svg
                  className="w-7 h-4 md:w-9 md:h-5"
                  viewBox="0 0 640 320"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Blue background */}
                  <rect width="640" height="320" fill="#012169" />

                  {/* Union Jack */}
                  <g>
                    {/* White diagonals */}
                    <path
                      d="M0,0 L640,320 M640,0 L0,320"
                      stroke="white"
                      strokeWidth="32"
                    />
                    {/* Red diagonals */}
                    <path
                      d="M0,0 L640,320 M640,0 L0,320"
                      stroke="#C8102E"
                      strokeWidth="19.2"
                    />
                    {/* White cross */}
                    <path
                      d="M320,0 L320,320 M0,160 L640,160"
                      stroke="white"
                      strokeWidth="53.33"
                    />
                    {/* Red cross */}
                    <path
                      d="M320,0 L320,320 M0,160 L640,160"
                      stroke="#C8102E"
                      strokeWidth="32"
                    />
                  </g>

                  {/* Southern Cross stars */}
                  <g fill="white">
                    {/* Alpha Crucis */}
                    <polygon points="416,88 420,100 432,100 422,108 426,120 416,112 406,120 410,108 400,100 412,100" />
                    {/* Beta Crucis */}
                    <polygon points="480,120 484,132 496,132 486,140 490,152 480,144 470,152 474,140 464,132 476,132" />
                    {/* Gamma Crucis */}
                    <polygon points="480,200 484,212 496,212 486,220 490,232 480,224 470,232 474,220 464,212 476,212" />
                    {/* Delta Crucis */}
                    <polygon points="416,232 420,244 432,244 422,252 426,264 416,256 406,264 410,252 400,244 412,244" />
                    {/* Epsilon Crucis */}
                    <polygon points="456,160 458,166 464,166 459,170 461,176 456,172 451,176 453,170 448,166 454,166" />
                  </g>

                  {/* Commonwealth Star */}
                  <g fill="white">
                    <polygon points="160,240 168,264 192,264 174,280 182,304 160,288 138,304 146,280 128,264 152,264" />
                  </g>
                </svg>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/61468384001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#2151A1] text-white font-semibold text-base py-3 px-6 md:px-8 rounded-full hover:bg-[#004080] transition-colors duration-200"
              >
                Book a Free Trial
              </a>

              <a
                href="#tutoring-programs"
                onClick={scrollToTutoringPrograms}
                className="inline-flex items-center justify-center bg-[#d93b3b] text-white font-semibold text-base py-3 px-6 md:px-8 rounded-full hover:bg-[#c02d2d] transition-colors duration-200 cursor-pointer"
              >
                View Subjects
              </a>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div
            ref={heroImageRef}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-none">
              <Image
                src="/hero.png"
                alt="Brilliant Brains Tutoring - Student Success"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
