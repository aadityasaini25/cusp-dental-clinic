import Image from "next/image";

export default function ServiceHighlights() {
  const serviceData = [
    {
      title: "Advanced Clear Aligners",
      image: "/images/implant/aligner_dark_bg.png",
      description:
        "Digitally planned clear aligner treatment for comfortable, precise, and nearly invisible teeth straightening.",
      benefits: [
        "Free 3D Scan & Simulation",
        "Diamond Black Provider",
        "Clinical Aligner Strategy",
        "Custom Treatment Plan",
      ],
    },
    {
      title: "iTero 3D Digital Pro-Scan",
      image: "/images/implant/smile_design.png",
      description:
        "Experience our high-end 5D iTero digital technology. See your future smile in minutes with precise 3D simulations.",
      benefits: [
        "Instant 3D Preview",
        "Invisalign Tracking",
        "Predictable Results",
        "No Messy Impressions",
      ],
    },
    {
      title: "Invisalign First/Teen",
      image: "/images/implant/teen_aligner_new.png",
      description:
        "Custom-made aligners specifically for growing smiles, combining advanced technology with teen-friendly features.",
      benefits: [
        "Growing Smile Expert",
        "SmartTrack Comfort",
        "Compliance Indicators",
        "Teen Confidence Boost",
      ],
    },
    {
      title: "Elite Aligner Care",
      image: "/images/implant/elite_aligner_new.png",
      description:
        "Specialized orthodontic supervision for alignment cases, led by AIIMS and PGI specialists.",
      benefits: [
        "18+ Years Expertise",
        "PGI Specialist Lead",
        "Complex Case Mastery",
        "Post-Aligner Retention",
      ],
    },
  ];

  return (
    <section className="relative bg-[#0F172A] py-24 md:py-32 px-4 md:px-8 lg:px-12 overflow-hidden" id="services">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-premium-primary/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-premium-accent/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-premium-primary font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Expertise</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
            Advanced <span className="text-premium-primary">Digital Solutions</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            World-class precision meets elite specialist care, tailored specifically to your comfort and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-[32px] p-8 border border-slate-700/50 hover:border-premium-primary/50 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative rounded-2xl mb-8 h-48 overflow-hidden bg-slate-900/50 border border-slate-700/30 p-4 group-hover:bg-slate-900 transition-colors duration-500">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain filter brightness-110 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <h3 className="font-black mb-4 text-xl text-white tracking-tight group-hover:text-premium-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-slate-400 leading-relaxed mb-8 font-medium">
                {service.description}
              </p>

              <div className="pt-6 border-t border-slate-700/50 mt-auto">
                <ul className="space-y-3">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-[13px] text-slate-300 font-bold">
                      <span className="text-premium-primary text-xs">✦</span>
                      {b}
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