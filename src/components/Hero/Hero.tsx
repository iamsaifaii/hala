'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Grid2X2 } from 'lucide-react';
import Image from 'next/image';
import WaveMarquee from '@/components/WaveMarquee/WaveMarquee';

gsap.registerPlugin(ScrollTrigger);

// ─── Shared class constants ───────────────────────────
const ctaBtn =
  'flex items-center justify-center gap-2 py-2.5 px-6 ' +
  'bg-[#007FFF] text-white rounded-xl text-sm sm:text-[15px] ' +
  'font-semibold cursor-pointer transition-transform transition-colors duration-150 ' +
  'mb-5 shadow-md shadow-[#007FFF]/20 hover:bg-[#0066CC] hover:scale-[1.02] active:scale-[0.98]';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      pin: true,
      pinSpacing: false, // Allows next section to scroll over it
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative z-0 flex flex-col items-center justify-between text-center px-0 sm:px-0 w-full min-h-screen overflow-hidden -mt-[100px] pt-[100px] pb-0 sm:pb-0 md:pb-0">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/heropic.png"
          alt="Hero Background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="opacity-90 blur-[2px] scale-105"
          priority
          quality={90}
        />
        {/* Black overlays for high contrast and black-and-white design system */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[#111111]"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center w-full flex-grow px-4 sm:px-6 -mt-[120px] md:-mt-20">
        <h1 className="font-poppins text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px] font-extrabold leading-[1.1] tracking-[-1px] mb-6 max-w-[900px] w-full text-white">
          <span className="text-white font-semibold">
            <em className="eb-garamond  ">Scale</em>{' '}
            your brand</span>{' '}

          <span className="text-white font-semibold">dominate
            {' '}
            <em className="eb-garamond font-semibold">the market</em>
          </span>
        </h1>

        <p className="text-[15px] sm:text-base md:text-lg text-white leading-relaxed mb-8 max-w-[420px]">
          The digital marketing agency that turns clicks into customers.
        </p>

        <button className={ctaBtn}>
          <Grid2X2 size={18} />
          Get a Free Consultation
        </button>

        <p className="text-[13px] sm:text-sm text-white tracking-widest font-medium uppercase mt-2">
          SEO • PPC • Social Media • Content Marketing
        </p>
      </div>

      <WaveMarquee />
    </section>
  );
}
