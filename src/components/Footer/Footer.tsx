import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 lg:px-20 pt-20 pb-8 bg-black flex flex-col gap-16 md:gap-32">
      
      {/* Top Navigation Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-8 max-w-7xl w-full mx-auto">
        
        {/* Company Column */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-serif text-3xl md:text-4xl text-zinc-400 mb-2">Company</h3>
          <a href="#" className="font-medium text-[15px] text-zinc-300 hover:text-white transition-colors">About</a>
          <a href="#" className="font-medium text-[15px] text-zinc-300 hover:text-white transition-colors group flex items-center w-max">
            Careers 
            <ArrowRight className="w-4 h-4 ml-1 opacity-40 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300" />
          </a>
          <a href="#" className="font-medium text-[15px] text-zinc-300 hover:text-white transition-colors">Trust Center</a>
          <a href="#" className="font-medium text-[15px] text-zinc-300 hover:text-white transition-colors">Become an Affiliate</a>
          <a href="#" className="font-medium text-[15px] text-zinc-300 hover:text-white transition-colors">Media Kit</a>
        </div>

        {/* Services Column (Replaced Product) */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-serif text-3xl md:text-4xl text-zinc-400 mb-2">Services</h3>
          <a href="#" className="font-medium text-[15px] text-zinc-300 hover:text-white transition-colors">SEO Optimization</a>
          <a href="#" className="font-medium text-[15px] text-zinc-300 hover:text-white transition-colors">Social Media Marketing</a>
          <a href="#" className="font-medium text-[15px] text-zinc-300 hover:text-white transition-colors">PPC Campaigns</a>
          <a href="#" className="font-medium text-[15px] text-zinc-300 hover:text-white transition-colors">Content Creation</a>
          <a href="#" className="font-medium text-[15px] text-zinc-300 hover:text-white transition-colors">Web Development</a>
        </div>

        {/* Resources Column */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-serif text-3xl md:text-4xl text-zinc-400 mb-2">Resources</h3>
          <a href="#" className="font-medium text-[15px] text-zinc-300 hover:text-white transition-colors">Marketing Blog</a>
          <a href="#" className="font-medium text-[15px] text-zinc-300 hover:text-white transition-colors">Free SEO Audit</a>
          <a href="#" className="font-medium text-[15px] text-zinc-300 hover:text-white transition-colors">Industry Reports</a>
          <a href="#" className="font-medium text-[15px] text-zinc-300 hover:text-white transition-colors">Talk to Experts</a>
          <a href="#" className="font-medium text-[15px] text-zinc-300 hover:text-white transition-colors">Help Center</a>
        </div>
      </div>

      {/* Bottom Giant Brand Section */}
      <div className="w-full flex flex-col justify-end mx-auto">
        <div className="flex items-end gap-[3vw]">
          
          {/* SVG Logo Icon (Fluid sizing based on viewport width) */}
          <svg 
            viewBox="0 0 100 120" 
            className="w-[18vw] md:w-[10vw] fill-white shrink-0 mb-[1vw]"
            aria-hidden="true"
          >
            {/* Using tall rounded rectangles to mimic the bar chart logo */}
            <rect x="0" y="0" width="18" height="120" rx="9" />
            <rect x="27" y="50" width="18" height="70" rx="9" />
            <rect x="54" y="30" width="18" height="90" rx="9" />
            <rect x="81" y="0" width="18" height="120" rx="9" />
          </svg>

          {/* Giant Wordmark */}
          <h1 className="text-[24vw] md:text-[18vw] font-bold leading-[0.75] tracking-tighter text-white m-0 p-0">
            Hala
          </h1>
        </div>
        
        {/* Optional bottom meta/copyright bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} Hala Technology. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
