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
    <section className="relative bg-premium-section py-24 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-5">
        <Image
          src="/images/graphics/services_bg.png"
          alt="Services Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-premium-section/95 to-premium-section"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center md:text-left mb-16">
          <p className="text-premium-primary font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">Our Expertise</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-premium-text mb-6 leading-tight">
            Next-Gen <br className="hidden md:block" />
            <span className="text-premium-primary">Digital Dentistry</span>
          </h2>
          <p className="text-premium-subtext text-lg md:text-xl max-w-3xl font-medium leading-relaxed">
            Experience world-class precision with our advanced digital treatments and elite specialist care—all tailored to your comfort under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="group premium-card p-8 flex flex-col hover:shadow-premium-lg transition-all duration-500"
            >
              <div className="relative rounded-2xl mb-8 h-48 overflow-hidden bg-premium-bg border border-premium-border/50 p-4 transition-all duration-500 group-hover:bg-white">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain filter group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              
              <h3 className="font-bold mb-4 text-2xl text-premium-text tracking-tight group-hover:text-premium-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-[15px] text-premium-subtext leading-relaxed mb-8 font-medium italic">
                {service.description}
              </p>

              <div className="pt-8 border-t border-premium-border mt-auto">
                <ul className="space-y-4 text-[14px] text-premium-text font-medium">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-premium-accent mt-1 shrink-0">✦</span>
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