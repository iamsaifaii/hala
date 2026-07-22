import { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Website from '@/components/WebsiteDevelopment/Website';
import WebDesignShowcase from '@/components/WebsiteDevelopment/WebDesignShowcase';
import TrustedSection from '@/components/WebsiteDevelopment/TrustedSection';
import WebsiteServices from '@/components/WebsiteDevelopment/WebsiteServices';
import FeaturedWork from '@/components/WebsiteDevelopment/FeaturedWork';
import WebDesignGrowth from '@/components/WebsiteDevelopment/WebDesignGrowth';
import ProcessSection from '@/components/WebsiteDevelopment/ProcessSection';
import Testimonials from '@/components/Home/Testimonials/Testimonials';
import BrandingFAQ from '@/components/branding/BrandingFAQ';
import BrandingBlogs from '@/components/branding/BrandingBlogs';
import Footer from '@/components/Home/Footer';

export const metadata: Metadata = {
  title: 'Website Development | Hala Technology',
  description:
    'We build B2B websites that drive growth. Strategy, design, and performance unified for measurable ROI.',
  openGraph: {
    title: 'Website Development | Hala Technology',
    description:
      'We build B2B websites that drive growth. Strategy, design, and performance unified for measurable ROI.',
    url: 'https://halatechnologies.com/website-development',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development | Hala Technology',
    description:
      'We build B2B websites that drive growth. Strategy, design, and performance unified for measurable ROI.',
  },
  alternates: {
    canonical: 'https://halatechnologies.com/website-development',
  },
};

export default function WebsiteDevelopmentPage() {
  return (
    <div className="font-sans bg-[#111111] text-[#111] overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full">
        <Website />
        <TrustedSection />
        <WebsiteServices />
        <FeaturedWork />
        <WebDesignGrowth />
        <ProcessSection />
        <WebDesignShowcase />
        <Testimonials />
        <BrandingFAQ />
        <BrandingBlogs />
      </main>
      <div className="bg-white w-full relative z-20">
        <Footer />
      </div>
    </div>
  );
}
