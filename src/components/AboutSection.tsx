import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 lg:px-12 bg-brand-black relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-pink/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <p className="text-brand-cyan font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">Our Legacy</p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
            Welcome to <span className="text-gradient-cyan-pink">Cusp Dental Clinic</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto font-light">
            At <strong className="text-white">Cusp Dental Clinic</strong> in Gurugram, we provide advanced multi-specialty care. We believe a truly great smile is built on a foundation of expert precision, cutting-edge digital technology, and genuine patient comfort.
          </p>
        </div>

        <div className="glass-dark p-10 md:p-16 rounded-[48px] border border-white/5 mb-20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-brand-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">Advanced Digital Dentistry</h3>
            <p className="text-xl text-gray-400 leading-relaxed mb-8 font-light">
              Our clinic is guided by <strong className="text-white">Dr. Mohit Dhiman</strong>, a recognized leader in <strong className="text-white">Digital Smile Design</strong> and a <strong className="text-brand-pink">Diamond Black Invisalign Provider</strong>.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              Supported by a team of specialists from India's most prestigious institutes (AIIMS, PGI Chandigarh), Dr. Dhiman brings a 100% digital workflow ensuring precision and aesthetic excellence in every procedure.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-dark p-8 rounded-3xl border border-white/5 hover:border-brand-cyan/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Key Specializations</h3>
            <ul className="space-y-4">
              {[
                "Invisalign (Diamond Black Provider)",
                "Digital Smile Design",
                "Advanced Digital Implants",
                "Full Mouth Rehabilitation",
                "Painless Sedation Dentistry",
                "Multi-Specialty Child Care"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-lg text-gray-400">
                  <span className="w-6 h-6 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan text-sm">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-dark p-8 rounded-3xl border border-white/5 hover:border-brand-pink/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Lead Specialist</h3>
            <div className="space-y-6">
              <p className="font-bold text-3xl text-gradient-cyan-pink">Dr. Mohit Dhiman</p>
              <ul className="space-y-4">
                {[
                  "Diamond Black Invisalign Provider",
                  "18+ Years Clinical Excellence",
                  "Digital Smile Design Authority",
                  "AIIMS / PGI Specialist Network"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 text-lg text-gray-400">
                    <span className="text-brand-pink">✦</span>
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

