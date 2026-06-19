import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { rooms as fallbackRooms } from "@/lib/data";
import RoomsFilterList from "@/components/RoomsFilterList";

export const revalidate = 0; // Dynamic rendering

async function getRooms() {
  try {
    const dbRooms = await prisma.room.findMany();
    if (dbRooms && dbRooms.length > 0) {
      return dbRooms.map(r => ({
        ...r,
        // Ensure price is a number
        pricePerNight: Number(r.pricePerNight),
      }));
    }
  } catch (error) {
    console.error("Database fetch failed, using fallback data:", error);
  }
  return fallbackRooms;
}

export default async function RoomsPage() {
  const rooms = await getRooms();

  return (
    <div className="bg-off-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://picsum.photos/seed/trinco-rooms-hero/1920/1080"
          alt="Luxury hotel room interior looking out to the sea"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <span className="eyebrow block mb-4 !text-gold">Accommodations</span>
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white italic font-light">
            Our Sanctuaries
          </h1>
          <div className="gold-divider mt-6 mb-6" />
          <p className="font-inter text-white/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Designed for deep rest and complete seclusion, each suite and bungalow is a celebration of tropical minimalism.
          </p>
        </div>
      </section>

      {/* Filter and Rooms List Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1400px] mx-auto">
        <RoomsFilterList initialRooms={rooms} />
      </section>
    </div>
  );
}
