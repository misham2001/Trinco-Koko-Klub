"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion as fm, AnimatePresence as Ap } from "framer-motion";
import { Wifi, Wind, Eye, Users, Waves, Coffee, Sun, TreePalm, X, Calendar } from "lucide-react";
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

interface RoomsFilterListProps {
  initialRooms: RoomData[];
}

export default function RoomsFilterList({ initialRooms }: RoomsFilterListProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedRoom, setSelectedRoom] = useState<RoomData | null>(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedRoom(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filters = ["All", "Suite", "Deluxe", "Standard"];

  const filteredRooms = useMemo(() => {
    if (activeFilter === "All") return initialRooms;
    return initialRooms.filter((room) => room.type.toLowerCase() === activeFilter.toLowerCase());
  }, [initialRooms, activeFilter]);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`font-inter text-[11px] uppercase tracking-ultra-wide px-6 py-3 border transition-all duration-300 ${
              activeFilter === filter
                ? "border-gold bg-gold text-ocean-deep font-semibold"
                : "border-charcoal/15 text-charcoal/50 hover:border-gold hover:text-gold"
            }`}
          >
            {filter === "All" ? "All Sanctuaries" : `${filter}s`}
          </button>
        ))}
      </div>

      {/* Grid of rooms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        <Ap mode="popLayout">
          {filteredRooms.map((room, index) => (
            <fm.div
              key={room.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white border border-charcoal/5 flex flex-col justify-between"
            >
              <div>
                {/* Image container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={room.imageUrl}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-ocean-deep text-[10px] uppercase tracking-ultra-wide font-inter font-bold px-3 py-1">
                      {room.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-ocean-deep/90 backdrop-blur-sm px-4 py-2">
                    <span className="text-gold font-cormorant text-xl font-semibold">${room.pricePerNight}</span>
                    <span className="text-off-white/60 text-xs font-inter ml-1">/ night</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="font-cormorant text-3xl text-ocean-deep font-semibold italic mb-3">
                    {room.name}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-6 line-clamp-3">
                    {room.description}
                  </p>

                  {/* Amenities Row */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-charcoal/5">
                    {room.amenities.slice(0, 4).map((amenity: string) => (
                      <span
                        key={amenity}
                        className="flex items-center gap-1.5 text-xs text-charcoal/50 font-inter"
                      >
                        {amenityIcons[amenity]}
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 4 && (
                      <span className="text-xs text-gold font-inter font-semibold">
                        +{room.amenities.length - 4} More
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 md:px-8 md:pb-8 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedRoom(room)}
                  className="text-xs font-inter uppercase tracking-wide text-charcoal/60 hover:text-ocean-deep border-b border-charcoal/20 hover:border-ocean-deep transition-all py-1"
                >
                  View Sanctuary details
                </button>
                <Link
                  href={`/booking?roomId=${room.id}`}
                  className="btn-gold text-xs py-3 px-6"
                >
                  Book This Room
                </Link>
              </div>
            </fm.div>
          ))}
        </Ap>
      </div>

      {/* Room Details Modal */}
      <Ap>
        {selectedRoom && (
          <fm.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 p-4 overflow-y-auto"
            onClick={() => setSelectedRoom(null)}
          >
            <fm.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-off-white max-w-4xl w-full relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 z-10 bg-ocean-deep text-white p-2 hover:bg-gold hover:text-ocean-deep transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Main Image */}
              <div className="relative h-[40vh] min-h-[300px]">
                <Image
                  src={selectedRoom.imageUrl}
                  alt={selectedRoom.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 md:left-10 text-white">
                  <span className="eyebrow !text-gold block mb-2">{selectedRoom.type} Sanctuary</span>
                  <h2 className="font-cormorant text-4xl md:text-5xl font-semibold italic text-white">
                    {selectedRoom.name}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Columns - Description */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h4 className="font-inter text-[11px] uppercase tracking-ultra-wide text-gold font-semibold mb-3">
                      The Sanctuary
                    </h4>
                    <p className="text-charcoal/70 text-sm md:text-base leading-relaxed whitespace-pre-line font-inter">
                      {selectedRoom.longDescription || selectedRoom.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-inter text-[11px] uppercase tracking-ultra-wide text-gold font-semibold mb-3">
                      Sanctuary Amenities
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedRoom.amenities.map((amenity: string) => (
                        <div
                          key={amenity}
                          className="flex items-center gap-2 text-xs md:text-sm text-charcoal/60 font-inter"
                        >
                          <div className="text-gold/80">{amenityIcons[amenity]}</div>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Booking Info */}
                <div className="bg-sand/30 border border-gold/10 p-6 flex flex-col justify-between h-fit">
                  <div className="space-y-4">
                    <h4 className="font-inter text-[11px] uppercase tracking-ultra-wide text-ocean-deep font-semibold">
                      Your Stay
                    </h4>
                    <div className="flex justify-between items-baseline">
                      <span className="font-inter text-xs text-charcoal/50">Rate</span>
                      <div className="text-right">
                        <span className="font-cormorant text-3xl font-semibold text-ocean-deep">
                          ${selectedRoom.pricePerNight}
                        </span>
                        <span className="font-inter text-xs text-charcoal/40 ml-1">/ night</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-xs text-charcoal/60 border-t border-charcoal/5 pt-4">
                      <span>Max occupancy</span>
                      <span className="font-semibold text-charcoal">{selectedRoom.capacity} Guests</span>
                    </div>
                  </div>

                  <Link
                    href={`/booking?roomId=${selectedRoom.id}`}
                    onClick={() => setSelectedRoom(null)}
                    className="btn-gold w-full text-center mt-6 flex items-center justify-center gap-2 text-xs"
                  >
                    <Calendar size={14} />
                    Reserve This Sanctuary
                  </Link>
                </div>
              </div>
            </fm.div>
          </fm.div>
        )}
      </Ap>
    </>
  );
}
