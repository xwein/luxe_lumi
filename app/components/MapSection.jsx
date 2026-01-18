"use client";

import { useState } from "react";
import { Box, ZoomIn, X } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function MapSection() {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const openZoom = () => setIsZoomOpen(true);
  const closeZoom = () => setIsZoomOpen(false);

  return (
    <section
      id="map"
      className="py-24 md:py-32 bg-white relative"
      data-testid="section-map"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-black mb-4">
            Территория комплекса
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-destructive mb-6"
            data-testid="text-title-map"
          >
            КАРТА БАЗЫ
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <span className="w-2 h-2 rounded-full bg-primary/50" />
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>

        {/* Map Image with Zoom Icon */}
        <div className="relative group cursor-pointer" onClick={openZoom}>
          <div className="relative overflow-hidden rounded-sm shadow-2xl">
            <img
              src="/resort_aerial_map_view.jpg"
              alt="Карта базы отдыха"
              className="w-full h-auto min-h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
          </div>

          {/* Center Zoom Icon */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <ZoomIn className="w-16 h-16 text-red-600 opacity-80 hover:opacity-100 transition-opacity cursor-pointer pointer-events-auto" />
          </div>
        </div>

        {/* 3D Tour Button */}
        <div className="text-center mt-12">
          <Button
            className="group bg-primary hover:bg-destructive text-black hover:text-white border border-primary/50 hover:border-primary px-10 py-6 text-[12px] font-bold tracking-[0.2em] uppercase rounded-none transition-all duration-300"
            data-testid="button-3d-tour"
          >
            <a
              href="https://idealsphere.ru/lumivaara/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Box className="w-5 h-5 mr-3" />
              Виртуальный 3D тур
            </a>
          </Button>
        </div>
      </div>

      {/* Fullscreen Zoom Overlay */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl h-full">
            {/* Close Button */}
            <button
              onClick={closeZoom}
              className="absolute top-4 right-4 text-red-600 hover:text-red-400 z-50"
            >
              <X className="w-10 h-10" />
            </button>

            {/* Zoomed Image */}
            <img
              src="/popup-map.jpg"
              alt="Карта базы (увеличенная)"
              className="w-full h-full object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </section>
  );
}
