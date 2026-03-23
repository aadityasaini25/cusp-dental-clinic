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
      alert('Something went wrong. Please call us at +91 99997 51071 to book.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-brand-black/90 backdrop-blur-md flex items-center justify-center z-[999] p-4">
      <div className="bg-brand-black border border-white/10 rounded-[40px] p-8 w-full max-w-xl max-h-[90vh] overflow-y-auto relative shadow-[0_0_60px_rgba(0,0,0,0.6)]">
        {/* Decorative Blur - Added pointer-events-none to fix click interference */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-cyan/20 blur-[90px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-brand-pink/10 blur-[90px] rounded-full pointer-events-none z-0"></div>

        {/* Header */}
        <div className="flex justify-between items-start mb-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            Book Your <br />
            <span className="text-gradient-cyan-pink text-3xl md:text-4xl">Consultation</span>
          </h2>
          <button 
            onClick={(e) => { 
              e.preventDefault();
              e.stopPropagation();
              onClose(); 
            }} 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/10 shadow-lg active:scale-95 z-50 cursor-pointer"
            aria-label="Close"
          >
            <span className="text-2xl pointer-events-none">✕</span>
          </button>
        </div>

        {/* Offer info */}
        <div className="glass-dark p-4 md:p-6 rounded-[24px] mb-6 border border-brand-cyan/20">
          <p className="text-sm md:text-base text-gray-300 text-center">
            <strong className="text-white">Includes:</strong> Professional Consultation & <span className="text-brand-cyan">Free Digital Scan</span>
            <span className="text-white font-bold"> with Our Elite Specialists</span>
          </p>
        </div>

        {/* Countdown */}
        <div className="bg-gradient-to-r from-brand-cyan/10 to-brand-pink/10 border border-white/5 text-white p-6 rounded-[24px] mb-8 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">⏱️ Priority Slot expires in</p>
          <div className="text-3xl md:text-4xl font-black text-brand-cyan">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </div>
          <p className="text-xs text-brand-pink mt-2 font-medium">Limited specialized slots available today</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-2 ml-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan transition-all outline-none"
                placeholder="Dr. John Doe"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-2 ml-1">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan transition-all outline-none"
                placeholder="+91 00000 00000"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-2 ml-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan transition-all outline-none"
              placeholder="name@email.com"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-2 ml-1">Your Dental Concern</label>
            <textarea
              name="dentalConcern"
              required
              rows={2}
              placeholder="e.g. I'm interested in Invisalign invisalign aligners..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan transition-all outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-brand-cyan to-brand-pink text-white py-5 rounded-2xl font-black text-xl hover:shadow-[0_10px_40px_rgba(0,215,215,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest border border-white/10"
          >
            {isSubmitting ? 'Confirming...' : 'Book Appointment'}
          </button>
        </form>

      </div>
    </div>
  );
}