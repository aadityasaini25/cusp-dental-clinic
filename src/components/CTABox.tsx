interface CTABoxProps {
  onBookAppointment: () => void;
}

export default function CTABox({ onBookAppointment }: CTABoxProps) {
  return (
    <section className="bg-white py-24 md:py-32 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <p className="text-premium-primary font-bold text-sm uppercase tracking-[0.2em] mb-4">Limited Availability</p>
        <h2 className="text-4xl md:text-7xl font-black text-premium-text mb-8 tracking-tighter leading-[0.95]">
          Experience the <br className="hidden md:block" />
          <span className="text-premium-primary underline decoration-premium-primary/20 underline-offset-8">Cusp Difference</span>
        </h2>
        <p className="text-premium-subtext text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
          Join 5000+ happy patients who transformed their smiles with North India's premier Diamond Invisalign provider.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={onBookAppointment}
            className="w-full sm:w-auto px-12 py-5 bg-premium-text text-white rounded-full font-black text-xl shadow-2xl hover:bg-premium-primary transition-all hover:-translate-y-1 active:scale-95"
          >
            Book Invisalign Consult
          </button>
          <div className="flex items-center gap-4 text-left">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <div className="w-full h-full bg-premium-section" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-premium-text font-black text-sm leading-none">5000+</p>
              <p className="text-premium-subtext text-[10px] font-bold uppercase tracking-widest mt-1">Success Stories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-premium-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-premium-accent/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}