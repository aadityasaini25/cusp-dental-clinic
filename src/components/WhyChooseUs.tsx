const points = [
  {
    title: "Specialist Expertise",
    desc: "Your care is led by a specialist team: Dr. Shubham Sunil Salunkhe (BDS, MDS – Oral & Maxillofacial Surgery) and Dr. Rasika Salunkhe (BDS, MDS – Prosthodontics). Surgical and prosthetic planning under one roof.",
  },
  {
    title: "100% Digital Workflow",
    desc: "From scan to prosthesis, every step is digitally planned. Prosthetic-driven implant placement for predictable, long-term aesthetic and functional outcomes.",
  },
  {
    title: "Infection Control & Hygiene",
    desc: "Sterilization and disinfection protocols that meet international standards. Your safety and surgical environment are treated as non-negotiable.",
  },
  {
    title: "Personalized Patient Care",
    desc: "Evidence-based, ethical treatment planning with clear explanations, realistic expectations and long-term follow-up care — especially for full mouth and advanced implant cases.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-gray-50/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <p className="text-[#485b51] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Why Face Max</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Why Choose Face Max Clinic
          </h2>
          <div className="w-16 h-0.5 bg-[#d4af37] rounded-full mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {points.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200/80 transition-all duration-300"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
