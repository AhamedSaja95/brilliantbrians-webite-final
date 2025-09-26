import Image from "next/image";
import { ContactNavbar } from "@/components/contact-navbar";
import Footer from "@/components/footer";
import {
  GraduationCap,
  Target,
  Users,
  Award,
  CheckCircle,
  BookOpen,
  Calculator,
  FileText,
  TrendingUp,
  Brain,
} from "lucide-react";

export const metadata = {
  title: "ATAR Tutoring - Brilliant Brains Tutoring",
  description:
    "Achieve top ATAR results with expert subject-specific tutoring, study strategies, and exam preparation. Perfect for Year 11 and 12 students aiming for university entry in Perth.",
  keywords:
    "atar tutoring perth, year 11 12 tutoring, university preparation, atar results, brilliant brains atar",
};

export default function ATARPage() {
  return (
    <div>
      <ContactNavbar />
      {/* Hero Section */}
      <div className="h-[450px] w-full relative">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/ATARTutor.jpg"
            alt="ATAR Tutoring background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 via-orange-800/50 to-orange-500/70"></div>
        </div>
        {/* Text Overlay */}
        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-3xl">
                <GraduationCap className="w-12 h-12 text-white md:w-16 md:h-16" />
              </div>
            </div>
            <h1 className="text-white text-5xl font-semibold mb-6 leading-tight">
              ATAR Tutoring
            </h1>
            <p className="text-white text-xl max-w-3xl mx-auto leading-relaxed">
              Achieve top ATAR results with subject-specific tutoring, study
              strategies, and comprehensive exam preparation
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Overview Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                  Your Path to University Success
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our comprehensive ATAR tutoring program is specifically
                  designed for Year 11 and 12 students who are determined to
                  secure entry into their preferred university courses.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  With expert subject-specific tutors, proven study
                  methodologies, and intensive exam preparation strategies, we
                  provide the support and guidance needed to maximise your ATAR
                  potential and achieve your academic goals.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Subject-Specific Expertise
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Study Strategy Training
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Exam Technique Mastery
                    </span>
                  </div>
                  {/* <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      University Pathway Guidance
                    </span>
                  </div> */}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/ATARTutor.jpg"
                    alt="ATAR tutoring session"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ATAR Subjects Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                ATAR Subjects We Cover
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert tutoring across all major ATAR subjects with specialised
                focus on high-demand areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Mathematics */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Mathematics
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <Target className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-gray-600">
                      Mathematics Specialist
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600/10 rounded-lg flex items-center justify-center">
                      <Calculator className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Mathematics Methods</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-gray-600">
                      Mathematics Applications
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Mathematics Essential</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-gray-600">
                      Mathematics Foundations
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600/10 rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-600">
                      Mathematics Preliminary
                    </span>
                  </div>
                </div>
              </div>

              {/* Sciences */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border border-green-200">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Sciences
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <Target className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-gray-600">Physics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-600/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-600">Chemistry</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-gray-600">Biology</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-600/10 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-600">Human Biology</span>
                  </div>
                </div>
              </div>

              {/* Humanities */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border border-purple-200">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Humanities
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-purple-500" />
                    </div>
                    <span className="text-gray-600">
                      Accounting and Finance
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-600/10 rounded-lg flex items-center justify-center">
                      <Target className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-gray-600">
                      Business Management and Enterprise
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-purple-500" />
                    </div>
                    <span className="text-gray-600">Economics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Study Strategies Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Floating Background Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#2151A1]/5 to-[#d93b3b]/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-[#d93b3b]/5 to-[#2151A1]/5 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-orange-400/5 to-blue-400/5 rounded-full blur-lg"></div>

          <div className="max-w-6xl mx-auto px-4 lg:px-8 relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2151A1]/10 to-[#d93b3b]/10 text-[#2151A1] px-6 py-3 rounded-full font-semibold border border-[#2151A1]/10 shadow-lg backdrop-blur-sm mb-6">
                <Target className="w-5 h-5" />
                <span className="bg-gradient-to-r from-[#2151A1] to-[#d93b3b] bg-clip-text text-transparent font-bold">
                  Strategic Excellence
                </span>
              </div>
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                Proven Study Strategies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master the study techniques and exam strategies that
                consistently deliver high ATAR results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Study Techniques */}
              <div className="group bg-gradient-to-br from-[#2151A1]/5 to-blue-50 rounded-3xl p-8 shadow-xl border border-[#2151A1]/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2151A1] to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Study Techniques
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-[#2151A1]/10 rounded-lg flex items-center justify-center mt-1">
                        <Brain className="w-4 h-4 text-[#2151A1]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Active Recall Methods
                        </h4>
                        <p className="text-gray-600">
                          Evidence-based techniques for long-term retention
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-blue-500/10 rounded-lg flex items-center justify-center mt-1">
                        <TrendingUp className="w-4 h-4 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Spaced Repetition
                        </h4>
                        <p className="text-gray-600">
                          Optimised review schedules for maximum efficiency
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-[#2151A1]/10 rounded-lg flex items-center justify-center mt-1">
                        <Target className="w-4 h-4 text-[#2151A1]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Mind Mapping & Visual Learning
                        </h4>
                        <p className="text-gray-600">
                          Connecting concepts for deeper understanding
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced info badge */}
                  <div className="mt-6 pt-4 border-t border-[#2151A1]/10">
                    <div className="inline-flex items-center gap-2 bg-[#2151A1]/10 text-[#2151A1] px-3 py-1.5 rounded-full text-sm font-semibold">
                      <CheckCircle className="w-4 h-4" />
                      <span>Learning Mastery</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exam Strategies */}
              <div className="group bg-gradient-to-br from-[#d93b3b]/5 to-red-50 rounded-3xl p-8 shadow-xl border border-[#d93b3b]/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d93b3b] to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Exam Strategies
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-[#d93b3b]/10 rounded-lg flex items-center justify-center mt-1">
                        <Target className="w-4 h-4 text-[#d93b3b]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Time Management
                        </h4>
                        <p className="text-gray-600">
                          Optimal allocation of time across exam sections
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-red-500/10 rounded-lg flex items-center justify-center mt-1">
                        <Award className="w-4 h-4 text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Question Analysis
                        </h4>
                        <p className="text-gray-600">
                          Identifying key requirements and scoring criteria
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-[#d93b3b]/10 rounded-lg flex items-center justify-center mt-1">
                        <Users className="w-4 h-4 text-[#d93b3b]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Stress Management
                        </h4>
                        <p className="text-gray-600">
                          Techniques for peak performance under pressure
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced info badge */}
                  <div className="mt-6 pt-4 border-t border-[#d93b3b]/10">
                    <div className="inline-flex items-center gap-2 bg-[#d93b3b]/10 text-[#d93b3b] px-3 py-1.5 rounded-full text-sm font-semibold">
                      <Award className="w-4 h-4" />
                      <span>Peak Performance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl border border-gray-200">
              <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
                Program Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#2151A1] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Year Levels
                  </h3>
                  <p className="text-gray-600 text-lg">Years 11-12</p>
                  <p className="text-sm text-gray-500 mt-2">ATAR students</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-[#d93b3b] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Session Duration
                  </h3>
                  <p className="text-gray-600 text-lg">2-3 hours/week</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Subject-specific intensive support
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-[#2151A1] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Class Size
                  </h3>
                  <p className="text-gray-600 text-lg">Small Groups</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-800">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-4xl font-semibold text-white mb-6">
              Ready to Achieve Your ATAR Goals?
            </h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Take the first step towards your dream university course with our
              comprehensive ATAR tutoring program designed for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/61468384001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#d93b3b] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#c02d2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Book Free Trial
              </a>
              <a
                href="tel:+61468384001"
                className="inline-flex items-center justify-center bg-white text-orange-800 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
