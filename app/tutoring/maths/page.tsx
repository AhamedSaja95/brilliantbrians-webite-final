import Image from "next/image";
import { ContactNavbar } from "@/components/contact-navbar";
import Footer from "@/components/footer";
import {
  Calculator,
  Target,
  Users,
  Award,
  CheckCircle,
  BookOpen,
  Hash,
  Shapes,
  Percent,
  BarChart3,
  Trophy,
  GraduationCap,
  Brain,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Maths Tutoring - Brilliant Brains Tutoring",
  description:
    "Expert mathematics tutoring for students of all levels. Build confidence and excel in maths with personalised support from our experienced tutors in Perth.",
  keywords:
    "maths tutoring perth, mathematics tutoring, math tutor, brilliant brains maths, algebra tutoring, geometry tutoring",
};

export default function MathsPage() {
  return (
    <div>
      <ContactNavbar />
      {/* Hero Section */}
      <div className="h-[450px] w-full relative">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/MathImage.jpg"
            alt="Maths Tutoring background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/50 to-blue-500/70"></div>
        </div>
        {/* Text Overlay */}
        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-3xl">
                <Calculator className="w-12 h-12 text-white md:w-16 md:h-16" />
              </div>
            </div>
            <h1 className="text-white text-5xl font-semibold mb-6 leading-tight">
              Maths Tutoring
            </h1>
            <p className="text-white text-xl max-w-3xl mx-auto leading-relaxed">
              Build a strong foundation in Mathematics with personalised support
              tailored to each student&#39;s level and learning style.
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
                  Master Mathematics with Expert Guidance
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our comprehensive mathematics tutoring program is designed to
                  help students from Years 1-10 develop strong mathematical
                  foundations, problem-solving skills, and confidence in
                  tackling complex mathematical concepts.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Whether your child is struggling with basic arithmetic or
                  preparing for advanced calculus, our experienced tutors
                  provide personalised support that adapts to each student's
                  unique learning pace and style.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Personalised Learning Plans
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Experienced Tutors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Curriculum Aligned</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Progress Tracking</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/MathImage.jpg"
                    alt="Maths tutoring session"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating Stats */}

                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                  <div className="text-3xl font-bold text-[#2151A1] mb-1">
                    95%
                  </div>
                  <div className="text-sm text-gray-600">Improved Grades</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Cover Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          {/* Floating Background Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#2151A1]/5 to-[#d93b3b]/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-[#d93b3b]/5 to-[#2151A1]/5 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-400/5 to-green-400/5 rounded-full blur-lg"></div>

          <div className="max-w-6xl mx-auto px-4 lg:px-8 relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2151A1]/10 to-[#d93b3b]/10 text-[#2151A1] px-6 py-3 rounded-full font-semibold border border-[#2151A1]/10 shadow-lg backdrop-blur-sm mb-6">
                <Calculator className="w-5 h-5" />
                <span className="bg-gradient-to-r from-[#2151A1] to-[#d93b3b] bg-clip-text text-transparent font-bold">
                  Comprehensive Curriculum
                </span>
              </div>
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                What We Cover
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive maths curriculum covers all essential topics
                across primary and secondary education
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Primary Maths */}
              <div className="group bg-gradient-to-br from-[#2151A1]/5 to-blue-50 rounded-3xl p-8 shadow-xl border border-[#2151A1]/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2151A1] to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Primary Maths
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#2151A1]/10 rounded-lg flex items-center justify-center">
                        <Hash className="w-4 h-4 text-[#2151A1]" />
                      </div>
                      <span className="text-gray-600">Number & Algebra</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Shapes className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-gray-600">
                        Measurement & Geometry
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#2151A1]/10 rounded-lg flex items-center justify-center">
                        <Percent className="w-4 h-4 text-[#2151A1]" />
                      </div>
                      <span className="text-gray-600">
                        Fractions & Decimals
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-gray-600">
                        Statistics & Probability
                      </span>
                    </div>
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

              {/* High School Maths */}
              <div className="group bg-gradient-to-br from-[#d93b3b]/5 to-red-50 rounded-3xl p-8 shadow-xl border border-[#d93b3b]/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d93b3b] to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    High School Maths
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#d93b3b]/10 rounded-lg flex items-center justify-center">
                        <Trophy className="w-4 h-4 text-[#d93b3b]" />
                      </div>
                      <span className="text-gray-600">
                        Mathematics Specialist
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-red-500/10 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="text-gray-600">Mathematics Methods</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#d93b3b]/10 rounded-lg flex items-center justify-center">
                        <Calculator className="w-4 h-4 text-[#d93b3b]" />
                      </div>
                      <span className="text-gray-600">
                        Mathematics Applications
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-red-500/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="text-gray-600">
                        Mathematics Essential
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#d93b3b]/10 rounded-lg flex items-center justify-center">
                        <Brain className="w-4 h-4 text-[#d93b3b]" />
                      </div>
                      <span className="text-gray-600">
                        Mathematics Foundation
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-red-500/10 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="text-gray-600">
                        Mathematics Preliminary
                      </span>
                    </div>
                  </div>

                  {/* Enhanced info badge */}
                  <div className="mt-6 pt-4 border-t border-[#d93b3b]/10">
                    <div className="inline-flex items-center gap-2 bg-[#d93b3b]/10 text-[#d93b3b] px-3 py-1.5 rounded-full text-sm font-semibold">
                      <Award className="w-4 h-4" />
                      <span>Advanced Learning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Features Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Tailored for Every Learning Style
                </h3>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                  Our mathematics program adapts to individual learning
                  preferences, ensuring every student builds strong foundations
                  and develops problem-solving confidence at their own pace.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="inline-flex items-center gap-2 bg-[#2151A1]/10 text-[#2151A1] px-4 py-2 rounded-full font-semibold border border-[#2151A1]/20">
                    <CheckCircle className="w-4 h-4" />
                    <span>Personalised Approach</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-[#d93b3b]/10 text-[#d93b3b] px-4 py-2 rounded-full font-semibold border border-[#d93b3b]/20">
                    <CheckCircle className="w-4 h-4" />
                    <span>Curriculum Aligned</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full font-semibold border border-emerald-500/20">
                    <CheckCircle className="w-4 h-4" />
                    <span>Progress Tracking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
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
        <section className="py-16 bg-gradient-to-r from-[#2151A1] to-[#004080]">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-4xl font-semibold text-white mb-6">
              Ready to Excel in Mathematics?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join our maths tutoring program and watch your confidence and
              grades improve with personalised support from our expert tutors.
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
                className="inline-flex items-center justify-center bg-white text-[#2151A1] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
