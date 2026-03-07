import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "gaurav wahi",
      initials: "GW",
      date: "2 months ago",
      review: "I recently visited Dr.Mohit  for dental treatment, and I couldn’t be more pleased with the experience. From the moment I walked into the clinic, the staff was warm, welcoming, and professional. Dr. Pritam herself is extremely knowledgeable and gentle, which immediately put me at ease."
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