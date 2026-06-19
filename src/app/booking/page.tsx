import { prisma } from "@/lib/prisma";
import { rooms as fallbackRooms } from "@/lib/data";
import BookingClient from "@/components/BookingClient";

export const revalidate = 0; // Dynamic rendering

async function getRooms() {
  try {
    const dbRooms = await prisma.room.findMany();
    if (dbRooms && dbRooms.length > 0) {
      return dbRooms.map(r => ({
        ...r,
        pricePerNight: Number(r.pricePerNight),
      }));
    }
  } catch (error) {
    console.error("Database fetch failed in booking page, using fallback:", error);
  }
  return fallbackRooms;
}

export default async function BookingPage({
  searchParams,
}: {
  searchParams: { roomId?: string; checkIn?: string; checkOut?: string; guests?: string };
}) {
  const rooms = await getRooms();

  return (
    <div className="bg-off-white min-h-screen pt-28 pb-16 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-ocean-deep italic font-light mb-2 text-center">
          Reserve Your Sanctuary
        </h1>
        <p className="font-inter text-charcoal/60 text-xs md:text-sm uppercase tracking-ultra-wide mb-12 text-center">
          Trinco Koko Klub · Trincomalee Bay
        </p>

        <BookingClient
          rooms={rooms}
          initialRoomId={searchParams.roomId}
        />
      </div>
    </div>
  );
}
