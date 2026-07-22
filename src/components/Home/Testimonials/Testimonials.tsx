'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonialsRow1 = [
  {
    quote: "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.",
    name: "Samantha Johnson",
    title: "CEO and Co-founder of ABC Company",
    image: "https://i.pravatar.cc/150?u=11"
  },
  {
    quote: "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
    name: "Isabella Rodriguez",
    title: "CEO and Co-founder of ABC Company",
    image: "https://i.pravatar.cc/150?u=12"
  },
  {
    quote: "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
    name: "Gabrielle Williams",
    title: "CEO and Co-founder of ABC Company",
    image: "https://i.pravatar.cc/150?u=13"
  },
  {
    quote: "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.",
    name: "Victoria Thompson",
    title: "CEO and Co-founder of ABC Company",
    image: "https://i.pravatar.cc/150?u=14"
  }
];

const testimonialsRow2 = [
  {
    quote: "Their team's artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.",
    name: "John Peter",
    title: "CEO and Co-founder of ABC Company",
    image: "https://i.pravatar.cc/150?u=15"
  },
  {
    quote: "From concept to execution, their creativity knows no bounds - a game-changer for our brand's success.",
    name: "Natalie Martinez",
    title: "CEO and Co-founder of ABC Company",
    image: "https://i.pravatar.cc/150?u=16"
  },
  {
    quote: "Working with Hala has been transformative. They don't just create content; they create experiences that resonate deeply.",
    name: "Michael Chen",
    title: "Marketing Director at XYZ Corp",
    image: "https://i.pravatar.cc/150?u=17"
  },
  {
    quote: "The attention to detail and strategic foresight they bring to the table is unmatched in the entire creative industry.",
    name: "Sarah Jenkins",
    title: "Founder of Startup Inc",
    image: "https://i.pravatar.cc/150?u=18"
  }
];

// Duplicate arrays for seamless infinite loop
const marquee1 = [...testimonialsRow1, ...testimonialsRow1];
const marquee2 = [...testimonialsRow2, ...testimonialsRow2];

const QuoteIcon = () => (
  <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 11V17H4V11H7.5C7.5 9.5 6.5 8.5 5 8.5V6C7.5 6 10 7.5 10 11ZM20 11V17H14V11H17.5C17.5 9.5 16.5 8.5 15 8.5V6C17.5 6 20 7.5 20 11Z" fill="#007FFF"/>
  </svg>
);

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-12 md:py-20 overflow-hidden flex flex-col items-center">
      
      {/* Header Container */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 sm:px-6 mb-12 md:mb-16">
        
        {/* Floating Badge */}
        <div className="flex items-center gap-3 bg-[#111111] rounded-full p-1.5 pr-6 mb-8 shadow-xl shadow-black/10">
          <div className="w-8 h-8 rounded-full bg-[#007FFF] flex items-center justify-center">
            <Star className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="font-poppins text-sm md:text-[15px] font-medium text-white">
            Rated 4.9/5 by over 1 Lakh users
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-poppins text-4xl md:text-5xl lg:text-[56px] font-bold text-[#111111] leading-[1.15] tracking-tight">
          Words of praise from others <br className="hidden md:block" />
          about our presence.
        </h2>
      </div>

      {/* Marquee Section */}
      <div className="w-full flex flex-col gap-6 md:gap-8 relative overflow-hidden pb-8">
        
        {/* Fading Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Row 1 - Moving Left */}
        <div className="flex w-fit">
          <motion.div
            className="flex gap-6 md:gap-8 pr-6 md:pr-8"
            animate={{ x: "-50%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {marquee1.map((testimonial, idx) => (
              <TestimonialCard key={`row1-${idx}`} {...testimonial} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moving Right */}
        <div className="flex w-fit">
          <motion.div
            className="flex gap-6 md:gap-8 pr-6 md:pr-8"
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {marquee2.map((testimonial, idx) => (
              <TestimonialCard key={`row2-${idx}`} {...testimonial} />
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}

function TestimonialCard({ quote, name, title, image }: { quote: string, name: string, title: string, image: string }) {
  return (
    <div className="w-[320px] md:w-[440px] shrink-0 bg-[#F9FAFB] border border-[#EEEEEE] rounded-[32px] p-8 md:p-10 flex flex-col hover:-translate-y-2 transition-transform duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
      
      {/* Quote Icon */}
      <div className="mb-6">
        <QuoteIcon />
      </div>

      {/* Quote Text */}
      <p className="font-poppins text-[16px] md:text-[18px] text-[#333333] leading-[1.6] font-medium mb-12 flex-grow">
        {quote}
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 shrink-0 border-2 border-white shadow-sm">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-poppins font-bold text-[#111111] text-[15px] md:text-[16px]">
            {name}
          </h4>
          <span className="font-poppins text-[13px] md:text-[14px] text-[#777777] font-medium mt-0.5">
            {title}
          </span>
        </div>
      </div>
      
    </div>
  );
}
