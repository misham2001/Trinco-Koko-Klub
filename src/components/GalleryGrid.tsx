"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryImage } from "@/lib/data";

const categories = [
  { key: "all", label: "All" },
  { key: "rooms", label: "Rooms" },
  { key: "beach", label: "Pool & Beach" },
  { key: "dining", label: "Dining" },
  { key: "nature", label: "Nature" },
] as const;

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [filter, setFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (filter === "all") return images;
    return images.filter((img) => img.category === filter);
  }, [images, filter]);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`font-inter text-[11px] uppercase tracking-ultra-wide px-5 py-2.5 border transition-all duration-300 ${
              filter === cat.key
                ? "border-gold bg-gold text-ocean-deep"
                : "border-charcoal/15 text-charcoal/50 hover:border-gold hover:text-gold"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.5,
                delay: index * 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="break-inside-avoid mb-4 md:mb-6 cursor-pointer group"
              onClick={() => setLightboxIndex(index)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-ocean-deep/0 group-hover:bg-ocean-deep/40 transition-all duration-500 flex items-end">
                  <div className="p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="eyebrow !text-gold/80 block mb-1">
                      {image.category}
                    </span>
                    <p className="text-white text-sm font-inter">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={filteredImages}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ============= Lightbox Component ============= */

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const image = images[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft" && hasPrev) onNavigate(currentIndex - 1);
    if (e.key === "ArrowRight" && hasNext) onNavigate(currentIndex + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="dialog"
      aria-label="Image lightbox"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10 font-inter text-sm tracking-wide flex items-center gap-2"
        aria-label="Close lightbox"
      >
        <span>Close</span>
        <span className="text-2xl leading-none">×</span>
      </button>

      {/* Image */}
      <motion.div
        key={image.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-[90vw] max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="max-w-full max-h-[80vh] object-contain"
          priority
        />
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <span className="eyebrow block mb-1">{image.category}</span>
          <p className="text-white font-inter text-sm">{image.caption}</p>
        </div>
      </motion.div>

      {/* Navigation */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex - 1);
          }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all"
          aria-label="Previous image"
        >
          ←
        </button>
      )}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex + 1);
          }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all"
          aria-label="Next image"
        >
          →
        </button>
      )}

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <span className="text-white/40 font-inter text-xs tracking-wide">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </motion.div>
  );
}
