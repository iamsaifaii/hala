import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar/Navbar';
import AboutHero from '@/components/About/AboutHero';
import AboutSolutions from '@/components/About/AboutSolutions';

const InteractiveSection = dynamic(() => import('@/components/InteractiveSection/InteractiveSection'));
const AboutValues = dynamic(() => import('@/components/About/AboutValues'));
const OurTeam = dynamic(() => import('@/components/About/OurTeam'));
const OutroMessage = dynamic(() => import('@/components/About/OutroMessage'));
const Footer = dynamic(() => import('@/components/Footer/Footer'));

export const metadata: Metadata = {
  title: 'About Us | Hala Technology',
  description: 'Privacy first. Security always. Trusted by teams who put security first.',
};

export default function AboutPage() {
  return (
    <div className="font-sans bg-[#111111] text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <AboutHero />
        <AboutSolutions />
        <div className="bg-white w-full">
          <InteractiveSection />
        </div>
        <AboutValues />
        <OurTeam />
        <OutroMessage />
      </main>
      <div className="bg-white w-full relative z-20">
        <Footer />
      </div>
    </div>
  );
}
