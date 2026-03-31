import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  const doctors = [
    {
      name: "Dr. Mohit Dhiman",
      title: "Clinical Director & Digital Strategist",
      credentials: "BDS, MDS (Specialist) - AIIMS Alumnus",
      bio: "An esteemed AIIMS alumnus with over 18 years of clinical leadership, Dr. Mohit Dhiman is a pioneer in High-Precision Digital Aligner Strategy. He specializes in selecting and planning complex cases that others might find challenging, ensuring every smile transformation is backed by elite-level clinical expertise.",
      expertise: ["Digital Aligner Case Selection", "Complex Case Planning", "Orthodontic Strategy"],
      image: "/images/doctor/dr mohit.png",
    },
    {
      name: "Dr. Sombir Singh",
      title: "Diamond Black Invisalign Provider",
      credentials: "MDS (Orthodontics) - PGIMER Chandigarh",
      bio: "Recognized in the Top 1% Global Tier of Invisalign providers, Dr. Sombir Singh is North India's premier orthodontist. With an MDS from the prestigious PGI Chandigarh and 15+ years of specialized excellence, he has successfully transformed over 5000+ smiles, bringing unparalleled skill to every Invisalign journey.",
      expertise: ["Invisalign Diamond Expert", "Clear Aligner Therapy", "Growth Modulation"],
      image: "/images/doctor/dr sombir singh.jpg",
    },
  ];

  return (
    <section className="relative bg-premium-section py-20 overflow-hidden" id="doctors">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 text-center md:text-left">
          <div>
            <p className="text-premium-primary font-bold text-xs uppercase tracking-[0.2em] mb-3">Elite Leadership</p>
            <h2 className="text-4xl md:text-5xl font-black text-premium-text tracking-tighter">
              The Doctors <span className="text-premium-primary">Behind the Smiles</span>
            </h2>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl border border-premium-border shadow-sm">
            <span className="text-xs font-black text-premium-subtext uppercase tracking-widest italic">15+ Years AIIMS & PGI Excellence</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {doctors.map((doc) => (
            <div 
              key={doc.name}
              className="group bg-white rounded-[40px] p-8 border border-premium-border hover:border-premium-primary/40 transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col xl:flex-row items-center gap-8"
            >
              <div className="relative w-40 h-48 sm:w-48 sm:h-64 rounded-[32px] overflow-hidden flex-shrink-0 shadow-lg group-hover:scale-[1.02] transition-transform">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>

              <div className="flex-grow text-center xl:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-premium-primary/5 text-premium-primary text-[10px] font-black uppercase tracking-widest mb-4">
                  {doc.credentials}
                </span>
                <h3 className="text-2xl font-black text-premium-text mb-2 tracking-tight">
                  {doc.name}
                </h3>
                <p className="text-xs font-black text-premium-primary uppercase tracking-widest mb-4">
                  {doc.title}
                </p>
                <p className="text-premium-subtext text-sm leading-relaxed mb-6 font-medium">
                  {doc.bio}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8 justify-center xl:justify-start">
                  {doc.expertise.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-premium-section rounded-lg text-[10px] font-bold text-premium-text border border-premium-border">
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onBookAppointment}
                  className="w-full xl:w-auto px-6 py-3 bg-premium-text text-white rounded-xl text-xs font-black hover:bg-premium-primary transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  Claim Invisalign Consultation <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-premium-primary/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
}