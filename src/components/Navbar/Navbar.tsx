'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ChevronDown, Grid2X2, Search, MousePointerClick,
  Share2, PenTool, LayoutTemplate, BarChart3, Menu, X,
} from 'lucide-react';

// ─── Type definitions ──────────────────────────────────
interface ServiceItem {
  Icon: React.ElementType;
  title: string;
  desc: string;
}

// ─── Data constants ────────────────────────────────────
const SERVICES: ServiceItem[] = [
  { Icon: Search, title: 'Search Engine Optimization', desc: 'Rank higher and get more organic traffic' },
  { Icon: MousePointerClick, title: 'Pay-Per-Click Advertising', desc: 'Targeted ads to boost your sales instantly' },
  { Icon: Share2, title: 'Social Media Marketing', desc: 'Build your community and engage audiences' },
  { Icon: PenTool, title: 'Content Creation', desc: 'Compelling content that drives conversions' },
  { Icon: LayoutTemplate, title: 'Web Development', desc: 'Fast, modern, and responsive websites' },
  { Icon: BarChart3, title: 'Analytics & Reporting', desc: 'Data-driven insights for continuous growth' },
];

const SIMPLE_NAV_LINKS = ['Case Studies', 'About Us', 'Contact'];

// ─── Sub-components ────────────────────────────────────
function ServiceLink({ Icon, title, desc }: ServiceItem) {
  return (
    <a href="#" className="flex items-start gap-4 no-underline text-inherit transition-opacity duration-150 hover:opacity-60">
      <div className="mt-[2px] text-[#333]"><Icon size={18} /></div>
      <div>
        <div className="text-[14.5px] font-semibold text-[#111] mb-1">{title}</div>
        <div className="text-[13px] text-[#666] leading-[1.4]">{desc}</div>
      </div>
    </a>
  );
}

