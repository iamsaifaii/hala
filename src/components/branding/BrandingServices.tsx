'use client';

import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Brand Strategy Expansion',
    description: 'Evolve your brand identity to reach new markets and capture broader demographics seamlessly.',
  },
  {
    id: '02',
    title: 'Observable Profile Design',
    description: 'Craft striking visual profiles and assets that instantly communicate your core values.',
  },
  {
    id: '03',
    title: 'Brand Tone',
    description: 'Develop a unique, consistent voice that resonates authentically with your target audience.',
  },
  {
    id: '04',
    title: 'Brand Strategy',
    description: 'Build the foundational roadmap and positioning to secure long-term market dominance.',
  },
  {
    id: '05',
    title: 'Corporate Rebranding',
    description: 'Revitalize legacy brands and modernize corporate identities for the digital landscape.',
  }
];

export default function BrandingServices() {
  return (
    <section className="w-full bg-white text-[#111111] py-24 md:py-32 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div 
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-3xl">
            <h2 className="font-poppins text-5xl md:text-6xl lg:text-[80px] font-bold tracking-tight leading-[1.05] mb-6 text-[#111111]">
              End-to-End <br />
              <span className="text-[#007BFF]">Branding Services</span>
            </h2>
          </div>
          <p className="font-poppins text-lg md:text-xl text-[#111111]/70 max-w-sm font-medium pb-4">
            Comprehensive solutions to build, elevate, and transform your brand at every touchpoint.
          </p>
        </div>

        {/* Services List - Premium Typography Layout */}
        <div className="w-full flex flex-col">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative border-t border-[#111111]/10 py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#111111] transition-colors duration-500 px-6 -mx-6 md:px-10 md:-mx-10 rounded-3xl"
            >
              {/* Left: Number & Title */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 w-full md:w-[55%]">
                <span className="font-poppins text-lg md:text-xl font-semibold text-[#111111]/30 group-hover:text-white/30 transition-colors duration-500">
                  {service.id}
                </span>
                <h3 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] group-hover:text-white transition-colors duration-500 tracking-tight">
                  {service.title}
                </h3>
              </div>

              {/* Right: Description & CTA */}
              <div className="flex flex-col md:flex-row md:items-center justify-between w-full md:w-[45%] gap-6 md:gap-12">
                <p className="font-poppins text-base md:text-lg text-[#111111]/60 group-hover:text-white/70 transition-colors duration-500 max-w-[320px] font-medium">
                  {service.description}
                </p>
                <button className="flex items-center gap-3 font-poppins font-semibold text-[15px] text-[#007BFF] shrink-0 group/btn transition-colors duration-300 bg-[#007BFF]/10 group-hover:bg-[#007BFF] group-hover:text-white px-6 py-3 rounded-full">
                  Contact Now
                  <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
          <div className="border-t border-[#111111]/10 w-full mt-2"></div>
        </div>

      </div>
    </section>
  );
}
