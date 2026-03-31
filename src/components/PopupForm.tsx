'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  minutes: number;
  seconds: number;
}

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
    <div className="fixed inset-0 bg-[#0F172A]/80 backdrop-blur-xl flex items-center justify-center z-[999] p-4 animate-in fade-in duration-500">
      <div className="bg-white rounded-[40px] p-8 md:p-12 w-full max-w-xl max-h-[90vh] overflow-y-auto overflow-x-hidden relative shadow-2xl border border-white/20">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <p className="text-premium-primary font-black text-[10px] uppercase tracking-[0.2em] mb-3">Priority Access</p>
            <h2 className="text-3xl md:text-4xl font-black text-premium-text leading-[0.95] tracking-tight">
              Book Your <br />
              <span className="text-premium-primary">Invisalign Consultation</span>
            </h2>
          </div>
          <button 
            onClick={onClose} 
            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-premium-section text-premium-text hover:bg-premium-border transition-all active:scale-95"
          >
            <span className="text-xl">✕</span>
          </button>
        </div>

        {/* Countdown */}
        <div className="bg-premium-section rounded-[32px] p-8 mb-10 text-center border border-premium-border relative group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-premium-primary to-transparent"></div>
          <p className="text-[10px] uppercase tracking-widest text-premium-subtext font-black mb-3">⏱️ Priority Slot Expires In</p>
          <div className="text-5xl md:text-6xl font-black text-premium-text tabular-nums tracking-tighter">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </div>
          <p className="text-[10px] text-premium-primary mt-4 font-black uppercase tracking-widest animate-pulse">Limited availability remains</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-premium-primary uppercase tracking-widest ml-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full bg-premium-section border border-premium-border rounded-2xl p-5 text-premium-text font-bold placeholder:text-gray-400 focus:bg-white focus:border-premium-primary focus:ring-4 focus:ring-premium-primary/5 transition-all outline-none"
              placeholder="Full Name"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-premium-primary uppercase tracking-widest ml-1">Phone</label>
              <input
                type="tel"
                name="phoneNumber"
                required
                className="w-full bg-premium-section border border-premium-border rounded-2xl p-5 text-premium-text font-bold focus:bg-white focus:border-premium-primary focus:ring-4 focus:ring-premium-primary/5 transition-all outline-none"
                placeholder="+91 00000 00000"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-premium-primary uppercase tracking-widest ml-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-premium-section border border-premium-border rounded-2xl p-5 text-premium-text font-bold focus:bg-white focus:border-premium-primary focus:ring-4 focus:ring-premium-primary/5 transition-all outline-none"
                placeholder="Email Address"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-premium-primary uppercase tracking-widest ml-1">Your Concern</label>
            <textarea
              name="dentalConcern"
              required
              rows={2}
              className="w-full bg-premium-section border border-premium-border rounded-2xl p-5 text-premium-text font-bold focus:bg-white focus:border-premium-primary focus:ring-4 focus:ring-premium-primary/5 transition-all outline-none resize-none"
              placeholder="Any specific questions about Invisalign?"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-premium-text text-white py-6 rounded-2xl font-black text-xl shadow-xl hover:bg-premium-primary transition-all active:scale-[0.98] disabled:opacity-50 tracking-tight"
          >
            {isSubmitting ? 'Confirming...' : 'Confirm My Consultation'}
          </button>
        </form>
      </div>
    </div>
  );
}