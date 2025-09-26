import Image from "next/image";
import { ContactNavbar } from "@/components/contact-navbar";
import Footer from "@/components/footer";
import {
  BookOpen,
  Target,
  Users,
  Award,
  CheckCircle,
  PenTool,
  FileText,
  GraduationCap,
  Brain,
  MessageSquare,
  Search,
  Lightbulb,
  Edit3,
  Palette,
  Mic,
  Eye,
  BookmarkCheck,
  Type,
  Zap,
  Layers,
  Compass,
  Globe,
  Feather,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "English Tutoring - Brilliant Brains Tutoring",
  description:
    "Expert English tutoring for reading, writing, grammar, and literature. Improve communication skills and academic performance with our personalized English programs in Perth.",
  keywords:
    "english tutoring perth, writing tutoring, reading comprehension, grammar tutoring, literature tutoring, brilliant brains english",
};

export default function EnglishPage() {
  return (
    <div>
      <ContactNavbar />
      {/* Hero Section */}
      <div className="h-[450px] w-full relative">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/english.jpg"
            alt="English Tutoring background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-800/50 to-emerald-500/70"></div>
        </div>
        {/* Text Overlay */}
        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-3xl">
                <BookOpen className="w-12 h-12 text-white md:w-16 md:h-16" />
              </div>
            </div>
            <h1 className="text-white text-5xl font-semibold mb-6 leading-tight">
              English Tutoring
            </h1>
            <p className="text-white text-xl max-w-3xl mx-auto leading-relaxed">
              Enhance Writing, Reading Comprehension, Language Conventions and
              Spelling skills through engaging and structured lessons.
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
                  Excel in English with Expert Support
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our comprehensive English tutoring program enhances
                  vocabulary, develops strong communication skills and literacy
                  foundations that serve students throughout their academic
                  journey and beyond.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  From creative writing and essay structure to reading
                  comprehension and literary analysis, our experienced tutors
                  provide personalised instruction that builds confidence and
                  academic success.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Writing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Reading Comprehension</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Language Conventions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Spelling</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/english.jpg"
                    alt="English tutoring session"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                  <div className="text-3xl font-bold text-[#2151A1] mb-1">
                    92%
                  </div>
                  <div className="text-sm text-gray-600">
                    Writing Improvement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Cover Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                What We Cover
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive English curriculum develops all aspects of
                language and literacy skills
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Reading & Comprehension */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Reading & Comprehension
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>Reading Fluency</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>Text Analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Type className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>Vocabulary Building</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>Critical Thinking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>Literary Techniques</span>
                  </li>
                </ul>
              </div>

              {/* Writing Skills */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border border-green-200">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Writing Skills
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Layers className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Essay Structure</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Palette className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Creative Writing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Persuasive Writing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Edit3 className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Grammar &amp; Punctuation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Compass className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Research Skills</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookmarkCheck className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Vocabulary Building</span>
                  </li>
                </ul>
              </div>

              {/* Literature Study */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border border-purple-200">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Literature Study
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="w-3 h-3 text-purple-600" />
                    </div>
                    <span>Text Analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-3 h-3 text-purple-600" />
                    </div>
                    <span>Character Study</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-3 h-3 text-purple-600" />
                    </div>
                    <span>Theme Exploration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Feather className="w-3 h-3 text-purple-600" />
                    </div>
                    <span>Poetry Analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-3 h-3 text-purple-600" />
                    </div>
                    <span>Context Understanding</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Development Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Floating Background Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#2151A1]/5 to-[#d93b3b]/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-[#d93b3b]/5 to-[#2151A1]/5 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-emerald-400/5 to-blue-400/5 rounded-full blur-lg"></div>

          <div className="max-w-6xl mx-auto px-4 lg:px-8 relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2151A1]/10 to-[#d93b3b]/10 text-[#2151A1] px-6 py-3 rounded-full font-semibold border border-[#2151A1]/10 shadow-lg backdrop-blur-sm mb-6">
                <BookOpen className="w-5 h-5" />
                <span className="bg-gradient-to-r from-[#2151A1] to-[#d93b3b] bg-clip-text text-transparent font-bold">
                  Comprehensive Skill Development
                </span>
              </div>
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                Skills We Develop
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Building comprehensive English language competencies for
                academic and life success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Primary School English Skills */}
              <div className="group bg-gradient-to-br from-[#2151A1]/5 to-blue-50 rounded-3xl p-8 shadow-xl border border-[#2151A1]/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2151A1] to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Primary School English Skills
                  </h3>

                  {/* Reading and Comprehension */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#2151A1]/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-[#2151A1]" />
                      </div>
                      Reading and Comprehension:
                    </h4>
                    <p className="text-gray-600 ml-8">
                      Understand and unpack different texts
                    </p>
                  </div>

                  {/* Language Fundamentals */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Brain className="w-4 h-4 text-blue-500" />
                      </div>
                      Language Fundamentals:
                    </h4>
                    <p className="text-gray-600 ml-8">
                      English grammar: rules and applications
                    </p>
                  </div>

                  {/* Expressive Language */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#2151A1]/10 rounded-lg flex items-center justify-center">
                        <Palette className="w-4 h-4 text-[#2151A1]" />
                      </div>
                      Expressive Language:
                    </h4>
                    <p className="text-gray-600 ml-8">
                      Use of language to create a variety of texts (narratives,
                      persuasives, reports, procedures, poems etc.)
                    </p>
                  </div>

                  {/* Effective Communication */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-blue-500" />
                      </div>
                      Effective Communication:
                    </h4>
                    <p className="text-gray-600 ml-8">
                      Speak, write and create to communicate thoughts
                      effectively
                    </p>
                  </div>

                  {/* Enhanced info badge */}
                  <div className="mt-6 pt-4 border-t border-[#2151A1]/10">
                    <div className="inline-flex items-center gap-2 bg-[#2151A1]/10 text-[#2151A1] px-3 py-1.5 rounded-full text-sm font-semibold">
                      <CheckCircle className="w-4 h-4" />
                      <span>Foundation Building</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* High School English Skills */}
              <div className="group bg-gradient-to-br from-[#d93b3b]/5 to-red-50 rounded-3xl p-8 shadow-xl border border-[#d93b3b]/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d93b3b] to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    High School English Skills
                  </h3>

                  {/* Textual Analysis */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#d93b3b]/10 rounded-lg flex items-center justify-center">
                        <Search className="w-4 h-4 text-[#d93b3b]" />
                      </div>
                      Textual Analysis:
                    </h4>
                    <p className="text-gray-600 ml-8">
                      Study texts to understand their purpose and style.
                    </p>
                  </div>

                  {/* Language Conventions */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 bg-red-500/10 rounded-lg flex items-center justify-center">
                        <Edit3 className="w-4 h-4 text-red-500" />
                      </div>
                      Language Conventions:
                    </h4>
                    <p className="text-gray-600 ml-8">
                      Application of grammar, spelling and punctuation rules to
                      create polished writing.
                    </p>
                  </div>

                  {/* Diverse Response Creation */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#d93b3b]/10 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-[#d93b3b]" />
                      </div>
                      Diverse Response Creation:
                    </h4>
                    <p className="text-gray-600 ml-8">
                      Create responses using various types of texts
                    </p>
                  </div>

                  {/* Advanced Communication */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 bg-red-500/10 rounded-lg flex items-center justify-center">
                        <Mic className="w-4 h-4 text-red-500" />
                      </div>
                      Advanced Communication:
                    </h4>
                    <p className="text-gray-600 ml-8">
                      Refine skills to express complex ideas effectively.
                    </p>
                  </div>

                  {/* Enhanced info badge */}
                  <div className="mt-6 pt-4 border-t border-[#d93b3b]/10">
                    <div className="inline-flex items-center gap-2 bg-[#d93b3b]/10 text-[#d93b3b] px-3 py-1.5 rounded-full text-sm font-semibold">
                      <Award className="w-4 h-4" />
                      <span>Advanced Excellence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Features Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Structured Learning for Every Level
                </h3>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                  Our English program is carefully designed to build essential
                  skills progressively, ensuring students develop strong
                  foundations in primary school and advance to sophisticated
                  communication abilities in high school.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="inline-flex items-center gap-2 bg-[#2151A1]/10 text-[#2151A1] px-4 py-2 rounded-full font-semibold border border-[#2151A1]/20">
                    <CheckCircle className="w-4 h-4" />
                    <span>Progressive Learning</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-[#d93b3b]/10 text-[#d93b3b] px-4 py-2 rounded-full font-semibold border border-[#d93b3b]/20">
                    <CheckCircle className="w-4 h-4" />
                    <span>Expert Instruction</span>
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
                  <p className="text-gray-600 text-lg">Years 1-10</p>
                  <p className="text-sm text-gray-500 mt-2">
                    All curriculum levels covered
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-[#d93b3b] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Session Duration
                  </h3>
                  <p className="text-gray-600 text-lg">1-2 hours/week</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Flexible scheduling available
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
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-800">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-4xl font-semibold text-white mb-6">
              Ready to Master English?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Join our English tutoring program and develop the communication
              skills that will serve you throughout your academic journey and
              beyond.
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
                className="inline-flex items-center justify-center bg-white text-emerald-800 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
