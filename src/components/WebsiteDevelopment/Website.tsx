'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

export default function Website() {
  return (
    <div className="relative w-full overflow-hidden">
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-[120px] pb-16 overflow-hidden select-none">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/webpage.jpg"
          alt="Web Development Background"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        {/* Black overlays for high contrast and black-and-white design system */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#111111]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">

        {/* Top Badge: Avatars + Stars + Rating + Subtext */}
        <div className="flex flex-col items-center mb-8 sm:mb-10">
          {/* Avatar & Rating Row */}
          <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
            {/* Overlapping Avatars */}
            <div className="flex items-center -space-x-2.5">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#111] overflow-hidden shadow-sm">
                <Image
                  src="/Team pics/Ceo.jpg"
                  alt="Client avatar 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#111] overflow-hidden shadow-sm z-10">
                <Image
                  src="/Team pics/Ui Ux & Web devloepr.jpg"
                  alt="Client avatar 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#111] overflow-hidden shadow-sm z-20">
                <Image
                  src="/Team pics/Contetn writer.jpg"
                  alt="Client avatar 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Stars & Pill */}
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#007FFF] text-[#007FFF]"
                  />
                ))}
              </div>
              <span className="bg-[#007FFF] text-white text-[11px] sm:text-xs font-bold px-1.5 py-0.5 rounded-full leading-none">
                4.9
              </span>
            </div>
          </div>

          {/* Brands Count Subtext */}
          <span className="text-[13px] sm:text-sm font-semibold text-white/90 tracking-tight">
            300+ Scaled Brands
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-poppins text-4xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[90px] font-semibold tracking-[-0.03em] leading-[1.08] sm:leading-[1.06] text-white mb-6 sm:mb-8 max-w-5xl">
          We Build Websites{' '}
          <br className="hidden sm:block" />
          {' '}{' '}
          <span className="eb-garamond italic font-normal text-white inline-block">
            That Drive Growth
          </span>
        </h1>

        {/* Hero Subheadline */}
        <p className="font-poppins text-base sm:text-lg md:text-xl font-medium text-white/80 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
          Strategy. Design. Performance. Unified for measurable ROI.
        </p>


      </div>
    </section>

      {/* Intro Section */}
      <section className="relative bg-[#111111] z-10 pt-10 pb-24 md:pt-16 md:pb-32 px-6 flex flex-col items-center">
        {/* Centered container for perfect alignment */}
        <div className="max-w-[900px] text-center relative z-30">

          <p className="font-poppins text-xl md:text-2xl lg:text-3xl leading-[1.6] md:leading-[1.7] mb-10 md:mb-14 text-[#E8E6E1]">
            At Hala Smart Technologies, we don’t just build websites; we craft powerful digital experiences that drive real business growth. As Dubai’s trusted web design agency, we fuse cutting-edge technology with bold, purposeful design to create solutions that don’t just compete, they lead.
          </p>

          <p className="font-poppins text-lg md:text-xl lg:text-2xl leading-[1.6] mb-12 md:mb-16 text-[#E8E6E1]/80">
            From startups to established enterprises, UAE’s most ambitious brands trust us to deliver proven results across every industry. Your website isn’t just a digital business card—it’s your hardest-working salesperson, open 24/7, building trust and closing deals while you sleep.
          </p>

          <button className="bg-[#222222] hover:bg-[#333333] transition-colors duration-300 text-white font-poppins font-semibold text-[14px] md:text-[15px] px-8 py-4 rounded-md shadow-md border border-[#333333]">
            Start Your Project
          </button>

        </div>
      </section>

    </div>
  );
}

export { Website };
