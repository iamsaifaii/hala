'use client';

import { motion, useTime, useTransform } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaFacebook, FaXTwitter, FaGoogle } from 'react-icons/fa6';

const icons = [
  { component: FaInstagram, color: '#E1306C' },
  { component: FaLinkedin, color: '#0A66C2' },
  { component: FaFacebook, color: '#1877F2' },
  { component: FaXTwitter, color: '#000000' },
  { component: FaGoogle, color: '#DB4437' },
];

const PERIOD_WIDTH = 1200;
const AMPLITUDE = 120;
const ITEMS_PER_PERIOD = 15;
const NUM_PERIODS = 4;
const TOTAL_WIDTH = PERIOD_WIDTH * NUM_PERIODS;
const MIN_X = -300;
const TWO_PI = 2 * Math.PI;

function IconItem({ index, initialOffset, amplitude }: { index: number; initialOffset: number; amplitude: number }) {
  const time = useTime();
  const { component: Icon, color } = icons[index % icons.length];
  const isTwitter = Icon === FaXTwitter;

  const x = useTransform(time, (t) => {
    const currentX = initialOffset - (t / 1000) * 90;
    return ((currentX - MIN_X) % TOTAL_WIDTH + TOTAL_WIDTH) % TOTAL_WIDTH + MIN_X;
  });

  const y = useTransform(x, (cx) => Math.sin((cx / PERIOD_WIDTH) * TWO_PI) * amplitude);
  const rotation = useTransform(x, (cx) => {
    const d = Math.cos((cx / PERIOD_WIDTH) * TWO_PI) * amplitude * (TWO_PI / PERIOD_WIDTH);
    return Math.atan(d) * (180 / Math.PI);
  });

  return (
    <motion.div
      className="absolute top-1/2 left-0 w-16 h-16 md:w-20 md:h-20 rounded-[20px] md:rounded-[24px] shadow-lg flex items-center justify-center border border-gray-200/20"
      style={{
        x,
        y: useTransform(y, (yVal) => `calc(-50% + ${yVal}px)`),
        rotate: rotation,
        backgroundColor: isTwitter ? '#222' : '#fff',
      }}
    >
      <Icon size={36} className="md:scale-125" style={{ color: isTwitter ? '#fff' : color }} />
    </motion.div>
  );
}

export default function WaveMarquee() {
  const totalItems = ITEMS_PER_PERIOD * NUM_PERIODS;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      
      {/* Mobile Marquee (Straight Line) */}
      <div className="absolute top-0 left-0 w-full h-full translate-y-[140px] md:hidden">
        {Array.from({ length: totalItems }, (_, i) => (
          <IconItem key={`mobile-${i}`} index={i} initialOffset={(i / ITEMS_PER_PERIOD) * PERIOD_WIDTH} amplitude={0} />
        ))}
      </div>

      {/* Desktop Marquee (Wavy Line) */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full translate-y-48">
        {Array.from({ length: totalItems }, (_, i) => (
          <IconItem key={`desktop-${i}`} index={i} initialOffset={(i / ITEMS_PER_PERIOD) * PERIOD_WIDTH} amplitude={120} />
        ))}
      </div>

    </div>
  );
}
