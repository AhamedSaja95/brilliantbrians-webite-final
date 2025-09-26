import Image from "next/image";
import { ContactNavbar } from "@/components/contact-navbar";
import Footer from "@/components/footer";
import {
  FileText,
  Target,
  Users,
  Award,
  CheckCircle,
  BookOpen,
  Calculator,
  PenTool,
  Search,
  Lightbulb,
  Type,
  Eye,
  Edit3,
  Layers,
  Sparkles,
  Hash,
  Ruler,
  TrendingUp,
  Brain,
  Zap,
  Star,
  BookmarkCheck,
  Clock,
  Compass,
  Palette,
  MessageSquare,
} from "lucide-react";

export const metadata = {
  title: "NAPLAN Preparation - Brilliant Brains Tutoring",
  description:
    "Expert NAPLAN preparation with targeted practice and strategies. Build confidence and excel in NAPLAN tests for Years 3, 5, 7, and 9 with our specialised tutoring programs in Perth.",
  keywords:
    "naplan preparation perth, naplan tutoring, naplan test prep, years 3 5 7 9 naplan, brilliant brains naplan",
};

export default function NAPLANPage() {
  return (
    <div>
      <ContactNavbar />
      {/* Hero Section */}
      <div className="h-[450px] w-full relative">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/NAPLAN.jpeg"
            alt="NAPLAN Preparation background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-indigo-800/50 to-indigo-500/70"></div>
        </div>
        {/* Text Overlay */}
        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-3xl">
                <FileText className="w-12 h-12 text-white md:w-16 md:h-16" />
              </div>
            </div>
            <h1 className="text-white text-5xl font-semibold mb-6 leading-tight">
              NAPLAN Preparation
            </h1>
            <p className="text-white text-xl max-w-3xl mx-auto leading-relaxed">
              Prepare for NAPLAN with targeted practice and expert strategies to
              build confidence and achieve excellent results
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
                  Excel in NAPLAN with Confidence
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our specialised NAPLAN preparation program equips students in
                  Years 3, 5, 7, and 9 with the skills, strategies, and
                  confidence needed to excel in the National Assessment Program.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Through targeted practice, test-taking strategies, and
                  familiarity with the assessment format, we help students
                  approach NAPLAN with confidence and achieve their best
                  possible results.
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
                    src="/NAPLAN.jpeg"
                    alt="NAPLAN preparation session"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                  <div className="text-3xl font-bold text-[#2151A1] mb-1">
                    98%
                  </div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NAPLAN Domains Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                NAPLAN Domains We Cover
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive preparation covering all four key assessment
                domains
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Reading Domain */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Reading
                </h3>
                <ul className="space-y-3 text-gray-600 mb-4">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>Text comprehension strategies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>Inference and deduction skills</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Type className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>Vocabulary in context</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>Text analysis techniques</span>
                  </li>
                </ul>
                <div className="text-sm text-gray-500">
                  <strong>Focus:</strong> Understanding various text types and
                  extracting key information
                </div>
              </div>

              {/* Writing Domain */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border border-green-200">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Writing
                </h3>
                <ul className="space-y-3 text-gray-600 mb-4">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Narrative writing techniques</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Persuasive writing skills</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Layers className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Text structure and organization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Edit3 className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Grammar and language conventions</span>
                  </li>
                </ul>
                <div className="text-sm text-gray-500">
                  <strong>Focus:</strong> Developing effective writing across
                  different genres
                </div>
              </div>

              {/* Language Conventions */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border border-purple-200">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Language Conventions
                </h3>
                <ul className="space-y-3 text-gray-600 mb-4">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-3 h-3 text-purple-600" />
                    </div>
                    <span>Spelling patterns and rules</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Edit3 className="w-3 h-3 text-purple-600" />
                    </div>
                    <span>Grammar and punctuation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Layers className="w-3 h-3 text-purple-600" />
                    </div>
                    <span>Sentence structure</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookmarkCheck className="w-3 h-3 text-purple-600" />
                    </div>
                    <span>Language usage conventions</span>
                  </li>
                </ul>
                <div className="text-sm text-gray-500">
                  <strong>Focus:</strong> Mastering the mechanics of written
                  English
                </div>
              </div>

              {/* Numeracy Domain */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 border border-orange-200">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Numeracy
                </h3>
                <ul className="space-y-3 text-gray-600 mb-4">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Hash className="w-3 h-3 text-orange-600" />
                    </div>
                    <span>Number operations and calculations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Ruler className="w-3 h-3 text-orange-600" />
                    </div>
                    <span>Measurement and geometry</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-3 h-3 text-orange-600" />
                    </div>
                    <span>Statistics and probability</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain className="w-3 h-3 text-orange-600" />
                    </div>
                    <span>Problem-solving strategies</span>
                  </li>
                </ul>
                <div className="text-sm text-gray-500">
                  <strong>Focus:</strong> Mathematical reasoning and real-world
                  problem solving
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Year Level Preparation */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                Year-Level Specific Preparation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored preparation programs for each NAPLAN assessment year
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Year 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#2151A1] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Year 3
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Foundation skills and test familiarity
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2 text-left">
                      <div className="w-4 h-4 bg-[#2151A1]/10 rounded flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-2.5 h-2.5 text-[#2151A1]" />
                      </div>
                      <span>Basic reading comprehension</span>
                    </li>
                    <li className="flex items-center gap-2 text-left">
                      <div className="w-4 h-4 bg-[#2151A1]/10 rounded flex items-center justify-center flex-shrink-0">
                        <PenTool className="w-2.5 h-2.5 text-[#2151A1]" />
                      </div>
                      <span>Simple writing tasks</span>
                    </li>
                    <li className="flex items-center gap-2 text-left">
                      <div className="w-4 h-4 bg-[#2151A1]/10 rounded flex items-center justify-center flex-shrink-0">
                        <Hash className="w-2.5 h-2.5 text-[#2151A1]" />
                      </div>
                      <span>Number recognition</span>
                    </li>
                    <li className="flex items-center gap-2 text-left">
                      <div className="w-4 h-4 bg-[#2151A1]/10 rounded flex items-center justify-center flex-shrink-0">
                        <Zap className="w-2.5 h-2.5 text-[#2151A1]" />
                      </div>
                      <span>Test anxiety management</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Year 5 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#d93b3b] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">5</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Year 5
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Intermediate skills development
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2 text-left">
                      <div className="w-4 h-4 bg-[#d93b3b]/10 rounded flex items-center justify-center flex-shrink-0">
                        <Eye className="w-2.5 h-2.5 text-[#d93b3b]" />
                      </div>
                      <span>Advanced comprehension</span>
                    </li>
                    <li className="flex items-center gap-2 text-left">
                      <div className="w-4 h-4 bg-[#d93b3b]/10 rounded flex items-center justify-center flex-shrink-0">
                        <Layers className="w-2.5 h-2.5 text-[#d93b3b]" />
                      </div>
                      <span>Structured writing</span>
                    </li>
                    <li className="flex items-center gap-2 text-left">
                      <div className="w-4 h-4 bg-[#d93b3b]/10 rounded flex items-center justify-center flex-shrink-0">
                        <Brain className="w-2.5 h-2.5 text-[#d93b3b]" />
                      </div>
                      <span>Problem solving</span>
                    </li>
                    <li className="flex items-center gap-2 text-left">
                      <div className="w-4 h-4 bg-[#d93b3b]/10 rounded flex items-center justify-center flex-shrink-0">
                        <Clock className="w-2.5 h-2.5 text-[#d93b3b]" />
                      </div>
                      <span>Time management</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Year 7 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">7</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Year 7
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Secondary transition preparation
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2 text-left">
                      <div className="w-4 h-4 bg-green-500/10 rounded flex items-center justify-center flex-shrink-0">
                        <Search className="w-2.5 h-2.5 text-green-600" />
                      </div>
                      <span>Complex text analysis</span>
                    </li>
                    <li className="flex items-center gap-2 text-left">
                      <div className="w-4 h-4 bg-green-500/10 rounded flex items-center justify-center flex-shrink-0">
                        <Palette className="w-2.5 h-2.5 text-green-600" />
                      </div>
                      <span>Persuasive & Narrative writing</span>
                    </li>
                    <li className="flex items-center gap-2 text-left">
                      <div className="w-4 h-4 bg-green-500/10 rounded flex items-center justify-center flex-shrink-0">
                        <Compass className="w-2.5 h-2.5 text-green-600" />
                      </div>
                      <span>Strategic thinking</span>
                    </li>
                    <li className="flex items-center gap-2 text-left">
                      <div className="w-4 h-4 bg-green-500/10 rounded flex items-center justify-center flex-shrink-0">
                        <Clock className="w-2.5 h-2.5 text-green-600" />
                      </div>
                      <span>Time management</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Year 9 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">9</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Year 9
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Advanced skills mastery
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2 text-left">
                      <div className="w-4 h-4 bg-purple-500/10 rounded flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="w-2.5 h-2.5 text-purple-600" />
                      </div>
                      <span>Critical analysis</span>
                    </li>
                    <li className="flex items-center gap-2 text-left">
                      <div className="w-4 h-4 bg-purple-500/10 rounded flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-2.5 h-2.5 text-purple-600" />
                      </div>
                      <span>Complex writing forms</span>
                    </li>
                    <li className="flex items-center gap-2 text-left">
                      <div className="w-4 h-4 bg-purple-500/10 rounded flex items-center justify-center flex-shrink-0">
                        <Calculator className="w-2.5 h-2.5 text-purple-600" />
                      </div>
                      <span>Advanced mathematics</span>
                    </li>
                    <li className="flex items-center gap-2 text-left">
                      <div className="w-4 h-4 bg-purple-500/10 rounded flex items-center justify-center flex-shrink-0">
                        <Star className="w-2.5 h-2.5 text-purple-600" />
                      </div>
                      <span>Exam optimisation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="py-16 bg-white">
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
                  <p className="text-gray-600 text-lg">Years 3, 5, 7, 9</p>
                  <p className="text-sm text-gray-500 mt-2">
                    NAPLAN assessment years
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
                    Intensive preparation course
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
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-800">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-4xl font-semibold text-white mb-6">
              Ready to Excel in NAPLAN?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Give your child the confidence and skills needed to achieve their
              best NAPLAN results with our specialised preparation program.
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
                className="inline-flex items-center justify-center bg-white text-indigo-800 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
