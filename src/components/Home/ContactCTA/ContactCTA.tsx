'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

// Reusable SVG for the Smiley Face
const SmileyFace = ({ className, eyeColor = "#000" }: { className?: string, eyeColor?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full ${className}`}>
    {/* Left Eye */}
    <path d="M30 40 C30 35 38 35 38 40" stroke={eyeColor} strokeWidth="6" strokeLinecap="round" />
    {/* Right Eye */}
    <path d="M62 40 C62 35 70 35 70 40" stroke={eyeColor} strokeWidth="6" strokeLinecap="round" />
    {/* Smile */}
    <path d="M25 55 Q50 80 75 55" stroke={eyeColor} strokeWidth="6" strokeLinecap="round" />
  </svg>
);
const timeSlots = ['09:00 AM', '10:30 AM', '11:15 AM', '01:00 PM', '02:30 PM', '04:15 PM'];

export default function ContactCTA() {
  const [step, setStep] = useState<'calendar' | 'form'>('calendar');
  const [selectedDate, setSelectedDate] = useState<number>(7);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);



  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('form');
  };

  const handleBack = () => {
    setStep('calendar');
    setSelectedTime(null);
  };

  const getDayOfWeek = (dateNum: number) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[(dateNum + 2) % 7];
  };

  return (
    <section className="bg-[#111111] text-white w-full py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden flex items-center justify-center">
      <div className="max-w-[1150px] w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Typography & Smileys */}
        <div className="flex flex-col relative h-full justify-center">
          
          {/* Real Hala Logo */}
          <div className="flex items-center gap-2 mb-10">
            <Image src="/halalogo.png" alt="Hala Logo" width={80} height={26} style={{ width: 'auto', height: '26px' }} priority className="brightness-0 invert" />
          </div>

          {/* Heading */}
          <div className="max-w-[500px] z-10 relative">
            <h1 className="font-sans font-semibold text-4xl sm:text-5xl md:text-[60px] leading-[1.05] tracking-tight mb-2">
              See if Hala is<br />
              the right fit for you
            </h1>
            <h2 className="font-ebgaramond italic text-[50px] md:text-[65px] leading-[1] text-[#e0e0e0] mb-6">
              (it totally is)
            </h2>
            
            <p className="text-[#a0a0a0] text-base md:text-lg max-w-[320px] leading-snug font-medium">
              Schedule a quick, 15 minute guided tour through Hala.
            </p>
          </div>

          {/* Smileys Cluster - Scaled Down */}
          <div className="relative mt-16 h-[200px] w-full max-w-[450px]">
            {/* White */}
            <div className="absolute bottom-0 left-0 w-28 h-28 rounded-full bg-white flex items-center justify-center z-10 shadow-lg border border-[#222]">
              <SmileyFace className="w-16 h-16 -rotate-[15deg]" />
            </div>
            {/* Azure Blue */}
            <div className="absolute bottom-12 left-16 w-32 h-32 rounded-full bg-[#007FFF] flex items-center justify-center z-0 shadow-lg">
              <SmileyFace className="w-16 h-16 rotate-[10deg]" eyeColor="#FFF" />
            </div>
            {/* Black */}
            <div className="absolute -bottom-6 left-24 w-24 h-24 rounded-full bg-[#111111] flex items-center justify-center z-20 shadow-xl border-4 border-[#222]">
              <SmileyFace className="w-12 h-12 rotate-[20deg]" eyeColor="#FFF" />
            </div>
            {/* White (Small) */}
            <div className="absolute bottom-20 left-36 w-20 h-20 rounded-full bg-white flex items-center justify-center z-30 shadow-lg border border-[#222]">
              <SmileyFace className="w-10 h-10" />
            </div>
            {/* Azure Blue */}
            <div className="absolute bottom-0 left-44 w-24 h-24 rounded-full bg-[#007FFF] flex items-center justify-center z-10 shadow-lg">
              <SmileyFace className="w-12 h-12 -rotate-[10deg]" eyeColor="#FFF" />
            </div>
            {/* Black */}
            <div className="absolute bottom-16 left-52 w-28 h-28 rounded-full bg-[#111111] flex items-center justify-center z-20 shadow-lg border-2 border-[#333]">
              <SmileyFace className="w-14 h-14 rotate-[15deg]" eyeColor="#FFF" />
            </div>
            {/* White (Large) */}
            <div className="absolute -bottom-2 left-60 w-28 h-28 rounded-full bg-white flex items-center justify-center z-40 shadow-lg border border-[#222]">
              <SmileyFace className="w-14 h-14 -rotate-[20deg]" />
            </div>
            {/* Azure Blue (Behind White) */}
            <div className="absolute bottom-0 left-[280px] w-24 h-24 rounded-full bg-[#007FFF] flex items-center justify-center z-10 shadow-lg">
              <SmileyFace className="w-12 h-12 rotate-[10deg]" eyeColor="#FFF" />
            </div>
          </div>
        </div>

        {/* Right Side: Interactive UI Card */}
        <div className="bg-[#191919] rounded-[24px] border border-[#2A2A2A] p-6 w-full max-w-[420px] min-h-[500px] shadow-2xl lg:ml-auto overflow-hidden relative">
          
          {step === 'calendar' ? (
            <div className="flex flex-col animate-in fade-in slide-in-from-left-4 duration-300 h-full">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-sans text-[18px] font-semibold text-white">
                  July <span className="text-[#888]">2026</span>
                </h3>
                <div className="flex items-center gap-4 text-[#888]">
                  <ChevronLeft className="w-4 h-4 cursor-not-allowed opacity-50" />
                  <ChevronRight className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                </div>
              </div>

              {/* Days of Week */}
              <div className="grid grid-cols-7 gap-1 mb-2 text-center">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                  <span key={day} className="text-[9px] font-bold tracking-wider text-[#888]">
                    {day}
                  </span>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 text-center text-[13px] font-medium mb-6">
                <div className="h-8"></div>
                <div className="h-8"></div>
                <div className="h-8"></div>
                
                {/* Past Days (Disabled) */}
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <div key={num} className="h-8 w-full flex items-center justify-center text-[#444] select-none">
                    {num}
                  </div>
                ))}

                {/* Available Days (Clickable) */}
                {Array.from({ length: 25 }, (_, i) => i + 7).map(num => {
                  const isSelected = selectedDate === num;
                  return (
                    <div 
                      key={num} 
                      onClick={() => setSelectedDate(num)}
                      className={`h-8 w-full flex items-center justify-center rounded-[8px] cursor-pointer transition-colors shadow-sm ${
                        isSelected 
                          ? 'bg-white text-black font-bold shadow-md' 
                          : 'bg-[#2A2A2A] text-[#DDD] hover:bg-[#3A3A3A]'
                      }`}
                    >
                      {num}
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-[#333] pt-5 mt-auto">
                {/* Time Slots Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[14px] font-bold text-white">
                    {getDayOfWeek(selectedDate)} <span className="text-[#888]"> {selectedDate < 10 ? `0${selectedDate}` : selectedDate}</span>
                  </span>
                  <div className="flex items-center bg-[#111111] border border-[#333] rounded-full p-1 text-[10px] font-medium">
                    <button className="px-2.5 py-1 rounded-full text-[#888] hover:text-white transition-colors">12h</button>
                    <button className="px-2.5 py-1 rounded-full bg-[#2A2A2A] text-white">24h</button>
                  </div>
                </div>

                {/* Compact Time Slots Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {timeSlots.map(time => (
                    <button 
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className="w-full py-2 border border-[#3A3A3A] rounded-xl text-[12px] font-semibold text-[#CCC] bg-[#1E1E1E] hover:bg-[#2A2A2A] hover:text-white hover:border-[#555] transition-all shadow-sm"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-300">
              <button 
                onClick={handleBack} 
                className="flex items-center gap-1.5 text-[#888] hover:text-white mb-5 w-fit transition-colors text-[13px] font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
              
              <h3 className="text-[18px] font-bold text-white mb-1">Confirm booking</h3>
              <p className="text-[#888] text-[12px] mb-6">
                You selected <span className="text-white font-semibold">{getDayOfWeek(selectedDate)}, July {selectedDate} at {selectedTime}</span>
              </p>

              <form className="flex flex-col gap-3.5 flex-1" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-medium text-[#AAA]">Your name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. John Doe"
                    required
                    className="w-full bg-[#111111] border border-[#333] rounded-xl px-3.5 py-2.5 text-[13px] text-white focus:border-[#007FFF] focus:outline-none focus:bg-[#1A1A1A] transition-colors placeholder:text-[#555]" 
                  />
                </div>
                
                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-medium text-[#AAA]">Email address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    required
                    className="w-full bg-[#111111] border border-[#333] rounded-xl px-3.5 py-2.5 text-[13px] text-white focus:border-[#007FFF] focus:outline-none focus:bg-[#1A1A1A] transition-colors placeholder:text-[#555]" 
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-medium text-[#AAA]">Meeting topic</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Website redesign"
                    required
                    className="w-full bg-[#111111] border border-[#333] rounded-xl px-3.5 py-2.5 text-[13px] text-white focus:border-[#007FFF] focus:outline-none focus:bg-[#1A1A1A] transition-colors placeholder:text-[#555]" 
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-medium text-[#AAA]">Additional note (optional)</label>
                  <textarea 
                    rows={2}
                    placeholder="Any specific questions?"
                    className="w-full bg-[#111111] border border-[#333] rounded-xl px-3.5 py-2.5 text-[13px] text-white focus:border-[#007FFF] focus:outline-none focus:bg-[#1A1A1A] transition-colors placeholder:text-[#555] resize-none" 
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="mt-auto w-full bg-white text-[#111111] rounded-xl py-3 font-bold text-[14px] hover:bg-[#007FFF] hover:text-white transition-colors shadow-md"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
