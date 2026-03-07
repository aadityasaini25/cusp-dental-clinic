export default function ServiceHighlights() {
  const serviceData = [
    {
      title: "Invisalign & Clear Aligners",
      image: "/images/implant/single.png",
      description:
        "Discreet, comfortable, and predictable tooth alignment from a Diamond Black Provider.",
      benefits: [
        "Free Scan & Digital Simulation",
        "Virtually invisible treatment",
        "Faster results with precise tracking",
        "Suitable for teens and adults",
      ],
    },
    {
      title: "Digital Smile Design",
      image: "/images/implant/Multiple.png",
      description:
        "Complete smile makeovers designed digitally before any treatment begins.",
      benefits: [
        "Preview your new smile",
        "Custom veneers and crowns",
        "Personalized to your facial features",
        "Predictable aesthetic outcomes",
      ],
    },
    {
      title: "Pain-Free Dental Implants",
      image: "/images/implant/supported.png",
      description:
        "Advanced surgical protocols supported by nitrous sedation for anxiety-free procedures.",
      benefits: [
        "Nitrous Oxide (Laughing Gas) sedation",
        "Single & multiple implants",
        "Full-mouth rehabilitation",
        "Precision guided surgery",
      ],
    },
    {
      title: "Multi-Specialty Dental Care",
      image: "/images/implant/all_in.png",
      description:
        "Comprehensive dental needs addressed safely under one roof by a team of elite specialists.",
      benefits: [
        "AIIMS/PGI specialist consultations",
        "Root canals & general dentistry",
        "Pediatric dentistry",
        "Periodontal (gum) therapy",
      ],
    },
  ];

  return (
    <section className="relative bg-[#0b1120] text-white py-16 md:py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Subtle background glow effect for premium feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-900/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center md:text-left mb-10 md:mb-12">
          <p className="text-[#d4af37] font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-2">Our Expertise</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Multi-Specialty Advanced<br className="hidden md:block" /> Digital Dentistry
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#d4af37] to-transparent rounded-full mb-4 mx-auto md:mx-0" />
          <p className="text-gray-400 text-base md:text-lg max-w-3xl font-light leading-relaxed">
            Experience world-class precision with our advanced digital treatments and elite specialist care—all tailored to your comfort under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-5 md:p-6 rounded-2xl flex flex-col hover:-translate-y-1.5 hover:border-emerald-500/30 hover:shadow-[0_8px_30px_rgb(16,185,129,0.12)] hover:bg-slate-800/80 transition-all duration-500 ease-out"
            >
              <div className="relative rounded-xl mb-5 h-36 md:h-40 flex items-center justify-center overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/5 p-4 group-hover:border-emerald-500/20 transition-colors duration-500">
                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="font-bold mb-3 text-lg text-white tracking-tight group-hover:text-emerald-400 transition-colors duration-300">{service.title}</h3>
              <p className="text-[14px] text-gray-400 leading-relaxed mb-6 font-light flex-grow">{service.description}</p>

              <div className="pt-4 border-t border-slate-700/50 mt-auto">
                <ul className="space-y-2 text-[13px] text-gray-300 font-light">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#d4af37] mt-0.5 shrink-0 text-[10px]">✦</span>
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}