'use client';
import { motion, type Variants } from 'framer-motion';
import {
  PenTool,
  Star,
  Package,
  Megaphone,
  PieChart,
  Hexagon,
  Briefcase,
  Share2,
  Layout,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Custom Illustrations & Icon Design',
    description: 'We create custom illustrations, mascots, and icon sets that add personality and authenticity to your digital presence.',
    icon: PenTool,
  },
  {
    title: 'Branding',
    description: 'Build consistent brand messaging and visuals that reflect your values and create a memorable experience everywhere.',
    icon: Star,
  },
  {
    title: 'Packaging & Product Design',
    description: 'From food to retail, we design attractive packaging that captures attention and enhances your product\'s appeal.',
    icon: Package,
  },
  {
    title: 'Marketing & Promotional Materials',
    description: 'Engaging brochures, flyers, banners, and posters designed to communicate your message and encourage customer action.',
    icon: Megaphone,
  },
  {
    title: 'Infographics & Data Visualization',
    description: 'Transform complex information into clean, engaging visuals that make your reports and content easier to understand.',
    icon: PieChart,
  },
  {
    title: 'Logo & Brand Identity Design',
    description: 'Create a memorable first impression with custom logos and complete brand identity systems built for consistency.',
    icon: Hexagon,
  },
  {
    title: 'Business Stationery',
    description: 'Professional business cards, letterheads, and presentation templates designed to strengthen your corporate brand.',
    icon: Briefcase,
  },
  {
    title: 'Social Media Graphics',
    description: 'Custom social media creatives designed to increase engagement and conversions across all major platforms.',
    icon: Share2,
  },
  {
    title: 'Website & App UI/UX Design',
    description: 'Modern, user-friendly websites and app interfaces focused on delivering exceptional experiences and higher conversions.',
    icon: Layout,
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 12 },
  },
};

export default function GraphicDesignServices() {
  return (
    <section className="relative w-full bg-white text-[#111111] px-6 py-20 md:py-32 overflow-hidden z-20 rounded-t-[40px] md:rounded-t-[60px] -mt-[40px] md:-mt-[60px]">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-poppins text-3xl md:text-5xl lg:text-[55px] font-bold leading-[1.1] tracking-tight mb-6 text-[#111111]"
          >
            Discover Our Single-Stop <br className="hidden md:block" />
            <em className="eb-garamond font-bold italic text-[#007FFF]">Graphic Design</em> Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-poppins text-base md:text-lg text-[#555555] leading-relaxed font-medium"
          >
            At Hala, we specialize in delivering high-converting graphic designs that combine art with strategy. We don’t use templates—we create original designs tailored to your brand and business goals.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="flex flex-col items-center text-center bg-white p-6 md:p-8 rounded-[32px] border-2 border-[#111111] shadow-[4px_4px_0px_0px_#111111] hover:shadow-[8px_8px_0px_0px_#111111] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-4 text-[#007FFF] transition-colors">
                <service.icon className="w-8 h-8 md:w-10 md:h-10 stroke-[2]" />
              </div>
              <h3 className="font-ebgaramond font-bold text-[20px] md:text-[24px] leading-tight text-[#111111] mb-3">
                {service.title}
              </h3>
              <p className="font-poppins text-[#333333] font-medium text-sm md:text-sm leading-[1.6] flex-grow">
                {service.description}
              </p>
              
              <Link href="/contact" className="mt-6 flex items-center justify-center gap-2 text-sm font-bold text-[#111111] group-hover:underline transition-all">
                Contact Now <ArrowRight className="w-4 h-4 stroke-[2]" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
