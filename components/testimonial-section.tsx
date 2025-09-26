"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { MessageSquareQuote, User } from "lucide-react";
import GradientBadge from "./ui/gradient-badge";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Our son was really struggling to find his footing in Year 6 English. His confidence was low, and he dreaded writing tasks. After just a few months of tutoring, we've seen a complete turnaround. He's not only getting better grades, but he's also genuinely enjoying reading and expressing his ideas. It's been a fantastic experience and we are so grateful.",
    author: "Angelique Tesco",
    role: "Caversham",

    rating: 4.5,
  },
  {
    id: 2,
    text: "We enrolled our daughter in the GATE program and needed a tutor who could match her quick learning pace and help her with critical thinking skills. The tutoring was incredibly engaging and challenging. She loved every session and it gave her the extra push she needed to excel in the GATE program. The support was exactly what she needed.",
    author: "Priya Shanmuganathan",
    role: "Maddington",

    rating: 5,
  },
  {
    id: 3,
    text: "We were concerned that our son was falling behind in his Year 3 maths as Naplan was approaching. He found some concepts confusing and was getting frustrated. The tutor made learning fun and used clever methods to help him understand. He now looks forward to his sessions and his report card shows a huge improvement. I couldn't be happier.",
    author: "Aisha Abadi",
    role: "Canning Vale",
    rating: 4,
  },
  {
    id: 4,
    text: "My daughter was finding Human Biology to be a very demanding subject. The content was overwhelming and she was struggling to grasp the complex concepts. The tutor broke down the information into manageable parts and helped her with study techniques. Her grades have improved significantly and she now feels much more prepared for her exams.",
    author: "Omar Khalil",
    role: "Dianella",
    rating: 4.5,
  },
  {
    id: 5,
    text: "When our son started Year 12 Chemistry, the pressure was on. The subject is notoriously difficult and he needed help to master the challenging topics. The tutor was excellent at explaining difficult formulas and concepts in a way that just made sense. He gained a deep understanding and a newfound confidence that helped him achieve a fantastic final result. We highly recommend this service.",
    author: "Tuart Markle ",
    role: "Bennet Springs",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex items-center gap-1.5 text-[#d93b3b]">
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <svg
          key={index}
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.116 3.986 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.986c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <div className="relative">
          <svg
            className="w-6 h-6 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.116 3.986 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.986c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
          <div className="absolute top-0 left-0 h-full w-1/2 overflow-hidden">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.116 3.986 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.986c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <svg
          key={index}
          className="w-6 h-6 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.116 3.986 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.986c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
};

const QuoteIcon = () => (
  <svg
    className="text-[#2151A1]"
    width="14"
    height="11"
    viewBox="0 0 14 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.63351 10.25H0.69043V7.12C0.69043 5.48667 1.05593 4.14333 1.78693 3.09C2.51793 2.03667 3.51126 1.13667 4.76693 0.39L5.59993 1.55C4.69326 2.11667 3.99693 2.82 3.51093 3.66C3.03893 4.5 2.80293 5.54667 2.80293 6.8H3.63351V10.25ZM12.7835 10.25H9.84043V7.12C9.84043 5.48667 10.2059 4.14333 10.9369 3.09C11.6679 2.03667 12.6613 1.13667 13.9169 0.39L14.7499 1.55C13.8433 2.11667 13.1469 2.82 12.6609 3.66C12.1889 4.5 11.9529 5.54667 11.9529 6.8H12.7835V10.25Z"
      fill="currentColor"
    />
  </svg>
);

const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    width="10"
    height="16"
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={direction === "left" ? "M8.5 1L1.5 8L8.5 15" : "M1.5 1L8.5 8L1.5 15"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TestimonialSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-[#2151A1] flex justify-center items-center min-h-screen p-4 font-poppins relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#d93b3b]/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#d93b3b]/5 rounded-full blur-xl"></div>

      <div className="bg-white rounded-[40px] p-8 md:p-12 lg:p-14 w-full max-w-6xl relative shadow-2xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-x-12 gap-y-10">
          {/* Left Column: Title & Navigation */}
          <div className="lg:col-span-3 flex lg:flex-col justify-between">
            <div>
              <div className="relative">
                {/* Enhanced Gradient Badge */}
                <GradientBadge
                  text="Testimonials"
                  icon={MessageSquareQuote}
                  variant="secondary"
                  size="lg"
                  glow={false}
                  shimmer={true}
                  className="mb-6"
                />
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2151A1] leading-none tracking-tight">
                  WHAT OUR
                  <br />
                  <span className="relative">PARENTS SAY</span>
                </h2>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-4 items-center">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous testimonial"
                className="testimonial-prev w-12 h-12 rounded-full border-2 border-[#2151A1] flex items-center justify-center text-[#2151A1] hover:bg-[#2151A1] hover:text-white transition-colors duration-200"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next testimonial"
                className="testimonial-next w-12 h-12 rounded-full border-2 border-[#2151A1] flex items-center justify-center text-[#2151A1] hover:bg-[#2151A1] hover:text-white transition-colors duration-200"
              >
                <ArrowIcon direction="right" />
              </button>
            </div>
          </div>

          {/* Right Column: Swiper Slider */}
          <div className="lg:col-span-7 relative">
            {/* Decorative Arrow - hidden on mobile */}
            <div className="hidden lg:block absolute bottom-[70px] left-[-15%] w-[70px] h-[70px] z-10">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/12858/12858082.png"
                alt="Decorative arrow"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>

            {/* Swiper */}
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation, Autoplay, EffectFade]}
              loop={true}
              slidesPerView={1}
              spaceBetween={40}
              effect="fade"
              fadeEffect={{
                crossFade: true,
              }}
              speed={800}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: false,
              }}
              navigation={{
                nextEl: ".testimonial-next",
                prevEl: ".testimonial-prev",
              }}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="flex flex-col h-full">
                    <div className="w-10 h-10 rounded-full bg-[#2151A1]/10 flex items-center justify-center">
                      <QuoteIcon />
                    </div>

                    <p className="text-gray-600 mt-4 text-base leading-relaxed flex-grow min-h-[160px] md:min-h-[140px]">
                      "{testimonial.text}"
                    </p>

                    <div className="flex flex-wrap justify-between items-center gap-y-4 mt-8">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-[#2151A1]/10 flex items-center justify-center">
                          <User className="w-8 h-8 text-[#2151A1]" />
                        </div>
                        <div>
                          <p className="font-bold text-lg text-[#2151A1]">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex justify-center gap-4 items-center pt-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border-2 border-[#2151A1] flex items-center justify-center text-[#2151A1] hover:bg-[#2151A1] hover:text-white transition-colors duration-200"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border-2 border-[#2151A1] flex items-center justify-center text-[#2151A1] hover:bg-[#2151A1] hover:text-white transition-colors duration-200"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
