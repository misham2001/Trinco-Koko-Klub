"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Wifi, Wind, Eye, Users, Waves, Coffee, Sun, TreePalm } from "lucide-react";
import BookingForm from "./BookingForm";
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

interface BookingClientProps {
  rooms: RoomData[];
  initialRoomId?: string;
}

export default function BookingClient({
  rooms,
  initialRoomId,
}: BookingClientProps) {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    initialRoomId || rooms[0]?.id || ""
  );

  const selectedRoom = useMemo(() => {
    return rooms.find((r) => r.id === selectedRoomId) || rooms[0];
  }, [rooms, selectedRoomId]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* Left Column: Room Info & Room Selector (5 columns on desktop) */}
      <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
        {/* Room Selector Dropdown */}
        <div className="bg-white border border-charcoal/5 p-6 shadow-sm">
          <label htmlFor="room-selector" className="eyebrow mb-2 block !text-charcoal/40">
            Select Your Sanctuary
          </label>
          <select
            id="room-selector"
            value={selectedRoomId}
            onChange={(e) => setSelectedRoomId(e.target.value)}
            className="w-full bg-off-white border border-charcoal/10 font-inter text-sm text-charcoal px-4 py-3 focus:outline-none focus:border-gold cursor-pointer"
          >
            {rooms.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name} — ${r.pricePerNight} / night
              </option>
            ))}
          </select>
        </div>

        {/* Selected Room Details Card */}
        {selectedRoom && (
          <div className="bg-white border border-charcoal/5 overflow-hidden shadow-sm">
            <div className="relative aspect-[16/10]">
              <Image
                src={selectedRoom.imageUrl}
                alt={selectedRoom.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-gold text-ocean-deep text-[10px] uppercase tracking-ultra-wide font-inter font-bold px-3 py-1">
                  {selectedRoom.type}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div>
                <h3 className="font-cormorant text-3xl text-ocean-deep font-semibold italic mb-2">
                  {selectedRoom.name}
                </h3>
                <div className="flex items-center gap-1 text-charcoal/40 text-xs font-inter mb-4">
                  <Users size={14} />
                  <span>Up to {selectedRoom.capacity} guests</span>
                  <span className="mx-2">•</span>
                  <span className="text-gold font-semibold">${selectedRoom.pricePerNight} / night</span>
                </div>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  {selectedRoom.description}
                </p>
              </div>

              {/* Amenities */}
              <div>
                <h4 className="font-inter text-[10px] uppercase tracking-ultra-wide text-gold font-semibold mb-3">
                  Included Amenities
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {selectedRoom.amenities.map((amenity: string) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-2 text-xs text-charcoal/60 font-inter"
                    >
                      <span className="text-gold/80">{amenityIcons[amenity]}</span>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right Column: Booking Form (7 columns on desktop) */}
      <div className="lg:col-span-7 bg-white border border-charcoal/5 p-6 md:p-10 shadow-sm">
        <BookingForm room={selectedRoom} />
      </div>
    </div>
  );
}
