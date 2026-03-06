import Image from "next/image";

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  return (
    <header className="relative z-50 glass shadow-premium py-1 lg:py-1.5 px-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-1.5 lg:gap-3">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <Image
            src="/images/logo.png"
            alt="Face Max Dental Clinic Logo"
            width={100}
            height={20}
            className="h-auto w-16 md:w-20 lg:w-24 hover:opacity-90 transition-opacity"
          />
          <div className="hidden sm:block w-px h-6 bg-gray-200"></div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Face+Max+Dental+Clinic+Bhekrai+Nagar+Road+Pune"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center sm:text-left hover:text-[#485b51] transition-colors"
          >
            <div className="flex items-center gap-1 justify-center sm:justify-start text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-gray-400">
              <span>📍 Location</span>
            </div>
            <p className="text-[11px] sm:text-xs font-medium text-gray-700 leading-tight">
              Shiv Shakti Heights, 1st Floor, Pune
            </p>
          </a>
        </div>

        <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-3 mt-1 lg:mt-0">
          <a
            href="tel:+918080697453"
            className="hidden sm:flex flex-col items-end mr-0 sm:mr-1 text-right"
          >
            <span className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Call Specialist</span>
            <span className="text-[#485b51] font-bold text-xs sm:text-sm leading-tight">+91 80806 97453</span>
          </a>
          <button
            onClick={onBookAppointment}
            className="btn-primary shadow-emerald-500/20 py-1.5 px-4 text-xs font-medium"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}