import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Amol Kenche",
      initials: "AK",
      date: "2 months ago",
      review: "Dr. Shubham is an incredibly skilled surgeon. I was very nervous about getting dental implants, but he explained everything clearly and the procedure was completely painless. The clinic itself is spotless and highly advanced."
    },
    {
      name: "Shruti Jagtap",
      initials: "SJ",
      date: "4 months ago",
      review: "I had a complex wisdom tooth extraction done here. Dr. Salunkhe and his team made the process so smooth and comfortable. Recovery was much faster than I expected. Highly recommend Face Max for any surgical procedures."
    },
    {
      name: "Dr. Suyog Shendage",
      initials: "SS",
      date: "6 months ago",
      review: "I had a dental emergency and Dr. Shubham was a lifesaver. He was calm, professional, and very precise. The pain relief was immediate, and the follow-up care was excellent. Truly grateful to the whole team."
    },
    {
      name: "Amit E.",
      initials: "AE",
      date: "8 months ago",
      review: "Top-notch facility. The digital workflow they use for implants is fascinating, and the results are fantastic. Dr. Salunkhe is thorough, professional, and clearly a master at what he does."
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#485b51] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Testimonials</p>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Image
            src="/images/google.png"
            alt="Google"
            width={112}
            height={38}
            className="object-contain opacity-90"
          />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Patient Experiences</h2>
        </div>
        <div className="w-16 h-0.5 bg-[#d4af37] rounded-full mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-lg bg-[#485b51]">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 leading-tight">{review.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                </div>
              </div>
              <div className="flex text-[#d4af37] mb-4 text-sm">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed font-light flex-grow">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}