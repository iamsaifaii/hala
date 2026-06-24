import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import WaveMarquee from '@/components/WaveMarquee/WaveMarquee';
import MarketingSolutions from '@/components/MarketingSolutions/MarketingSolutions';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <div className="font-sans bg-white text-[#111]">
      <Navbar />
      <main>
        <Hero />
        <WaveMarquee />
        <MarketingSolutions />
      </main>
      <Footer />
    </div>
  );
}
