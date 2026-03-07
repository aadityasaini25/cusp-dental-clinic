const points = [
  {
    title: "Specialist Team",
    desc: "Your care is guided by a formidable team of specialist dentists hailing from prestigious institutes including AIIMS, PGI Chandigarh, Maulana Azad, and Army Dental College.",
  },
  {
    title: "Diamond Black Invisalign Provider",
    desc: "First in North India for the last 2 years to achieve this prestigious status. Experience unparalleled expertise in clear aligner therapy.",
  },
  {
    title: "Advanced Technology & Comfort",
    desc: "Equipped with state-of-the-art in-house digital scanners for precise diagnostics, and nitrous sedation machines to ensure a completely painless, anxiety-free experience.",
  },
  {
    title: "Fully Digital Workflow & Easy EMI",
    desc: "From Free Scan & Simulation (Invisalign & Digital Smile Design) to your final treatment, everything is digitally planned. We also offer No-Cost EMI options to make premium care accessible.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-gray-50/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <p className="text-[#485b51] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Why Cusp Dental</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Why Choose Cusp Dental Clinic
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
