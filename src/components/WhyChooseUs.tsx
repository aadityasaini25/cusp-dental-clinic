const points = [
  {
    title: "Elite Specialist Team",
    desc: "Expert care led by specialists from India's top institutes — AIIMS, PGI Chandigarh & Maulana Azad.",
    icon: "👨‍⚕️",
  },
  {
    title: "Diamond Invisalign",
    desc: "North India's premier Diamond Black Invisalign provider with 18+ years of clinical excellence.",
    icon: "💎",
  },
  {
    title: "100% Digital Scan",
    desc: "State-of-the-art iTero 5D scanners for instant 3D smile simulations and precise treatment planning.",
    icon: "🔬",
  },
  {
    title: "Interest-Free EMI",
    desc: "Premium smile transformations made accessible with 0% interest EMI and flexible payment plans.",
    icon: "💳",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-premium-section relative overflow-hidden" id="why-choose">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-premium-primary font-bold text-sm uppercase tracking-[0.2em] mb-4">Precision & Care</p>
          <h2 className="text-4xl md:text-6xl font-black text-premium-text tracking-tight mb-6">
            The <span className="text-premium-primary">Cusp</span> Standard
          </h2>
          <p className="text-premium-subtext text-lg font-medium max-w-2xl mx-auto">
            We combine elite orthodontic expertise with cutting-edge digital technology 
            to deliver results that last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((item, i) => (
            <div
              key={i}
              className="group premium-card p-10 hover:bg-white transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-premium-section border border-premium-border flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-premium-primary/5 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="font-black text-xl text-premium-text mb-4 leading-tight group-hover:text-premium-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-premium-subtext text-sm font-medium leading-relaxed">
                {item.desc}
              </p>
              
              <div className="mt-8 h-1 w-10 bg-premium-primary/20 rounded-full group-hover:w-20 group-hover:bg-premium-primary transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-premium-primary/5 to-transparent pointer-events-none"></div>
    </section>
  );
}
