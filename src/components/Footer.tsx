import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-premium-bg pt-20 pb-10 text-premium-text relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
          {/* Brand Info */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-[18px] overflow-hidden shadow-premium border border-premium-border bg-white mb-8 p-1.5 grayscale-[0.2] hover:grayscale-0 transition-all duration-300">
              <Image
                src="/images/logo.jpg"
                alt="Cusp Dental Clinic"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-premium-subtext font-medium leading-relaxed text-sm max-w-xs italic">
              Multi-Specialty Advanced Digital Dentistry. Diamond Black Invisalign Provider in Gurugram.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold text-premium-primary text-sm uppercase tracking-widest border-b border-premium-border pb-3">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+919599508322" className="block text-premium-text font-black text-2xl hover:text-premium-primary transition-colors">+91 95995 08322</a>
              <div>
                <p className="text-premium-text font-bold text-sm">Cusp Dental Clinic</p>
                <a href="mailto:drmohit.connect@gmail.com" className="text-xs text-premium-subtext hover:text-premium-primary transition-colors">drmohit.connect@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold text-premium-primary text-sm uppercase tracking-widest border-b border-premium-border pb-3">Clinic Hours</h3>
            <div className="flex items-start justify-center md:justify-start gap-3">
              <span className="text-premium-accent text-2xl">🕒</span>
              <div className="text-premium-text space-y-1.5 text-sm font-medium">
                <p className="font-bold">Tue–Sat: 10:00 AM – 8:00 PM</p>
                <p>Sunday: 11:00 AM – 7:00 PM</p>
                <p className="text-premium-subtext/50 italic">Monday: Closed (Weekly Off)</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold text-premium-primary text-sm uppercase tracking-widest border-b border-premium-border pb-3">Our Location</h3>
            <a
              href="https://maps.app.goo.gl/21Zch3ohhYgWM5LQ7"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex items-start justify-center md:justify-start gap-3">
                <span className="text-premium-accent text-2xl">📍</span>
                <span className="text-premium-text text-sm font-medium leading-relaxed group-hover:text-premium-primary transition-colors">
                  SCO-55, Huda SCO Market,<br />
                  Sector-56, Gurugram,<br />
                  Haryana 122011
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Maps Embed */}
        <div className="premium-card overflow-hidden h-[300px] mb-20 p-2 border-opacity-50">
          <div className="w-full h-full rounded-[14px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28069.507098008497!2d77.0606663743164!3d28.428658099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19661ee54343%3A0x8b0b26d4b69f5acf!2sCusp%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1772804934884!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cusp Dental Clinic - Gurugram"
              className="grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-premium-border pt-10 text-premium-subtext text-[11px] font-bold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Cusp Dental Clinic. All Excellence Reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-8">
            <a href="#" className="hover:text-premium-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-premium-primary transition-colors">Terms of Care</a>
          </div>
        </div>
      </div>
    </footer>
  );
}