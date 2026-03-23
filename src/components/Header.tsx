import Image from "next/image";

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  return (
    <header className="relative z-50 glass-dark shadow-premium py-2 lg:py-3 px-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-2 lg:gap-4">
        {/* Left Section: Logo & Location */}
        <div className="flex flex-row items-center gap-2 sm:gap-4">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-brand-cyan/20 shadow-[0_0_15px_rgba(56,189,248,0.2)] bg-black/50 shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Cusp Dental Clinic Logo"
              fill
              priority
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10"></div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Cusp+Dental+Clinic+Sector-56+Gurugram"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start hover:opacity-80 transition-opacity ml-1 sm:ml-0"
          >
            <div className="flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[10px] uppercase tracking-widest font-bold text-gray-400 leading-none mb-0.5">
              <span className="text-brand-cyan text-[10px]">📍</span> Location
            </div>
            <p className="text-[10px] sm:text-xs font-medium text-white/90 leading-tight">
              Sector-56 <br className="sm:hidden" /> Gurugram
            </p>
          </a>
        </div>

        {/* Right Section: Call & CTA */}
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <a
            href="tel:+919999751071"
            className="hidden md:flex flex-col items-end text-right hover:opacity-80 transition-opacity"
          >
            <span className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Call Specialist</span>
            <span className="text-brand-cyan font-bold text-xs sm:text-sm leading-tight">+91 99997 51071</span>
          </a>
          <button
            onClick={onBookAppointment}
            className="px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-brand-cyan to-brand-pink text-white rounded-full text-xs font-extrabold shadow-lg hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] hover:scale-105 transition-all"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}