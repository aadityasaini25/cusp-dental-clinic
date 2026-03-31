import Image from "next/image";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-[var(--premium-header-height)] pb-20 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-premium-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-premium-accent/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full flex flex-col items-center text-center mt-12 md:mt-20">


        {/* Main Heading */}
        <h1 className="text-5xl md:text-8xl font-black text-premium-text leading-[1.05] tracking-tight max-w-5xl animate-in fade-in slide-in-from-top-6 duration-1000 delay-100">
          Invisalign & <br />
          <span className="text-gradient-primary">Aligner Excellence</span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-8 text-lg md:text-xl text-premium-subtext max-w-2xl font-medium leading-relaxed animate-in fade-in slide-in-from-top-8 duration-1000 delay-200">
          Experience North India's premier 
          <span className="text-premium-text font-bold"> Diamond Black Invisalign</span> center. 
          Expert orthodontic care led by elite specialists from AIIMS & PGI.
        </p>

        {/* Central Graphic & Form Container */}
        <div className="relative mt-16 w-full max-w-6xl grid lg:grid-cols-12 gap-12 items-center animate-in fade-in zoom-in-95 duration-1000 delay-300">
          {/* Main Graphic */}
          <div className="lg:col-span-12 flex justify-center">
            <div className="relative group">
              {/* Decorative Rings */}
              <div className="absolute -inset-10 border border-premium-primary/10 rounded-full animate-[spin_20s_linear_infinite] hidden md:block"></div>
              <div className="absolute -inset-20 border border-premium-accent/5 rounded-full animate-[spin_30s_linear_infinite_reverse] hidden md:block"></div>
              
              <div className="relative z-10 w-full max-w-4xl aspect-video rounded-[32px] overflow-hidden shadow-2xl border-4 border-white transition-transform duration-700 group-hover:scale-[1.01]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/herovedio.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-5 items-center justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          <button
            onClick={onBookAppointment}
            className="px-10 py-5 bg-premium-gradient text-white rounded-full font-black text-lg shadow-xl shadow-premium-primary/20 hover:shadow-2xl hover:shadow-premium-primary/30 transition-all hover:-translate-y-1 active:scale-95 group"
          >
            Book My Invisalign Consult
            <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
          </button>
          
          <a
            href="tel:+919599508322"
            className="px-10 py-5 bg-white text-premium-text border-2 border-premium-border rounded-full font-black text-lg hover:border-premium-primary transition-all shadow-sm flex items-center gap-3"
          >
            <span className="text-premium-primary">📞</span> +91 95995 08322
          </a>
        </div>

        {/* Trust Stats */}
        <div className="mt-20 pt-10 border-t border-premium-border/50 w-full grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center animate-in fade-in duration-1000 delay-700">
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-black text-premium-text group-hover:text-premium-primary transition-colors duration-300">18+</div>
            <div className="text-[10px] font-bold text-premium-subtext uppercase tracking-widest mt-1">Years of Practice</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-black text-premium-text group-hover:text-premium-primary transition-colors duration-300">15k+</div>
            <div className="text-[10px] font-bold text-premium-subtext uppercase tracking-widest mt-1">Successful Cases</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-black text-premium-text group-hover:text-premium-primary transition-colors duration-300">5.0</div>
            <div className="text-[10px] font-bold text-premium-subtext uppercase tracking-widest mt-1 flex items-center justify-center gap-1">
              Google Rating <span className="text-yellow-400">★★★★★</span>
            </div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-black text-premium-text group-hover:text-premium-primary transition-colors duration-300">Elite</div>
            <div className="text-[10px] font-bold text-premium-subtext uppercase tracking-widest mt-1">Invisalign Tier</div>
          </div>
        </div>
      </div>
    </section>
  );
}