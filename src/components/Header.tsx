import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  const navItems = [
    { name: "Why Choose Us", href: "#why-choose" },
    { name: "Our Doctors", href: "#doctors" },
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-premium-border/50 h-[var(--premium-header-height)] flex items-center transition-all duration-300">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-premium-border bg-white shadow-sm transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/images/logo.jpg"
              alt="Cusp Dental Logo"
              fill
              priority
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-lg font-black text-premium-text leading-none tracking-tight">CUSP DENTAL</span>
            <span className="text-[10px] font-bold text-premium-primary uppercase tracking-[0.2em] mt-0.5">Clinic & Aligner Center</span>
          </div>
        </Link>

        {/* Center Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-8 bg-premium-section/50 px-8 py-2.5 rounded-full border border-premium-border/50">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-bold text-premium-subtext hover:text-premium-primary transition-colors tracking-tight"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Section: Contact & CTA */}
        <div className="flex items-center gap-6">
          <div className="hidden xl:flex flex-col items-end">
            <span className="text-[10px] font-bold text-premium-subtext uppercase tracking-widest leading-none">Emergency? Call</span>
            <a href="tel:+919599508322" className="text-premium-text font-black text-base hover:text-premium-primary transition-colors tabular-nums mt-0.5">
              +91 95995 08322
            </a>
          </div>
          
          <button
            onClick={onBookAppointment}
            className="px-6 py-3 bg-premium-gradient text-white rounded-full text-sm font-bold shadow-lg shadow-premium-primary/20 hover:shadow-xl hover:shadow-premium-primary/30 transition-all hover:-translate-y-0.5 active:scale-95"
          >
            Invisalign Consult
          </button>
        </div>
      </div>
    </header>
  );
}