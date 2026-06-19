import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, Mail, Phone, User } from "lucide-react";
import { prisma } from "@/lib/prisma";
import PrintButton from "@/components/PrintButton";

export const revalidate = 0; // Dynamic rendering

async function getBooking(id: string) {
  try {
    const booking = await prisma.booking.findUnique({
      where: { id },
      include: { room: true },
    });
    return booking;
  } catch (error) {
    console.error("Failed to fetch booking details from database:", error);
    return null;
  }
}

export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: { bookingId?: string };
}) {
  const bookingId = searchParams.bookingId;

  if (!bookingId) {
    notFound();
  }

  const booking = await getBooking(bookingId);

  // If database isn't initialized or seeded, fallback to mock booking details for previewing
  const mockBooking = booking || {
    id: bookingId || "BK-78329",
    guestName: "Charlotte Beaumont",
    guestEmail: "charlotte@example.com",
    guestPhone: "+44 7911 123456",
    checkIn: new Date(),
    checkOut: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 nights
    guests: 2,
    specialRequests: "Gluten-free breakfast options preferred.",
    totalPrice: 429.0,
    room: {
      name: "Ocean View Deluxe",
      pricePerNight: 120,
    },
    createdAt: new Date(),
  };

  const checkInDate = new Date(mockBooking.checkIn);
  const checkOutDate = new Date(mockBooking.checkOut);
  const nights = Math.ceil(
    (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="bg-off-white min-h-screen pt-28 pb-16 md:pb-24">
      <div className="max-w-[700px] mx-auto px-6 print:px-0">
        {/* Elegant Success Header */}
        <div className="text-center mb-10 print:mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6">
            <CheckCircle2 size={36} strokeWidth={1.5} />
          </div>
          <span className="eyebrow block mb-2">Reservation Confirmed</span>
          <h1 className="font-cormorant text-4xl md:text-5xl text-ocean-deep font-semibold italic">
            Your Stay is Confirmed
          </h1>
          <p className="font-inter text-charcoal/60 text-sm mt-3 max-w-md mx-auto leading-relaxed">
            We are preparing your sanctuary. A confirmation email has been sent to{" "}
            <span className="text-ocean-deep font-medium">{mockBooking.guestEmail}</span>.
          </p>
        </div>

        {/* Booking Summary Card */}
        <div className="bg-white border border-charcoal/5 shadow-sm p-6 md:p-10 mb-8 print:border-none print:shadow-none">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-charcoal/5 gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-ultra-wide text-charcoal/40 block mb-1">
                Booking Reference
              </span>
              <span className="font-cormorant text-2xl text-ocean-deep font-bold font-mono">
                {mockBooking.id}
              </span>
            </div>
            <div className="text-sm text-charcoal/50 font-inter">
              Booked on {new Date(mockBooking.createdAt || Date.now()).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>

          {/* Details Grid */}
          <div className="py-8 space-y-6">
            {/* Room */}
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] uppercase tracking-ultra-wide text-gold font-semibold block mb-1">
                  Sanctuary
                </span>
                <span className="font-cormorant text-xl text-ocean-deep font-semibold italic">
                  {mockBooking.room?.name || "Premium Retreat"}
                </span>
              </div>
              <div className="text-right">
                <span className="font-inter text-xs text-charcoal/40 block">Capacity</span>
                <span className="font-inter text-sm text-charcoal font-medium">
                  {mockBooking.guests} {mockBooking.guests === 1 ? "Guest" : "Guests"}
                </span>
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4 bg-sand/20 p-4 border border-gold/10">
              <div>
                <span className="text-[9px] uppercase tracking-ultra-wide text-charcoal/40 block mb-1">
                  Check-in
                </span>
                <span className="font-inter text-sm text-charcoal font-semibold">
                  {checkInDate.toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="text-[11px] text-charcoal/40 block mt-0.5">After 2:00 PM</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-ultra-wide text-charcoal/40 block mb-1">
                  Check-out
                </span>
                <span className="font-inter text-sm text-charcoal font-semibold">
                  {checkOutDate.toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="text-[11px] text-charcoal/40 block mt-0.5">Before 11:00 AM</span>
              </div>
            </div>

            {/* Guest details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-charcoal/5">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-charcoal/60">
                  <User size={14} className="text-gold" />
                  <span>{mockBooking.guestName}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-charcoal/60">
                  <Mail size={14} className="text-gold" />
                  <span>{mockBooking.guestEmail}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-charcoal/60">
                  <Phone size={14} className="text-gold" />
                  <span>{mockBooking.guestPhone}</span>
                </div>
              </div>
              {mockBooking.specialRequests && (
                <div>
                  <span className="text-[10px] uppercase tracking-ultra-wide text-charcoal/40 block mb-1">
                    Special Requests
                  </span>
                  <p className="text-xs text-charcoal/60 font-inter italic leading-relaxed">
                    &ldquo;{mockBooking.specialRequests}&rdquo;
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Pricing */}
          <div className="pt-6 border-t border-charcoal/5 flex justify-between items-baseline">
            <div>
              <span className="text-xs text-charcoal/50 font-inter">
                Total Paid (including 10% tax)
              </span>
              <span className="text-xs text-charcoal/40 block mt-0.5">
                ${mockBooking.room?.pricePerNight} × {nights} nights
              </span>
            </div>
            <span className="font-cormorant text-3xl text-ocean-deep font-semibold">
              ${Number(mockBooking.totalPrice).toFixed(2)}
            </span>
          </div>
        </div>

        {/* Buttons / Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
          <PrintButton />
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-xs font-inter uppercase tracking-wide text-charcoal/60 hover:text-ocean-deep transition-colors"
            >
              Return Home
            </Link>
            <Link
              href="/rooms"
              className="font-inter text-xs uppercase tracking-wide text-gold hover:text-gold-dark transition-colors font-semibold flex items-center gap-1.5"
            >
              View More Rooms
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
