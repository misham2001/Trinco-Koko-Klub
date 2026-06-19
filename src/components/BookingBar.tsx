"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDays, Users, Search } from "lucide-react";

export default function BookingBar() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState(2);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const minCheckOut = checkIn
    ? new Date(checkIn.getTime() + 86400000)
    : tomorrow;

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (checkIn) params.set("checkIn", checkIn.toISOString().split("T")[0]);
    if (checkOut) params.set("checkOut", checkOut.toISOString().split("T")[0]);
    params.set("guests", String(guests));
    router.push(`/booking?${params.toString()}`);
  };

  return (
    <div className="glass-panel p-4 md:p-6">
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-6">
        {/* Check-in */}
        <div className="flex-1">
          <label className="text-[10px] uppercase tracking-ultra-wide text-white/50 font-inter mb-1.5 block">
            Check-in
          </label>
          <div className="relative">
            <CalendarDays
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/60 z-10"
            />
            <DatePicker
              selected={checkIn}
              onChange={(date: Date | null) => {
                setCheckIn(date);
                if (date && checkOut && checkOut <= date) {
                  setCheckOut(null);
                }
              }}
              minDate={new Date()}
              placeholderText="Select date"
              className="w-full bg-white/10 border border-white/20 text-white text-sm font-inter px-4 py-3 pl-10 placeholder:text-white/40 focus:outline-none focus:border-gold/50"
              dateFormat="MMM d, yyyy"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-12 bg-white/20" />

        {/* Check-out */}
        <div className="flex-1">
          <label className="text-[10px] uppercase tracking-ultra-wide text-white/50 font-inter mb-1.5 block">
            Check-out
          </label>
          <div className="relative">
            <CalendarDays
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/60 z-10"
            />
            <DatePicker
              selected={checkOut}
              onChange={(date: Date | null) => setCheckOut(date)}
              minDate={minCheckOut}
              placeholderText="Select date"
              className="w-full bg-white/10 border border-white/20 text-white text-sm font-inter px-4 py-3 pl-10 placeholder:text-white/40 focus:outline-none focus:border-gold/50"
              dateFormat="MMM d, yyyy"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-12 bg-white/20" />

        {/* Guests */}
        <div className="flex-1 md:max-w-[160px]">
          <label className="text-[10px] uppercase tracking-ultra-wide text-white/50 font-inter mb-1.5 block">
            Guests
          </label>
          <div className="relative">
            <Users
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/60"
            />
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full bg-white/10 border border-white/20 text-white text-sm font-inter px-4 py-3 pl-10 focus:outline-none focus:border-gold/50 appearance-none cursor-pointer"
              aria-label="Number of guests"
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n} className="bg-ocean-deep text-white">
                  {n} {n === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="btn-gold flex items-center justify-center gap-2 md:self-end"
          aria-label="Check availability"
        >
          <Search size={16} />
          <span className="hidden sm:inline">Check Availability</span>
        </button>
      </div>
    </div>
  );
}
