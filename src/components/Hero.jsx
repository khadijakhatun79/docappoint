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
          Your <span className="text-[#F96363]">Health</span>, Our
          Priority, Care for Every Patient
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
          Caring for Every{" "}
          <span className="text-[#F96363]">Patient</span>, Every Step
          of the Way
        </>
      ),
      desc: "Manage bookings, profiles and reviews in one place.",
      image: "/assets/hero-image-3.png",
      button1: "Get Started",
      button2: "Learn More",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop
        speed={1000}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) =>
          setActiveIndex(swiper.realIndex)
        }
        className="h-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative bg-[url('/assets/banner.png')] bg-cover bg-center min-h-[calc(100vh-90px)]">

              {/* Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(26,33,89,0.88),rgba(26,33,89,0.88))]" />

              {/* Content */}
              <div className="relative z-10 max-w-[1620px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-10 min-h-[calc(100vh-90px)]">

                  {/* LEFT CONTENT */}
                  <div className="py-16 lg:py-24 text-center xl:text-left">

                    {/* Subtitle */}
                    <span
                      className={`inline-block px-5 py-2 mb-5 rounded-full bg-white/10 backdrop-blur-md text-white text-sm tracking-wide transition-all duration-700 ${
                        activeIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      {slide.subtitle}
                    </span>

                    {/* Title */}
                    <h1
                      className={`text-4xl sm:text-5xl md:text-6xl xl:text-[72px] font-bold text-white leading-tight transition-all duration-700 ${
                        activeIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p
                      className={`mt-6 mb-8 text-gray-200 text-base md:text-lg max-w-2xl mx-auto xl:mx-0 transition-all duration-700 ${
                        activeIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      {slide.desc}
                    </p>

                    {/* Buttons */}
                    <div
                      className={`flex flex-col sm:flex-row gap-4 justify-center xl:justify-start transition-all duration-700 ${
                        activeIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      <Link href="/appointment">
                        <button className="bg-[#F96363] hover:bg-[#ef4d4d] px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105">
                          {slide.button1}
                        </button>
                      </Link>

                      <Link href="/doctors">
                        <button className="border border-white hover:bg-white/10 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105">
                          {slide.button2}
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className=" lg:flex justify-center items-end">

                    <Image
                      key={slide.id}
                      src={slide.image}
                      alt="Doctor Hero"
                      width={700}
                      height={700}
                      priority={index === 0}
                      className={`w-full max-w-[720px] h-auto object-contain drop-shadow-2xl transition-all duration-700 ${
                        activeIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      }`}
                    />

                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;