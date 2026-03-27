import Image from 'next/image';

interface ClinicPhotosProps {
  onBookAppointment: () => void;
}

export default function ClinicPhotos({ onBookAppointment }: ClinicPhotosProps) {
  const clinicImages = [
    { src: '/images/clinic/clinic11.jpg', alt: 'Modern Clinic Interior' },
    { src: '/images/clinic/clinic22.jpg', alt: 'Comfortable Reception Area' },
    { src: '/images/clinic/clinic33.jpg', alt: 'Advanced Dental Lab' },
    { src: '/images/clinic/clinic44.jpg', alt: 'State-of-the-art Equipment' },
  ];

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-premium-section" id="gallery">
      <div className="max-w-[95%] 2xl:max-w-screen-2xl mx-auto w-full">
        <p className="text-premium-primary font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Facility</p>
        <h2 className="text-4xl md:text-6xl font-black text-premium-text tracking-tight mb-8 leading-tight">
          The <span className="text-premium-primary">Cusp Experience</span>
        </h2>
        <p className="text-premium-subtext text-lg md:text-xl font-medium max-w-2xl mb-16 leading-relaxed">
          Visit us at SCO-55, Huda SCO Market Complex, Gurugram. State-of-the-art digital dentistry in a premium, welcoming environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {clinicImages.map((img, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-[18px] overflow-hidden shadow-premium group border border-premium-border bg-white p-2">
              <div className="relative w-full h-full rounded-[12px] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onBookAppointment}
            className="px-10 py-5 bg-premium-primary text-white rounded-[12px] font-bold text-xl shadow-premium hover:shadow-xl hover:bg-blue-700 transition-all hover:scale-[1.03]"
          >
            Visit Our Clinic
          </button>
        </div>
      </div>
    </section>
  );
}
