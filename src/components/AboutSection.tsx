import React from 'react';

export default function AboutSection() {
    return (
        <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-lavender">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#485b51] mb-8 tracking-tight">Welcome to Cusp Dental Clinic</h2>
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
                        At <strong>Cusp Dental Clinic</strong> in Gurugram, we provide advanced multi-specialty care. We believe a truly great smile is built on a foundation of expert precision, cutting-edge digital technology, and genuine patient comfort.
                    </p>
                </div>

                <div className="bg-white p-10 md:p-16 rounded-[32px] shadow-premium border border-white/50 mb-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full -mr-32 -mt-32"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#485b51] mb-8 tracking-tight">Advanced Digital Dentistry</h3>
                        <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                            Our clinic is guided by <strong>Dr. Mohit Dhiman</strong>, a recognized leader in <strong>Digital Smile Design</strong> and a <strong>Diamond Black Invisalign Provider</strong>.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed font-light">
                            Supported by a team of specialists from AIIMS, PGI Chandigarh, and Maulana Azad, Dr. Dhiman brings a 100% digital workflow to ensuring precision and aesthetic excellence in every procedure.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border-t-4 border-[#485b51]">
                        <h3 className="text-xl md:text-2xl font-bold text-[#485b51] mb-4">Key Specializations</h3>
                        <ul className="grid grid-cols-1 gap-3">
                            {[
                                "Invisalign (Diamond Black Provider)",
                                "Digital Smile Design",
                                "Dental Implants",
                                "Full Mouth Rehabilitation",
                                "Painless Dentistry (Nitrous Sedation)",
                                "Advanced Multi-Specialty Care"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-lg text-gray-700">
                                    <span className="text-[#485b51] text-xl">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border-t-4 border-[#d4af37]">
                        <h3 className="text-xl md:text-2xl font-bold text-[#485b51] mb-4">Meet Our Expert</h3>
                        <div className="space-y-4">
                            <p className="font-bold text-xl text-gray-900">Dr. Mohit Dhiman</p>
                            <ul className="space-y-3">
                                {[
                                    "Diamond Black Invisalign Provider",
                                    "18+ Years Experience",
                                    "Digital Smile Design Expert",
                                    "AIIMS/PGI Specialist Backing"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-lg text-gray-700">
                                        <span className="text-[#d4af37] text-xl">✨</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

