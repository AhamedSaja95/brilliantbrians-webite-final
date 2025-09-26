import Image from "next/image";
import { ContactNavbar } from "@/components/contact-navbar";
import Footer from "@/components/footer";
import {
  Zap,
  Target,
  Users,
  Award,
  CheckCircle,
  BookOpen,
  Clock,
  Brain,
  TrendingUp,
  FileText,
  Lightbulb,
  Gauge,
  Search,
  BarChart3,
  Star,
  Clipboard,
  Layers,
  Sparkles,
  RefreshCw,
  ArrowUp,
  Eye,
  Repeat,
  MessageCircle,
  GraduationCap,
  PenTool,
  Palette,
  TestTube,
  MapPin,
  Calendar,
  AlarmClock,
} from "lucide-react";

export const metadata = {
  title: "Crash Courses - Brilliant Brains Tutoring",
  description:
    "Intensive short-term tutoring courses designed to quickly strengthen subject understanding and improve grades. Perfect for last-minute exam prep or mastering tough topics fast.",
  keywords:
    "crash courses perth, intensive tutoring, last minute exam prep, quick study courses, brilliant brains intensive",
};

export default function CrashCoursesPage() {
  return (
    <div>
      <ContactNavbar />
      {/* Hero Section */}
      <div className="h-[450px] w-full relative">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/crashCourse.jpg"
            alt="Crash Courses background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 via-red-800/50 to-red-500/70"></div>
        </div>
        {/* Text Overlay */}
        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-3xl">
                <Zap className="w-12 h-12 text-white md:w-16 md:h-16" />
              </div>
            </div>
            <h1 className="text-white text-5xl font-semibold mb-6 leading-tight">
              Crash Courses
            </h1>
            <p className="text-white text-xl max-w-3xl mx-auto leading-relaxed">
              Intensive, high-impact learning experiences designed to rapidly
              accelerate understanding and academic performance
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
                  Accelerate Your Academic Success
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our intensive crash courses are meticulously designed for
                  students in Years 7-12 who need to rapidly master challenging
                  concepts, excel in upcoming assessments, or bridge knowledge
                  gaps in compressed timeframes.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Whether you're preparing for critical exams, catching up after
                  illness, or seeking to gain a competitive edge during school
                  holidays, our expert educators deliver laser-focused,
                  results-driven learning experiences that maximize achievement
                  in minimal time.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Accelerated Learning Methods
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Subject Matter Experts
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Rapid Results</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Flexible Delivery Options
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/crashCourse.jpg"
                    alt="Intensive crash course tutoring session"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating Stats */}
                {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                  <div className="text-3xl font-bold text-[#2151A1] mb-1">94%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                  <div className="text-3xl font-bold text-[#d93b3b] mb-1">350+</div>
                  <div className="text-sm text-gray-600">Courses Delivered</div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Course Types Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                Specialised Course Programs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Targeted intensive programs designed to address specific
                academic needs and learning objectives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Exam Preparation */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Exam Preparation
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>Strategic Test Techniques</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>Past Paper Analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>Time Management Mastery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>Key Concept Consolidation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>Confidence & Performance</span>
                  </li>
                </ul>
              </div>

              {/* Subject Catch-Up */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border border-green-200">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Subject Catch-Up
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clipboard className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Comprehensive Content Review</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Layers className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Foundation Strengthening</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Learning Gap Analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ArrowUp className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Accelerated Progression</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Continuous Assessment</span>
                  </li>
                </ul>
              </div>

              {/* Topic Mastery */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border border-purple-200">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Concept Mastery
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-3 h-3 text-purple-600" />
                    </div>
                    <span>Deep Conceptual Understanding</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-3 h-3 text-purple-600" />
                    </div>
                    <span>Advanced Application</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-3 h-3 text-purple-600" />
                    </div>
                    <span>Strategic Methodologies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <RefreshCw className="w-3 h-3 text-purple-600" />
                    </div>
                    <span>Skill Refinement</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="w-3 h-3 text-purple-600" />
                    </div>
                    <span>Nurture passion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Methodology Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                Our Proven Methodology
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Evidence-based learning techniques that maximise retention and
                accelerate academic progress
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Rapid Assessment */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#2151A1] rounded-xl flex items-center justify-center">
                    <Gauge className="w-6 h-6 text-white" />
                  </div>
                  Rapid Assessment & Planning
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-[#2151A1]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Search className="w-3 h-3 text-[#2151A1]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Diagnostic Evaluation
                      </h4>
                      <p className="text-gray-600">
                        Immediate identification of knowledge gaps and learning
                        priorities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-[#2151A1]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#2151A1]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Customised Learning Path
                      </h4>
                      <p className="text-gray-600">
                        Tailored curriculum designed for maximum efficiency
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-[#2151A1]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Target className="w-3 h-3 text-[#2151A1]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Goal Setting
                      </h4>
                      <p className="text-gray-600">
                        Clear, achievable milestones with defined success
                        metrics
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Intensive Learning */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#d93b3b] rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  Accelerated Learning Techniques
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-[#d93b3b]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Brain className="w-3 h-3 text-[#d93b3b]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Active Recall Methods
                      </h4>
                      <p className="text-gray-600">
                        Proven techniques for enhanced memory consolidation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-[#d93b3b]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Repeat className="w-3 h-3 text-[#d93b3b]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Interleaved Practice
                      </h4>
                      <p className="text-gray-600">
                        Mixed practice for improved skill transfer and retention
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-[#d93b3b]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MessageCircle className="w-3 h-3 text-[#d93b3b]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Immediate Feedback
                      </h4>
                      <p className="text-gray-600">
                        Real-time correction and reinforcement strategies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subject Specializations Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          {/* Floating Background Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#2151A1]/5 to-[#d93b3b]/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-[#d93b3b]/5 to-[#2151A1]/5 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-purple-400/5 to-blue-400/5 rounded-full blur-lg"></div>

          <div className="max-w-6xl mx-auto px-4 lg:px-8 relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2151A1]/10 to-[#d93b3b]/10 text-[#2151A1] px-6 py-3 rounded-full font-semibold border border-[#2151A1]/10 shadow-lg backdrop-blur-sm mb-6">
                <BookOpen className="w-5 h-5" />
                <span className="bg-gradient-to-r from-[#2151A1] to-[#d93b3b] bg-clip-text text-transparent font-bold">
                  Specialised Programs
                </span>
              </div>
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                Subject Specialisations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Intensive, targeted crash courses designed to deliver rapid
                results in key academic areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* ATAR Crash Revision */}
              <div className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2151A1] to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    ATAR Crash Revision
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Intensive preparation for Australian Tertiary Admission Rank
                    assessments with strategic exam techniques and content
                    mastery.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#2151A1]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-3 h-3 text-[#2151A1]" />
                      </div>
                      <span className="text-gray-600 text-sm">
                        University entrance focus
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#d93b3b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="w-3 h-3 text-[#d93b3b]" />
                      </div>
                      <span className="text-gray-600 text-sm">
                        Strategic exam preparation
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#2151A1]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-3 h-3 text-[#2151A1]" />
                      </div>
                      <span className="text-gray-600 text-sm">
                        Score optimisation
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* NAPLAN Preparedness */}
              <div className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    NAPLAN Preparedness
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive preparation for National Assessment Program
                    covering literacy, numeracy, and test-taking strategies.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-3 h-3 text-emerald-500" />
                      </div>
                      <span className="text-gray-600 text-sm">
                        Literacy & numeracy focus
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-600 text-sm">
                        Test format familiarity
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Star className="w-3 h-3 text-emerald-500" />
                      </div>
                      <span className="text-gray-600 text-sm">
                        Confidence building
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GATE Preparedness */}
              <div className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    GATE Preparedness
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Gifted and Talented Education program preparation focusing
                    on critical thinking, problem-solving, and advanced
                    reasoning skills.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Brain className="w-3 h-3 text-purple-500" />
                      </div>
                      <span className="text-gray-600 text-sm">
                        Critical thinking development
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-violet-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="w-3 h-3 text-violet-600" />
                      </div>
                      <span className="text-gray-600 text-sm">
                        Advanced reasoning skills
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TestTube className="w-3 h-3 text-purple-500" />
                      </div>
                      <span className="text-gray-600 text-sm">
                        Problem-solving techniques
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Creative Writing */}
              <div className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d93b3b] to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Creative Writing
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Develop storytelling skills, narrative techniques, and
                    creative expression through structured writing workshops and
                    personalized feedback.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#d93b3b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-3 h-3 text-[#d93b3b]" />
                      </div>
                      <span className="text-gray-600 text-sm">
                        Narrative development
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Palette className="w-3 h-3 text-red-600" />
                      </div>
                      <span className="text-gray-600 text-sm">
                        Creative expression
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#d93b3b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <PenTool className="w-3 h-3 text-[#d93b3b]" />
                      </div>
                      <span className="text-gray-600 text-sm">
                        Writing workshops
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maths Word Problem Solving - Spanning 2 columns on larger screens */}
              <div className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden md:col-span-2 lg:col-span-1">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <Gauge className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Maths Word Problem Solving
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Master the art of interpreting and solving complex
                    mathematical word problems with systematic approaches and
                    logical reasoning strategies.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Eye className="w-3 h-3 text-orange-500" />
                      </div>
                      <span className="text-gray-600 text-sm">
                        Problem interpretation
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-amber-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Layers className="w-3 h-3 text-amber-600" />
                      </div>
                      <span className="text-gray-600 text-sm">
                        Systematic approaches
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Brain className="w-3 h-3 text-orange-500" />
                      </div>
                      <span className="text-gray-600 text-sm">
                        Logical reasoning
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Tailored for Maximum Impact
                </h3>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Each program is specifically designed to address unique
                  learning objectives and assessment requirements. Our expert
                  tutors employ proven methodologies to ensure rapid skill
                  development and measurable academic progress.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <div className="inline-flex items-center gap-2 bg-[#2151A1]/10 text-[#2151A1] px-4 py-2 rounded-full font-semibold border border-[#2151A1]/20">
                    <CheckCircle className="w-4 h-4" />
                    <span>Rapid Results</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-[#d93b3b]/10 text-[#d93b3b] px-4 py-2 rounded-full font-semibold border border-[#d93b3b]/20">
                    <CheckCircle className="w-4 h-4" />
                    <span>Expert Tutors</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full font-semibold border border-emerald-500/20">
                    <CheckCircle className="w-4 h-4" />
                    <span>Proven Methods</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories & Outcomes */}
        {/* <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                Proven Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Consistent achievement outcomes that demonstrate the
                effectiveness of our intensive approach
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">94%</h3>
                <p className="text-gray-600 font-medium">Grade Improvement</p>
                <p className="text-sm text-gray-500 mt-1">
                  Average increase of 1+ grade levels
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-green-600 mb-2">87%</h3>
                <p className="text-gray-600 font-medium">Goal Achievement</p>
                <p className="text-sm text-gray-500 mt-1">
                  Students meeting their objectives
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-purple-600 mb-2">
                  2.5x
                </h3>
                <p className="text-gray-600 font-medium">Learning Speed</p>
                <p className="text-sm text-gray-500 mt-1">
                  Faster than traditional methods
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-orange-600 mb-2">98%</h3>
                <p className="text-gray-600 font-medium">Satisfaction Rate</p>
                <p className="text-sm text-gray-500 mt-1">
                  Student & parent approval
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Program Structure & Details */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl border border-gray-200">
              <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
                Program Structure
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#2151A1] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Target Students
                  </h3>
                  <p className="text-gray-600 text-lg">Years 7-12</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Primary &amp; High school students
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-[#d93b3b] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Duration
                  </h3>
                  <p className="text-gray-600 text-lg">10 sessions</p>
                  <p className="text-sm text-gray-500 mt-2">2-3 hrs/ session</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-[#2151A1] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Intensity
                  </h3>
                  <p className="text-gray-600 text-lg">High Impact</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Accelerated learning format
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-[#d93b3b] rounded-full flex items-center justify-center mx-auto mb-6">
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

        {/* When to Choose Crash Courses */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                When to Choose Crash Courses
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Strategic scenarios where intensive learning provides maximum
                advantage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  Exam Preparation Scenarios
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlarmClock className="w-3 h-3 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Last-Minute Exam Prep
                      </h4>
                      <p className="text-gray-600">
                        Intensive revision for approaching school assessments,
                        NAPLAN, GATE etc.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <GraduationCap className="w-3 h-3 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        ATAR Preparation
                      </h4>
                      <p className="text-gray-600">
                        Focused sessions for university entrance
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  Learning Recovery Needs
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TrendingUp className="w-3 h-3 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Subject Catch-Up
                      </h4>
                      <p className="text-gray-600">
                        Excellence or rapid recovery of curriculum content
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Calendar className="w-3 h-3 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Holiday Learning
                      </h4>
                      <p className="text-gray-600">
                        Productive use of school break periods
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-4xl font-semibold text-white mb-6">
              Ready to Accelerate Your Learning?
            </h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Transform your academic performance with our intensive crash
              course programs designed for rapid, sustainable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/61468384001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#d93b3b] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#c02d2d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Book Free Assessment
              </a>
              <a
                href="tel:+61468384001"
                className="inline-flex items-center justify-center bg-white text-orange-800 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
