import GraphicDesign from '@/components/branding/GraphicDesign/GraphicDesign';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Graphic Design | Branding | Hala Technologies',
  description: 'Stunning visual graphic design services.',
};

export default function GraphicDesignPage() {
  return (
    <div className="w-full">
      <GraphicDesign />
    </div>
  );
}
