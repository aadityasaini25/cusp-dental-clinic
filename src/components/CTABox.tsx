interface CTABoxProps {
  onBookAppointment: () => void;
}

export default function CTABox({ onBookAppointment }: CTABoxProps) {
  return (
    <section className="bg-brand-black py-24 md:py-32 px-4 md:px-8 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-brand-pink/5 blur-[120px] rounded-full"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Ready to <span className="text-gradient-cyan-pink text-3xl md:text-5xl">Transform Your Smile?</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Comprehensive evaluation and digital diagnostic scan included. We’re here to answer your questions and find a time that works for you.
        </p>
        <button
          onClick={onBookAppointment}
          className="bg-gradient-to-r from-brand-cyan to-brand-pink text-white px-8 py-4 md:px-12 md:py-5 rounded-full font-black text-base md:text-lg hover:shadow-[0_10px_40px_rgba(56,189,248,0.4)] transition-all hover:-translate-y-1 uppercase tracking-widest border border-white/10"
        >
          Book Your Consultation
        </button>
      </div>
    </section>
  );
}