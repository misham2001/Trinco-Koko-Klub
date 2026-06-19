"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDays, Loader2 } from "lucide-react";
import PriceCalculator from "./PriceCalculator";
import type { RoomData } from "@/lib/data";

const bookingSchema = z.object({
  guestName: z.string().min(2, "Name must be at least 2 characters"),
  guestEmail: z.string().email("Please enter a valid email address"),
  guestPhone: z.string().min(6, "Please enter a valid phone number"),
  guests: z.number().min(1).max(4),
  specialRequests: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  room: RoomData;
}

export default function BookingForm({ room }: BookingFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Pre-fill dates from URL params
  useEffect(() => {
    const ciParam = searchParams.get("checkIn");
    const coParam = searchParams.get("checkOut");
    if (ciParam) setCheckIn(new Date(ciParam));
    if (coParam) setCheckOut(new Date(coParam));
  }, [searchParams]);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minCheckOut = checkIn
    ? new Date(checkIn.getTime() + 86400000)
    : tomorrow;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      guests: Number(searchParams.get("guests")) || 2,
    },
  });

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    return Math.ceil(
      (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
    );
  }, [checkIn, checkOut]);

  const onSubmit = async (data: BookingFormData) => {
    if (!checkIn || !checkOut || nights <= 0) {
      setError("Please select valid check-in and check-out dates.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const subtotal = nights * room.pricePerNight;
    const total = subtotal * 1.1;

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roomId: room.id,
          checkIn: checkIn.toISOString(),
          checkOut: checkOut.toISOString(),
          totalPrice: total,
          ...data,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Something went wrong. Please try again.");
        return;
      }

      router.push(`/confirmation?bookingId=${result.id}`);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Dates */}
      <div>
        <h3 className="font-cormorant text-xl text-ocean-deep font-semibold mb-4">
          Select Your Dates
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="eyebrow mb-2 block !text-charcoal/40">
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
                  if (date && checkOut && checkOut <= date) setCheckOut(null);
                }}
                minDate={new Date()}
                placeholderText="Select check-in"
                className="input-field pl-10"
                dateFormat="MMM d, yyyy"
              />
            </div>
          </div>
          <div>
            <label className="eyebrow mb-2 block !text-charcoal/40">
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
                placeholderText="Select check-out"
                className="input-field pl-10"
                dateFormat="MMM d, yyyy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Guest Details */}
      <div>
        <h3 className="font-cormorant text-xl text-ocean-deep font-semibold mb-4">
          Guest Details
        </h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="guestName" className="eyebrow mb-2 block !text-charcoal/40">
              Full Name
            </label>
            <input
              id="guestName"
              {...register("guestName")}
              className="input-field"
              placeholder="Enter your full name"
            />
            {errors.guestName && (
              <p className="text-red-500 text-xs mt-1 font-inter">
                {errors.guestName.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="guestEmail" className="eyebrow mb-2 block !text-charcoal/40">
                Email
              </label>
              <input
                id="guestEmail"
                type="email"
                {...register("guestEmail")}
                className="input-field"
                placeholder="your@email.com"
              />
              {errors.guestEmail && (
                <p className="text-red-500 text-xs mt-1 font-inter">
                  {errors.guestEmail.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="guestPhone" className="eyebrow mb-2 block !text-charcoal/40">
                Phone
              </label>
              <input
                id="guestPhone"
                type="tel"
                {...register("guestPhone")}
                className="input-field"
                placeholder="+94 26 222 4567"
              />
              {errors.guestPhone && (
                <p className="text-red-500 text-xs mt-1 font-inter">
                  {errors.guestPhone.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="guests" className="eyebrow mb-2 block !text-charcoal/40">
              Number of Guests
            </label>
            <Controller
              name="guests"
              control={control}
              render={({ field }) => (
                <select
                  id="guests"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  className="input-field"
                >
                  {Array.from(
                    { length: room.capacity },
                    (_, i) => i + 1
                  ).map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>

          <div>
            <label htmlFor="specialRequests" className="eyebrow mb-2 block !text-charcoal/40">
              Special Requests
            </label>
            <textarea
              id="specialRequests"
              {...register("specialRequests")}
              className="input-field min-h-[120px] resize-none"
              placeholder="Any special requests or preferences..."
            />
          </div>
        </div>
      </div>

      {/* Price Calculator */}
      <PriceCalculator
        pricePerNight={room.pricePerNight}
        checkIn={checkIn}
        checkOut={checkOut}
      />

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 p-4">
          <p className="text-red-600 text-sm font-inter">{error}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-gold w-full justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Processing...
          </>
        ) : (
          "Confirm Reservation"
        )}
      </button>
    </form>
  );
}
