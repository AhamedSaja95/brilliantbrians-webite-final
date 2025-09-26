"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Link from "next/link";
import {
  Award,
  Calculator,
  BookOpen,
  GraduationCap,
  Target,
  Users,
  Clock,
  ArrowRight,
  Sparkles,
  PenTool,
} from "lucide-react";
import GradientBadge from "./ui/gradient-badge";

// Course data with actual images from public folder
const mockCourses = [
  {
    id: 1,
    title: "Maths Tutoring",
    slug: "maths",
    description:
      "Build a strong foundation in mathematics with personalised support tailored to each student's level. Our expert tutors help boost confidence, problem-solving skills and academic performance.",
    image: "/MathImage.jpg",
    icon: "calculate",
    category: "core",
    yearRange: "Years 1-10",
    duration: "1-2 hours/week",
  },
  {
    id: 2,
    title: "English Tutoring",
    slug: "english",
    description:
      "Enhance reading, writing, grammar, and comprehension skills through engaging and structured lessons. Ideal for students aiming to succeed in school and beyond.",
    image: "/english.jpg",
    icon: "edit",
    category: "core",
    yearRange: "Years 1-10",
    duration: "1-2 hours/week",
  },
  {
    id: 3,
    title: "NAPLAN Preparation",
    slug: "naplan",
    description:
      "Prepare for NAPLAN with targeted practice and expert strategies. Our program builds familiarity with the test format and boosts confidence in literacy and numeracy.",
    image: "/NAPLAN.jpeg",
    icon: "school",
    category: "exam-prep",
    yearRange: "Years 3, 5, 7, 9",
    duration: "2 terms (2 hrs/week)",
  },
  {
    id: 4,
    title: "GATE Preparation",
    slug: "gate",
    description:
      "Help your child excel in the GATE (Gifted and Talented Education) exam with specialised training focused on Abstract Reasoning, Quantitative Reasoning, Reading Comprehension and Creative Writing.",
    image: "/GATE.jpg",
    icon: "target",
    category: "exam-prep",
    yearRange: "Years 4-6",
    duration: "2 terms (2 hrs/week)",
  },
  {
    id: 5,
    title: "ATAR Tutoring",
    slug: "atar",
    description:
      "Achieve top ATAR results with our subject-specific tutoring, study strategies, and exam-focused support. Perfect for Year 11 and 12 students aiming for university entry.",
    image: "/ATARTutor.jpg",
    icon: "award",
    category: "intensive",
    yearRange: "Years 11-12",
    duration: "2 hours/week",
  },
  {
    id: 6,
    title: "Crash Courses",
    slug: "crash-courses",
    description:
      "Intensive short-term courses designed to quickly strengthen subject understanding and improve grades. Great for last-minute exam prep. Runs during school terms and during school holidays.",
    image: "/crashCourse.jpg",
    icon: "book",
    category: "intensive",
    yearRange: "Years 7-12",
    duration: "10 lessons",
  },
];

