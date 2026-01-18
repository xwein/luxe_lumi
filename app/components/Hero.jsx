"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../components/ui/Button";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";

const slides = [
  { image: "/slider_hero1.jpg", alt: "Коттедж на озере" },
  { image: "/slider_hero2.webp", alt: "Виды на озеро" },
  { image: "/slider_hero3.jpg", alt: "Красивый пейзаж" },
  { image: "/slider_hero4.jpg", alt: "Вид сверху" },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handleTelegramClick = () => {
    const message = encodeURIComponent(
      "Здравствуйте! Я по поводу новых коттеджей, можно узнать подробнее",
    );
    window.open(`https://t.me/lumivaara?text=${message}`, "_blank");
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden"
      data-testid="section-hero"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center px-4 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-8">
          <div className="flex items-center gap-4 justify-center">
            <span className="w-12 md:w-24 h-px bg-gradient-to-r from-transparent to-primary/80" />
            <span className="text-primary text-xs md:text-sm tracking-[0.4em] uppercase font-light">
              Карелия
            </span>
            <span className="w-12 md:w-24 h-px bg-gradient-to-l from-transparent to-primary/80" />
          </div>
        </div>

        <h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-light tracking-[0.15em] text-white mb-6 leading-none"
          data-testid="text-hero-title"
        >
          <span className="block">LUXE</span>
          <span className="block mt-2 text-primary">LUMIVAARA</span>
        </h1>

        <div className="mb-8">
          <p className="font-serif text-md sm:text-2xl md:text-4xl text-white/90 mb-3 tracking-wide ">
            Парк Отель
          </p>
        </div>

        <Button
          onClick={handleTelegramClick}
          className="group bg-[#B80000] border-0 hover:bg-primary text-white px-10 py-7 text-sm font-medium tracking-[0.2em] uppercase rounded-none shadow-2xl shadow-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:px-12"
          data-testid="button-telegram-cta"
        >
          <Send className="w-4 h-4 mr-3 transition-transform group-hover:translate-x-1" />
          Связаться с нами
        </Button>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 p-3 text-white/40 hover:text-white border border-white/20 hover:border-white/40 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
        data-testid="button-prev-slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 p-3 text-white/40 hover:text-white border border-white/20 hover:border-white/40 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
        data-testid="button-next-slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
}
