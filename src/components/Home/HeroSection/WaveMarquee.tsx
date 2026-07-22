'use client';

import { useState, useEffect } from 'react';

export default function WaveMarquee() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Mobile Marquee (Tighter curve for small screens) */}
      <div className="absolute md:hidden w-full min-w-[800px] left-1/2 -translate-x-1/2 h-[220px] z-10 pointer-events-none select-none overflow-hidden -bottom-4">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 220"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="wavyTextPathMobileHome"
            d="M -100 30 Q 400 280 900 30"
            fill="none"
            stroke="transparent"
          />
          <text className="font-poppins text-[13px] font-semibold tracking-[0.2em] uppercase fill-white opacity-40">
            <textPath href="#wavyTextPathMobileHome" startOffset="0%">
              <animate
                attributeName="startOffset"
                from="0%"
                to="-100%"
                dur="30s"
                repeatCount="indefinite"
              />
              {Array(10).fill("GROW YOUR BRAND • DOMINATE SEARCH • CONVERT CLICKS • ENGAGE AUDIENCES • ").join(' ')}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Desktop Marquee (Wider curve for large screens) */}
      <div className="hidden md:block absolute w-full min-w-[1440px] left-1/2 -translate-x-1/2 h-[300px] z-10 pointer-events-none select-none overflow-hidden -bottom-4">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 300"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="wavyTextPathDesktopHome"
            d="M -200 50 Q 720 400 1640 50"
            fill="none"
            stroke="transparent"
          />
          <text className="font-poppins text-[11px] font-semibold tracking-[0.2em] uppercase fill-white opacity-40">
            <textPath href="#wavyTextPathDesktopHome" startOffset="0%">
              <animate
                attributeName="startOffset"
                from="0%"
                to="-100%"
                dur="40s"
                repeatCount="indefinite"
              />
              {Array(10).fill("GROW YOUR BRAND • DOMINATE SEARCH • CONVERT CLICKS • ENGAGE AUDIENCES • ").join(' ')}
            </textPath>
          </text>
        </svg>
      </div>
    </>
  );
}
