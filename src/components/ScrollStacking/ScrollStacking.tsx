'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface ScrollStackingProps {
  journeyComponent: React.ReactNode;
  processComponent: React.ReactNode;
}

export default function ScrollStacking({ journeyComponent, processComponent }: ScrollStackingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const journeyWrapperRef = useRef<HTMLDivElement>(null);
  const journeyContentRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: journeyWrapperRef.current,
      start: 'top top',
      end: '+=100%',
      pin: true,
      pinSpacing: false,
      animation: gsap.to(journeyContentRef.current, {
        scale: 0.9,
        opacity: 0.4,
        ease: 'none',
      }),
      scrub: true,
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full bg-[#111111]">
      {/* Sticky Background Section (Our Journey) */}
      <div ref={journeyWrapperRef} className="relative h-screen w-full flex flex-col justify-center overflow-hidden z-0 bg-[#111111]">
        <div ref={journeyContentRef} className="w-full origin-top">
          {journeyComponent}
        </div>
      </div>

      {/* Foreground Section that scrolls over (Our Process) */}
      <div className="relative z-10 w-full">
        {processComponent}
      </div>
    </div>
  );
}
