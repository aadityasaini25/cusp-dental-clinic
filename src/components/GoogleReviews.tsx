import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "gaurav wahi",
      initials: "GW",
      date: "2 months ago",
      review: "I recently visited the clinic for dental treatment, and I couldn't be more pleased with the experience. From the moment I walked into the clinic, the staff was warm, welcoming, and professional. The team is extremely knowledgeable and gentle, which immediately put me at ease."
    },
    {
      name: "Urvashi Sood",
      initials: "US",
      date: "4 months ago",
      review: "Highly recommend! I have LOTS of anxiety about going to the dentist. After this visit, I have become an advocate. Dr. Mohit was amazing. He made me feel comfortable and planned the treatment well. The end result came out really nice and exactly what was shown to me in the mock ups. The clinic maintains hygiene which was my main consideration while choosing a clinic and this clinic met my expectations well. Thanks Dr Mohit for treating me!"
    },
    {
      name: "Sharad Bhoyar",
      initials: "SB",
      date: "6 months ago",
      review: "Friendly doctor.Almost painless Value for money,  one doesn't feel that we are being fleeced.Good ambience."
    },
    {
      name: "Nisha Gandotra",
      initials: "NG",
      date: "8 months ago",
      review: "Had an outstanding experience at Cusp with Dr. Mohit for my tooth implant. The clinic is spotless, well-organized, and runs perfectly on time. Dr. Mohit’s expertise and attention to comfort made the entire process seamless. Exceptional professionalism and care—highly recommend!"
    }
  ];

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 lg:px-12 bg-premium-bg border-t border-premium-border/50 relative overflow-hidden">
      {/* Background Graphic Accent */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-premium-primary/5 blur-[120px] rounded-full -mr-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="text-center md:text-left">
            <p className="text-premium-primary font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-premium-text">
              Patient <br className="hidden md:block" />
              <span className="text-premium-primary">Experiences</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-full shadow-premium border border-premium-border/50 self-center md:self-end">
            <Image
              src="/images/google.png"
              alt="Google"
              width={100}
              height={32}
              className="object-contain"
            />
            <div className="w-px h-6 bg-premium-border"></div>
            <div className="flex text-yellow-400 text-lg">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="premium-card p-10 flex flex-col h-full hover:shadow-premium-lg transition-all duration-500 group border-opacity-40">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 text-white rounded-full flex items-center justify-center font-bold text-xl bg-premium-primary shadow-premium group-hover:scale-110 transition-transform duration-300">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-premium-text leading-tight">{review.name}</h3>
                  <p className="text-[10px] text-premium-subtext mt-1.5 uppercase font-bold tracking-widest">{review.date}</p>
                </div>
              </div>
              <div className="flex text-premium-accent mb-6 text-sm">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-premium-subtext leading-relaxed font-medium flex-grow italic text-[15px]">
                "{review.review}"
              </p>
              <div className="mt-8 pt-6 border-t border-premium-border/50">
                <span className="text-[10px] font-bold text-premium-primary uppercase tracking-widest">Verified Review</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}