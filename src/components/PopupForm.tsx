'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  minutes: number;
  seconds: number;
}

// Set your Google Apps Script web app URL here to receive submissions (or use env NEXT_PUBLIC_BOOKING_SCRIPT_URL)
const BOOKING_SCRIPT_URL = process.env.NEXT_PUBLIC_BOOKING_SCRIPT_URL || '';

export default function PopupForm({ isOpen, onClose, minutes, seconds }: PopupFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('fullName') as string,
      phone: formData.get('phoneNumber') as string,
      email: formData.get('email') as string,
      concern: formData.get('dentalConcern') as string,
    };

    setIsSubmitting(true);
    try {
      if (BOOKING_SCRIPT_URL.trim()) {
        await fetch(BOOKING_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      }
      onClose();
      router.push('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please call us at +91 95995 08322 to book.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-premium-primary/10 backdrop-blur-md flex items-center justify-center z-[999] p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-[24px] p-8 md:p-12 w-full max-w-xl max-h-[90vh] overflow-y-auto overflow-x-hidden relative shadow-premium-lg border border-premium-border">
        {/* Decorative Graphic Accents */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-premium-primary/5 blur-[90px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-premium-section/50 blur-[90px] rounded-full pointer-events-none z-0"></div>

        {/* Header */}
        <div className="flex justify-between items-start mb-10 relative z-10">
          <div>
            <p className="text-premium-primary font-bold text-xs uppercase tracking-widest mb-3">Priority Booking</p>
            <h2 className="text-3xl md:text-4xl font-black text-premium-text leading-tight tracking-tight">
              Book Your <br />
              <span className="text-premium-primary">Consultation</span>
            </h2>
          </div>
          <button 
            onClick={(e) => { 
              e.preventDefault();
              e.stopPropagation();
              onClose(); 
            }} 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-premium-section text-premium-text hover:bg-premium-border transition-all border border-premium-border shadow-sm active:scale-95 z-50 cursor-pointer"
            aria-label="Close"
          >
            <span className="text-xl pointer-events-none">✕</span>
          </button>
        </div>        {/* Countdown */}
        <div className="bg-white border-2 border-premium-primary/10 text-premium-text p-6 rounded-[20px] mb-10 text-center shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-premium-primary"></div>
          <p className="text-[10px] uppercase tracking-widest text-premium-primary font-black mb-2">⏱️ Priority Slot Expires In</p>
          <div className="text-4xl md:text-5xl font-black text-premium-text tabular-nums tracking-tighter">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </div>
          <p className="text-[11px] text-premium-accent mt-3 font-bold uppercase tracking-tight">Limited clinical availability remains</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[11px] uppercase tracking-widest text-premium-text/60 font-black ml-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                className="w-full bg-gray-50/50 border border-premium-border rounded-[12px] p-4 text-premium-text font-bold placeholder:text-gray-300 focus:bg-white focus:border-premium-primary/50 focus:ring-4 focus:ring-premium-primary/5 transition-all outline-none"
                placeholder="e.g. Rahul Sharma"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[11px] uppercase tracking-widest text-premium-text/60 font-black ml-1">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                required
                className="w-full bg-gray-50/50 border border-premium-border rounded-[12px] p-4 text-premium-text font-bold placeholder:text-gray-300 focus:bg-white focus:border-premium-primary/50 focus:ring-4 focus:ring-premium-primary/5 transition-all outline-none"
                placeholder="+91 00000 00000"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] uppercase tracking-widest text-premium-text/60 font-black ml-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-gray-50/50 border border-premium-border rounded-[12px] p-4 text-premium-text font-bold placeholder:text-gray-300 focus:bg-white focus:border-premium-primary/50 focus:ring-4 focus:ring-premium-primary/5 transition-all outline-none"
              placeholder="rahul@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] uppercase tracking-widest text-premium-text/60 font-black ml-1">Dental Concern</label>
            <textarea
              name="dentalConcern"
              required
              rows={2}
              placeholder="Interested in Clear Aligners / Invisalign..."
              className="w-full bg-gray-50/50 border border-premium-border rounded-[12px] p-4 text-premium-text font-bold placeholder:text-gray-300 focus:bg-white focus:border-premium-primary/50 focus:ring-4 focus:ring-premium-primary/5 transition-all outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-premium-gradient text-white py-5 rounded-[12px] font-bold text-xl shadow-premium hover:shadow-premium-lg hover:opacity-90 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed tracking-wide"
          >
            {isSubmitting ? 'Confirming...' : 'Book Appointment'}
          </button>
        </form>

      </div>
    </div>
  );
}