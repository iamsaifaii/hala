'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollStackingProps {
  journeyComponent: React.ReactNode;
  processComponent: React.ReactNode;
}

export default function ScrollStacking({ journeyComponent, processComponent }: ScrollStackingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth scale and fade effect for the pinned journey section
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Sticky Background Section (Our Journey) */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden z-0 bg-[#111111]">
        <motion.div 
          style={{ scale, opacity }} 
          className="w-full origin-top"
        >
          {journeyComponent}
        </motion.div>
      </div>

      {/* Foreground Section that scrolls over (Our Process) */}
      <div className="relative z-10 w-full">
        {processComponent}
      </div>
    </div>
  );
}
