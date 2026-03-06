import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center md:text-left mb-12">
          <p className="text-[#485b51] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Our Specialists</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">Meet Your Doctors</h2>
          <div className="w-16 h-0.5 bg-[#d4af37] rounded-full mx-auto md:mx-0" />
          <p className="mt-4 text-gray-600 max-w-3xl text-sm md:text-base">
            Combining surgical precision with prosthetic expertise under one roof — led by{" "}
            <span className="font-semibold">Dr. Shubham Salunkhe (BDS, MDS – Oral &amp; Maxillofacial Surgery)</span>{" "}
            and <span className="font-semibold">Dr. Rasika Salunkhe (BDS, MDS – Prosthodontics)</span>, with over 6 years of
            focused clinical experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Dr. Shubham */}
          <div className="flex flex-col md:flex-col lg:flex-row gap-6">
            <div className="w-full md:w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-gray-100">
                <Image
                  src="/images/doctor/Dr. Shubham Sunil Salunkhe.png"
                  alt="Dr. Shubham Salunkhe"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-full lg:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                Dr. Shubham Salunkhe
              </h3>
              <p className="text-[#485b51] font-semibold text-sm md:text-base uppercase tracking-[0.2em] mb-4">
                BDS, MDS – Oral &amp; Maxillofacial Surgery
              </p>
              <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Specialist Oral and Maxillofacial Surgeon with over 6 years of clinical excellence. Brings extensive expertise in dental implantology, full-mouth rehabilitation, and complex surgical procedures.
                </p>
                <p>
                  Dedicated to delivering safe, predictable, and lasting results through rigorous surgical precision and modern digital workflows. Patient comfort, trust, and long-term functional stability remain the highest priorities in every treatment.
                </p>
              </div>
            </div>
          </div>

          {/* Dr. Rasika */}
          <div className="flex flex-col md:flex-col lg:flex-row gap-6">
            <div className="w-full md:w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-gray-100">
                <Image
                  src="/images/doctor/Dr. Rasika Salunkhe.png"
                  alt="Dr. Rasika Salunkhe"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-full lg:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                Dr. Rasika Salunkhe
              </h3>
              <p className="text-[#485b51] font-semibold text-sm md:text-base uppercase tracking-[0.2em] mb-4">
                BDS, MDS – Prosthodontics
              </p>
              <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Highly skilled Prosthodontist with over 6 years of experience in advanced restorative dentistry. Specializes in comprehensive smile rehabilitation, custom crowns, veneers, and implant-supported prostheses.
                </p>
                <p>
                  Focuses on meticulous, evidence-based planning to achieve perfect occlusal harmony and natural aesthetics. Committed to providing premium, patient-first care using state-of-the-art materials to ensure beautiful, durable smiles that inspire confidence.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={onBookAppointment}
            className="bg-[#485b51] text-white px-10 py-4 rounded-xl font-semibold text-base hover:bg-[#3a4a42] transition-colors shadow-lg hover:shadow-xl"
          >
            Schedule Implant Consultation
          </button>
        </div>
      </div>
    </section>
  );
}