import Image from "next/image";

export default function ServiceHighlights() {
  const serviceData = [
    {
      title: "Advanced Clear Aligners",
      image: "/images/implant/aligner_dark_bg.png",
      description:
        "Digitally planned clear aligner treatment at Cusp Dental Clinic for comfortable, precise, and nearly invisible teeth straightening.",
      benefits: [
        "Free 3D Scan & Simulation",
        "Diamond Black Invisalign Provider",
        "Digital smile analysis & planning",
        "Virtually invisible & comfortable",
        "Faster and predictable results",
      ],
    },
    {
      title: "Digital Smile Design",
      image: "/images/implant/smile_design.png",
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
      title: "Invisalign Teen & First",
      image: "/images/implant/teen_aligner_new.png",
      description:
        "Custom-made clear aligners designed specifically for growing smiles, combining advanced technology with teen-friendly features.",
      benefits: [
        "SmartTrack material for comfort",
        "Compliance indicators built-in",
        "No dietary restrictions",
        "Fewer emergency clinic visits",
        "Confidence to smile freely",
      ],
    },
    {
      title: "Elite Multi-Specialty Care",
      image: "/images/implant/elite_aligner_new.png",
      description:
        "Comprehensive dental needs addressed safely under one roof by a powerhouse team of elite specialists from AIIMS & PGI.",
      benefits: [
        "18+ Years of Clinical Excellence",
        "AIIMS/PGI specialist consultants",
        "No-Cost EMI Options Available",
        "Root canals & pediatric dentistry",
        "Periodontal (gum) therapy",
      ],
    },
  ];

  return (
    <section className="relative bg-brand-black text-white py-24 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/images/graphics/services_bg.png"
          alt="Services Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center md:text-left mb-16">
          <p className="text-brand-cyan font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">Our Expertise</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Next-Gen <br className="hidden md:block" />
            <span className="text-gradient-cyan-pink">Digital Dentistry</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl font-light leading-relaxed">
            Experience world-class precision with our advanced digital treatments and elite specialist care—all tailored to your comfort under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="group glass-dark border border-white/5 p-6 rounded-[32px] flex flex-col hover:-translate-y-2 hover:border-brand-cyan/30 hover:shadow-[0_20px_40px_rgba(0,215,215,0.1)] transition-all duration-500"
            >
              <div className="relative rounded-2xl mb-6 h-44 overflow-hidden bg-brand-black/40 border border-white/5 p-4 group-hover:border-brand-cyan/20 transition-all duration-500">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                />
              </div>
              
              <h3 className="font-bold mb-3 text-xl text-white tracking-tight group-hover:text-brand-cyan transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-[14px] text-gray-400 leading-relaxed mb-6 font-light">
                {service.description}
              </p>

              <div className="pt-6 border-t border-white/5 mt-auto">
                <ul className="space-y-3 text-[13px] text-gray-300 font-light">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-brand-pink mt-1 shrink-0">✦</span>
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