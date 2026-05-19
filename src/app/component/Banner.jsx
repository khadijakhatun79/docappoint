"use client";

import { useState } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      subtitle: "Welcome to DocAppoint",
      title: (
        <>
          Your <span className="text-[#F96363]">Health</span>, Our Priority
        </>
      ),
      desc: "Book appointments with trusted doctors anytime, anywhere.",
      image: "/assets/hero-image-1.png",
      button1: "Book Appointment",
      button2: "View Doctors",
    },
    {
      id: 2,
      subtitle: "Trusted Doctors Near You",
      title: (
        <>
          In Trusted Hands Guiding Your{" "}
          <span className="text-[#F96363]">Health</span> Journey
        </>
      ),
      desc: "Find experienced specialists and get the best treatment easily.",
      image: "/assets/hero-image-2.png",
      button1: "Find Doctors",
      button2: "Departments",
    },
    {
      id: 3,
      subtitle: "Fast Appointment System",
      title: (
        <>
          Caring for Every <span className="text-[#F96363]">Patient</span>,
          Every Step
        </>
      ),
      desc: "Manage bookings, profiles and reviews in one place.",
      image: "/assets/hero-image-3.png",
      button1: "Get Started",
      button2: "Learn More",
    },
  ];

  return (
    <div className="relative overflow-hidden">

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-[80vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="h-full bg-cover bg-center relative bg-[url('/assets/banner.png')]">

              {/* Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(26,33,89,0.85),rgba(26,33,89,0.85))]"></div>

              

              {/* Content */}
              <div className="relative z-10 container mx-auto h-full flex items-end px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full gap-10">

                  {/* LEFT CONTENT */}
                  <div className="pt-[120px] pb-[120px] min-w-[913px]">

                    {/* Subtitle */}
                    <span
                      className={`inline-block px-5 py-2 mb-5 rounded-full bg-white/10 text-white text-sm tracking-wide transition-all duration-500 ${
                        activeIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      {slide.subtitle}
                    </span>

                    {/* Title */}
                    <h1
                      className={`text-[88px] md:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-700 ${ 
                        activeIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p
                      className={`text-gray-200 mb-8 max-w-xl transition-all duration-700 ${
                        activeIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      {slide.desc}
                    </p>

                    {/* Buttons */}
                    <div
                      className={`flex gap-4 flex-wrap transition-all duration-700 ${
                        activeIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      <Link href="/all-appointments">
                        <button className="th-btn style1 bg-[#F96363] hover:bg-[#F96363] px-6 py-3 rounded-lg font-semibold text-white transition">
                          {slide.button1}
                        </button>
                      </Link>

                      <Link href="/doctors">
                        <button className="th-btn th-border hover:bg-white/10 px-6 py-3 rounded-lg font-semibold text-white transition">
                          {slide.button2}
                        </button>
                      </Link>
                    </div>

                  </div>

               {/* RIGHT IMAGE */}
                  <div className="hidden lg:flex justify-center items-end">

                    <img
                      key={slide.id}
                      src={slide.image}
                      alt="hero"
                      className={`w-[560px] drop-shadow-2xl`}
                    />

                  </div>

                </div>
              </div>
            
                 
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm opacity-70">
        Scroll ↓
      </div>

    </div>
  );
};

export default Hero;