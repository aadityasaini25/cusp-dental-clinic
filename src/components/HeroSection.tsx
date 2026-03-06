import Image from "next/image";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="relative pt-12 pb-20 md:pt-24 md:pb-28 px-4 md:px-12 lg:px-16 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-14 md:mb-16">
        <p className="text-[#485b51] font-semibold text-sm uppercase tracking-[0.2em] mb-4">Face Max Dental Clinic</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
          Expert Oral & Maxillofacial<br className="hidden md:block" />
          <span className="text-[#485b51]">Surgical Care</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
          Specialist-led implant and full mouth rehabilitation centre in Pune, led by{" "}
          <span className="font-semibold">Dr. Shubham Sunil Salunkhe (BDS, MDS – Oral &amp; Maxillofacial Surgery)</span>{" "}
          and <span className="font-semibold">Dr. Rasika Salunkhe (BDS, MDS – Prosthodontics)</span>.
        </p>
      </div>

      <div className="md:flex md:items-center md:justify-center md:gap-16 md:mb-16 max-w-5xl mx-auto">
        <div className="relative rounded-2xl aspect-[9/16] md:aspect-auto md:h-[450px] md:w-[260px] mx-auto md:mx-0 mb-8 md:mb-0 md:flex-initial overflow-hidden shadow-2xl ring-1 ring-black/5">
          <div className="bg-black w-full h-full flex items-center justify-center">
            <video
              className="w-full h-full object-contain"
              src="/videos/1st vedio.mp4"
              autoPlay
              muted
              loop
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="relative md:w-[400px]">
          <div className="bg-[#0b1120] text-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-800/50">
            <h2 className="text-lg font-semibold text-[#d4af37] uppercase tracking-widest mb-6">Our Specializations</h2>
            <ul className="space-y-5 mb-10 text-[15px] text-gray-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] mt-0.5">—</span>
                Oral & Maxillofacial Surgery
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] mt-0.5">—</span>
                Advanced Digital Implantology
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] mt-0.5">—</span>
                Pain-Managed Surgical Protocols
              </li>
            </ul>
            <button
              onClick={onBookAppointment}
              className="w-full bg-[#d4af37] text-gray-900 px-6 py-4 rounded-xl text-base font-semibold hover:bg-[#c9a227] transition-colors"
            >
              Book Your Consultation
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mt-12 md:mt-14">
        <button
          onClick={onBookAppointment}
          className="bg-[#485b51] text-white py-4 px-10 rounded-xl font-semibold text-base shadow-lg hover:bg-[#3a4a42] transition-colors md:min-w-[220px]"
        >
          Book Appointment
        </button>
        <a
          href="tel:+918080697453"
          className="bg-white text-[#485b51] border-2 border-[#485b51] py-4 px-10 rounded-xl font-semibold text-base text-center hover:bg-[#f8faf9] transition-colors md:min-w-[220px]"
        >
          Call +91 80806 97453
        </a>
      </div>
    </section>
  );
}