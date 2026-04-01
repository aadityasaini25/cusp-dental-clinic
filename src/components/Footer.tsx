import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] pt-24 pb-12 text-white relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="relative w-24 h-24 rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700 bg-white mb-8 p-1 hover:border-premium-primary transition-all duration-500">
              <Image
                src="/images/logo.jpg"
                alt="Cusp Dental Clinic"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <p className="text-slate-400 font-medium leading-relaxed text-sm max-w-xs">
              Elite Digital Orthodontics and Diamond Black Invisalign Provider. Transform your smile with India's most trusted specialists.
            </p>
          </div>

          {/* Quick Links / Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
            <h3 className="text-premium-primary font-black text-xs uppercase tracking-[0.2em]">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+919599508322" className="block text-3xl font-black hover:text-premium-primary transition-colors whitespace-nowrap">+91 9599508322</a>
              <a href="mailto:drmohit.connect@gmail.com" className="block text-slate-400 hover:text-white transition-colors font-medium">drmohit.connect@gmail.com</a>
            </div>
          </div>

          {/* Clinic Hours */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
            <h3 className="text-premium-primary font-black text-xs uppercase tracking-[0.2em]">Clinic Hours</h3>
            <div className="space-y-4 text-slate-400 font-medium text-sm">
              <div className="flex justify-between w-full max-w-[200px]">
                <span>Tue - Sat</span>
                <span className="text-white">10am - 8pm</span>
              </div>
              <div className="flex justify-between w-full max-w-[200px]">
                <span>Sunday</span>
                <span className="text-white">11am - 7pm</span>
              </div>
              <p className="text-premium-primary/50 text-[10px] uppercase font-black tracking-widest mt-4">Monday: Closed</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
            <h3 className="text-premium-primary font-black text-xs uppercase tracking-[0.2em]">Our Location</h3>
            <a
              href="https://maps.app.goo.gl/21Zch3ohhYgWM5LQ7"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-slate-400 font-medium text-sm leading-relaxed hover:text-white transition-colors"
            >
              SCO-55, Huda SCO Market,<br />
              Sector-56, Gurugram,<br />
              Haryana 122011
              <span className="block mt-4 text-premium-primary font-black text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">View on Maps →</span>
            </a>
          </div>
        </div>

        {/* Map Embed Container */}
        <div className="relative h-[280px] w-full max-w-5xl mx-auto rounded-[32px] overflow-hidden border border-slate-700/50 mb-20 group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28069.507098008497!2d77.0606663743164!3d28.428658099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19661ee54343%3A0x8b0b26d4b69f5acf!2sCusp%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1772804934884!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-[12px] border-[#0F172A] rounded-[32px]"></div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-800 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] gap-8">
          <p>&copy; {new Date().getFullYear()} Cusp Dental Clinic. All Rights Reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-premium-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-premium-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-premium-primary/10 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2"></div>
    </footer>
  );
}