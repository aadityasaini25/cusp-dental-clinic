"use client";

import { useState } from "react";

interface StickyCtaProps {
  isVisible: boolean;
  onBookAppointment: () => void;
}

export default function StickyCTA({ isVisible, onBookAppointment }: StickyCtaProps) {
  const [isMinimized, setIsMinimized] = useState(false);

  if (!isVisible) return null;

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-6 left-6 z-50 bg-premium-gradient text-white p-4 rounded-full shadow-premium hover:scale-110 transition-all flex items-center gap-2 animate-in fade-in slide-in-from-bottom-5 border border-white/20"
        aria-label="Expand Book Appointment"
      >
        <span className="text-xl">📅</span>
        <span className="hidden sm:inline font-bold text-xs tracking-widest uppercase pl-1">Invisalign Scan</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl bg-white/90 backdrop-blur-xl shadow-premium-lg rounded-[20px] p-5 md:p-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-700 border border-premium-border">
      <button
        onClick={() => setIsMinimized(true)}
        className="absolute -top-3 -right-3 bg-white text-premium-subtext hover:text-premium-primary rounded-full w-8 h-8 shadow-premium flex items-center justify-center border border-premium-border transition-colors z-10"
        aria-label="Minimize"
      >
        ✕
      </button>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-black text-xl md:text-2xl text-premium-text mb-1 tracking-tight">Transform Your <span className="text-premium-primary">Smile Today</span></h3>
          <p className="text-premium-subtext font-bold text-xs uppercase tracking-widest">Specialist Consultation & Digital Scan Included</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button
            onClick={onBookAppointment}
            className="flex-1 md:flex-none bg-premium-gradient text-white px-10 py-4 rounded-[12px] font-bold text-sm tracking-wide shadow-premium hover:shadow-xl hover:opacity-90 transition-all hover:scale-[1.02]"
          >
            Book Invisalign Scan
          </button>
          <a
            href="tel:+919599508322"
            className="hidden sm:flex items-center justify-center bg-premium-section text-premium-primary border border-premium-border px-5 rounded-[12px] font-bold text-lg hover:opacity-80 transition-all shadow-sm"
          >
            📞
          </a>
        </div>
      </div>
    </div>
  );
}
 