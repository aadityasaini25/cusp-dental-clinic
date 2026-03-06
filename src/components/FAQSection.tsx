'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are dental implants painful?",
      answer:
        "Implant procedures are performed under local anaesthesia. Most patients report only mild discomfort afterwards, which is usually well controlled with routine medication.",
    },
    {
      question: "How long do dental implants last?",
      answer:
        "With proper oral hygiene, regular check-ups and professional maintenance, dental implants can last many years and often decades.",
    },
    {
      question: "Am I a candidate for full mouth implants?",
      answer:
        "Most patients with multiple missing or failing teeth are candidates. A detailed clinical and radiographic evaluation is required to confirm bone quality and plan the right approach.",
    },
    {
      question: "How long does full mouth implant treatment take?",
      answer:
        "Timelines vary based on bone condition and case complexity. In suitable cases, immediate protocols are possible; in others, a staged approach is safer and more predictable.",
    },
    {
      question: "Is the implant procedure safe?",
      answer:
        "When performed by trained specialists following proper protocols, dental implants are a highly predictable and safe treatment option.",
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-gray-900">
          Frequently Asked <span className="text-gradient-gold">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="card !p-0 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 md:p-8 text-left font-bold hover:bg-emerald-50 transition-colors flex justify-between items-center group"
              >
                <span className="flex-grow pr-4 text-lg md:text-xl text-gray-800 group-hover:text-[#485b51] transition-colors">{faq.question}</span>
                <span className={`w-8 h-8 rounded-full border border-emerald-100 flex items-center justify-center text-[#485b51] transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180 bg-[#485b51] text-white' : ''}`}>
                  ▼
                </span>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-8 md:px-8 md:pb-10 bg-white">
                  <div className="w-full h-px bg-emerald-50 mb-8"></div>
                  <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}