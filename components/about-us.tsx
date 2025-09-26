"use client";

import Image from "next/image";
import {
  GraduationCap,
  Heart,
  Target,
  Users,
  Award,
  BookOpen,
  Star,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

export default function AboutUs() {
  const missionValues = [
    {
      id: "mission",
      title: "Our Mission",
      icon: Target,
      content:
        "At Brilliant Brains, our mission is to nurture young minds through personalised, high-quality tutoring that builds confidence, strengthens academic foundations, and inspires a lifelong love of learning.",
    },
    {
      id: "vision",
      title: "Our Vision",
      icon: Lightbulb,
      content:
        "To become Perth's leading tutoring centre known for transforming young minds into confident, capable learners who are equipped for lifelong success—both in school and beyond.",
    },
  ];

  const founderHighlights = [
    { icon: Award, text: "Over 15 years of teaching experience" },
    { icon: GraduationCap, text: "Teacher at a high achieving school" },
    { icon: Users, text: "Australian and overseas exposure" },
    { icon: TrendingUp, text: "Committed to professional development" },
    { icon: Heart, text: "Passionate about personalised learning" },
  ];

  const keyFeatures = [
    { icon: BookOpen, text: "Australian Curriculum" },
    { icon: Users, text: "Personalised Learning" },
    { icon: GraduationCap, text: "Expert Educators" },
    { icon: Star, text: "Valuable teaching resources" },
    { icon: TrendingUp, text: "Proven Results" },
    { icon: Award, text: "End of topic assessments" },
    { icon: Target, text: "Regular progress updates to parents" },
    { icon: Heart, text: "Supportive Environment" },
  ];

  return (
    <div className="bg-white">
      {/* About Content - matching contact page layout */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        {/* Modern Welcome & Story Section */}
        <div className="mb-24">
          {/* Our Story Modern Layout */}
          <div className="relative">
            {/* Background Design Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#2151A1]/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#d93b3b]/10 to-transparent rounded-full blur-2xl"></div>

            <div className="relative z-10">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-[#2151A1] to-[#1a4082] rounded-2xl shadow-lg">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                    Our Story
                  </h2>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-[#2151A1] to-[#d93b3b] rounded-full mx-auto"></div>
              </div>

              {/* Three-Column Modern Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Column 1 - Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Primary Story Card */}
                  <div className="group relative bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] overflow-hidden">
                    {/* Animated background pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#2151A1]/5 to-transparent rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-1000"></div>

                    <div className="relative z-10">
                      <div className="flex items-start gap-6 mb-8">
                        <div className="p-4 bg-gradient-to-br from-[#2151A1]/10 to-[#2151A1]/5 rounded-2xl border border-[#2151A1]/20">
                          <Target className="w-7 h-7 text-[#2151A1]" />
                        </div>
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
                            Perth's Educational Excellence
                          </h3>
                          <div className="w-20 h-0.5 bg-gradient-to-r from-[#2151A1] to-[#d93b3b] rounded-full"></div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                          Based in Perth, our tutoring centres are dedicated to
                          helping students build confidence, master key
                          subjects, and reach their academic goals.
                        </p>

                        <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-2xl p-6 border-l-4 border-[#2151A1]">
                          <p className="text-lg text-gray-700 leading-relaxed">
                            With a team of passionate and experienced educators,
                            we offer personalised tutoring in{" "}
                            <strong className="text-[#2151A1]">
                              Maths, English, NAPLAN, GATE, ATAR
                            </strong>{" "}
                            and more.
                          </p>
                        </div>

                        <p className="text-lg text-gray-700 leading-relaxed">
                          Whether your child needs a boost in class or is
                          striving for top results, Brilliant Brains is here to
                          guide every step of the way.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Achievement Banner */}
                  <div className="bg-gradient-to-r from-[#2151A1] to-[#1a4082] rounded-2xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
                    <div className="relative z-10">
                      <h4 className="text-2xl font-bold mb-4">
                        Perth's go-to for expert tutoring
                      </h4>
                      <p className="text-lg text-blue-100">
                        Taking students on a successful academic journey since
                        establishment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Column 2 - Visual Elements & Stats */}
                <div className="space-y-8">
                  {/* Enhanced Image Card */}
                  <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700">
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src="/ab.jpeg"
                        alt="Students learning at Brilliant Brains"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                          <h5 className="font-bold text-gray-800 mb-1">
                            Interactive Learning
                          </h5>
                          <p className="text-sm text-gray-600">
                            Engaging educational environment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Statistics Cards */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-[#2151A1]/10 to-[#2151A1]/5 rounded-2xl p-6 border border-[#2151A1]/20 hover:border-[#2151A1]/40 transition-all duration-700 hover:scale-105">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#2151A1] rounded-xl">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#2151A1]">
                            15+
                          </div>
                          <div className="text-sm text-gray-600 font-medium">
                            Years of Excellence
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#d93b3b]/10 to-[#d93b3b]/5 rounded-2xl p-6 border border-[#d93b3b]/20 hover:border-[#d93b3b]/40 transition-all duration-700 hover:scale-105">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#d93b3b] rounded-xl">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#d93b3b]">
                            Perth
                          </div>
                          <div className="text-sm text-gray-600 font-medium">
                            Based & Trusted
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Key Features Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                Why Choose Us?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#2151A1] to-[#d93b3b] rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 mt-4 leading-relaxed max-w-2xl mx-auto">
                Discover the advantages of learning with Brilliant Brains and
                see why Perth families trust us with their children's education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-700 hover:scale-105 hover:border-[#2151A1]/30"
                >
                  {/* Content */}
                  <div className="flex flex-col items-center text-center h-full">
                    {/* Icon container with enhanced design */}
                    <div className="relative mb-6">
                      <div className="p-6 bg-gradient-to-br from-[#2151A1] to-[#1a4082] rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-700 group-hover:scale-110">
                        <feature.icon className="w-10 h-10 text-white" />
                      </div>
                      {/* Animated glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2151A1] to-[#1a4082] rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl"></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#2151A1] transition-colors duration-700">
                      {feature.text}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                      {index === 0 &&
                        "Adherence to the national curriculum standards"}
                      {index === 1 &&
                        "Tailored learning plans for every student"}
                      {index === 2 &&
                        "Qualified and experienced teaching staff"}
                      {index === 3 &&
                        "Access to high-quality learning materials"}
                      {index === 4 && "Track record of student success"}
                      {index === 5 && "Regular assessments to track progress"}
                      {index === 6 &&
                        "Keeping parents informed of student progress"}
                      {index === 7 && "Nurturing and encouraging environment"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Mission & Vision Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              Our Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2151A1] to-[#d93b3b] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Driven by purpose, guided by excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {missionValues.map((item) => (
              <div
                key={item.id}
                className="group relative bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:bg-gradient-to-br hover:from-blue-50/90 hover:to-indigo-50/90"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2151A1]/5 to-[#d93b3b]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative">
                      <div className="p-4 bg-gradient-to-br from-[#2151A1] to-[#1a4082] rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-700 group-hover:scale-110">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      {/* Animated glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2151A1] to-[#1a4082] rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl"></div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 group-hover:text-[#2151A1] transition-colors duration-700">
                        {item.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-[#2151A1] to-[#d93b3b] rounded-full group-hover:w-20 transition-all duration-700"></div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed text-lg font-medium">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Updated Founder Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Right Column - Founder Content - Moved to appear first on mobile */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                  Meet Our Founder
                </h3>
                <div className="w-20 h-1 bg-[#2151A1] rounded-full mb-6"></div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Driven by a deep belief that every child can excel with the
                  right support, Brilliant Brains was founded by{" "}
                  <strong className="text-[#2151A1]">Sharmila Ihssan</strong>,
                  who is a registered School Teacher with{" "}
                  <strong>15+ years of diverse teaching experience</strong> in
                  Western Australia and overseas.
                </p>

                <p className="text-gray-700 leading-relaxed text-lg">
                  Holding a{" "}
                  <strong>Postgraduate Diploma in Education (Australia)</strong>
                  , her experience includes teaching at a high achieving school
                  demonstrating a{" "}
                  <strong className="text-[#2151A1]">
                    proven track record of student achievement
                  </strong>
                  .
                </p>

                <p className="text-gray-700 leading-relaxed text-lg">
                  Her background as a{" "}
                  <strong>Chartered Management Accountant (ACMA, UK)</strong>{" "}
                  and{" "}
                  <strong>Chartered Global Management Accountant (CGMA)</strong>{" "}
                  uniquely enhances her ability to foster analytical skills,
                  logic, problem-solving, and critical thinking expertise that
                  extend far beyond the classroom.
                </p>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                  <p className="text-gray-800 leading-relaxed text-lg font-medium italic">
                    "Her passion is unlocking each student's potential. She
                    passionately creates a supportive, personalised environment
                    where curiosity and confidence flourish. She empowers young
                    learners with resilience, independent thinking, and a
                    lifelong love for learning, helping them thrive academically
                    and beyond."
                  </p>
                </div>
              </div>
            </div>

            {/* Left Column - Founder Image & Highlights - Moved to appear second on mobile */}
            <div className="order-2 lg:order-1 space-y-8">
              {/* Founder Image */}
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Founder.jpg"
                  alt="Sharmila Ihssan - Founder of Brilliant Brains"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Founder Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {founderHighlights.map((highlight) => (
                  <div
                    key={highlight.text}
                    className="flex items-start gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/30 hover:bg-white/80 transition-all duration-300"
                  >
                    <div className="p-2 bg-[#2151A1] rounded-lg flex-shrink-0 shadow-lg">
                      <highlight.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-700 text-sm leading-tight">
                      {highlight.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 bg-[#2151A1] rounded-2xl p-10 text-center text-white">
          <h3 className="text-2xl font-semibold mb-6 leading-tight">
            Ready to Get Started?
          </h3>
          <p className="text-lg mb-8 text-white/90 leading-relaxed">
            Book a free trial session today and experience the BrilliantBrains
            difference
          </p>
          <a
            href="https://wa.me/61468384001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-[#2151A1] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Free Trial
          </a>
        </div>
      </div>
    </div>
  );
}
