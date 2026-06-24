'use client';
import React, { useState } from 'react';
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
    <section className="w-full bg-[#1a1a1a] px-6 md:px-12 lg:px-20 py-24 md:py-32 relative overflow-hidden">
      
      {/* Background decorative elements (subtle grain/texture would go here in prod) */}
      <div className="absolute top-0 right-0 w-full h-24 bg-gradient-to-b from-[#f8f6ed] to-transparent opacity-[0.03]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Headline and Interactive Tags */}
        <div className="flex flex-col z-10">
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-[#f0f0f0] mb-6">
            Marketing Solutions <br className="hidden md:block" />
            for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d1b8e0] to-[#b3d4ff] italic pr-4">Businesses</span>
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
          
          {/* Custom SVG Illustration (Emulating the playful style) */}
          <div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto select-none">
            <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
              {/* Decorative blob backgrounds */}
              <path d="M 50 200 C 50 100, 150 50, 250 80 C 350 110, 380 200, 320 280 C 260 360, 100 350, 50 200 Z" fill="#2a2a2a" />
              <path d="M 80 250 C 60 150, 200 100, 280 180 C 360 260, 300 350, 200 330 C 100 310, 100 350, 80 250 Z" fill="#d1b8e0" />
              
              {/* Stylized Laptop/Dashboard */}
              <g transform="translate(140, 80) rotate(15)">
                <rect x="0" y="0" width="160" height="110" rx="12" fill="#1e1e1e" stroke="#f0f0f0" strokeWidth="8"/>
                {/* Screen Content - Analytics lines */}
                <line x1="20" y1="30" x2="60" y2="30" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round"/>
                <line x1="80" y1="30" x2="140" y2="30" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round"/>
                <line x1="20" y1="50" x2="100" y2="50" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round"/>
                <line x1="120" y1="50" x2="140" y2="50" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round"/>
                <line x1="20" y1="70" x2="50" y2="70" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round"/>
                <line x1="70" y1="70" x2="120" y2="70" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round"/>
                
                {/* Keyboard Base */}
                <path d="M -10 115 L 170 115 L 190 170 L -30 170 Z" fill="#f0f0f0" />
                {/* Keyboard Grid Lines */}
                <g stroke="#1e1e1e" strokeWidth="3" opacity="0.8">
                  <line x1="-5" y1="130" x2="165" y2="130" />
                  <line x1="-15" y1="145" x2="175" y2="145" />
                  <line x1="-25" y1="160" x2="185" y2="160" />
                  
                  <line x1="20" y1="115" x2="10" y2="170" />
                  <line x1="50" y1="115" x2="45" y2="170" />
                  <line x1="80" y1="115" x2="80" y2="170" />
                  <line x1="110" y1="115" x2="115" y2="170" />
                  <line x1="140" y1="115" x2="150" y2="170" />
                </g>
              </g>

              {/* Floating "Growth" Bubble */}
              <g transform="translate(280, 50)">
                <path d="M 0 30 C -10 0, 30 -20, 70 -10 C 110 0, 110 40, 80 60 C 50 80, 20 80, 5 60 C -10 40, 0 80, -20 90 C -10 70, 0 45, 0 30 Z" fill="#f4a261"/>
                <path d="M 15 25 Q 30 10 45 25 T 75 25" fill="none" stroke="#1e1e1e" strokeWidth="6" strokeLinecap="round"/>
              </g>

              {/* Floating Analytics Bubble */}
              <g transform="translate(40, 70) rotate(-10)">
                 <path d="M 10 40 C 0 10, 40 -10, 80 10 C 120 30, 110 70, 80 90 C 50 110, 20 110, 5 90 C -10 70, 0 110, -20 120 C -10 100, 0 75, 10 40 Z" fill="#e9ecef"/>
                 <rect x="20" y="30" width="8" height="40" rx="4" fill="#1e1e1e"/>
                 <rect x="40" y="15" width="8" height="55" rx="4" fill="#1e1e1e"/>
                 <rect x="60" y="45" width="8" height="25" rx="4" fill="#1e1e1e"/>
                 <rect x="80" y="25" width="8" height="45" rx="4" fill="#1e1e1e"/>
              </g>
            </svg>
          </div>

          {/* Description Text & CTA */}
          <div className="flex flex-col bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 backdrop-blur-sm">
            <h3 className="font-serif text-3xl text-white mb-4">
              One agency. <span className="italic text-zinc-300">Complete growth.</span>
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-8">
              At Hala Smart Technologies, we specialize in delivering digital marketing services to help your business grow and stand out in today's competitive market. From result-driven SEO services and high-performing PPC campaigns to creative content marketing and strategic social media management, we cover all aspects of online growth.
            </p>
            <button className="flex items-center justify-center gap-3 w-full sm:w-auto bg-[#d1b8e0] text-zinc-950 font-bold py-4 px-8 rounded-xl hover:bg-white transition-colors self-start shadow-[0_0_20px_rgba(209,184,224,0.3)]">
              <Search className="w-5 h-5" />
              Get a Free Audit
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
