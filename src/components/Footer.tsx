import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-8 pb-4 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <div className="bg-white p-2 rounded-xl inline-block mb-4 shadow-xl">
            <Image
              src="/images/logo.png"
              alt="Face Max Dental Clinic"
              width={100}
              height={25}
              className="h-auto opacity-100"
            />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed text-xs md:text-sm">
            Face Max Dental Clinic: Advanced Implantology & Oral Surgery. 100% Digital Workflow for precision and aesthetics.
          </p>
        </div>
         <div className="grid md:grid-cols-3 gap-6 text-center md:text-left mb-8">
          <div className="space-y-2">
            <h3 className="font-bold text-white text-base border-b border-gray-800 pb-1">Contact Us</h3>
            <div className="space-y-1 mt-2">
              <a href="tel:+918080697453" className="block text-[#d4af37] font-bold text-lg hover:scale-105 transition-transform inline-block">+91 80806 97453</a>
              <p className="text-gray-300 font-medium text-xs">9284999673</p>
              <p className="text-gray-300 font-medium text-xs">Face Max Dental Clinic</p>
              <a href="mailto:shubhamsalunkhe34@gmail.com" className="text-xs hover:text-white transition-colors block">shubhamsalunkhe34@gmail.com</a>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-white text-base border-b border-gray-800 pb-1">Clinic Hours</h3>
            <div className="flex items-start justify-center md:justify-start gap-2 mt-2">
              <span className="text-[#d4af37] text-lg">🕒</span>
              <div className="text-gray-300 space-y-0.5 text-xs">
                <p className="font-bold">Mon–Sun</p>
                <p>10:00 AM – 09:00 PM</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-white text-base border-b border-gray-800 pb-1">Our Location</h3>
            <a
              href="https://maps.app.goo.gl/deFUbRo7JuupsDgN7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all group block text-xs mt-2"
            >
              <div className="flex items-start justify-center md:justify-start gap-2">
                <span className="text-xl">📍</span>
                <span className="text-gray-300 leading-relaxed group-hover:text-[#d4af37] transition-colors">
                  Face Max Dental Clinic,<br />
                  Bhekrai Nagar Road, Shiv Shakti Chowk,<br />
                  Opposite Kaware Ice Cream,<br />
                  Shiv Shakti Heights, 1st Floor, Pune
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Payment Methods and Maps Embed */}
        <div className="grid md:grid-cols-2 gap-4 items-start">
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-2 text-sm border-b border-gray-100 pb-1">Payment &amp; Billing</h3>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9499546663205!2d73.95409219197526!3d18.4859259377269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9693c951e9f%3A0x1cb0dea2e1af8824!2sFACE%20MAX%20DENTAL%20%26%20FACE%20CLINIC!5e0!3m2!1sen!2sin!4v1771515518591!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Face Max Dental Clinic - Pune"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-[10px] sm:text-xs">
          <p>&copy; {new Date().getFullYear()} Face Max Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}