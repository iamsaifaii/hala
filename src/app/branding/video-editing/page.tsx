import VideoEditing from '@/components/branding/VideoEditing/VideoEditing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Editing | Branding | Hala Technologies',
  description: 'High-quality video editing services.',
};

export default function VideoEditingPage() {
  return (
    <div className="w-full">
      <VideoEditing />
    </div>
  );
}
