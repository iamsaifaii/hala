import {
  Search, Code2, MonitorPlay, PenTool,
  Video, ArrowRight, FileText
} from 'lucide-react';

export default function OurServices() {
  const services = [
    {
      title: 'Digital Marketing',
      description: 'Are you struggling to reach your target audience or convert clicks into customers? At Hala Smart Technologies, we provide professional digital marketing services in Dubai that help businesses grow smarter and faster. From SEO to PPC, social media marketing to content strategies, our experts use proven methods to increase visibility, drive qualified leads, and maximize ROI.',
      icon: MonitorPlay,
    },
    {
      title: 'Search Engine Optimization',
      description: 'Looking for professional SEO services in Dubai that help your business stand out online? At Hala Smart Technology, we specialize in delivering data-driven, innovative, and strategic SEO solutions that not only improve rankings but also drive real results. Whether you need keyword research, on-page optimization, technical SEO or complete search engine optimization management, our team is here to turn your website into a powerful lead generating platform.',
      icon: Search,
    },
    {
      title: 'Web Development',
      description: 'Looking for professional web development services in Dubai that deliver results? At Hala Smart Technologies, we design and develop websites that don’t just look good they perform, convert, and scale with your business. From custom websites to eCommerce Platforms, our expert developers combine creativity, strategy, and the latest technology to give your brand a strong online presence.',
      icon: Code2,
    },
    {
      title: 'Graphic Designing',
      description: 'Looking for professional graphic design services in Dubai that make your business stand out? At Hala Smart Technologies, we specialize in delivering eye-catching, innovative, and strategic designs that not only look stunning but also convert. Whether you need logo design, social media graphics, marketing materials, or complete brand identity design, our team is here to turn your ideas into impactful visuals.',
      icon: PenTool,
    },
    {
      title: 'Video Editing',
      description: 'Looking for professional video editing services in Dubai that bring your stories to life? At Hala Smart Technologies, we specialize in transforming your raw footage into polished, engaging, and impactful videos. Whether it’s for social media, corporate presentations, ads, or events, our expert editors use creativity and the latest tools to deliver videos that truly stand out.',
      icon: Video,
    },
    {
      title: 'Content Creation',
      description: 'Struggling to create content that grabs attention and drives results? At Hala Smart Technologies, we provide professional content creation services in Dubai designed to help businesses communicate their brand story effectively. From website content to social media posts, blogs to video scripts, our creative team ensures your content not only looks great but also performs.',
      icon: FileText,
    }
  ];

  return (
    <section className="font-sans bg-white text-[#111111] w-full px-5 sm:px-8 md:px-12 lg:px-16 py-12 md:py-20 lg:py-24 relative rounded-t-[40px] md:rounded-t-[60px]">
      <div className="max-w-[1400px] mx-auto">

        {/* Top Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">

          {/* Pill */}
          <div className="bg-[#007FFF] text-white px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm">
            Our Services
          </div>

          {/* Main Heading */}
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight mb-6">
            Tailored services.<br className="hidden sm:block" />
            Hala does it <span className="eb-garamond italic pr-2">perfectly.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#555555] font-medium max-w-xl">
            Hala works wherever you need growth. Any platform, device, or market.
          </p>
        </div>

        {/* Bottom Section: Cards */}
        <div className="flex flex-wrap items-stretch justify-center gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white p-6 md:p-8 rounded-[32px] border-2 border-[#111111] shadow-[4px_4px_0px_0px_#111111] hover:shadow-[8px_8px_0px_0px_#111111] hover:-translate-y-1 transition-all duration-300 group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]"
              >
                {/* Icon */}
                <div className="mb-4 text-[#007FFF] transition-colors">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 stroke-[2]" />
                </div>

                {/* Title */}
                <h3 className="font-ebgaramond font-bold text-[20px] md:text-[24px] leading-tight text-[#111111] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#333333] font-medium text-sm md:text-sm leading-[1.6] flex-grow">
                  {service.description}
                </p>

                {/* Explore More Button */}
                <button className="mt-6 flex items-center justify-center gap-2 text-sm font-bold text-[#111111] group-hover:underline transition-all">
                  Explore More <ArrowRight className="w-4 h-4 stroke-[2]" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
