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
    <section className="py-24 md:py-32 px-4 md:px-8 bg-brand-black" id="gallery">
      <div className="max-w-[95%] 2xl:max-w-screen-2xl mx-auto w-full">
        <p className="text-brand-cyan font-semibold text-sm uppercase tracking-[0.2em] mb-4">Our Facility</p>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
          The <span className="text-gradient-cyan-pink">Cusp Experience</span>
        </h2>
        <p className="text-gray-400 text-lg font-light max-w-2xl mb-12 leading-relaxed">
          SCO-55, Huda SCO Market Complex, Near Axis Bank, Sector-56, Gurugram, Haryana.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {clinicImages.map((img, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-[20px] overflow-hidden shadow-md group border-4 border-white">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onBookAppointment}
            className="btn-primary"
          >
            Visit Our Clinic
          </button>
        </div>
      </div>
    </section>
  );
}
