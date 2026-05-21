"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
          Your <span className="text-[#F96363]">Health</span>, Our Priority, Care for Every Patient
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
          Caring for Every  <span className="text-[#F96363]">Patient</span>,
          Every Step of the Way
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
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-auto"
      >

        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>

            <div className="relative bg-[url('/assets/banner.png')] bg-cover bg-center min-h-[calc(100vh-90px)]">

              {/* Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(26,33,89,0.85),rgba(26,33,89,0.85))]" />

              {/* Content */}
              <div className="relative z-10 container mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 min-h-[calc(100vh-90px)]">

                  {/* LEFT CONTENT */}
                  <div className="w-full max-w-[840px] py-16 lg:py-24">

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
                      className={`text-4xl md:text-6xl lg:text-[72px] font-bold text-white mb-6 leading-tight transition-all duration-700 ${
                        activeIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p
                      className={`text-gray-200 mb-8 max-w-xl text-base md:text-lg transition-all duration-700 ${
                        activeIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      {slide.desc}
                    </p>

                    {/* Buttons */}
                    <div
                      className={`relative z-20 flex gap-4 flex-wrap transition-all duration-700 ${
                        activeIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                    >

                      <Link href="/all-appointments">
                        <button className="bg-[#F96363] hover:bg-[#ef4d4d] px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300">
                          {slide.button1}
                        </button>
                      </Link>

                      <Link href="/doctors">
                        <button className="border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300">
                          {slide.button2}
                        </button>
                      </Link>

                    </div>

                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="hidden lg:flex justify-center items-end">

                    <Image
                      key={slide.id}
                      src={slide.image}
                      alt="hero"
                      width={500}
                      height={700}
                      className="w-[690px] h-auto drop-shadow-2xl"
                      priority
                    />

                  </div>

                </div>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    

    </div>
  );
};

export default Hero;