import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="relative bg-brand-black py-24 md:py-32 overflow-hidden" id="doctors">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-cyan/5 blur-[120px] rounded-full -ml-20"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-brand-pink/5 blur-[120px] rounded-full -mr-20"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center md:text-left mb-16 relative z-10">
          <p className="text-brand-cyan font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Specialists</p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
            Meet Your <span className="text-gradient-cyan-pink">Doctors</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl text-lg font-light leading-relaxed">
            Combining digital workflows with unparalleled expertise — led by{" "}
            <span className="font-semibold text-white">Dr. Mohit Dhiman</span>, working alongside a
            powerhouse team of specialists from AIIMS, PGI Chandigarh, and Maulana Azad.
          </p>
        </div>

        <div className="grid grid-cols-1 justify-center items-center gap-10 lg:gap-16">
          {/* Dr. Mohit Dhiman */}
          <div className="flex flex-col md:flex-col lg:flex-row gap-6 max-w-4xl mx-auto">
            <div className="w-full md:w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-gray-100">
                <Image
                  src="/images/doctor/dr mohit.png"
                  alt="Dr. Mohit Dhiman"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-full lg:w-1/2 text-center md:text-left flex flex-col justify-center">
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                Dr. Mohit Dhiman
              </h3>
              <p className="text-brand-cyan font-bold text-sm md:text-base uppercase tracking-[0.2em] mb-6">
                Diamond Black Invisalign Provider
              </p>
              <div className="text-gray-400 text-lg md:text-xl leading-relaxed space-y-6 font-light">
                <p>
                  With over 18 years of clinical excellence, Dr. Mohit Dhiman is a recognized leader in Advanced Digital Dentistry and Digital Smile Design. He holds the prestigious <span className="text-white font-bold">Diamond Black Invisalign Provider</span> status, being the first in North India to achieve this for the last 2 years.
                </p>
                <p>
                  Dr. Dhiman is backed by a formidable team of specialist dentists from India's most premier institutes including AIIMS, PGI Chandigarh, Maulana Azad, and Army Dental College. Together, they provide unparalleled, fully digital treatment workflows.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={onBookAppointment}
            className="bg-gradient-to-r from-brand-cyan to-brand-pink text-white px-12 py-5 rounded-full font-black text-lg hover:shadow-[0_10px_40px_rgba(0,215,215,0.4)] transition-all hover:-translate-y-1 uppercase tracking-widest border border-white/10"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}