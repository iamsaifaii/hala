'use client';

import { motion, Variants } from 'framer-motion';
import { Grid2X2 } from 'lucide-react';

// ─── Shared class constants ───────────────────────────
const ctaBtn =
  'flex items-center justify-center gap-2 py-2.5 px-6 ' +
  'bg-[#111] text-white rounded-xl text-sm sm:text-[15px] ' +
  'font-semibold cursor-pointer transition-colors duration-150 ' +
  'mb-5 shadow-md hover:bg-[#2a2a2a]';

// ─── Animation Variants ───────────────────────────────
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 18,
    },
  },
};

export default function Hero() {
  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center justify-center text-center px-4 sm:px-6 w-full pt-12 pb-8 sm:pt-16 sm:pb-12 md:pt-20 md:pb-16 bg-white"
    >

      <motion.h1 
        variants={itemVariants}
        className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px] font-extrabold leading-[1.08] tracking-[-1.5px] mb-5 max-w-[900px] w-full"
      >
        <span className="text-[#111] font-semibold">
          <em className="eb-garamond  ">Scale</em>{' '}
          your brand</span>{' '}


        <span className="text-[#111] font-semibold">dominate
          {' '}
          <em className="eb-garamond font-semibold">the market</em>
        </span>
      </motion.h1>

      <motion.p 
        variants={itemVariants}
        className="text-sm sm:text-base md:text-lg text-[#555] leading-relaxed mb-6 max-w-[380px]"
      >
        The digital marketing agency that turns clicks into customers.
      </motion.p>

      <motion.button 
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={ctaBtn}
      >
        <Grid2X2 size={16} />
        Get a Free Consultation
      </motion.button>

      <motion.p 
        variants={itemVariants}
        className="text-xs text-[#888] tracking-widest font-medium uppercase"
      >
        SEO • PPC • Social Media • Content Marketing
      </motion.p>

    </motion.section>
  );
}
