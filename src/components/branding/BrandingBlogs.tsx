'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const blogs = [
  {
    category: "Best SEO Company in UAE",
    title: "Best SEO Company in UAE | Across All Emirates",
    author: "Hala Team",
    excerpt: "In a marketplace as competitive as the UAE, where over 5.5 million people are active internet users, and Dubai alone hosts tens of thousands of...",
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "Local SEO Services in Dubai",
    title: "How to Get More Leads from Local SEO Services in Dubai?",
    author: "Hala Team",
    excerpt: "If your business is struggling to generate consistent leads online, Local SEO can become one of the most powerful marketing channels available...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "Bilingual SEO Dubai",
    title: "How Can a Dubai-Based Company Optimize Its Website for Both Arabic and English Search Queries?",
    author: "Hala Team",
    excerpt: "Dubai runs on two languages. Arabic defines the cultural identity of the UAE, and English drives international business across every major sector...",
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=800&auto=format&fit=crop"
  }
];

export default function BrandingBlogs() {
  return (
    <section className="w-full bg-white text-[#111111] py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-poppins text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-6 text-[#111111]">
            Explore Our Blog
          </h2>
          <p className="font-poppins text-lg md:text-xl text-[#555555] max-w-[800px] mx-auto leading-relaxed font-medium">
            Stay informed with the latest marketing trends, expert tips, and proven strategies. From social media optimization and SEO techniques to brand development and advertising insights, we provide the knowledge you need to drive smarter and more effective business growth.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col bg-white text-[#111111] rounded-[32px] overflow-hidden border-2 border-[#111111] shadow-[4px_4px_0px_0px_#111111] hover:shadow-[8px_8px_0px_0px_#111111] hover:-translate-y-1 transition-all duration-300 aspect-square"
            >
              {/* Image Container */}
              <div className="relative w-full h-[50%] overflow-hidden bg-[#222222] border-b-2 border-[#111111] shrink-0">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="font-poppins text-[10px] font-bold uppercase tracking-widest bg-[#111111] text-white px-3 py-1.5 rounded-full border border-[#111111]">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-5 md:p-6 overflow-hidden">
                <div className="flex items-center gap-2 mb-3 shrink-0">
                  <span className="w-1 h-1 rounded-full bg-[#111111]"></span>
                  <span className="font-poppins text-[11px] font-semibold uppercase tracking-wider text-[#555555]">
                    By {blog.author}
                  </span>
                </div>

                <h3 className="font-poppins text-lg md:text-[20px] font-bold leading-tight text-[#111111] mb-2 group-hover:text-[#007FFF] transition-colors duration-300 line-clamp-2 shrink-0">
                  {blog.title}
                </h3>

                <p className="font-poppins text-[13px] md:text-sm text-[#333333] leading-[1.6] font-medium mb-4 line-clamp-2 flex-grow">
                  {blog.excerpt}
                </p>

                <div className="mt-auto pt-3 border-t-2 border-dashed border-[#111111]/20 shrink-0">
                  <Link href="#" className="inline-flex items-center gap-2 font-poppins text-[13px] font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#007FFF] transition-colors duration-300">
                    Read More
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 md:mt-24 flex justify-center">
          <Link href="/blogs" className="inline-flex items-center justify-center gap-3 bg-white border-2 border-[#111111] hover:bg-[#111111] hover:text-white transition-colors duration-300 text-[#111111] px-10 py-4 md:py-5 rounded-full font-poppins font-bold text-base md:text-lg shadow-[4px_4px_0px_0px_#111111] hover:shadow-[6px_6px_0px_0px_#111111] hover:-translate-y-1">
            View All Blogs
            <ArrowRight size={20} className="stroke-[2.5]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
