"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Calculator,
  BookOpen,
  FileText,
  Brain,
  GraduationCap,
  Zap,
  ChevronDown,
  Mail,
  Calendar,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const tutoringPrograms = [
  {
    title: "Maths Tutoring",
    href: "/tutoring/maths",
    description:
      "Comprehensive mathematics tutoring for all levels and curricula.",
    icon: Calculator,
  },
  {
    title: "English Tutoring",
    href: "/tutoring/english",
    description: "Expert English language and literature tutoring services.",
    icon: BookOpen,
  },
  {
    title: "NAPLAN Preparation",
    href: "/tutoring/naplan",
    description: "Specialised preparation for NAPLAN assessments.",
    icon: FileText,
  },
  {
    title: "GATE Preparation",
    href: "/tutoring/gate",
    description: "Gifted and Talented Education program preparation.",
    icon: Brain,
  },
  {
    title: "ATAR Tutoring",
    href: "/tutoring/atar",
    description: "Australian Tertiary Admission Rank focused tutoring.",
    icon: GraduationCap,
  },
  {
    title: "Crash Courses",
    href: "/tutoring/crash-courses",
    description: "Intensive short-term courses for exam preparation.",
    icon: Zap,
  },
];

export function ContactNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    // Set initial state based on current scroll position
    setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/96 backdrop-blur-xl shadow-2xl border-b border-gray-200/60 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div
        className={`navbar-container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 max-w-7xl transition-all duration-500 ${
          isScrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/newbblogo.svg"
              alt="BrilliantBrains Logo"
              width={200}
              height={65}
              className={`navbar-logo ${
                isScrolled ? "h-[70px]" : "h-[80px]"
              } w-auto ${isScrolled ? "" : "brightness-0 invert"}`}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center flex-1 justify-center relative z-[60]">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-1">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={`px-4 py-3 text-sm font-semibold ${
                      isScrolled
                        ? "text-gray-700 hover:bg-gray-100"
                        : "text-white hover:bg-white/20"
                    } hover:text-[#d93b3b] rounded-full transition-all duration-300 md:px-6`}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className={`px-4 py-3 text-sm font-semibold ${
                      isScrolled
                        ? "text-gray-700 hover:bg-gray-100"
                        : "text-white hover:bg-white/20"
                    } hover:text-[#d93b3b] rounded-full transition-all duration-300 md:px-6`}
                  >
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`px-4 py-3 text-sm font-semibold ${
                    isScrolled
                      ? "text-gray-700 hover:bg-gray-100"
                      : "text-white hover:bg-white/20"
                  } hover:text-[#d93b3b] rounded-full transition-all duration-300 data-[state=open]:text-[#d93b3b] ${
                    isScrolled
                      ? "data-[state=open]:bg-gray-100"
                      : "data-[state=open]:bg-white/20"
                  } [&>svg]:hidden group md:px-6`}
                >
                  <span className="flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    Tutoring Programs
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[550px] p-8 bg-white/98 shadow-2xl rounded-3xl border border-gray-200/60 backdrop-blur-xl relative z-[100]">
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-[#2151A1] rounded-xl">
                          <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          Our Tutoring Programs
                        </h3>
                      </div>
                      <p
                        className={`text-sm leading-relaxed ${
                          isScrolled ? "text-gray-600" : "text-gray-700"
                        }`}
                      >
                        Comprehensive academic support tailored to your learning
                        style and goals
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {tutoringPrograms.map((program) => (
                        <ListItem
                          key={program.title}
                          title={program.title}
                          href={program.href}
                          icon={program.icon}
                          isScrolled={isScrolled}
                        >
                          {program.description}
                        </ListItem>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className={`px-4 py-3 text-sm font-semibold ${
                      isScrolled
                        ? "text-gray-700 hover:bg-gray-100"
                        : "text-white hover:bg-white/20"
                    } hover:text-[#d93b3b] rounded-full transition-all duration-300 md:px-6`}
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Contact Us
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Book a Free Trial Button */}
        <div className="hidden lg:flex flex-shrink-0">
          <Link
            href="https://wa.me/61468384001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#2151A1] text-white font-semibold px-6 py-3 text-sm rounded-full hover:bg-[#d93b3b] transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 md:px-8 md:py-3.5"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Book a Free Trial
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden">
          <button
            className={`relative inline-flex items-center justify-center rounded-full p-3 ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100/50"
                : "text-white hover:bg-white/20"
            } hover:text-[#d93b3b] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d93b3b] focus:ring-offset-2 group`}
            type="button"
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            data-state={isOpen ? "open" : "closed"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 transition-transform duration-200" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-200" />
            )}
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-menu"
          className={`lg:hidden ${
            isScrolled ? "bg-white/95" : "bg-black/80"
          } backdrop-blur-md shadow-xl border-t border-gray-100/50`}
        >
          <div className="navbar-container mx-auto py-6 px-4 md:px-6">
            <nav className="grid gap-2">
              <Link
                href="/"
                className={`flex w-full items-center rounded-full p-4 text-sm font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:bg-gray-50"
                    : "text-white hover:bg-white/20"
                } hover:text-[#d93b3b] transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Home
                </span>
              </Link>

              <Link
                href="/about"
                className={`flex w-full items-center rounded-full p-4 text-sm font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:bg-gray-50"
                    : "text-white hover:bg-white/20"
                } hover:text-[#d93b3b] transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  About Us
                </span>
              </Link>

              {/* Mobile Tutoring Programs */}
              <div className="py-2">
                <div
                  className={`flex items-center gap-3 text-sm font-semibold ${
                    isScrolled ? "text-gray-900" : "text-white"
                  } px-4 pb-3`}
                >
                  <svg
                    className="w-5 h-5 text-[#2151A1]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Tutoring Programs
                </div>
                <div className="grid gap-1 pl-4">
                  {tutoringPrograms.map((program) => (
                    <Link
                      key={program.title}
                      href={program.href}
                      className={`flex w-full items-center rounded-full p-3 text-sm ${
                        isScrolled
                          ? "text-gray-600 hover:bg-gray-50"
                          : "text-white/80 hover:bg-white/20"
                      } hover:text-[#d93b3b] transition-colors duration-200`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#d93b3b] rounded-full"></div>
                        {program.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className={`flex w-full items-center rounded-full p-4 text-sm font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:bg-gray-50"
                    : "text-white hover:bg-white/20"
                } hover:text-[#d93b3b] transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Us
                </span>
              </Link>

              <Link
                href="https://wa.me/61468384001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-full bg-[#2151A1] text-white hover:bg-[#004080] font-semibold p-4 text-sm transition-colors duration-200 mt-4"
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Book a Free Trial
                </span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  icon: Icon,
  isScrolled,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  isScrolled: boolean;
}) {
  return (
    <div {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={`block select-none space-y-3 rounded-2xl p-5 leading-none no-underline outline-none transition-all duration-300 ${
            isScrolled
              ? "hover:bg-gray-100 focus:bg-gray-100 hover:border-gray-200/50"
              : "hover:bg-white/20 focus:bg-white/20 hover:border-white/30"
          } group border border-transparent`}
        >
          <div
            className={`flex items-center gap-3 text-sm font-semibold leading-none ${
              isScrolled ? "text-gray-800" : "text-gray-800"
            } group-hover:text-[#d93b3b] transition-colors duration-300`}
          >
            {Icon ? (
              <div className="p-2 bg-[#2151A1]/10 rounded-xl group-hover:bg-[#d93b3b]/10 transition-all duration-300">
                <Icon
                  className={`w-4 h-4 ${
                    isScrolled ? "text-[#2151A1]" : "text-[#2151A1]"
                  } group-hover:text-[#d93b3b] transition-colors duration-300`}
                />
              </div>
            ) : (
              <div
                className={`w-2 h-2 ${
                  isScrolled ? "bg-[#2151A1]" : "bg-[#2151A1]"
                } rounded-full group-hover:bg-[#d93b3b] transition-colors duration-300`}
              ></div>
            )}
            {title}
          </div>
          <p
            className={`line-clamp-2 text-sm leading-relaxed ${
              isScrolled ? "text-gray-600" : "text-gray-600"
            } group-hover:text-gray-700 transition-colors duration-300`}
          >
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </div>
  );
}
