"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BenefitTab {
  id: string;
  name: string;
  headline: string;
  copy: string;
  svgType: "storm" | "security" | "noise" | "energy" | "curb";
}

export default function BenefitSelector() {
  const [activeTab, setActiveTab] = useState("storm");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const tabs: BenefitTab[] = [
    {
      id: "storm",
      name: "Storm Protection",
      headline: "Engineered for 200+ MPH Wind Loads.",
      copy: "Impact windows are tested to withstand the extreme air pressure differences and high-velocity debris South Florida faces. Your envelope stays sealed when standard glass fails.",
      svgType: "storm",
    },
    {
      id: "security",
      name: "Security",
      headline: "A Window That Resists More Than Wind.",
      copy: "Laminated glass layers remain bonded to the heavy-duty polyvinyl butyral (PVB) interlayer even under impact, acting as an active deterrent to forced entry.",
      svgType: "security",
    },
    {
      id: "noise",
      name: "Noise Reduction",
      headline: "Outside Stays Outside.",
      copy: "The thick combination of glass layers and PVB damping cores acts as an acoustic barrier, absorbing exterior soundwaves and reducing ambient noise by up to 70%.",
      svgType: "noise",
    },
    {
      id: "energy",
      name: "Energy Performance",
      headline: "Keep the Heat Out. Keep the Cool In.",
      copy: "Advanced Low-E coatings reject solar heat gain and block 99% of UV rays, easing the load on your HVAC system and lowering cooling expenses.",
      svgType: "energy",
    },
    {
      id: "curb",
      name: "Curb Appeal",
      headline: "Protection That Elevates the Property.",
      copy: "Engineered strength does not require compromising aesthetics. Available in various frame colors, custom colonial grid designs, and configurations to match any architecture.",
      svgType: "curb",
    },
  ];

  const activeData = tabs.find((t) => t.id === activeTab) || tabs[0];

  const handleTabChange = (id: string) => {
    if (id === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(id);
      setIsTransitioning(false);
    }, 200);
  };

  // Inline SVG Technical Illustrations
  const renderIllustration = (type: string) => {
    switch (type) {
      case "storm":
        return (
          <svg className="w-full h-full text-brand-blue" viewBox="0 0 400 300" fill="none">
            {/* Window frame grid */}
            <rect x="80" y="40" width="240" height="220" stroke="currentColor" strokeWidth="2.5" />
            <line x1="80" y1="150" x2="320" y2="150" stroke="currentColor" strokeWidth="1.5" />
            <line x1="200" y1="40" x2="200" y2="260" stroke="currentColor" strokeWidth="1.5" />
            
            {/* Wind force curves */}
            <path d="M40 90 Q120 120 190 145" stroke="#AAB4BE" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M40 120 Q120 150 190 150" stroke="currentColor" strokeWidth="2" />
            <path d="M40 150 Q120 180 190 155" stroke="#AAB4BE" strokeWidth="2" strokeDasharray="4 4" />
            
            {/* Force vector arrows */}
            <path d="M190 145 L180 140 M190 145 L182 152" stroke="#AAB4BE" strokeWidth="2" />
            <path d="M190 150 L178 145 M190 150 L178 155" stroke="currentColor" strokeWidth="2" />
            
            {/* Circular stress test radar overlay */}
            <circle cx="200" cy="150" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="animate-pulse" />
            
            {/* Tech data tags */}
            <text x="90" y="65" fill="#AAB4BE" className="text-[10px] font-mono tracking-wider uppercase font-semibold">200+ MPH RATING</text>
            <text x="210" y="250" fill="currentColor" className="text-[10px] font-mono tracking-wider uppercase font-semibold">TEST STATE: SEALED</text>
          </svg>
        );
      case "security":
        return (
          <svg className="w-full h-full text-brand-blue" viewBox="0 0 400 300" fill="none">
            {/* Laminated glass layout */}
            <rect x="60" y="60" width="20" height="180" fill="#E4E7EA" stroke="#AAB4BE" strokeWidth="1" />
            <rect x="80" y="60" width="10" height="180" fill="currentColor" opacity="0.3" />
            <rect x="90" y="60" width="20" height="180" fill="#E4E7EA" stroke="#AAB4BE" strokeWidth="1" />
            
            {/* Intrusion force impact points */}
            <path d="M190 150 L120 150" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 4" />
            <circle cx="120" cy="150" r="15" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M120 135 L120 165 M105 150 L135 150" stroke="currentColor" strokeWidth="1.5" />
            
            {/* Protection shield */}
            <path d="M220 100 C220 100 250 90 280 100 C280 150 280 200 280 200 C280 220 250 230 250 230 C250 230 220 220 220 200 C220 200 220 150 220 100" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M235 160 L245 170 L265 145" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            
            {/* Tech data tags */}
            <text x="130" y="80" fill="#AAB4BE" className="text-[10px] font-mono tracking-wider uppercase font-semibold">PVB INTERLAYER</text>
            <text x="210" y="250" fill="currentColor" className="text-[10px] font-mono tracking-wider uppercase font-semibold">SECURE STATE: LOCKED</text>
          </svg>
        );
      case "noise":
        return (
          <svg className="w-full h-full text-brand-blue" viewBox="0 0 400 300" fill="none">
            {/* Wave dampening model */}
            <path d="M50 150 C70 120 90 180 110 150" stroke="currentColor" strokeWidth="2.5" />
            <path d="M110 150 C130 130 150 170 170 150" stroke="currentColor" strokeWidth="2" />
            
            {/* Dampening layer (window cross-section) */}
            <line x1="190" y1="60" x2="190" y2="240" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <line x1="200" y1="60" x2="200" y2="240" stroke="#AAB4BE" strokeWidth="4" strokeLinecap="round" />
            <line x1="210" y1="60" x2="210" y2="240" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            
            {/* Dampened wave output */}
            <path d="M230 150 C245 147 260 153 275 150" stroke="#AAB4BE" strokeWidth="1.5" />
            <path d="M275 150 C290 149 305 151 320 150" stroke="#AAB4BE" strokeWidth="1" />
            
            {/* Soundwaves indicator */}
            <circle cx="90" cy="150" r="30" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            
            <text x="60" y="80" fill="#AAB4BE" className="text-[10px] font-mono tracking-wider uppercase font-semibold">85dB OUTDOOR DEBRIS</text>
            <text x="235" y="235" fill="currentColor" className="text-[10px] font-mono tracking-wider uppercase font-semibold">32dB INDOOR SILENCE</text>
          </svg>
        );
      case "energy":
        return (
          <svg className="w-full h-full text-brand-blue" viewBox="0 0 400 300" fill="none">
            {/* Sun rays reflecting */}
            <circle cx="80" cy="80" r="18" fill="currentColor" opacity="0.15" />
            <line x1="80" y1="80" x2="150" y2="150" stroke="#AAB4BE" strokeWidth="2" />
            <line x1="150" y1="150" x2="80" y2="220" stroke="#AAB4BE" strokeWidth="2" />
            <path d="M125 125 L115 125 M125 125 L125 115" stroke="#AAB4BE" strokeWidth="2" />
            
            {/* Glass thermal barrier */}
            <line x1="180" y1="60" x2="180" y2="240" stroke="currentColor" strokeWidth="5" />
            <line x1="190" y1="60" x2="190" y2="240" stroke="#0099CC" strokeWidth="2" />
            <line x1="200" y1="60" x2="200" y2="240" stroke="currentColor" strokeWidth="5" />
            
            {/* Air conditioning coolness retention */}
            <path d="M300 120 Q240 130 220 150" stroke="currentColor" strokeWidth="2" />
            <path d="M300 150 Q240 150 220 150" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M300 180 Q240 170 220 150" stroke="currentColor" strokeWidth="2" />
            
            <text x="60" y="245" fill="#AAB4BE" className="text-[10px] font-mono tracking-wider uppercase font-semibold">99% UV BLOCK</text>
            <text x="210" y="80" fill="currentColor" className="text-[10px] font-mono tracking-wider uppercase font-semibold">LOW-E COATING STATE: ACTIVE</text>
          </svg>
        );
      case "curb":
        return (
          <svg className="w-full h-full text-brand-blue" viewBox="0 0 400 300" fill="none">
            {/* Architectural window styling mock */}
            <rect x="100" y="50" width="200" height="200" stroke="currentColor" strokeWidth="2.5" />
            <line x1="100" y1="150" x2="300" y2="150" stroke="currentColor" strokeWidth="2" />
            
            {/* Grid options */}
            <line x1="150" y1="50" x2="150" y2="250" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="200" y1="50" x2="200" y2="250" stroke="currentColor" strokeWidth="1.5" />
            <line x1="250" y1="50" x2="250" y2="250" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            
            {/* Blueprint lines */}
            <path d="M70 50 L90 50 M100 30 L100 45" stroke="#AAB4BE" strokeWidth="1" />
            <path d="M300 30 L300 45 M310 50 L330 50" stroke="#AAB4BE" strokeWidth="1" />
            
            {/* Dimension tag */}
            <text x="175" y="40" fill="#AAB4BE" className="text-[10px] font-mono tracking-wider uppercase font-semibold">W: 1200mm</text>
            <text x="310" y="155" fill="currentColor" className="text-[10px] font-mono tracking-wider uppercase font-semibold">H: 1500mm</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 StudioBackground border-b border-brand-cool-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase">Performance Specs</span>
          <h2 className="text-display-lg font-bold text-brand-near-black mt-2 leading-tight">
            Built for the Storm. Designed for Everyday Life.
          </h2>
        </div>

        {/* Two-Column Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Selector Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`w-full text-left p-4 rounded-lg border font-display transition-all duration-200 focus:outline-none flex items-center justify-between ${
                    isActive
                      ? "border-l-4 border-l-brand-blue border-zinc-200 bg-white text-brand-blue shadow-sm"
                      : "border-zinc-200 hover:bg-white/50 text-zinc-800 bg-transparent"
                  }`}
                >
                  <span className="text-heading-md font-bold">{tab.name}</span>
                  {isActive && <ArrowRight className="w-5 h-5 text-brand-blue animate-pulse" />}
                </button>
              );
            })}
          </div>

          {/* Right Column: Content Display Area */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 md:p-8 min-h-[380px] flex flex-col justify-between transition-all duration-200">
            <div className={`transition-opacity duration-200 flex flex-col gap-4 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
              <h3 className="text-display-lg font-bold text-brand-near-black leading-tight">
                {activeData.headline}
              </h3>
              <p className="text-body-md text-zinc-600 leading-relaxed max-ch">
                {activeData.copy}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mt-6">
              {/* SVG Illustration Container */}
              <div className={`md:col-span-8 aspect-[4/3] max-h-[180px] w-full border border-zinc-200/60 rounded-xl bg-zinc-50 p-2 flex items-center justify-center transition-opacity duration-200 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
                {renderIllustration(activeData.svgType)}
              </div>
              
              {/* Explore Link */}
              <div className="md:col-span-4 flex justify-end">
                <Link
                  href="/impact-windows"
                  className="inline-flex items-center gap-1 text-label font-bold text-brand-blue hover:text-brand-blue/80 transition-colors py-2"
                >
                  Explore Windows <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