// ─── Main component ────────────────────────────────────
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for dynamic blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    // Check initial position and attach listener
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to prevent bugs
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Shared classes for navigation buttons
  const navBtnClass = 'flex items-center gap-[3px] text-[13.5px] font-medium text-[#444] bg-transparent border-none cursor-pointer transition-[color,background] duration-150 whitespace-nowrap py-2 px-3 rounded-lg hover:text-[#111] hover:bg-[#f4f4f4] w-full md:w-auto text-left';

  // Shared helper for dropdown panels
  const getDropdownClass = (isOpen: boolean, isMobile: boolean) => {
    const base = 'flex-col gap-4';
    if (isMobile) {
      return `${isOpen ? 'flex' : 'hidden'} ${base} w-full pl-3 mt-2 border-l-2 border-[#f0f0f0]`;
    }
    return `${isOpen ? 'flex' : 'hidden'} md:group-hover:flex ${base} absolute top-[calc(100%+10px)] left-0 bg-white border-[1.5px] border-[#111] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] w-[360px] p-6 z-[100] before:absolute before:content-[""] before:w-full before:h-[20px] before:-top-[20px] before:left-0`;
  };

  // Reusable NavLinks function so we can render it differently for mobile vs desktop
  const renderNavLinks = (isMobile = false) => (
    <ul className={`flex ${isMobile ? 'flex-col items-start w-full gap-2' : 'flex-row items-center gap-4'} list-none m-0 p-0`}>
      {/* Services */}
      <li className={`relative group ${isMobile ? 'w-full' : ''}`}>
        <button className={navBtnClass} onClick={() => setServicesOpen(!servicesOpen)}>
          Services
          <ChevronDown size={14} className={`transition-transform duration-200 ${!isMobile ? 'group-hover:rotate-180' : ''} ${servicesOpen ? 'rotate-180' : ''}`} />
        </button>
        <div className={getDropdownClass(servicesOpen, isMobile)}>
          <div className="text-[11px] font-semibold text-[#666] tracking-[0.5px] uppercase mb-[2px]">OUR SERVICES</div>
          {SERVICES.map(item => <ServiceLink key={item.title} {...item} />)}
        </div>
      </li>

      {/* Simple links */}
      {SIMPLE_NAV_LINKS.map(label => (
        <li key={label} className={isMobile ? 'w-full' : ''}>
          <button className={navBtnClass}>{label}</button>
        </li>
      ))}

      {/* Resources */}
      <li className={`relative group ${isMobile ? 'w-full' : ''}`}>
        <button className={navBtnClass} onClick={() => setResourcesOpen(!resourcesOpen)}>
          Resources
          <ChevronDown size={14} className={`transition-transform duration-200 ${!isMobile ? 'group-hover:rotate-180' : ''} ${resourcesOpen ? 'rotate-180' : ''}`} />
        </button>
        <div className={getDropdownClass(resourcesOpen, isMobile)}>
          <div className="text-[11px] font-semibold text-[#666] tracking-[0.5px] uppercase mb-[2px]">OUR RESOURCES</div>
          <a href="#" className="flex items-start gap-4 no-underline text-inherit transition-opacity duration-150 hover:opacity-60">
            <div>
              <div className="text-[14.5px] font-semibold text-[#111] mb-1">Blog</div>
              <div className="text-[13px] text-[#666] leading-[1.4]">Latest news and articles</div>
            </div>
          </a>
        </div>
      </li>
    </ul>
  );

  return (
    <header className="flex flex-col items-center pt-5 px-4 sm:px-6 sticky top-0 z-[9999] w-full">
      {/* 
        Main navbar container.
        Notice there is NO background color on the nav itself to ensure perfect layering.
      */}
      <nav
        className={`flex items-center justify-between border border-[#e5e5e5] rounded-xl py-3 px-4 sm:px-5 w-full max-w-[1080px] shadow-sm relative transition-all duration-300`}
      >
        {/* 
          Background Layer: Absolute sibling
          This dynamically applies the blur only on scroll WITHOUT causing Safari clipping bugs on the nav content!
        */}
        <div className={`absolute inset-0 rounded-xl -z-10 pointer-events-none transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-white'}`} />

        {/* Logo */}
        <div className="flex items-center gap-2.5 z-10">
          <Image src="/halalogo.png" alt="Hala Logo" width={80} height={26} style={{ width: 'auto', height: '26px' }} priority />
          <span className="font-poppins text-[15px] font-bold tracking-[-0.3px] text-[#111] whitespace-nowrap">Hala Technology</span>
        </div>

        {/* Desktop Nav (Hidden on Mobile) */}
        <div className="hidden md:flex md:flex-row md:items-center md:gap-4 w-full justify-end z-10">
          {renderNavLinks()}
          <div className="w-px h-8 bg-[#e0e0e0] mx-2" />
          <button className="flex items-center justify-center gap-[7px] py-2.5 px-5 bg-[#111] text-white rounded-lg text-[13.5px] font-semibold cursor-pointer transition-colors hover:bg-[#333] shadow-sm">
            <Grid2X2 size={16} />
            Lets Talk
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden z-10">
          <button
            type="button"
            className="flex items-center justify-center bg-transparent border-none cursor-pointer text-[#111] p-2 outline-none"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(!menuOpen);
            }}
            aria-expanded={menuOpen}
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* 
        Mobile Menu Dropdown
        Rendered COMPLETELY OUTSIDE the nav container to absolutely guarantee no z-index or clipping bugs.
      */}
      {menuOpen && (
        <div className="md:hidden absolute top-[calc(100%+15px)] left-4 right-4 bg-white border border-[#e5e5e5] rounded-[18px] shadow-lg z-[9999] p-6 flex flex-col items-start gap-4">
          {renderNavLinks(true)}
          <div className="w-full h-px bg-[#e0e0e0] my-1" />
          <button className="flex items-center justify-center gap-[7px] py-2.5 px-5 bg-[#111] text-white rounded-lg text-[13.5px] font-semibold cursor-pointer w-full transition-colors hover:bg-[#333] shadow-sm">
            <Grid2X2 size={16} />
            Lets Talk
          </button>
        </div>
      )}
    </header>
  );
}
