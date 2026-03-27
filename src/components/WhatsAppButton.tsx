'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "+919599508322";
  const message = "Hello! I would like to book an appointment at Cusp Dental Clinic.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-premium transition-all duration-300 hover:scale-110 z-50 hover:shadow-xl border border-white/20 active:scale-95"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-7 w-7 fill-white/10" />
    </button>
  );
} 