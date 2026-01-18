"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export default function FullScreenVideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Autoplay on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* VIDEO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Video */}
        <video
          ref={videoRef}
          src="/video/resort_comp.mp4"
          muted
          autoPlay
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          className="absolute top-5 right-5 bg-white/20 hover:bg-white/40 p-2 rounded-full z-20 transition"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white" />
          )}
        </button>
      </section>

      {/* WARNING SECTION */}
      <div className="w-full bg-[#1D1616] text-white py-6 md:py-8 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 px-4 md:px-8">
        {/* Exclamation mark */}
        <div className="shrink-0 flex items-center justify-center">
          <span className="text-red-500 text-4xl md:text-5xl font-extrabold">
            ❗
          </span>
        </div>

        {/* Text */}
        <p className="flex-1 text-sm md:text-base leading-relaxed md:leading-loose">
          <strong>Внимание:</strong> Дорогие гости, мы находимся на территории
          национального парка "Ладожские шхеры", поэтому{" "}
          <strong>ОБЯЗАТЕЛЬНО</strong> приобретите билет перед посещением шхер
          на{" "}
          <a
            href="https://parkladoga.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            сайте парка
          </a>
          , здесь же можно и ознакомиться с правилами посещения.
        </p>
      </div>
    </>
  );
}
