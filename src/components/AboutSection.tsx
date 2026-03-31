import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 lg:px-12 bg-premium-bg relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-premium-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-premium-section/50 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <p className="text-premium-primary font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">Our Legacy</p>
          <h2 className="text-4xl md:text-6xl font-black text-premium-text mb-8 tracking-tight leading-tight">
            Welcome to <br />
            <span className="text-premium-primary">Cusp Dental Clinic</span>
          </h2>
          <p className="text-xl md:text-2xl text-premium-subtext leading-relaxed max-w-4xl mx-auto font-medium italic">
            At <strong className="text-premium-text font-bold underline decoration-premium-accent/30 decoration-4 underline-offset-8">Cusp Dental Clinic</strong> in Gurugram, we provide advanced multi-specialty care. We believe a truly great smile is built on a foundation of expert precision, cutting-edge digital technology, and genuine patient comfort.
          </p>
        </div>

        <div className="premium-card p-12 md:p-20 border-opacity-30 mb-20 relative overflow-hidden group hover:shadow-premium-lg transition-all duration-700">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-premium-text mb-10 tracking-tight leading-tight">Advanced Digital Dentistry</h3>
            <div className="space-y-8">
              <p className="text-xl text-premium-subtext leading-relaxed font-medium">
                Our clinic is guided by <strong className="text-premium-text font-bold">Dr. Mohit Dhiman</strong>, a recognized leader in <strong className="text-premium-primary">Invisalign & Digital Orthodontics</strong>, alongside <strong className="text-premium-text font-bold">Dr. Sombir Singh</strong>, North India's premier <strong className="text-premium-accent font-bold">Diamond Black Invisalign Provider</strong>.
              </p>
              <p className="text-xl text-premium-subtext leading-relaxed font-medium">
                Supported by a team of specialists from India's most prestigious institutes (PGI Chandigarh, AIIMS, and Army Dental College), we bring a <span className="bg-premium-section px-3 py-1 rounded-lg text-premium-primary font-bold">100% digital workflow</span> ensuring precision and aesthetic excellence in every procedure.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="premium-card p-10 hover:shadow-premium-lg transition-all duration-500 border-opacity-30">
            <h3 className="text-2xl font-black text-premium-text mb-8 tracking-tight uppercase border-b border-premium-border pb-4">Key Specializations</h3>
            <ul className="space-y-6">
              {[
                "Invisalign (Diamond Black Provider)",
                "Full Mouth Calibration",
                "Advanced Clear Aligners",
                "Digital Bite Analysis",
                "Painless Sedation Dentistry",
                "Orthodontic Child Care"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-lg text-premium-subtext font-bold">
                  <span className="w-7 h-7 rounded-full bg-premium-section flex items-center justify-center text-premium-primary text-sm shadow-sm">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="premium-card p-10 hover:shadow-premium-lg transition-all duration-500 border-opacity-30">
            <h3 className="text-2xl font-black text-premium-text mb-8 tracking-tight uppercase border-b border-premium-border pb-4">Expert Leadership</h3>
            <div className="space-y-10">
              <p className="text-premium-accent font-black tracking-widest text-[11px] uppercase border-l-4 border-premium-accent pl-4">Institutional Pedigree</p>
              <ul className="space-y-6">
                {[
                  "Diamond Black Invisalign Expertise",
                  "15+ Years Clinical Excellence",
                  "Clear Aligner Specialist",
                  "PGI / AIIMS / Army Dental Specialists"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 text-lg text-premium-subtext font-bold">
                    <span className="text-premium-accent text-2xl">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

