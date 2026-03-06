export default function ServiceHighlights() {
  const serviceData = [
    {
      title: "Dental Implants",
      image: "/images/implant/single.png",
      description:
        "Single, multiple and full-arch implants planned digitally for precise placement and natural-looking results.",
      benefits: [
        "Single & multiple tooth implants",
        "All-on-4 / All-on-6 full-arch options",
        "Immediate implants (where indicated)",
        "Implant-supported crowns and bridges",
      ],
    },
    {
      title: "Full Mouth Rehabilitation",
      image: "/images/implant/Multiple.png",
      description:
        "Prosthetic-driven, occlusion-focused rehabilitation for worn, missing or failing teeth, often supported by implants.",
      benefits: [
        "Comprehensive occlusal analysis",
        "Smile correction & functional redesign",
        "Implant-supported full mouth reconstruction",
        "Digitally designed prosthetic outcomes",
      ],
    },
    {
      title: "Supporting Surgical Procedures",
      image: "/images/implant/supported.png",
      description:
        "Procedures that prepare and support implant and restorative care, delivered with a focus on comfort and safety.",
      benefits: [
        "Surgical extractions & minor oral surgery",
        "Bone grafting and site development",
        "Soft tissue management",
        "Careful post-operative follow-up",
      ],
    },
    {
      title: "Cosmetic & Restorative Dentistry",
      image: "/images/implant/all_in.png",
      description:
        "Restorative and aesthetic dentistry to complete your treatment plan and harmonise your smile with your new implants.",
      benefits: [
        "Ceramic crowns and bridges",
        "Smile enhancement and contouring",
        "Tooth-coloured restorations",
        "Long-term maintenance planning",
      ],
    },
  ];

  return (
    <section className="relative bg-[#0b1120] text-white py-20 md:py-28 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#d4af37] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          Surgical & Implant Care
        </h2>
        <div className="w-16 h-0.5 bg-[#485b51] rounded-full mb-4" />
        <p className="text-gray-400 max-w-2xl mb-14">
          From single implants to full mouth rehabilitation and corrective jaw surgery — all under one roof, with a fully digital workflow.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800/60 border border-slate-700/60 p-6 rounded-2xl flex flex-col hover:border-slate-600 hover:bg-slate-800/80 transition-all duration-300"
            >
              <div className="relative rounded-xl mb-6 aspect-[4/3] flex items-center justify-center overflow-hidden bg-white/5 border border-slate-600/50 p-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-bold mb-3 text-lg text-white">{service.title}</h3>
              <p className="text-[15px] text-gray-400 leading-relaxed mb-5 flex-grow">{service.description}</p>
              <ul className="space-y-2 text-[13px] text-gray-400">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#d4af37] mt-0.5">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}