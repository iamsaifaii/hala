import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function BrandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-sans bg-white text-[#111]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