export default function TutoringPrograms() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const loadingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Optimize loading simulation - shorter delay for better perceived performance
    loadingTimerRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 600); // Reduced from 1000ms

    // Setup intersection observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1, rootMargin: "20px" }
    );

    return () => {
      if (loadingTimerRef.current) {
        clearTimeout(loadingTimerRef.current);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleImageError = useCallback((courseId: number) => {
    setImageErrors((prev) => {
      const newSet = new Set(prev);
      newSet.add(courseId);
      return newSet;
    });
  }, []);

  const getIconComponent = useMemo(() => {
    const iconMap: Record<
      string,
      React.ComponentType<{ className?: string }>
    > = {
      calculate: Calculator,
      edit: PenTool,
      school: GraduationCap,
      target: Target,
      book: BookOpen,
      award: Award,
    };
    return (iconName: string) => iconMap[iconName] || BookOpen;
  }, []);

  const getCategoryBadge = useMemo(() => {
    const badgeConfig = {
      core: {
        text: "Core Subject",
        color: "bg-gradient-to-r from-[#2151A1]/10 to-[#d93b3b]/10",
        icon: BookOpen,
      },
      "exam-prep": {
        text: "Exam Prep",
        color: "bg-gradient-to-r from-[#2151A1]/10 to-[#d93b3b]/10",
        icon: Target,
      },
      intensive: {
        text: "Intensive",
        color: "bg-gradient-to-r from-[#2151A1]/10 to-[#d93b3b]/10",
        icon: Sparkles,
      },
    } as const;

    return (category: string) =>
      badgeConfig[category as keyof typeof badgeConfig] || badgeConfig.core;
  }, []);

  return (
    <section id="tutoring-programs" className="py-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Main-Bg.png"
          alt="Tutoring Programs Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Enhanced Professional Section Header */}
        <div className="text-center mb-20 relative">
          {/* Professional header background */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-40 bg-gradient-to-r from-[#2151A1]/5 via-[#d93b3b]/5 to-[#2151A1]/5 rounded-full blur-3xl -z-10"></div>

          {/* Enhanced Gradient Badge */}
          <GradientBadge
            text="Expert Tutoring"
            icon={GraduationCap}
            variant="accent"
            size="lg"
            glow={true}
            shimmer={true}
            className="mb-8"
          />

          {/* Professional title with enhanced styling */}
          <div className="relative mb-8">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#2151A1] mb-4 relative z-10 leading-[1.1]">
              Our Tutoring{" "}
              <span className="relative inline-block text-[#2151A1]">
                Programs
                <svg
                  className="absolute -bottom-2 left-0 w-full h-4"
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
            </h2>

            {/* Professional decorative elements */}
            <div className="absolute -top-6 -left-12 w-10 h-10 text-[#d93b3b]/20 animate-bounce">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div className="absolute -top-4 -right-8 w-8 h-8 text-[#2151A1]/15 animate-bounce">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>

          {/* Enhanced professional description */}
          <div className="relative">
            <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed tracking-wide mb-16 px-4">
              Comprehensive tutoring programs designed to help students excel in
              their academic journey with personalised support and expert
              guidance from our dedicated team
            </p>
          </div>
        </div>

        {isLoading ? (
          /* Loading Skeleton */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200/60 animate-pulse"
              >
                {/* Skeleton Image */}
                <div className="h-52 bg-gradient-to-br from-gray-200 to-gray-300"></div>

                {/* Skeleton Content */}
                <div className="p-8">
                  {/* Skeleton Title */}
                  <div className="h-8 bg-gray-200 rounded-lg mb-4"></div>

                  {/* Skeleton Description */}
                  <div className="space-y-2 mb-6">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>

                  {/* Skeleton Meta */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-xl"></div>
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-xl"></div>
                      <div className="h-4 bg-gray-200 rounded w-20"></div>
                    </div>
                  </div>

                  {/* Skeleton Button */}
                  <div className="h-12 bg-gray-200 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Enhanced Courses Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
            {mockCourses.map((course, index) => {
              const IconComponent = getIconComponent(course.icon);
              const badge = getCategoryBadge(course.category);
              const BadgeIcon = badge.icon;
              const isHovered = hoveredCard === course.id;

              return (
                <div
                  key={course.id}
                  className="group relative bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-200/60 hover:border-[#2151A1]/40 will-change-transform flex flex-col h-full"
                  onMouseEnter={() => setHoveredCard(course.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Professional glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2151A1]/20 via-[#d93b3b]/20 to-[#2151A1]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                  {/* Card content wrapper */}
                  <div className="relative bg-white rounded-3xl h-full flex flex-col overflow-hidden">
                    {/* Enhanced Image Container with Professional Animations */}
                    <div className="relative overflow-hidden group/image h-52">
                      {imageErrors.has(course.id) ? (
                        <div className="w-full h-full bg-gradient-to-br from-[#2151A1] to-[#004080] flex flex-col items-center justify-center text-white relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#d93b3b]/20 to-transparent animate-pulse"></div>
                          <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-8 h-8 animate-bounce" />
                            </div>
                            <p className="text-sm font-medium">
                              Professional Content
                            </p>
                          </div>
                        </div>
                      ) : (
                        <>
                          <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-all duration-700 will-change-transform filter group-hover:brightness-110"
                            onError={() => handleImageError(course.id)}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index < 3}
                          />
                          {/* Professional overlay effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#2151A1]/0 via-transparent to-[#d93b3b]/0 group-hover:from-[#2151A1]/10 group-hover:to-[#d93b3b]/10 transition-all duration-500"></div>
                        </>
                      )}

                      {/* Enhanced Professional Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/40 transition-all duration-500"></div>

                      {/* Professional Category Badge */}
                      <div className="absolute top-5 right-5 inline-flex items-center gap-2 bg-white/95 backdrop-blur-xl text-[#2151A1] px-4 py-2.5 rounded-2xl text-xs font-bold border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                        <BadgeIcon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="bg-gradient-to-r from-[#2151A1] to-[#d93b3b] bg-clip-text text-transparent font-bold">
                          {badge.text}
                        </span>
                      </div>

                      {/* Professional Icon with Enhanced Effects */}
                      <div className="absolute bottom-5 left-5 w-16 h-16 bg-white/95 backdrop-blur-xl rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-white/40 group-hover:shadow-2xl group-hover:bg-white">
                        <IconComponent
                          className={`w-8 h-8 transition-all duration-300 ${
                            isHovered
                              ? "text-[#d93b3b] scale-110"
                              : "text-[#2151A1]"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Enhanced Professional Content */}
                    <div className="flex flex-col flex-grow p-8">
                      <h3 className="text-2xl font-semibold text-[#2151A1] mb-4 group-hover:text-[#d93b3b] transition-colors duration-300 leading-tight">
                        {course.title}
                      </h3>

                      <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                        {course.description}
                      </p>

                      {/* Enhanced Meta Information */}
                      <div className="flex flex-col gap-3 mb-8">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 bg-[#d93b3b]/10 rounded-xl flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#d93b3b]" />
                          </div>
                          <span className="font-medium">
                            {course.yearRange}
                          </span>
                        </div>
                        {course.duration && (
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <div className="w-8 h-8 bg-[#2151A1]/10 rounded-xl flex items-center justify-center">
                              <Clock className="w-4 h-4 text-[#2151A1]" />
                            </div>
                            <span className="font-medium">
                              {course.duration}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Professional CTA Button */}
                      <div className="mt-auto">
                        <Link
                          href={`/tutoring/${course.slug}`}
                          className="group/btn relative inline-flex items-center gap-3 bg-gradient-to-r from-[#2151A1] to-[#004080] hover:from-[#d93b3b] hover:to-[#c02d2d] text-white px-8 py-4 rounded-2xl font-bold transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 shadow-xl hover:shadow-2xl w-full justify-center overflow-hidden border border-[#2151A1]/20 hover:border-[#d93b3b]/30"
                        >
                          {/* Professional background animation */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#d93b3b]/0 via-[#2151A1]/0 to-[#d93b3b]/0 group-hover/btn:from-[#d93b3b]/10 group-hover/btn:via-[#2151A1]/10 group-hover/btn:to-[#d93b3b]/10 transition-all duration-500 rounded-2xl"></div>

                          {/* Enhanced ripple effect */}
                          <div className="absolute inset-0 bg-white/0 group-hover/btn:bg-white/5 rounded-2xl transition-all duration-300"></div>

                          <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300 text-lg">
                            Learn More
                          </span>
                          <ArrowRight className="w-6 h-6 relative z-10 group-hover/btn:translate-x-2 group-hover/btn:scale-110 transition-all duration-500" />

                          {/* Professional shine effect */}
                          <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000 rounded-2xl"></div>

                          {/* Glow effect */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-[#2151A1]/20 to-[#d93b3b]/20 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-sm"></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
