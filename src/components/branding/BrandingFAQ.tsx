'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "1. What is expert branding and why is it important?",
    answer: "Expert branding is the professional process of creating a unique identity for your business that resonates with your target audience. It’s important because strong branding builds recognition, trust, and differentiates your business in a crowded market."
  },
  {
    question: "2. How does branding help initiate business growth?",
    answer: "Effective branding attracts the right customers, builds loyalty, and enhances your market presence. This leads to increased sales, partnerships, and overall business expansion."
  },
  {
    question: "3. What elements are involved in expert branding?",
    answer: "Key elements include logo design, brand messaging, visual identity, tone of voice, and consistent marketing materials that reflect your company’s values and goals."
  },
  {
    question: "4. How long does it take to see results from branding efforts?",
    answer: "While some recognition can happen quickly, building strong brand awareness and business growth typically takes several months to a year, depending on your market and strategy."
  },
  {
    question: "5. Can expert branding work for startups and small businesses?",
    answer: "Absolutely! Expert branding is crucial for startups and small businesses to stand out, attract investors, and connect effectively with customers."
  },
  {
    question: "6. How do I know if my business needs expert branding services?",
    answer: "If your brand feels inconsistent, you’re struggling to attract or retain customers, or you want to expand into new markets, expert branding can make a significant difference."
  },
  {
    question: "7. What role does digital marketing play in branding?",
    answer: "Digital marketing amplifies your branding by reaching wider audiences through social media, SEO, email campaigns, and online ads, driving recognition and growth."
  },
  {
    question: "8. How can I maintain my brand’s recognition over time?",
    answer: "Consistent messaging, regular updates to stay relevant, engaging with your audience, and monitoring market trends are key to maintaining strong brand recognition."
  },
  {
    question: "9. What makes a branding agency expert in initiating growth?",
    answer: "An expert agency combines market research, creative design, strategic planning, and measurable results to create branding that drives business success."
  },
  {
    question: "10. How can I get started with expert branding for my business?",
    answer: "Start by consulting with branding professionals, defining your brand goals, and developing a strategy tailored to your unique business needs."
  }
];

export default function BrandingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-[#111111] pt-24 pb-12 md:pt-32 md:pb-16 px-4 md:px-6">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            FAQ's
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="group border-b border-[#111111]/10 bg-white overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
                >
                  <span className="font-poppins text-lg md:text-xl font-bold pr-8 text-[#111111] group-hover:text-[#007FFF] transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className="shrink-0 text-[#111111] group-hover:text-[#007FFF] transition-colors duration-300">
                    {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pb-8 font-poppins text-base md:text-lg text-[#111111]/70 leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
