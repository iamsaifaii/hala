import BrandingHeroSection from '@/components/branding/BrandingHeroSection';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const BrandingShowcase = dynamic(() => import('@/components/branding/BrandingShowcase'));
const BrandingServices = dynamic(() => import('@/components/branding/BrandingServices'));
const BrandingExpertise = dynamic(() => import('@/components/branding/BrandingExpertise'));

export const metadata: Metadata = {
  title: 'Branding | Hala Technologies',
  description: 'Build a memorable brand with custom logos, brand identity, and strategy that help your business stand out and grow.',
};

export default function BrandingPage() {
  return (
    <div className="w-full">
      <BrandingHeroSection />
      
      {/* Branding Showcase Section */}
      <BrandingShowcase />
      
      {/* Branding Services Section */}
      <BrandingServices />
      
      {/* Branding Expertise Section */}
      <BrandingExpertise />
    </div>
  );
}
