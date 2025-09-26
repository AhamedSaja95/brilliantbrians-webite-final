import Image from "next/image";
import { ContactNavbar } from "@/components/contact-navbar";
import Footer from "@/components/footer";
import {
  Brain,
  Target,
  Users,
  Award,
  CheckCircle,
  Lightbulb,
  Puzzle,
  BookOpen,
  Shapes,
  Calculator,
  PenTool,
  Search,
  FileText,
  Hash,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "GATE Preparation - Brilliant Brains Tutoring",
  description:
    "Expert GATE (Gifted and Talented Education) preparation with specialised training in abstract reasoning, problem-solving, and creative thinking for Years 4-6 students in Perth.",
  keywords:
    "gate preparation perth, gifted talented education, gate exam prep, years 4 5 6 gate, brilliant brains gate",
};

export default function GATEPage() {
  return (
    <div>
      <ContactNavbar />
      {/* Hero Section */}
      <div className="h-[450px] w-full relative">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/GATE.jpg"
            alt="GATE Preparation background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/50 to-purple-500/70"></div>
        </div>
        {/* Text Overlay */}
        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-3xl">
                <Brain className="w-12 h-12 text-white md:w-16 md:h-16" />
              </div>
            </div>
            <h1 className="text-white text-5xl font-semibold mb-6 leading-tight">
              GATE Preparation
            </h1>
            <p className="text-white text-xl max-w-3xl mx-auto leading-relaxed">
              Specialised training for the Gifted and Talented Education
              program.
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
                  Unlock Your Child's Potential
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our GATE preparation program is specifically designed to help
                  students in Years 4-6 develop the advanced cognitive skills
                  required for the Gifted and Talented Education assessment.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Through targeted practice, test-taking strategies and
                  familiarity with the assessment format, we help students
                  approach GATE exam with confidence and gain entry into
                  academic selective programs.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Test Format Familiarity
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Strategic Approach</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Confidence Building</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Targeted Practice</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/GATE.jpg"
                    alt="GATE preparation session"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                  <div className="text-3xl font-bold text-[#2151A1] mb-1">
                    92%
                  </div>
                  <div className="text-sm text-gray-600">Selection Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GATE Skills Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          {/* Floating Background Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#2151A1]/5 to-[#d93b3b]/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-[#d93b3b]/5 to-[#2151A1]/5 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-purple-400/5 to-blue-400/5 rounded-full blur-lg"></div>

          <div className="max-w-6xl mx-auto px-4 lg:px-8 relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2151A1]/10 to-[#d93b3b]/10 text-[#2151A1] px-6 py-3 rounded-full font-semibold border border-[#2151A1]/10 shadow-lg backdrop-blur-sm mb-6">
                <Brain className="w-5 h-5" />
                <span className="bg-gradient-to-r from-[#2151A1] to-[#d93b3b] bg-clip-text text-transparent font-bold">
                  Core Skills Development
                </span>
              </div>
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                GATE Domains We Cover
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive skill development aligned with GATE assessment
                requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Reading Comprehension */}
              <div className="group bg-gradient-to-br from-[#2151A1]/5 to-blue-50 rounded-3xl p-8 shadow-xl border border-[#2151A1]/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2151A1] to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Reading Comprehension
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#2151A1]/10 rounded-lg flex items-center justify-center">
                        <Search className="w-4 h-4 text-[#2151A1]" />
                      </div>
                      <span className="text-gray-600">
                        Text comprehension strategies
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Lightbulb className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-gray-600">
                        Inference and deduction skills
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#2151A1]/10 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-[#2151A1]" />
                      </div>
                      <span className="text-gray-600">
                        Vocabulary in context
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-gray-600">
                        Text analysis techniques
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#2151A1]/10 rounded-lg flex items-center justify-center">
                        <Brain className="w-4 h-4 text-[#2151A1]" />
                      </div>
                      <span className="text-gray-600">
                        Analytical reasoning
                      </span>
                    </div>
                  </div>

                  {/* Enhanced info badge */}
                  <div className="mt-6 pt-4 border-t border-[#2151A1]/10">
                    <div className="inline-flex items-center gap-2 bg-[#2151A1]/10 text-[#2151A1] px-3 py-1.5 rounded-full text-sm font-semibold">
                      <CheckCircle className="w-4 h-4" />
                      <span>Language Mastery</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Abstract Reasoning */}
              <div className="group bg-gradient-to-br from-purple-500/5 to-purple-50 rounded-3xl p-8 shadow-xl border border-purple-500/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <Shapes className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Abstract Reasoning
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-500/10 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-purple-500" />
                      </div>
                      <span className="text-gray-600">
                        Pattern identification
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-600/10 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-gray-600">Logical sequences</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-500/10 rounded-lg flex items-center justify-center">
                        <Shapes className="w-4 h-4 text-purple-500" />
                      </div>
                      <span className="text-gray-600">
                        Spatial relationships
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-600/10 rounded-lg flex items-center justify-center">
                        <Brain className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-gray-600">
                        Non-verbal reasoning
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-500/10 rounded-lg flex items-center justify-center">
                        <Lightbulb className="w-4 h-4 text-purple-500" />
                      </div>
                      <span className="text-gray-600">Conceptual thinking</span>
                    </div>
                  </div>

                  {/* Enhanced info badge */}
                  <div className="mt-6 pt-4 border-t border-purple-500/10">
                    <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-600 px-3 py-1.5 rounded-full text-sm font-semibold">
                      <CheckCircle className="w-4 h-4" />
                      <span>Pattern Recognition</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quantitative Reasoning */}
              <div className="group bg-gradient-to-br from-emerald-500/5 to-emerald-50 rounded-3xl p-8 shadow-xl border border-emerald-500/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Quantitative Reasoning
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                        <Brain className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-gray-600">
                        Mathematical thinking
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-600/10 rounded-lg flex items-center justify-center">
                        <Hash className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-600">
                        Numerical relationships
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-gray-600">
                        Multi-step solutions
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-600/10 rounded-lg flex items-center justify-center">
                        <Puzzle className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-600">Problem-solving</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-gray-600">Strategic thinking</span>
                    </div>
                  </div>

                  {/* Enhanced info badge */}
                  <div className="mt-6 pt-4 border-t border-emerald-500/10">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 px-3 py-1.5 rounded-full text-sm font-semibold">
                      <CheckCircle className="w-4 h-4" />
                      <span>Mathematical Excellence</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Creative Writing */}
              <div className="group bg-gradient-to-br from-[#d93b3b]/5 to-red-50 rounded-3xl p-8 shadow-xl border border-[#d93b3b]/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d93b3b] to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <PenTool className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Creative Writing
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#d93b3b]/10 rounded-lg flex items-center justify-center">
                        <Lightbulb className="w-4 h-4 text-[#d93b3b]" />
                      </div>
                      <span className="text-gray-600">
                        Imaginative responses
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-red-500/10 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="text-gray-600">Narrative skills</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#d93b3b]/10 rounded-lg flex items-center justify-center">
                        <Award className="w-4 h-4 text-[#d93b3b]" />
                      </div>
                      <span className="text-gray-600">Advanced vocabulary</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-red-500/10 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="text-gray-600">
                        Text structure and organization
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#d93b3b]/10 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-[#d93b3b]" />
                      </div>
                      <span className="text-gray-600">
                        Grammar and language conventions
                      </span>
                    </div>
                  </div>

                  {/* Enhanced info badge */}
                  <div className="mt-6 pt-4 border-t border-[#d93b3b]/10">
                    <div className="inline-flex items-center gap-2 bg-[#d93b3b]/10 text-[#d93b3b] px-3 py-1.5 rounded-full text-sm font-semibold">
                      <CheckCircle className="w-4 h-4" />
                      <span>Creative Expression</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Features Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Comprehensive GATE Skill Development
                </h3>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                  Our specialised program targets all core GATE assessment areas
                  with proven methodologies that build confidence and accelerate
                  cognitive development.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="inline-flex items-center gap-2 bg-[#2151A1]/10 text-[#2151A1] px-4 py-2 rounded-full font-semibold border border-[#2151A1]/20">
                    <CheckCircle className="w-4 h-4" />
                    <span>Targeted Practice</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-[#d93b3b]/10 text-[#d93b3b] px-4 py-2 rounded-full font-semibold border border-[#d93b3b]/20">
                    <CheckCircle className="w-4 h-4" />
                    <span>Expert Guidance</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full font-semibold border border-emerald-500/20">
                    <CheckCircle className="w-4 h-4" />
                    <span>Proven Results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Structure */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                Program Structure
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Systematic approach to GATE preparation with progressive skill
                building
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Phase 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Foundation
                </h3>
                <p className="text-gray-600 text-sm">
                  Basic cognitive skills and test familiarity
                </p>
              </div>

              {/* Phase 2 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Development
                </h3>
                <p className="text-gray-600 text-sm">
                  Advanced reasoning and problem-solving
                </p>
              </div>

              {/* Phase 3 */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Practice
                </h3>
                <p className="text-gray-600 text-sm">
                  Mock assessments and exam strategies
                </p>
              </div>

              {/* Phase 4 */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Mastery
                </h3>
                <p className="text-gray-600 text-sm">
                  Final preparation and confidence building
                </p>
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
                  <p className="text-gray-600 text-lg">Years 4-6</p>
                  <p className="text-sm text-gray-500 mt-2">
                    GATE eligible students
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-[#d93b3b] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Program Duration
                  </h3>
                  <p className="text-gray-600 text-lg">2 terms</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Comprehensive preparation
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
        <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-4xl font-semibold text-white mb-6">
              Ready for GATE Success?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Give your gifted child the specialised preparation they need to
              excel in the GATE assessment and help them reach their highest
              academic aspirations.
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
                className="inline-flex items-center justify-center bg-white text-purple-800 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
