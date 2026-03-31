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
        className="fixed bottom-8 right-8 z-[60] bg-premium-text text-white w-16 h-16 rounded-full shadow-2xl hover:bg-premium-primary transition-all flex items-center justify-center animate-in fade-in zoom-in group"
        aria-label="Expand Book Appointment"
      >
        <span className="text-2xl group-hover:scale-110 transition-transform">📅</span>
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-premium-primary rounded-full animate-pulse border-2 border-white"></div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-2xl bg-white/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[32px] p-4 md:p-6 z-[60] animate-in fade-in slide-in-from-bottom-8 duration-700 border border-white/20">
      <button
        onClick={() => setIsMinimized(true)}
        className="absolute -top-3 -right-3 bg-white text-premium-subtext hover:text-premium-primary rounded-full w-8 h-8 shadow-lg flex items-center justify-center border border-premium-border transition-colors z-10"
        aria-label="Minimize"
      >
        ✕
      </button>
      
      <div className="flex items-center justify-between gap-6">
        <div className="hidden md:flex flex-col">
          <p className="text-premium-primary font-black text-[10px] uppercase tracking-widest mb-1">Limited Offer</p>
          <h3 className="font-black text-xl text-premium-text tracking-tight">Expert Consultation</h3>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button
            onClick={onBookAppointment}
            className="flex-1 md:flex-none bg-premium-text text-white px-8 py-4 rounded-2xl font-black text-sm tracking-tight hover:bg-premium-primary transition-all active:scale-95 shadow-lg"
          >
            Book Consult Now
          </button>
          
          <a
            href="tel:+919599508322"
            className="flex items-center justify-center w-12 h-12 bg-premium-section text-premium-text rounded-2xl border border-premium-border hover:bg-white transition-all shadow-sm group"
          >
            <span className="text-xl group-hover:scale-110 transition-all">📞</span>
          </a>
        </div>
      </div>
    </div>
  );
}
 