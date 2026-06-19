"use client";

import React, { useEffect, useRef, useState } from "react";

export default function LayeredRoof() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const layers = [
    {
      id: "deck",
      name: "1. Structural Roof Deck",
      color: "bg-[#8B5A2B]", // Wood / plywood color
      desc: "Re-nailed plywood base meeting current Florida codes for spacing.",
      offset: "translate-y-0",
      delay: "0ms",
      textRight: false,
    },
    {
      id: "underlayment",
      name: "2. Secondary Water Barrier",
      color: "bg-brand-blue", // Carolina blue underlayment
      desc: "Self-adhering polymer sheet that seals nail holes and stops leaks.",
      offset: "-translate-y-8 md:-translate-y-12",
      delay: "150ms",
      textRight: true,
    },
    {
      id: "shingles",
      name: "3. Shingles or Tile Layer",
      color: "bg-[#4A5568]", // Charcoal slate / tile
      desc: "High-wind certified architectural tiles/shingles locked to deck.",
      offset: "-translate-y-16 md:-translate-y-24",
      delay: "300ms",
      textRight: false,
    },
    {
      id: "ridge",
      name: "4. Ridge Ventilation Cap",
      color: "bg-[#1A202C]", // Dark ridge cap
      desc: "Exhaust vents that lower attic heat and moisture build-up.",
      offset: "-translate-y-24 md:-translate-y-36",
      delay: "450ms",
      textRight: true,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[420px] mx-auto min-h-[460px] md:min-h-[500px] flex flex-col justify-end p-6 border border-brand-cool-gray/30 rounded-2xl bg-brand-white shadow-card select-none"
    >
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center border-b border-brand-cool-gray/30 pb-2.5">
        <span className="text-[10px] font-mono font-bold tracking-widest text-brand-blue">
          ENVELOPE DIAGRAM
        </span>
        <span className="text-[10px] font-mono font-bold tracking-widest text-brand-mid-gray/70">
          STAGGERED ASSEMBLY
        </span>
      </div>

      {/* Layer stack */}
      <div className="relative w-full h-[280px] md:h-[320px] mb-4 flex flex-col items-center">
        {layers.map((layer, idx) => (
          <div
            key={layer.id}
            className={`absolute w-11/12 h-[60px] md:h-[72px] rounded-lg border-2 border-brand-near-black/20 shadow-md ${
              layer.color
            } transition-all duration-[800ms] ease-out flex items-center justify-between px-4`}
            style={{
              bottom: `${idx * 40}px`,
              zIndex: idx + 10,
              opacity: isVisible ? 1 : 0,
              transform: isVisible 
                ? "translateY(0) rotateX(25deg)" 
                : `${layer.offset} scale(0.9) rotateX(45deg)`,
              transitionDelay: layer.delay,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Visual shine overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-white/0 via-brand-white/10 to-brand-white/20 pointer-events-none rounded-lg" />
            
            {/* Layer Info Badge */}
            <div className="text-brand-white font-sans text-left leading-tight z-10">
              <span className="text-[10px] font-mono font-bold tracking-widest block uppercase opacity-85">
                {layer.id}
              </span>
              <span className="text-body-sm font-bold block">{layer.name}</span>
            </div>
            
            {/* Wind/water shield icon overlay */}
            <div className="w-6 h-6 rounded-full bg-brand-white/10 border border-brand-white/25 flex items-center justify-center text-brand-white z-10 text-[9px] font-mono font-bold">
              +{idx+1}
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic details legend */}
      <div className="border-t border-brand-cool-gray/30 pt-4 text-left flex flex-col gap-2">
        <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
          Layer Breakdown
        </span>
        <div className="grid grid-cols-1 gap-2.5 max-h-[140px] overflow-y-auto pr-1">
          {layers.map((layer, index) => (
            <div 
              key={layer.id} 
              className="flex items-start gap-3 transition-opacity duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className={`w-3 h-3 rounded-sm mt-0.5 border border-brand-near-black/20 ${layer.color} flex-shrink-0`} />
              <div>
                <strong className="text-body-sm font-bold text-brand-near-black block leading-none mb-1">
                  {layer.name}
                </strong>
                <span className="text-[11px] text-brand-graphite leading-tight block">
                  {layer.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
