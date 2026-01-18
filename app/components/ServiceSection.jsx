"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "../components/ui/Button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ICONS_MAP = {
  home: "/home-icon-red.svg",
  cog: "/cog-icon-red.svg",
  tree: "/tree-icon-red.svg",
  boat: "/boat-icon-red.svg",
  captain: "/captain-icon-red.svg",
  tour: "/tour-icon-red.svg",
  car: "/car-icon-red.svg",
  instructor: "/instructor-icon-red.svg",
  road: "/road-icon-red.svg",
  wood: "/wood-icon-red.svg",
  camp: "/camp-icon-red.svg",
  fire: "/fire-icon-red.svg",
};

export default function ServiceSection({
  id = "",
  title = "",
  subtitle = "",
  tagline = "",
  features = [],
  images = [],
  ctaText = "",
  ctaLink = "",
  reversed = false,
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current?.swiper) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  const handleButtonClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id={id}
      className={`py-24 md:py-32 ${reversed ? "bg-white" : "bg-zinc-50"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`flex flex-col md:flex-row items-start gap-10 ${
            reversed ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* TEXT SIDE */}
          <div className="md:w-1/3 w-full space-y-6 max-w-105">
            {subtitle && (
              <p className="text-[10px] tracking-[0.35em] uppercase text-black">
                {subtitle.split(" ").slice(0, 3).join(" ")}
              </p>
            )}

            <h2 className="font-serif text-2xl md:text-4xl font-light tracking-wide text-[#B80000] leading-tight">
              {title}
            </h2>

            {tagline && (
              <div className="flex items-center gap-3">
                <span className="w-10 h-px bg-destructive" />
                <p className="font-serif text-sm md:text-base text-black italic">
                  {tagline}
                </p>
              </div>
            )}

            {features.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const iconSrc = ICONS_MAP[feature.icon] || ICONS_MAP.home;
                  return (
                    <div
                      key={index}
                      className="group p-4 rounded-sm border border-white/10 hover:border-[#ff6464] transition-all bg-white/2 hover:bg-white/5 flex flex-col items-center text-center"
                    >
                      <div className="relative w-11 h-11 mb-2">
                        <Image
                          src={iconSrc}
                          alt={feature.title}
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <p className="text-xs md:text-sm font-semibold text-black leading-relaxed">
                        <span className="font-bold">{feature.title || ""}</span>{" "}
                        {feature.description || ""}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {ctaText && (
              <Button
                href="#booking"
                onClick={(e) => handleButtonClick(e, "#booking")}
                className="group bg-primary hover:bg-destructive text-black hover:text-white border border-primary/50 hover:border-primary px-6 py-4 text-[12px] font-bold tracking-[0.25em] uppercase rounded-none transition-all flex items-center justify-center"
              >
                {ctaText}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            )}
          </div>

          {/* SLIDER SIDE */}
          {images.length > 0 && (
            <div className="md:w-2/3 w-full relative h-[55vh] md:h-[70vh] lg:h-[80vh]">
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                loop
                slidesPerView={1}
                spaceBetween={20}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                className="w-full h-full rounded-sm overflow-hidden"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <img
                        src={img}
                        alt={title || `Service image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                ref={prevRef}
                className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-3 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white items-center justify-center shadow-lg transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                ref={nextRef}
                className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-3 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white items-center justify-center shadow-lg transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
