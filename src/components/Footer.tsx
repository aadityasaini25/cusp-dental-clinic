import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-8 pb-4 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden border-2 border-brand-cyan/20 shadow-[0_0_20px_rgba(56,189,248,0.1)] bg-black/50 mb-6">
            <Image
              src="/images/logo.jpg"
              alt="Cusp Dental Clinic"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed text-xs md:text-sm">
            Cusp Dental Clinic: Multi-Specialty Advanced Digital Dentistry. Diamond Black Invisalign Provider in Gurugram.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-center md:text-left mb-8">
          <div className="space-y-2">
            <h3 className="font-bold text-white text-base border-b border-gray-800 pb-1">Contact Us</h3>
            <div className="space-y-1 mt-2">
              <a href="tel:+919999751071" className="block text-[#d4af37] font-bold text-lg hover:scale-105 transition-transform inline-block">+91 99997 51071</a>
              <p className="text-gray-300 font-medium text-xs">9599508322</p>
              <p className="text-gray-300 font-medium text-xs">Cusp Dental Clinic</p>
              <a href="mailto:drmohit.connect@gmail.com" className="text-xs hover:text-white transition-colors block">drmohit.connect@gmail.com</a>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-white text-base border-b border-gray-800 pb-1">Clinic Hours</h3>
            <div className="flex items-start justify-center md:justify-start gap-2 mt-2">
              <span className="text-[#d4af37] text-lg">🕒</span>
              <div className="text-gray-300 space-y-0.5 text-xs">
                <p className="font-bold">Tue–Sat: 10:00 AM – 8:00 PM</p>
                <p>Sunday: 11:00 AM – 7:00 PM</p>
                <p className="text-gray-500">Monday: Closed</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-white text-base border-b border-gray-800 pb-1">Our Location</h3>
            <a
              href="https://maps.app.goo.gl/21Zch3ohhYgWM5LQ7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all group block text-xs mt-2"
            >
              <div className="flex items-start justify-center md:justify-start gap-2">
                <span className="text-xl">📍</span>
                <span className="text-gray-300 leading-relaxed group-hover:text-[#d4af37] transition-colors">
                  Cusp Dental Clinic, SCO-55,<br />
                  Huda SCO Market Complex,<br />
                  Near Axis Bank, Sector-56,<br />
                  Gurugram, Haryana
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Payment Methods and Maps Embed */}
        <div className="grid md:grid-cols-2 gap-4 items-start">
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <h3 className="font-bold text-white mb-2 text-sm border-b border-white/10 pb-1">Payment & Billing</h3>
            <ul className="grid grid-cols-2 gap-2 mt-2">
              {[
                { name: "Credit & Debit Card", icon: "💳" },
                { name: "UPI", icon: "📱" },
                { name: "Cash", icon: "💵" },
                { name: "EMI for advanced cases", icon: "🏦" }
              ].map((method, idx) => (
                <li key={idx} className="flex items-center gap-1.5 text-gray-600 text-[11px] sm:text-xs">
                  <span>{method.icon}</span>
                  {method.name}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[10px] sm:text-[11px] text-[#485b51] font-medium leading-tight">
              Bills are provided for all treatments — please check with your corporate or insurance provider for reimbursement eligibility.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl overflow-hidden h-[160px] shadow-inner border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28069.507098008497!2d77.0606663743164!3d28.428658099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19661ee54343%3A0x8b0b26d4b69f5acf!2sCusp%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1772804934884!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cusp Dental Clinic - Gurugram"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-[10px] sm:text-xs">
          <p>&copy; {new Date().getFullYear()} Cusp Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}