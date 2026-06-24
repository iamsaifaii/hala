'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

const SERVICES = [
  'SEO Services',
  'PPC Campaigns',
  'Content Marketing',
  'Social Media',
  'Web Development',
  'Brand Strategy',
  'Analytics',
  'Growth',
  'Lead Generation'
];

export default function MarketingSolutions() {
  return (
    <section className="w-full max-w-[1080px] mx-auto px-4 sm:px-5 mt-20 mb-20">
      {/* Main Container */}
      <div className="bg-[#181818] rounded-[40px] px-8 py-16 md:p-16 lg:p-20 relative overflow-hidden flex flex-col md:flex-row shadow-2xl">
        
        {/* Top Right Illustration (Absolute on Desktop, Relative/Hidden on Mobile) */}
        <div className="hidden lg:block absolute top-0 right-0 w-[450px] h-auto pointer-events-none z-10 select-none">
          {/* We use a mask-image or just absolute positioning to make it peek from the top right */}
          <div className="relative w-full aspect-square">
             <Image 
               src="/marketing_illustration.png" 
               alt="Marketing Illustration" 
               fill
               className="object-contain object-top right-0 transform translate-x-12 -translate-y-6"
               priority
             />
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col w-full z-20">
          
          {/* Left Column: Heading & Pills */}
          <div className="w-full lg:w-[60%] flex flex-col items-start text-left">
            <h2 className="text-[#f5f5e4] text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] tracking-tight mb-4">
              Marketing Solutions for <br />
              <span className="font-ebgaramond italic text-[#e6d5e1] font-normal pr-2">businesses</span>
            </h2>
            
            <p className="text-[#ffffff]/80 text-[15px] font-medium mb-12 max-w-[400px]">
              At Hala Smart Technologies, we specialize in delivering digital marketing services to help your business grow and stand out in today’s competitive market.
            </p>

            <div className="flex flex-wrap gap-3 max-w-[480px]">
              {SERVICES.map((service, index) => (
                <div 
                  key={index} 
                  className="border border-[#ffffff]/20 rounded-full px-4 py-2 text-[13.5px] font-medium text-[#ffffff]/90 hover:bg-white/10 hover:border-white/40 cursor-default transition-colors duration-200"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Bottom (Desktop) or Below (Mobile) */}
          <div className="w-full lg:w-[45%] lg:self-end mt-20 lg:mt-0 flex flex-col items-start lg:pl-10">
            <h3 className="text-[#f5f5e4] text-2xl md:text-3xl font-serif leading-snug mb-4">
              Comprehensive.<br/> All your growth.
            </h3>
            <p className="text-[#ffffff]/70 text-[14px] leading-relaxed mb-8 font-medium">
              From result-driven SEO services and high-performing PPC campaigns to creative content marketing and strategic social media management, we cover all aspects of online growth.
            </p>
            
            <button className="flex items-center justify-center gap-2 bg-[#e6d5e1] text-[#111111] font-semibold text-[14px] px-6 py-3 rounded-xl hover:bg-[#d8c2d2] transition-colors duration-200">
              <Sparkles size={16} />
              Start Growing Today
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
