"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wifi, Wind, Eye, Users, Waves, Coffee, Sun, TreePalm } from "lucide-react";
import type { RoomData } from "@/lib/data";

const amenityIcons: Record<string, React.ReactNode> = {
  WiFi: <Wifi size={14} />,
  "Air Conditioning": <Wind size={14} />,
  "Ocean View": <Eye size={14} />,
  "Ocean Panorama": <Eye size={14} />,
  "Sea View": <Eye size={14} />,
  "King Bed": <Users size={14} />,
  "Queen Bed": <Users size={14} />,
  Beachfront: <Waves size={14} />,
  "Direct Beach Access": <Waves size={14} />,
  "Mini Bar": <Coffee size={14} />,
  "Premium Mini Bar": <Coffee size={14} />,
  "Nespresso Machine": <Coffee size={14} />,
  "Private Balcony": <Sun size={14} />,
  "Private Terrace": <Sun size={14} />,
  "Private Veranda": <Sun size={14} />,
  "Private Patio": <Sun size={14} />,
  "Garden View": <TreePalm size={14} />,
};

interface RoomCardProps {
  room: RoomData;
  index?: number;
  variant?: "default" | "compact";
}

export default function RoomCard({
  room,
  index = 0,
  variant = "default",
}: RoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <div className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <Image
            src={room.imageUrl}
            alt={room.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Room type badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-gold/90 backdrop-blur-sm text-ocean-deep text-[10px] uppercase tracking-ultra-wide font-inter font-semibold px-3 py-1.5">
              {room.type}
            </span>
          </div>
          {/* Price overlay */}
          <div className="absolute bottom-4 right-4 bg-ocean-deep/90 backdrop-blur-sm px-4 py-2">
            <span className="text-gold font-cormorant text-xl font-semibold">
              ${room.pricePerNight}
            </span>
            <span className="text-off-white/60 text-xs font-inter ml-1">
              / night
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="font-cormorant text-2xl md:text-3xl text-ocean-deep font-semibold italic">
            {room.name}
          </h3>
          <p className="mt-3 text-charcoal/60 text-sm leading-relaxed line-clamp-2">
            {room.description}
          </p>

          {/* Amenities */}
          {variant === "default" && (
            <div className="flex flex-wrap gap-3 mt-5">
              {room.amenities.slice(0, 5).map((amenity) => (
                <span
                  key={amenity}
                  className="flex items-center gap-1.5 text-[11px] text-charcoal/50 font-inter"
                >
                  {amenityIcons[amenity] || null}
                  {amenity}
                </span>
              ))}
              {room.amenities.length > 5 && (
                <span className="text-[11px] text-gold font-inter">
                  +{room.amenities.length - 5} more
                </span>
              )}
            </div>
          )}

          {/* CTA */}
          <div className="mt-6 pt-6 border-t border-charcoal/5 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Users size={14} className="text-charcoal/30" />
              <span className="text-xs text-charcoal/40 font-inter">
                Up to {room.capacity} guests
              </span>
            </div>
            <Link
              href={`/booking?roomId=${room.id}`}
              className="font-inter text-xs uppercase tracking-wide text-gold hover:text-gold-dark transition-colors duration-300 font-semibold"
            >
              Book This Room →
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
