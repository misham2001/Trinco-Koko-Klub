"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="btn-outline-gold text-xs py-3 px-6 flex items-center gap-2 hover:bg-gold hover:text-ocean-deep transition-all"
    >
      <Printer size={14} />
      <span>Print Reservation</span>
    </button>
  );
}
