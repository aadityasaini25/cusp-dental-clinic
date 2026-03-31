interface CTABoxProps {
  onBookAppointment: () => void;
}

export default function CTABox({ onBookAppointment }: CTABoxProps) {
  return (
    <section className="bg-premium-section py-24 md:py-32 px-4 md:px-8 border-t border-premium-border/50 relative overflow-hidden">
      {/* Background Graphic Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-premium-primary/5 blur-[120px] rounded-full"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-premium-text mb-8 tracking-tight leading-tight">
          Ready to <br />
          <span className="text-premium-primary text-3xl md:text-5xl">Start Your Invisalign Journey?</span>
        </h2>
        <p className="text-premium-subtext text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
          Complete Invisalign evaluation and 3D digital scan included. We’re here to answer your questions and find a time that works for you.
        </p>
        <button
          onClick={onBookAppointment}
          className="px-12 py-5 bg-premium-gradient text-white rounded-[12px] font-bold text-xl shadow-premium hover:shadow-premium-lg hover:opacity-90 transition-all hover:scale-[1.03] tracking-wide"
        >
          Book Your Invisalign Scan
        </button>
      </div>
    </section>
  );
}