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
    <section className="py-24 md:py-32 px-4 md:px-8 bg-premium-bg overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-premium-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-premium-primary font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">Patient Support</p>
          <h2 className="text-4xl md:text-6xl font-black text-premium-text tracking-tight mb-2">
            Frequently Asked <span className="text-premium-primary">Questions</span>
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="premium-card overflow-hidden border-opacity-50 hover:shadow-premium-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-8 md:p-10 text-left font-bold transition-all flex justify-between items-center gap-6 group"
              >
                <span className={`flex-grow pr-4 text-xl md:text-2xl tracking-tight transition-colors duration-300 ${openFAQ === index ? 'text-premium-primary' : 'text-premium-text'}`}>
                  {faq.question}
                </span>
                <span className={`w-10 h-10 rounded-full border border-premium-border flex items-center justify-center text-premium-primary transform transition-all duration-300 shrink-0 ${openFAQ === index ? 'rotate-180 bg-premium-primary text-white border-premium-primary shadow-md' : 'group-hover:border-premium-primary/50'}`}>
                  ▼
                </span>
              </button>
              {openFAQ === index && (
                <div className="px-8 pb-10 md:px-10 md:pb-12 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="w-full h-px bg-premium-border mb-10"></div>
                  <p className="text-premium-subtext font-medium text-lg md:text-xl leading-relaxed italic">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}