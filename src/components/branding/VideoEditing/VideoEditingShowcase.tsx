'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';

const featuredProjects = [
  { id: 1, title: 'Corporate Vision', category: 'Corporate', image: '/featureimage.jpg' },
  { id: 2, title: 'Brand Anthem', category: 'Commercial', image: '/mainpic.png' },
  { id: 3, title: 'Social Campaign', category: 'Social Media', image: '/brand3.png' },
  { id: 4, title: 'Product Launch', category: 'Commercial', image: '/featureimage.jpg' },
  { id: 5, title: 'Event Highlights', category: 'Events', image: '/mainpic.png' },
];

const thumbnailProjects = [
  { id: 6, title: 'Travel Vlog', category: 'YouTube', image: '/mainpic.png' },
  { id: 7, title: 'Fitness Promo', category: 'Social Media', image: '/brand3.png' },
  { id: 8, title: 'Tech Review', category: 'YouTube', image: '/featureimage.jpg' },
  { id: 9, title: 'Real Estate Tour', category: 'Corporate', image: '/mainpic.png' },
  { id: 10, title: 'Restaurant Ad', category: 'Commercial', image: '/brand3.png' },
  { id: 11, title: 'Music Video', category: 'Entertainment', image: '/featureimage.jpg' },
  { id: 12, title: 'Documentary', category: 'YouTube', image: '/mainpic.png' },
];

export default function VideoEditingShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  const bottomOuterRef = useRef<HTMLDivElement>(null);
  const bottomInnerRef = useRef<HTMLDivElement>(null);
  const [bottomBounds, setBottomBounds] = useState(0);

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (bottomOuterRef.current && bottomInnerRef.current) {
        const outerWidth = bottomOuterRef.current.offsetWidth;
        const innerWidth = bottomInnerRef.current.scrollWidth;
        setBottomBounds(Math.max(0, innerWidth - outerWidth));
      }
    };
    
    // Initial bounds calculation after DOM paints
    setTimeout(handleResize, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    if (activeIndex < featuredProjects.length - 1) setActiveIndex(activeIndex + 1);
  };

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      handleNext();
    } else if (info.offset.x > threshold) {
      handlePrev();
    }
  };

  // Dimensions
  const isMobile = windowWidth < 768;
  const gap = isMobile ? 16 : 32;
  const activeWidth = isMobile ? windowWidth * 0.85 : 900;
  const inactiveWidth = isMobile ? windowWidth * 0.6 : 500;
  
  const activeHeight = isMobile ? activeWidth * 0.6 : 500;
  const inactiveHeight = isMobile ? inactiveWidth * 0.6 : 320;

  const centerOffset = windowWidth / 2;
  const activeItemCenter = activeIndex * (inactiveWidth + gap) + activeWidth / 2;
  const translateX = centerOffset - activeItemCenter;

  const springConfig = { type: 'spring', stiffness: 300, damping: 30 };

  if (!isClient) {
    return <section className="w-full bg-white min-h-[800px]"></section>;
  }

  return (
    <section className="w-full bg-white text-[#111] pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#fcfcfc] to-transparent z-10 pointer-events-none opacity-[0.03]"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 mb-12 md:mb-16 text-center relative z-20">
        <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111] mb-4">
          Featured <span className="eb-garamond italic text-[#007FFF]">Video</span> Projects
        </h2>
        <p className="text-[#555] font-poppins text-sm md:text-base max-w-2xl mx-auto">
          Explore our portfolio of premium video editing work, from high-impact commercial campaigns to engaging social media content.
        </p>
      </div>

      <div className="relative w-full group">
        
        {/* Desktop Navigation Arrows */}
        <button 
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full items-center justify-center text-white border border-white/10 transition-all duration-300 hover:scale-105 ${activeIndex === 0 ? 'opacity-0 cursor-not-allowed' : 'opacity-0 group-hover:opacity-100'}`}
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={handleNext}
          disabled={activeIndex === featuredProjects.length - 1}
          className={`hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full items-center justify-center text-white border border-white/10 transition-all duration-300 hover:scale-105 ${activeIndex === featuredProjects.length - 1 ? 'opacity-0 cursor-not-allowed' : 'opacity-0 group-hover:opacity-100'}`}
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Featured Slider */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] flex items-center">
          <motion.div 
            className="flex items-center absolute left-0"
            animate={{ x: translateX }}
            transition={springConfig}
            drag="x"
            dragConstraints={{ left: translateX, right: translateX }}
            onDragEnd={handleDragEnd}
            dragElastic={0.2}
            style={{ gap: `${gap}px`, touchAction: 'pan-y' }}
          >
            {featuredProjects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.div
                  key={project.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer shrink-0 group ${isActive ? 'z-20 shadow-[0_30px_60px_rgba(0,0,0,0.6)]' : 'z-10 shadow-lg'}`}
                  animate={{
                    width: isActive ? activeWidth : inactiveWidth,
                    height: isActive ? activeHeight : inactiveHeight,
                    opacity: isActive ? 1 : 0.4,
                  }}
                  transition={springConfig}
                >
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 768px) 85vw, 900px"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 pointer-events-none" 
                    priority={index === 0}
                  />
                  
                  {/* Overlay for inactive cards */}
                  <motion.div 
                    className="absolute inset-0 bg-white"
                    animate={{ opacity: isActive ? 0 : 0.6 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Content Overlay for active card */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="absolute inset-0"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                          <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-white mb-3">
                              {project.category}
                            </span>
                            <h3 className="font-poppins text-2xl md:text-4xl font-bold text-white tracking-tight">
                              {project.title}
                            </h3>
                          </motion.div>
                          
                          <motion.button 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-[#007FFF] hover:text-white transition-colors duration-300 w-fit shrink-0 group/btn"
                          >
                            <PlayCircle className="w-5 h-5 group-hover/btn:scale-110 transition-transform" /> Play Reel
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom Thumbnail Strip - Framer Motion */}
      <div className="w-full mt-8 md:mt-12 overflow-hidden" ref={bottomOuterRef}>
        <motion.div 
          ref={bottomInnerRef}
          className="flex gap-4 md:gap-6 px-6 md:px-12 pb-8 cursor-grab active:cursor-grabbing w-max"
          drag="x"
          dragConstraints={{ left: -bottomBounds, right: 0 }}
          dragElastic={0.1}
          style={{ touchAction: 'pan-y' }}
        >
          {thumbnailProjects.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -5 }}
              className="relative w-[240px] md:w-[320px] h-[135px] md:h-[180px] rounded-xl overflow-hidden group border border-white/5 shadow-lg shrink-0"
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                sizes="(max-width: 768px) 240px, 320px"
                className="object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <span className="text-[10px] text-gray-300 font-semibold uppercase tracking-wider block mb-1">
                  {project.category}
                </span>
                <h4 className="text-white font-poppins text-sm md:text-base font-bold truncate">
                  {project.title}
                </h4>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <PlayCircle className="w-10 h-10 text-white drop-shadow-md" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
}
