'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { GripVertical } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement> | PointerEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    } else {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    }
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging]);

  return (
    <section className="w-full">
      <div 
        ref={containerRef}
        className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden cursor-ew-resize bg-gray-100 select-none touch-none"
        onPointerDown={(e) => {
          setIsDragging(true);
          handlePointerMove(e);
        }}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image 
            src={afterImage}
            alt="Brand After"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* Before Image (Foreground, Clipped) */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          {/* Apply a grayscale filter if the images are the same for demo purposes */}
          <div className="absolute inset-0 filter grayscale contrast-75 brightness-110">
            <Image 
              src={beforeImage}
              alt="Brand Before"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          {/* Label Before */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#111] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            Before
          </div>
        </div>

        {/* Label After */}
        <div className="absolute top-4 right-4 bg-[#111]/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm pointer-events-none">
          After
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 transition-transform duration-75"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.3)] border-2 border-[#111]">
            <GripVertical size={20} className="text-[#111]" />
          </div>
        </div>
      </div>
    </section>
  );
}
