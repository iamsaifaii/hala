import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import AboutHero from '@/components/About/AboutHero';
import AboutSolutions from '@/components/About/AboutSolutions';
import AboutValues from '@/components/About/AboutValues';
import OurTeam from '@/components/About/OurTeam';
import OutroMessage from '@/components/About/OutroMessage';
import InteractiveSection from '@/components/InteractiveSection/InteractiveSection';
import { Metadata } from 'next';

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
