import Image from "next/image";

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-premium-border py-3 px-4 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-2 lg:gap-4">
        {/* Left Section: Logo & Location */}
        <div className="flex flex-row items-center gap-2 sm:gap-4">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-premium-border shadow-sm bg-white shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Cusp Dental Clinic Logo"
              fill
              priority
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="hidden sm:block w-px h-8 bg-premium-border"></div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Cusp+Dental+Clinic+Sector-56+Gurugram"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start hover:opacity-80 transition-opacity ml-1 sm:ml-0"
          >
            <div className="flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[10px] uppercase tracking-[0.2em] font-bold text-premium-subtext leading-none mb-0.5">
              <span className="text-premium-accent text-[10px]">📍</span> Location
            </div>
            <p className="text-[10px] sm:text-xs font-semibold text-premium-text leading-tight">
              Sector-56 <br className="sm:hidden" /> Gurugram
            </p>
          </a>
        </div>

        {/* Right Section: Call & CTA */}
        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          <a
            href="tel:+919599508322"
            className="hidden md:flex flex-col items-end text-right hover:opacity-80 transition-opacity"
          >
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-premium-subtext">Call Specialist</span>
            <span className="text-premium-primary font-bold text-xs sm:text-sm leading-tight">+91 95995 08322</span>
          </a>
          <button
            onClick={onBookAppointment}
            className="px-5 py-2.5 sm:px-7 sm:py-3 bg-premium-primary text-white rounded-[12px] text-xs font-bold shadow-premium hover:shadow-premium-lg hover:bg-blue-700 hover:scale-[1.03] transition-all tracking-wide"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}