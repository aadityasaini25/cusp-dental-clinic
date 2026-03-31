'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who are the specialists at Cusp Dental Clinic?",
      answer:
        "Our team consists of elite specialists from India's most prestigious institutes, including AIIMS, PGI Chandigarh, Maulana Azad, and Army Dental College, ensuring you receive the highest standard of specialized orthodontic care.",
    },
    {
      question: "What makes Cusp Dental Clinic's Invisalign treatment unique?",
      answer:
        "Led by Dr. Mohit Dhiman (18+ yrs experience), we are the premier Diamond Black Invisalign Provider in North India. We offer a 100% digital workflow, ensuring elite-level precision for every smile transformation.",
    },
    {
      question: "Are aligners as effective as traditional dental braces?",
      answer:
        "Absolutely. As Diamond Black Invisalign Providers (Top 1% Global), we specialize in complex case selection. Our digital strategic planning allows us to treat advanced cases with aligners that were previously only possible with metal braces.",
    },
    {
      question: "Are clear aligners painful to wear?",
      answer:
        "Unlike traditional braces, clear aligners are designed for comfort. You may feel a slight, temporary pressure for the first few days of a new set—which is completely normal and shows they are working—but they are generally much more comfortable than traditional wires.",
    },
    {
      question: "How many hours a day should I wear my aligners?",
      answer:
        "For the most effective and predictable results, you should wear your clear aligners for 20 to 22 hours a day, only removing them to eat, drink (anything other than water), brush, and floss.",
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-white overflow-hidden relative" id="faq">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-premium-primary font-bold text-sm uppercase tracking-[0.2em] mb-4">Patient Care</p>
          <h2 className="text-4xl md:text-6xl font-bold text-premium-text tracking-tighter mb-6">
            Common <span className="text-premium-primary">Questions</span>
          </h2>
          <p className="text-premium-subtext text-lg font-medium max-w-xl mx-auto">
            Everything you need to know about your journey to a perfect smile.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-premium-border rounded-3xl transition-all duration-300 ${openFAQ === index ? 'bg-premium-section border-premium-primary/30' : 'bg-white hover:border-premium-primary/30'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-8 md:p-10 text-left transition-all flex justify-between items-center gap-6 group"
              >
                <span className={`text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-300 ${openFAQ === index ? 'text-premium-primary' : 'text-premium-text'}`}>
                  {faq.question}
                </span>
                <span className={`w-12 h-12 rounded-full border flex items-center justify-center text-xl transform transition-all duration-500 shrink-0 ${openFAQ === index ? 'rotate-180 bg-premium-primary text-white border-premium-primary shadow-lg' : 'border-premium-border group-hover:border-premium-primary/50 text-premium-subtext'}`}>
                  {openFAQ === index ? '−' : '+'}
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-10 md:px-10 md:pb-12">
                  <div className="h-px bg-premium-border/50 mb-8 w-full"></div>
                  <p className="text-premium-subtext font-medium text-lg md:text-xl leading-relaxed italic">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-premium-primary/5 blur-[120px] rounded-full -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-premium-accent/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}