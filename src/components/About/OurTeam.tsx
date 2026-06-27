'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    id: 5,
    name: 'Taimoor Ali Warraich',
    role: 'Co-Founder',
    description: 'Leads the company vision and strategy, ensuring we deliver exceptional value to our clients.',
    image: '/Team pics/Ceo.jpg',
  },
  {
    id: 1,
    name: 'Saif Ali',
    role: 'UI/UX & Web Developer',
    description: 'Designs and builds intuitive digital experiences with cutting-edge web technologies.',
    image: '/Team pics/Ui Ux & Web devloepr.jpg',
  },
  {
    id: 2,
    name: 'Rimza Habib',
    role: 'SEO Manager',
    description: 'Expert in search engine algorithms, ensuring our clients rank at the top of their industries.',
    image: '/Team pics/Seo manager.jpg',
  },
  {
    id: 6,
    name: 'Hasnain Akbar',
    role: 'SEO Expert',
    description: 'Specializes in on-page and off-page optimization to maximize organic search visibility.',
    image: '/Team pics/seo expert.jpg',
  },
  {
    id: 3,
    name: 'Chaman shafique',
    role: 'Content Writer',
    description: 'Crafts compelling brand narratives and drives engagement through impactful content marketing.',
    image: '/Team pics/Contetn writer.jpg',
  },
  {
    id: 4,
    name: 'Abdur Rafay',
    role: 'Video Editor',
    description: 'Brings stories to life through dynamic, high-quality video content and motion graphics.',
    image: '/Team pics/videoeditor.jpg',
  },
];

function TeamCard({ member }: { member: typeof teamMembers[0] }) {
  return (
    <div className="flex flex-col bg-[#1a1a1a] rounded-[24px] overflow-hidden border border-[#2a2a2a] w-[240px] sm:w-[280px] md:w-[320px] shrink-0 text-left">
      {/* Image Placeholder */}
      <div className="w-full aspect-square sm:aspect-[4/3] bg-[#1a1a1a] relative overflow-hidden flex items-center justify-center">
        {member.image.includes('placeholder') ? (
          <div className="text-[#555] font-poppins text-sm tracking-widest uppercase">
            Image {member.id}
          </div>
        ) : (
          <Image src={member.image} alt={member.name} fill className="object-contain object-center" />
        )}
      </div>
      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <h3 className="font-poppins font-bold text-lg md:text-xl text-white mb-1">
          {member.name}
        </h3>
        <p className="font-poppins text-white/50 text-[11px] md:text-xs font-semibold uppercase tracking-wider mb-2">
          {member.role}
        </p>
        <p className="font-poppins text-[#aaaaaa] text-[11px] md:text-xs leading-relaxed flex-grow whitespace-normal">
          {member.description}
        </p>
      </div>
    </div>
  );
}

export default function OurTeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scale down and fade slightly as the user scrolls past
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <div ref={containerRef} className="relative h-[130vh] bg-white">
      <motion.section
        style={{ scale, opacity }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#111111] rounded-t-[40px] sm:rounded-t-[60px]"
      >
        <div className="w-full max-w-[1600px] mx-auto flex flex-col items-center pt-8 md:pt-12 pb-8">

          {/* Header */}
          <div className="text-center mb-8 md:mb-12 w-full px-4">
            <p className="font-poppins text-xs md:text-sm font-bold tracking-[3px] uppercase text-[#666] mb-3">
              Meet The Experts
            </p>
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.05] tracking-tight text-white">
              Our <span className="eb-garamond italic font-normal text-white">Marketing</span> Team
            </h2>
          </div>

          {/* Marquee Wrapper */}
          <div className="w-full relative flex items-center overflow-hidden py-4">
            {/* Track 1 */}
            <div className="flex items-center gap-6 md:gap-8 px-3 md:px-4 animate-marquee min-w-max shrink-0">
              {teamMembers.map((member, idx) => (
                <TeamCard key={`first-${member.id}-${idx}`} member={member} />
              ))}
            </div>

            {/* Track 2 */}
            <div className="flex items-center gap-6 md:gap-8 px-3 md:px-4 animate-marquee min-w-max shrink-0" aria-hidden="true">
              {teamMembers.map((member, idx) => (
                <TeamCard key={`second-${member.id}-${idx}`} member={member} />
              ))}
            </div>
          </div>

        </div>
      </motion.section>
    </div>
  );
}