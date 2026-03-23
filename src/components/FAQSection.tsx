'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who are the specialists at Cusp Dental Clinic?",
      answer:
        "Our team consists of elite specialists from India's most prestigious institutes, including AIIMS, PGI Chandigarh, Maulana Azad, and Army Dental College, ensuring you receive the highest standard of multi-specialty care.",
    },
    {
      question: "What makes Cusp Dental Clinic's Invisalign treatment unique?",
      answer:
        "Led by Dr. Mohit Dhiman (18+ yrs experience), we are the first Diamond Black Invisalign Provider in North India (last 2 years). We offer a 100% digital workflow, including free 3D scans and simulations.",
    },
    {
      question: "Are clear aligners painful to wear?",
      answer:
        "Unlike traditional braces, clear aligners are designed for comfort. You may feel a slight, temporary pressure for the first few days of a new set—which is completely normal and shows they are working—but they are generally much more comfortable and cause no irritation to your cheeks or gums.",
    },
    {
      question: "Do you offer flexible payment or EMI options?",
      answer:
        "Yes, we believe premium dental care should be accessible. We offer No-Cost EMI options and flexible payment plans to suit your budget.",
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-brand-black overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-pink/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-brand-pink font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">Patient Support</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-gradient-cyan-pink">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-dark rounded-3xl overflow-hidden border border-white/5 hover:border-brand-cyan/20 transition-all duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 md:p-8 text-left font-bold hover:bg-white/5 transition-colors flex justify-between items-start gap-4"
              >
                <span className="flex-grow pr-4 text-lg md:text-xl text-white group-hover:text-brand-cyan transition-colors">{faq.question}</span>
                <span className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-brand-cyan transform transition-all duration-300 shrink-0 ${openFAQ === index ? 'rotate-180 bg-brand-cyan text-brand-black' : ''}`}>
                  ▼
                </span>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-8 md:px-8 md:pb-10 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="w-full h-px bg-white/5 mb-8"></div>
                  <p className="text-gray-400 font-light text-lg md:text-xl leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}