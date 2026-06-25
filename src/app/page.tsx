import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import WaveMarquee from '@/components/WaveMarquee/WaveMarquee';
import MarketingSolutions from '@/components/MarketingSolutions/MarketingSolutions';
import OurServices from '@/components/OurServices/OurServices';
import IndustriesWeCover from '@/components/IndustriesWeCover/IndustriesWeCover';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <div className="font-sans bg-white text-[#111]">
      <Navbar />
      <main>
        <Hero />
        <WaveMarquee />
        <MarketingSolutions />
        <OurServices />
        <IndustriesWeCover />
      </main>
      <Footer />
    </div>
  );
}
