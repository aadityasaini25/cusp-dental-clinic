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
    <section className="py-24 md:py-32 px-4 md:px-8 bg-white overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <p className="text-premium-primary font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Facility</p>
            <h2 className="text-4xl md:text-6xl font-black text-premium-text tracking-tight">
              A <span className="text-premium-primary">Premium</span> Space for Your Smile
            </h2>
          </div>
          <p className="text-premium-subtext text-lg font-medium max-w-sm md:text-right">
            SCO-55, Huda SCO Market Complex, Gurugram. State-of-the-art digital dentistry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {clinicImages.map((img, i) => (
            <div 
              key={i} 
              className="group relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-premium-text/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-bold text-sm tracking-wider uppercase">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={onBookAppointment}
            className="group relative px-12 py-5 bg-premium-text text-white rounded-full font-black text-lg overflow-hidden transition-all hover:pr-16"
          >
            <span className="relative z-10 transition-all">Experience Cusp Standard</span>
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
            <div className="absolute inset-0 bg-premium-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
