import BrandingHeroSection from '@/components/branding/BrandingHeroSection';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const BeforeAfterSlider = dynamic(() => import('@/components/branding/BeforeAfterSlider/BeforeAfterSlider'));

export const metadata: Metadata = {
  title: 'Branding | Hala Technologies',
  description: 'Build a memorable brand with custom logos, brand identity, and strategy that help your business stand out and grow.',
};

export default function BrandingPage() {
  return (
    <div className="w-full">
      <BrandingHeroSection />
      
      {/* Before & After Image Slider Section */}
      <BeforeAfterSlider 
        beforeImage="/3.png" 
        afterImage="/3.png" 
      />
      
      {/* Additional branding sections will go here */}
    </div>
  );
}
