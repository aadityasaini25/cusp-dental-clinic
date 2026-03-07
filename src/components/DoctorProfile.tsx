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
            Combining digital workflows with unparalleled expertise — led by{" "}
            <span className="font-semibold">Dr. Mohit Dhiman</span>, working alongside a
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
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                Dr. Mohit Dhiman
              </h3>
              <p className="text-[#485b51] font-semibold text-sm md:text-base uppercase tracking-[0.2em] mb-4">
                Diamond Black Invisalign Provider
              </p>
              <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  With over 18 years of clinical excellence, Dr. Mohit Dhiman is a recognized leader in Advanced Digital Dentistry and Digital Smile Design. He holds the prestigious Diamond Black Invisalign Provider status, being the first in North India to achieve this for the last 2 years.
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
            className="bg-[#485b51] text-white px-10 py-4 rounded-xl font-semibold text-base hover:bg-[#3a4a42] transition-colors shadow-lg hover:shadow-xl"
          >
            Schedule Implant Consultation
          </button>
        </div>
      </div>
    </section>
  );
}