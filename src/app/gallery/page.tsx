import Image from "next/image";
import { galleryImages } from "@/lib/data";
import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="bg-off-white min-h-screen">
      {/* Full-Screen / Large Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://picsum.photos/seed/trinco-gallery-hero/1920/1080"
          alt="Overhead shot of Trincomalee coastal bay"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <span className="eyebrow block mb-4 !text-gold">Visuals</span>
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white italic font-light">
            A Visual Journey
          </h1>
          <div className="gold-divider mt-6 mb-6" />
          <p className="font-inter text-white/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Immerse yourself in the sights of Trinco Koko Klub. From raw ocean tides to curated culinary experiences.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="section-padding py-16 md:py-24 max-w-[1400px] mx-auto">
        <GalleryGrid images={galleryImages} />
      </section>
    </div>
  );
}
