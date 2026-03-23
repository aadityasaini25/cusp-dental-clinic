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
    <section className="py-24 md:py-32 px-4 md:px-8 lg:px-12 bg-brand-black border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-brand-cyan/5 blur-[120px] rounded-full -mr-20"></div>

      <div className="max-w-7xl mx-auto">
        <p className="text-brand-cyan font-bold text-sm uppercase tracking-[0.2em] mb-4">Testimonials</p>
        <div className="flex flex-wrap items-center gap-6 mb-12">
          <Image
            src="/images/google.png"
            alt="Google"
            width={120}
            height={40}
            className="object-contain brightness-0 invert opacity-90"
          />
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Patient <span className="text-gradient-cyan-pink">Experiences</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="glass-dark p-8 rounded-[32px] border border-white/10 hover:border-brand-cyan/30 transition-all duration-300 flex flex-col h-full hover:-translate-y-2 group shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 text-white rounded-full flex items-center justify-center font-black text-xl bg-gradient-to-br from-brand-cyan to-brand-pink shadow-lg">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white leading-tight">{review.name}</h3>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">{review.date}</p>
                </div>
              </div>
              <div className="flex text-brand-cyan mb-6 text-lg">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed font-light flex-grow italic text-lg">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}