'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MonitorPlay, Star, PlayCircle } from 'lucide-react';

export default function VideoEditing() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full bg-[#fcfcfc] text-[#111111] overflow-hidden antialiased selection:bg-[#007FFF]/20 selection:text-[#111]">

      {/* Dynamic Background Pattern / Gradient */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#111 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#007FFF]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#007FFF]/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-start px-6 z-10 overflow-hidden pt-[140px] md:pt-[180px] pb-[80px]">

        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-[1.5px] border-dashed border-[#111]/20 bg-white shadow-sm text-xs md:text-sm font-semibold text-[#444] uppercase tracking-[0.1em] mb-8 md:mb-10 transition-transform duration-300 hover:scale-105">
          <div className="w-2 h-2 rounded-full bg-[#007FFF] animate-pulse"></div>
          currently booking new clients
        </div>

        {/* Headline */}
        <h1 className="font-poppins text-[42px] sm:text-5xl md:text-6xl lg:text-[76px] font-bold text-center leading-[1.05] tracking-tight mb-6 max-w-[1000px] text-[#111] relative z-20">
          Your
          <span className="inline-flex items-center justify-center gap-2 md:gap-4 mx-2 sm:mx-3 -mt-2 align-middle">
            <Image src="/youtube-icon.png" alt="YouTube Icon" width={64} height={64} className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain drop-shadow-md hover:scale-110 transition-transform" />
            <Image src="/instagram-icon.png" alt="Instagram Icon" width={64} height={64} className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain drop-shadow-md hover:scale-110 transition-transform" />
          </span>
          Videos Deserve
          <br className="hidden md:block" /><em className="eb-garamond italic font-semibold text-[#111]"> Clicks, Let's Make It Happen</em>
        </h1>

        {/* Description */}
        <p className="font-poppins text-base md:text-xl text-[#555] max-w-[600px] text-center mb-10 leading-relaxed font-medium relative z-20">
          We do Custom-designed thumbnails and editing that make your content visually stunning and impossible to ignore.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 relative z-20">
          <button className="w-full sm:w-auto bg-[#007FFF] text-white px-10 py-4 rounded-full font-poppins font-semibold text-[15px] shadow-[0_8px_20px_-6px_rgba(0,127,255,0.5)] hover:shadow-[0_12px_24px_-6px_rgba(0,127,255,0.6)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
            View Pricing
          </button>
          <button className="w-full sm:w-auto text-[#007FFF] px-8 py-4 rounded-full font-poppins font-semibold text-[15px] hover:bg-[#007FFF]/5 transition-all duration-300 underline underline-offset-8 decoration-2 decoration-[#007FFF]/40 hover:decoration-[#007FFF]">
            Our Works
          </button>
        </div>

        {/* Stats Card */}
        <div className="bg-white border border-[#111]/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] rounded-[2.5rem] p-6 sm:p-8 md:py-8 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-30">

          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-poppins text-[13px] md:text-sm font-medium text-[#777] uppercase tracking-wide mb-3">Audiences Reached</span>
            <div className="flex items-center gap-2">
              <MonitorPlay className="w-6 h-6 text-[#ff0000]" fill="currentColor" />
              <span className="font-poppins font-bold text-2xl md:text-3xl text-[#111]">300M+</span>
            </div>
          </div>

          <div className="hidden md:block w-px h-16 bg-[#111]/10"></div>
          <div className="block md:hidden w-16 h-px bg-[#111]/10"></div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-poppins text-[13px] md:text-sm font-medium text-[#777] uppercase tracking-wide mb-3">Rated by Happy Creators</span>
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-[#FFB800]" fill="currentColor" />
              <span className="font-poppins font-bold text-2xl md:text-3xl text-[#111]">5/5 Excellent</span>
            </div>
          </div>

          <div className="hidden md:block w-px h-16 bg-[#111]/10"></div>
          <div className="block md:hidden w-16 h-px bg-[#111]/10"></div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-poppins text-[13px] md:text-sm font-medium text-[#777] uppercase tracking-wide mb-3">Thumbnails Delivered</span>
            <div className="flex items-center gap-2">
              <span className="font-poppins font-bold text-2xl md:text-3xl text-[#111]">2400+</span>
            </div>
          </div>

        </div>



      </section>
    </div>
  );
}
