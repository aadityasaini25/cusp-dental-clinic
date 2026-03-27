import Image from "next/image";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-premium-bg">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-premium-bg to-premium-bg"></div>
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[60%] bg-premium-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[50%] bg-premium-section/50 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-premium-border text-premium-primary text-sm font-semibold tracking-wide shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-premium-primary/50"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-premium-primary"></span>
              </span>
              Next-Gen Digital Dentistry
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-premium-text leading-[1.05] tracking-tight">
              Crafting Your <br />
              <span className="text-premium-primary">Perfect Smile</span> <br />
              with Precision.
            </h1>

            <p className="text-premium-subtext text-lg md:text-xl font-medium leading-relaxed max-w-xl italic">
              Experience the future of dentistry with{" "}
              <span className="text-premium-text font-bold underline decoration-premium-primary/30 underline-offset-8">Dr. Mohit Dhiman</span>, 
              expert in{" "}
              <span className="text-premium-primary font-black">Digital Smile Design & Implants</span>. 
              Led by elite multi-specialty expertise from AIIMS & PGI Chandigarh.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onBookAppointment}
                className="px-10 py-5 bg-premium-primary text-white rounded-[12px] font-bold text-lg shadow-premium hover:shadow-premium-lg hover:bg-blue-700 transition-all hover:scale-105"
              >
                Book Appointment
              </button>
              <a
                href="tel:+919599508322"
                className="px-8 py-4 bg-white text-premium-text border border-premium-border rounded-[12px] font-bold text-lg text-center hover:bg-gray-50 transition-all shadow-sm"
              >
                Call Specialist
              </a>
            </div>

            <div className="flex items-center justify-between sm:justify-start gap-6 sm:gap-10 pt-10 border-t border-premium-border max-w-xl">
              <div className="text-center sm:text-left shrink-0">
                <div className="text-2xl sm:text-3xl font-black text-premium-text">18+</div>
                <div className="text-premium-subtext text-xs sm:text-sm font-semibold uppercase tracking-wider">Years Exp.</div>
              </div>
              <div className="h-10 w-px bg-premium-border"></div>
              <div className="text-center sm:text-left shrink-0">
                <div className="text-2xl sm:text-3xl font-black text-premium-text">15k+</div>
                <div className="text-premium-subtext text-xs sm:text-sm font-semibold uppercase tracking-wider">Happy Smiles</div>
              </div>
              <div className="h-10 w-px bg-premium-border"></div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-black text-premium-text flex items-center justify-center sm:justify-start gap-1.5">
                  PGI | AIIMS
                </div>
                <div className="text-premium-subtext text-[10px] sm:text-[11px] font-bold leading-tight max-w-[140px] sm:max-w-[180px] uppercase tracking-wider">
                  Experts from PGI Chandigarh, AIIMS & Army Dental College
                </div>
              </div>
            </div>
          </div>

          <div className="block mt-12 lg:mt-0 relative w-full max-w-lg mx-auto lg:max-w-none">
            <div className="relative z-10 rounded-[20px] overflow-hidden shadow-premium-lg border border-premium-border bg-white p-2">
              <div className="rounded-[12px] overflow-hidden aspect-[4/5] md:aspect-auto md:h-[650px]">
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