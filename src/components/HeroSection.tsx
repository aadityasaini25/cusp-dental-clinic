import Image from "next/image";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-black">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/graphics/hero_bg.png"
          alt="Premium Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/90 to-brand-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-brand-cyan/20 text-brand-cyan text-sm font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              Next-Gen Digital Dentistry
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight [text-shadow:_0_4px_20px_rgb(0_0_0_/_50%)]">
              Crafting Your <br />
              <span className="text-gradient-cyan-pink">Perfect Smile</span> <br />
              with Precision.
            </h1>

            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Experience the future of dentistry with{" "}
              <span className="text-white font-semibold">Dr. Mohit Dhiman</span>, 
              North India's first{" "}
              <span className="text-brand-pink font-bold">Diamond Black Invisalign Provider</span>. 
              Advanced technology meets elite multi-specialty expertise from AIIMS & PGI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onBookAppointment}
                className="px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-pink text-white rounded-full font-extrabold text-lg hover:shadow-[0_10px_30px_rgba(0,215,215,0.4)] transition-all hover:-translate-y-1 border border-white/10"
              >
                Book Appointment
              </button>
              <a
                href="tel:+919999751071"
                className="px-8 py-4 glass-dark text-white border border-white/10 rounded-full font-bold text-lg text-center hover:bg-white/5 transition-all"
              >
                Call Specialist
              </a>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-white/10 max-w-md">
              <div>
                <div className="text-2xl font-bold text-white">18+</div>
                <div className="text-gray-400 text-sm font-medium">Years Exp.</div>
              </div>
              <div className="h-10 w-px bg-white/10"></div>
              <div>
                <div className="text-2xl font-bold text-white">15k+</div>
                <div className="text-gray-400 text-sm font-medium">Happy Smiles</div>
              </div>
              <div className="h-10 w-px bg-white/10"></div>
              <div>
                <div className="text-2xl font-bold text-white">AIIMS</div>
                <div className="text-gray-400 text-sm font-medium">Specialists</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative z-10 rounded-[24px] overflow-hidden">
              <div className="bg-black aspect-[9/16] md:aspect-auto md:h-[600px] flex items-center justify-center">
                <video
                  src="/videos/herovedio.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}