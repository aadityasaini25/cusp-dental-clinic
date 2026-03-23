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
    <section className="py-24 md:py-32 px-4 md:px-8 bg-brand-black relative overflow-hidden">
      {/* Background Graphic Accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center md:text-left mb-16">
          <p className="text-brand-cyan font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">The Cusp Advantage</p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Why Choose <span className="text-gradient-cyan-pink">Cusp Dental?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((item, i) => (
            <div
              key={i}
              className={`glass-dark p-8 md:p-10 rounded-[32px] border border-white/5 hover:border-brand-cyan/20 transition-all duration-300 group ${
                item.title.includes("Invisalign") ? "border-brand-pink/20" : ""
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-white/5 border border-white/10 ${
                  item.title.includes("Invisalign") ? "text-brand-pink" : "text-brand-cyan"
                }`}>
                  {i === 0 ? "🏆" : i === 1 ? "💎" : i === 2 ? "⚡" : "🏦"}
                </div>
                <h3 className={`font-extrabold text-xl md:text-2xl leading-[1.1] ${
                  item.title.includes("Invisalign") ? "text-brand-pink" : "text-white"
                }`}>
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-400 text-lg font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
