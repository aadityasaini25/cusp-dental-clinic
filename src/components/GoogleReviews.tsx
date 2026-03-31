import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Gaurav Wahi",
      initials: "GW",
      date: "2 months ago",
      review: "I recently visited the clinic for dental treatment, and I couldn't be more pleased with the experience. From the moment I walked into the clinic, the staff was warm, welcoming, and professional. The team is extremely knowledgeable and gentle."
    },
    {
      name: "Urvashi Sood",
      initials: "US",
      date: "4 months ago",
      review: "Highly recommend! Dr. Mohit was amazing. He made me feel comfortable and planned the treatment well. The end result came out exactly what was shown in the mock ups. The clinic maintains hygiene which was my main consideration."
    },
    {
      name: "Sharad Bhoyar",
      initials: "SB",
      date: "6 months ago",
      review: "Friendly doctor. Almost painless value for money, one doesn't feel that we are being fleeced. Good ambience and very professional staff."
    },
    {
      name: "Nisha Gandotra",
      initials: "NG",
      date: "8 months ago",
      review: "Had an outstanding experience at Cusp for my tooth implant. The clinic is spotless and runs perfectly on time. Dr. Mohit’s expertise and attention to comfort made the entire process seamless."
    }
  ];

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 lg:px-12 bg-premium-section border-t border-premium-border relative overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="text-premium-primary font-bold text-sm uppercase tracking-[0.2em] mb-4">Patient Success</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-premium-text">
              Real Stories. <br className="hidden md:block" />
              <span className="text-premium-primary">Real Smiles.</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-center lg:items-end gap-4">
            <div className="flex items-center gap-4 bg-white px-8 py-5 rounded-3xl shadow-xl border border-premium-border">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-premium-text leading-none">4.9</span>
                <span className="text-[10px] font-bold text-premium-subtext uppercase tracking-wider mt-1">Google Rating</span>
              </div>
              <div className="w-px h-10 bg-premium-border mx-2"></div>
              <div className="flex flex-col gap-1">
                <div className="flex text-yellow-400 text-lg">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-[10px] font-bold text-premium-primary uppercase tracking-widest">350+ Reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="group bg-white p-10 rounded-[40px] border border-premium-border hover:border-premium-primary/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full shadow-sm hover:shadow-2xl"
            >
              <div className="flex text-yellow-400 mb-8 text-lg">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              
              <p className="text-premium-subtext leading-relaxed font-medium flex-grow italic text-lg mb-10">
                "{review.review}"
              </p>

              <div className="flex items-center gap-4 pt-8 border-t border-premium-border/50">
                <div className="w-12 h-12 rounded-full bg-premium-section border border-premium-border flex items-center justify-center font-black text-premium-primary text-sm shadow-inner group-hover:bg-premium-primary group-hover:text-white transition-colors duration-500">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-black text-premium-text text-sm tracking-tight">{review.name}</h3>
                  <p className="text-[10px] text-premium-primary uppercase font-black tracking-widest mt-0.5">Verified Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-premium-primary/10 to-transparent pointer-events-none"></div>
    </section>
  );
}