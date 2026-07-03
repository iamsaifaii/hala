import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import MarketingSolutions from '@/components/MarketingSolutions/MarketingSolutions';

const OurServices = dynamic(() => import('@/components/OurServices/OurServices'));
const IndustriesWeCover = dynamic(() => import('@/components/IndustriesWeCover/IndustriesWeCover'));
const WhyChooseHala = dynamic(() => import('@/components/WhyChooseHala/WhyChooseHala'));
const OurJourney = dynamic(() => import('@/components/OurJourney/OurJourney'));
const OurProcess = dynamic(() => import('@/components/OurProcess/OurProcess'));
const Testimonials = dynamic(() => import('@/components/Testimonials/Testimonials'));
const Footer = dynamic(() => import('@/components/Footer/Footer'));

export const metadata: Metadata = {
  title: 'Hala Technology | Digital Marketing & Web Development',
  description:
    'Scale your brand and dominate the market with Hala Technology. The digital marketing agency that turns clicks into customers with SEO, PPC, and Web Development.',
  openGraph: {
    title: 'Hala Technology | Digital Marketing & Web Development',
    description:
      'Scale your brand and dominate the market with Hala Technology. The digital marketing agency that turns clicks into customers with SEO, PPC, and Web Development.',
    url: 'https://halatechnologies.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hala Technology | Digital Marketing & Web Development',
    description:
      'Scale your brand and dominate the market with Hala Technology. The digital marketing agency that turns clicks into customers with SEO, PPC, and Web Development.',
  },
  alternates: {
    canonical: 'https://halatechnologies.com',
  },
};
export default function Home() {
  return (
    <div className="font-sans bg-[#111111] text-[#111]">
      <Navbar />
      <main className="bg-[#111111]">
        <Hero />
        <MarketingSolutions />
        <OurServices />
        <IndustriesWeCover />
        <WhyChooseHala />
        <OurJourney />
        <OurProcess />
        <Testimonials />
      </main>
      <div className="bg-white pt-16 md:pt-24 pb-0">
        <Footer />
      </div>
    </div>
  );
}
