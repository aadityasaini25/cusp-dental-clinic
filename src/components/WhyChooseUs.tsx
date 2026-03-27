const points = [
  {
    title: "Specialist Team",
    desc: "Your care is guided by a formidable team of specialist dentists hailing from prestigious institutes including AIIMS, PGI Chandigarh, Maulana Azad, and Army Dental College.",
  },
  {
    title: "Diamond Black Invisalign Provider",
    desc: "Recognized as a leading Diamond Black Invisalign provider for over 4 years straight. Experience unmatched expertise in clear aligner therapy at Cusp Dental.",
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
    <section className="py-24 md:py-32 px-4 md:px-8 bg-premium-section relative overflow-hidden">
      {/* Background Graphic Accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-premium-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center md:text-left mb-16">
          <p className="text-premium-primary font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">The Cusp Advantage</p>
          <h2 className="text-4xl md:text-6xl font-black text-premium-text tracking-tight mb-6 leading-tight">
            Why Choose <br />
            <span className="text-premium-primary">Cusp Dental?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((item, i) => (
            <div
              key={i}
              className="premium-card p-10 md:p-12 hover:shadow-premium-lg flex flex-col items-start gap-6 group"
            >
              <div className="w-14 h-14 rounded-[16px] bg-premium-bg border border-premium-border flex items-center justify-center text-3xl shadow-sm transition-transform group-hover:scale-110 duration-300">
                {i === 0 ? "🏆" : i === 1 ? "💎" : i === 2 ? "⚡" : "🏦"}
              </div>
              <div>
                <h3 className="font-bold text-2xl md:text-3xl text-premium-text mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-premium-subtext text-lg font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="h-1 w-12 bg-premium-accent/30 rounded-full group-hover:w-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
