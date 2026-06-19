"use client";

import { useMemo } from "react";

interface PriceCalculatorProps {
  pricePerNight: number;
  checkIn: Date | null;
  checkOut: Date | null;
}

export default function PriceCalculator({
  pricePerNight,
  checkIn,
  checkOut,
}: PriceCalculatorProps) {
  const calculation = useMemo(() => {
    if (!checkIn || !checkOut) return null;

    const diffTime = checkOut.getTime() - checkIn.getTime();
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (nights <= 0) return null;

    const subtotal = nights * pricePerNight;
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    return { nights, subtotal, tax, total };
  }, [pricePerNight, checkIn, checkOut]);

  if (!calculation) {
    return (
      <div className="bg-sand/50 border border-gold/10 p-6">
        <p className="text-charcoal/40 text-sm font-inter text-center">
          Select dates to see pricing
        </p>
      </div>
    );
  }

  return (
    <div className="bg-sand/50 border border-gold/10 p-6">
      <h4 className="eyebrow mb-4">Price Summary</h4>

      <div className="space-y-3">
        <div className="flex justify-between text-sm font-inter">
          <span className="text-charcoal/60">
            ${pricePerNight} × {calculation.nights}{" "}
            {calculation.nights === 1 ? "night" : "nights"}
          </span>
          <span className="text-charcoal">${calculation.subtotal}</span>
        </div>

        <div className="flex justify-between text-sm font-inter">
          <span className="text-charcoal/60">Taxes & fees (10%)</span>
          <span className="text-charcoal">${calculation.tax.toFixed(2)}</span>
        </div>

        <div className="h-px bg-gold/20 my-2" />

        <div className="flex justify-between items-baseline">
          <span className="font-inter text-sm font-semibold text-charcoal">
            Total
          </span>
          <span className="font-cormorant text-3xl text-ocean-deep font-semibold">
            ${calculation.total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
