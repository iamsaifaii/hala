import VideoEditing from '@/components/branding/VideoEditing/VideoEditing';
import VideoEditingShowcase from '@/components/branding/VideoEditing/VideoEditingShowcase';
import VideoEditingDetails from '@/components/branding/VideoEditing/VideoEditingDetails';
import VideoEditingServices from '@/components/branding/VideoEditing/VideoEditingServices';
import VideoEditingStandOut from '@/components/branding/VideoEditing/VideoEditingStandOut';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const Testimonials = dynamic(() => import('@/components/Testimonials/Testimonials'));
const BrandingFAQ = dynamic(() => import('@/components/branding/BrandingFAQ'));
const BrandingBlogs = dynamic(() => import('@/components/branding/BrandingBlogs'));

export const metadata: Metadata = {
  title: 'Video Editing | Branding | Hala Technologies',
  description: 'High-quality video editing services.',
};

export default function VideoEditingPage() {
  return (
    <div className="w-full">
      <VideoEditing />
      <VideoEditingShowcase />
      <VideoEditingDetails />
      <VideoEditingServices />
      <VideoEditingStandOut />
      <Testimonials straightBottomCorners={true} />
      <BrandingFAQ />
      <BrandingBlogs />
    </div>
  );
}
