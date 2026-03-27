import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="relative bg-premium-bg py-24 md:py-32 overflow-hidden" id="doctors">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-50/50 blur-[120px] rounded-full -ml-20"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-premium-section/50 blur-[120px] rounded-full -mr-20"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center md:text-left mb-20 relative z-10">
          <p className="text-premium-primary font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Specialists</p>
          <h2 className="text-4xl md:text-6xl font-black text-premium-text tracking-tight mb-8">
            Meet Your <span className="text-premium-primary">Doctors</span>
          </h2>
          <p className="mt-4 text-premium-subtext max-w-3xl text-lg md:text-xl font-medium leading-relaxed">
            Combining digital workflows with unparalleled expertise — led by{" "}
            <span className="font-bold text-premium-text underline decoration-premium-accent/30 underline-offset-4">Dr. Mohit Dhiman</span>, working alongside a
            powerhouse team of specialists from PGI Chandigarh, AIIMS, and Army Dental College.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-stretch gap-10 lg:gap-16">
          {/* Dr. Mohit Dhiman */}
          <div className="flex flex-col md:flex-row gap-8 premium-card p-10 md:p-12 hover:shadow-premium-lg border-opacity-30">
            <div className="w-full md:w-2/5 flex justify-center items-center">
              <div className="relative w-full aspect-[4/5] rounded-[18px] overflow-hidden shadow-premium border border-premium-border/50">
                <Image
                  src="/images/doctor/dr mohit.png"
                  alt="Dr. Mohit Dhiman"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 text-center md:text-left flex flex-col justify-center">
              <h3 className="text-2xl md:text-4xl font-black text-premium-text mb-3 tracking-tight">
                Dr. Mohit Dhiman
              </h3>
              <p className="text-premium-accent font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-6">
                Digital Smile Design Expert & Implant Specialist
              </p>
              <div className="text-premium-subtext text-sm md:text-base leading-relaxed space-y-4 font-medium italic">
                <p>
                  With over 15 years of clinical excellence, Dr. Mohit Dhiman (B.D.S., M.D.S.) is a lead specialist in <span className="text-premium-text font-bold">Prosthodontics & Implantology</span>.
                </p>
                <p>
                  He has served at premier institutes like PGIMER Chandigarh, Maulana Azad, and RML Hospital. Certified Nobel Biocare specialist.
                </p>
              </div>
            </div>
          </div>

          {/* Dr. Sombir Singh */}
          <div className="flex flex-col md:flex-row gap-8 premium-card p-10 md:p-12 hover:shadow-premium-lg border-opacity-30">
            <div className="w-full md:w-2/5 flex justify-center items-center">
              <div className="relative w-full aspect-[4/5] rounded-[18px] overflow-hidden shadow-premium border border-premium-border/50">
                <Image
                  src="/images/doctor/dr sombir singh.jpg"
                  alt="Dr. Sombir Singh"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 text-center md:text-left flex flex-col justify-center">
              <h3 className="text-2xl md:text-4xl font-black text-premium-text mb-3 tracking-tight">
                Dr. Sombir Singh
              </h3>
              <p className="text-premium-accent font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-6">
                Orthodontist & Diamond Black Invisalign Provider
              </p>
              <div className="text-premium-subtext text-sm md:text-base leading-relaxed space-y-4 font-medium italic">
                <p>
                  Dr. Sombir Singh is a <span className="text-premium-text font-bold">Diamond Black Invisalign Provider</span> and an MDS from PGIMER Chandigarh.
                </p>
                <p>
                  With 15+ years of clinical experience, he specialize in advanced orthodontics and dentofacial orthopedics.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={onBookAppointment}
            className="px-10 py-5 bg-premium-primary text-white rounded-[12px] font-bold text-xl shadow-premium hover:shadow-premium-lg hover:bg-blue-700 transition-all hover:scale-[1.03] tracking-wide"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}