'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Code2, MonitorPlay, Search, Share2, PenTool, TrendingUp, Mail, MousePointerClick, Smartphone } from 'lucide-react';

export default function MarketingSolutions() {
  const [activeTag, setActiveTag] = useState('SEO');

  const marketingTags = [
    { name: 'SEO', icon: Search },
    { name: 'PPC Ads', icon: MousePointerClick },
    { name: 'Social Media', icon: Share2 },
    { name: 'Content Strategy', icon: PenTool },
    { name: 'Email Campaigns', icon: Mail },
    { name: 'Analytics', icon: TrendingUp },
    { name: 'Web Dev', icon: Code2 },
    { name: 'App Marketing', icon: Smartphone },
    { name: 'Video Marketing', icon: MonitorPlay },
  ];

  return (
    <section className="w-[calc(100%-1.5rem)] md:w-[calc(100%-3rem)] lg:max-w-[1400px] mx-auto bg-[#1a1a1a] px-8 md:px-12 lg:px-16 py-12 md:py-16 relative overflow-hidden rounded-[32px] md:rounded-[40px] my-8 md:my-12">

      {/* Background decorative elements (subtle grain/texture would go here in prod) */}
      <div className="absolute top-0 right-0 w-full h-24 bg-gradient-to-b from-[#f8f6ed] to-transparent opacity-[0.03]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left Column: Headline and Interactive Tags */}
        <div className="flex flex-col z-10">
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-[#f0f0f0] mb-6">
            Marketing Solutions for<br className="hidden md:block" /> <span className="text-white italic pr-4">Businesses</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 font-medium mb-12">
            Select a service to see our expertise in action.
          </p>

          {/* Pill Tags Grid */}
          <div className="flex flex-wrap gap-3 max-w-2xl">
            {marketingTags.map((tag) => {
              const isActive = activeTag === tag.name;
              const Icon = tag.icon;
              return (
                <button
                  key={tag.name}
                  onClick={() => setActiveTag(tag.name)}
                  className={`
                    flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-600 text-sm md:text-base font-semibold transition-all duration-300
                    ${isActive
                      ? 'bg-zinc-100 text-zinc-900 border-zinc-100 shadow-[0_0_15px_rgba(255,255,255,0.15)]'
                      : 'bg-transparent text-zinc-300 hover:border-zinc-400 hover:text-white hover:bg-zinc-800/50'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {tag.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Illustration and Description */}
        <div className="flex flex-col gap-12 z-10">

          {/* Custom Image Illustration */}
          <div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto select-none rounded-[32px] overflow-hidden drop-shadow-2xl">
            <Image 
              src="/pic.webp" 
              alt="Marketing Illustration" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>

          {/* Description Text & CTA */}
          <div className="flex flex-col bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 backdrop-blur-sm">
            <h3 className="font-serif text-3xl text-white mb-4">
              One agency. <span className="italic text-zinc-300">Complete growth.</span>
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-8">
              At Hala Smart Technologies, we specialize in delivering digital marketing services to help your business grow and stand out in today's competitive market. From result-driven SEO services and high-performing PPC campaigns to creative content marketing and strategic social media management, we cover all aspects of online growth.
            </p>
            <button className="flex items-center justify-center gap-3 w-full sm:w-auto bg-white text-black font-bold py-4 px-8 rounded-xl hover:bg-zinc-200 transition-colors self-start shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <Search className="w-5 h-5" />
              Get a Free Audit
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
