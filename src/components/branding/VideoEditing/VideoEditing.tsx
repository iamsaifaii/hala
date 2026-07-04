'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

export default function VideoEditing() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full bg-[#111111] text-[#F3F0E6] overflow-x-hidden antialiased selection:bg-[#EADCF8] selection:text-[#111]">

      {/* Hero Section */}
      <section className="relative w-full h-[100vh] flex flex-col items-center justify-center px-6 z-10 overflow-hidden pt-[100px]">

        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Dell.jpg"
            alt="Video Editing Hero Background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="opacity-90 blur-[2px] scale-105"
            priority
            quality={90}
          />
          {/* Black overlays for high contrast */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#111111]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl flex flex-col items-center">
          <h1 className="font-poppins text-5xl md:text-7xl lg:text-[85px] font-extrabold leading-[1.05] tracking-tight mb-6 text-white drop-shadow-xl">
            Your Videos<br />
            <em className="eb-garamond font-semibold italic"> Deserve Clicks.</em>
          </h1>

          <p className="font-poppins text-base md:text-lg lg:text-xl mb-10 max-w-[600px] mx-auto font-medium text-white/90 leading-relaxed">
            Custom-designed thumbnails and editing that make your content visually stunning and impossible to ignore.
          </p>

          <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#f4f4f4] transition-colors duration-300 text-[#1A1523] font-poppins font-semibold text-[14px] md:text-[15px] px-8 py-3.5 rounded-md shadow-lg shadow-black/20">
            <PlayCircle size={18} />
            Let's Make It Happen
          </button>
        </div>
      </section>

    </div>
  );
}
