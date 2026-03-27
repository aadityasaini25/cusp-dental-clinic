'use client';

interface BeforeAfterGalleryProps {
  onBookAppointment: () => void;
}

export default function BeforeAfterGallery({ onBookAppointment }: BeforeAfterGalleryProps) {
  const localVideos = [
    {
      src: "/videos/'I was here for my gaps... and  now it's all resolved!' 🥳There is no better feeling than the da.mp4#t=0.1",
      poster: "/images/patent1.jpeg",
      title: "Smile Transformation - Gap Closure"
    },
    {
      src: "/videos/A positive patient experience defines quality dental care. Patient satisfaction is at the heart .mp4#t=0.1",
      poster: "/images/patent3.jpeg",
      title: "Patient Experience & Quality Care"
    }
  ];

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 lg:px-12 bg-premium-bg overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-premium-primary font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">Transformations</p>
          <h2 className="text-4xl md:text-6xl font-black text-premium-text tracking-tight mb-6 leading-tight">
            Patient <span className="text-premium-primary">Success Stories</span>
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full mb-20">
          {localVideos.map((video, index) => (
            <div key={index} className="flex flex-col group">
              <div className="relative rounded-[24px] overflow-hidden shadow-premium transition-all duration-500 hover:shadow-premium-lg border border-premium-border bg-white p-2">
                <div className="rounded-[18px] overflow-hidden aspect-[9/16] md:aspect-video flex items-center justify-center bg-black">
                  <video
                    className="w-full h-full object-contain"
                    src={video.src}
                    poster={video.poster}
                    controls
                    playsInline
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute top-6 left-6 bg-premium-primary text-white text-[10px] px-4 py-1.5 rounded-full font-bold uppercase tracking-widest shadow-md z-10">
                    Success Story {index + 1}
                  </div>
                </div>
              </div>
              <p className="mt-6 text-center text-premium-subtext font-bold italic text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                "{video.title}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="premium-card p-12 md:p-16 text-center hover:shadow-premium-lg border-opacity-50">
          <h3 className="text-3xl md:text-5xl font-black text-premium-text mb-6 tracking-tight leading-tight">
            Ready for Your <br />
            <span className="text-premium-primary">Smile Transformation?</span>
          </h3>
          <p className="text-premium-subtext text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of satisfied patients who have transformed their smiles with Dr. Mohit Dhiman&apos;s expertise. Book your consultation today and take the first step towards your dream smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={onBookAppointment}
              className="px-10 py-5 bg-premium-gradient text-white rounded-[12px] font-bold text-xl shadow-premium hover:shadow-premium-lg hover:opacity-90 transition-all hover:scale-[1.03] tracking-wide"
            >
              Book Consultation
            </button>
            <a
              href="tel:+919599508322"
              className="px-10 py-5 bg-white text-premium-text border border-premium-border rounded-[12px] font-bold text-xl text-center hover:bg-gray-50 transition-all shadow-sm"
            >
              Call Specialist
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-premium-accent font-bold uppercase tracking-widest text-[11px]">
            <span className="w-8 h-px bg-premium-accent/30"></span>
            Professional digital consultation & scan
            <span className="w-8 h-px bg-premium-accent/30"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
