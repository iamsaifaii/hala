import { 
  Hexagon, Triangle, Box, Command, 
  Aperture, Activity, Globe, Layers
} from 'lucide-react';

export default function OurJourney() {
  const logos = [
    { name: 'Company 1', icon: Hexagon },
    { name: 'Company 2', icon: Triangle },
    { name: 'Company 3', icon: Box },
    { name: 'Company 4', icon: Command },
    { name: 'Company 5', icon: Aperture },
    { name: 'Company 6', icon: Activity },
    { name: 'Company 7', icon: Globe },
    { name: 'Company 8', icon: Layers },
  ];

  return (
      <section className="bg-[#111111] text-white w-full px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24 relative overflow-hidden rounded-[40px] sm:rounded-[60px]">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center">

        {/* Title & Subtitle */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight mb-4">
            Our Journey of Innovation & impact
          </h2>
          <p className="text-[#aaaaaa] text-sm md:text-base font-medium max-w-xl mx-auto">
            Trusted by forward-thinking brands and companies worldwide to deliver measurable results and digital excellence.
          </p>
        </div>

        {/* Marquee Container wrapper with neo-brutalism style */}
        <div className="w-full bg-[#111111] rounded-[32px] border-2 border-[#333333] shadow-[8px_8px_0px_0px_#333333] md:shadow-[12px_12px_0px_0px_#333333] py-10 md:py-14 relative overflow-hidden">
          <div className="flex w-full relative group">

            {/* Fade edges removed */}

            {/* Track 1 */}
            <div className="flex items-center animate-marquee whitespace-nowrap min-w-max shrink-0 group-hover:[animation-play-state:paused]">
              {logos.map((logo, index) => {
                const Icon = logo.icon;
                return (
                  <div
                    key={`first-${index}`}
                    className="flex items-center justify-center mx-10 md:mx-16 text-[#cccccc] hover:text-white opacity-70 hover:opacity-100 transition-all duration-300"
                  >
                    <Icon className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 stroke-[1.5]" />
                  </div>
                );
              })}
            </div>

            {/* Track 2 — duplicate for seamless loop */}
            <div
              className="flex items-center animate-marquee whitespace-nowrap min-w-max shrink-0 group-hover:[animation-play-state:paused]"
              aria-hidden="true"
            >
              {logos.map((logo, index) => {
                const Icon = logo.icon;
                return (
                  <div
                    key={`second-${index}`}
                    className="flex items-center justify-center mx-10 md:mx-16 text-[#cccccc] hover:text-white opacity-70 hover:opacity-100 transition-all duration-300"
                  >
                    <Icon className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 stroke-[1.5]" />
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
      </section>
  );
}
