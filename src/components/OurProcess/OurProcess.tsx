'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const closeModal = useCallback(() => setActiveStep(null), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (activeStep !== null) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [activeStep, closeModal]);

  // Content mapped exactly from your prompt & image_2ae7d1.png
  const steps = [
    {
      id: "01",
      title: "Discovery Call",
      statement: "We care about designing with incredible attention to detail.",
      description: "Our journey begins with a friendly consultation where we learn about your goals, challenges, and vision. During this call, you’ll share what you want to achieve, and we’ll discuss how our digital solutions can help you get there. After the call, we prepare a tailored action plan designed for your business.",
      // Layout positioning on the orbital grid (percentages relative to center container)
      style: { top: "10%", left: "50%", transform: "translate(-50%, -50%)" }
    },
    {
      id: "02",
      title: "Market Research",
      statement: "We care about building magic.",
      description: "Before building any strategy, we dive deep into your industry. Our team studies your competitors, audience behavior, and market trends to uncover valuable insights. This research allows us to create a data-driven approach that aligns with your customer’s needs and sets you apart in your industry.",
      style: { top: "25%", right: "8%", transform: "translate(0%, -50%)" }
    },
    {
      id: "03",
      title: "Strategizing",
      statement: "We care about building experiences that feel intuitive.",
      description: "With insights in hand, we build a clear roadmap that outlines every step toward achieving your goals. From branding and digital marketing to automation and growth, our experts craft a strategy that fits your business perfectly. Nothing is left unchecked we make sure every angle is covered for maximum impact.",
      style: { bottom: "18%", right: "8%", transform: "translate(0%, 50%)" }
    },
    {
      id: "04",
      title: "Implementation",
      statement: "We care about building software that seamlessly fits into your life.",
      description: "This is where strategy comes alive. Our team executes the plan with precision, ensuring every campaign, design, and solution is implemented smoothly. We monitor results closely, optimize continuously, and keep you updated at every step so you see real progress and measurable growth.",
      style: { bottom: "10%", left: "50%", transform: "translate(-50%, 50%)" }
    },
    {
      id: "05",
      title: "Reporting & Optimization",
      statement: "We care about building intelligence that mimics humans.",
      description: "We continuously monitor and improve results with real-time reporting and continuous optimization loops to drive lasting growth. This ensures your products remain highly optimized and adapt quickly to shifting target audience dynamics.",
      style: { top: "50%", left: "8%", transform: "translate(-10%, -50%)" }
    }
  ];

  return (
    <div className="w-full bg-white text-[#111111] font-poppins antialiased overflow-x-hidden flex flex-col items-center justify-center px-4 md:px-8 select-none relative py-12 sm:py-16 md:py-24 rounded-[40px] md:rounded-[60px]">
      
      <header className="w-full max-w-5xl text-center z-10 space-y-3 sm:space-y-4 mb-6 sm:mb-8 md:mb-12">
        <p className="text-[9px] sm:text-[10px] md:text-xs tracking-[0.4em] text-[#888888] font-poppins uppercase font-semibold">
          OUR PROCESS
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] uppercase leading-[1.1]">
          HOW IT WORKS
        </h2>
        <p className="max-w-2xl mx-auto text-[#555555] text-xs sm:text-sm md:text-base font-medium leading-relaxed px-2 sm:px-4">
          Our process is simple yet effective starting with a <span className="text-[#111111] font-bold">Discovery Call</span>, 
          backed by <span className="text-[#111111] font-bold">Market Research</span>, shaped into a clear <span className="text-[#111111] font-bold">Strategy</span>, 
          executed through <span className="text-[#111111] font-bold">Implementation</span>, and continuously improved with <span className="text-[#111111] font-bold">Reporting & Optimization</span> to drive lasting growth.
        </p>
      </header>

      <div className="w-full max-w-4xl aspect-[1/1.1] sm:aspect-[1.3/1] md:aspect-[1.6/1] relative flex items-center justify-center z-10 py-6 sm:py-12 mt-4 sm:mt-0">
        
        {/* Orbital Path Boundaries & Connectors */}
        <div className="absolute w-[82%] h-[82%] sm:h-[78%] border border-dashed border-[#111111]/20 rounded-[40%] pointer-events-none" />
        
        {/* SVG Drawing of the segments */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Symmetrical organic orbit connection loops */}
          <path 
            d="M 50 12 C 72 12, 86 24, 88 50 C 90 74, 72 88, 50 88 C 28 88, 12 74, 12 50 C 12 26, 28 12, 50 12" 
            fill="none" 
            stroke="#111111" 
            strokeWidth="0.5"
            opacity="0.15" 
          />
          
          {/* Active Highlight Loop */}
          {activeStep !== null && (
            <path 
              d="M 50 12 C 72 12, 86 24, 88 50 C 90 74, 72 88, 50 88 C 28 88, 12 74, 12 50 C 12 26, 28 12, 50 12" 
              fill="none" 
              stroke="#111111" 
              strokeWidth="0.8" 
              strokeDasharray="20, 80" 
              className="transition-all duration-1000 ease-in-out"
              style={{
                strokeDashoffset: `${activeStep * -40}`
              }}
            />
          )}
        </svg>

        {/* Center Node */}
        <div className="absolute bg-white w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-2 border-[#111111] shadow-[2px_2px_0px_0px_#111111] sm:shadow-[4px_4px_0px_0px_#111111] flex items-center justify-center z-20 group cursor-pointer hover:-translate-y-0.5 transition-all duration-300">
          <Image src="/halalogo.png" alt="Hala Logo" width={80} height={26} className="w-10 sm:w-14 md:w-16 lg:w-20 h-auto opacity-90 group-hover:opacity-100 transition-opacity" priority />
        </div>

        {/* Nodes */}
        {steps.map((step, idx) => {
          const isSelected = activeStep === idx;
          
          return (
            <div
              key={step.id}
              style={step.style}
              className="absolute z-30 transition-all duration-500 ease-out w-[85px] sm:w-auto max-w-[100px] sm:max-w-[150px] md:max-w-[190px] lg:max-w-[240px]"
              onClick={() => setActiveStep(idx)}
            >
              <div className={`cursor-pointer transition-all duration-300 text-center flex flex-col items-center ${
                isSelected ? 'scale-105' : 'opacity-70 hover:opacity-100 hover:-translate-y-1'
              }`}>
                
                {/* Visual Ring Connector Indicator */}
                <div className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full mb-1.5 sm:mb-3 flex items-center justify-center transition-all duration-300 border-2 ${
                  isSelected 
                    ? 'bg-[#111111] border-[#111111] scale-125 shadow-[0px_0px_0px_4px_rgba(17,17,17,0.1)]' 
                    : 'bg-white border-[#111111] hover:bg-[#f5f5f5]'
                }`} />

                {/* Main Node Statement */}
                <div className="space-y-0.5 sm:space-y-1">
                  <p className="text-[7.5px] sm:text-[9px] md:text-[10px] font-poppins font-semibold text-[#888888] tracking-wider uppercase">PHASE {step.id}</p>
                  <p className={`text-[8.5px] sm:text-[10px] md:text-xs lg:text-sm leading-tight font-bold tracking-tight transition-colors duration-300 ${
                    isSelected ? 'text-[#111111]' : 'text-[#555555]'
                  }`}>
                    {step.statement}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Step Modal/Tooltip */}
      {activeStep !== null && (
        <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] max-w-lg bg-white border-2 border-[#111111] rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 shadow-[6px_6px_0px_0px_#111111] sm:shadow-[8px_8px_0px_0px_#111111] z-50 transition-all duration-500 animate-in fade-in slide-in-from-bottom-5 max-h-[60vh] overflow-y-auto">
          <div className="flex items-start justify-between mb-3 sm:mb-4 border-b-2 border-[#111111]/10 pb-3 sm:pb-4 sticky top-0 bg-white z-10">
            <div>
              <span className="text-[10px] sm:text-[11px] font-poppins font-bold text-[#888888] uppercase tracking-widest">
                STAGE {steps[activeStep].id}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#111111] tracking-tight mt-1">
                {steps[activeStep].title}
              </h3>
            </div>
            <button 
              onClick={closeModal}
              aria-label="Close step details"
              className="p-1.5 hover:bg-[#f5f5f5] rounded-full text-[#555555] hover:text-[#111111] transition-colors cursor-pointer border border-transparent hover:border-[#111111]/20 -mr-2 -mt-2"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
          
          <div className="space-y-2.5 sm:space-y-3">
            <p className="text-xs sm:text-sm text-[#333333] font-bold italic">
              "{steps[activeStep].statement}"
            </p>
            <p className="text-sm sm:text-[15px] text-[#555555] font-medium leading-relaxed">
              {steps[activeStep].description}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
