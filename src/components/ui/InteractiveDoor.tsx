"use client";

import React, { useEffect, useRef, useState } from "react";

export default function InteractiveDoor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOpen(true);
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

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[320px] mx-auto aspect-[1/2] bg-brand-cool-gray/20 rounded-2xl border border-brand-cool-gray/40 flex items-center justify-center p-6 select-none shadow-card"
      style={{ perspective: "1000px" }}
    >
      {/* Outer Door Frame */}
      <div className="relative w-full h-full border-4 border-brand-graphite rounded-lg bg-brand-white/80 shadow-inner overflow-hidden flex items-center justify-center">
        {/* Interior light view overlay behind the door */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-brand-white/40 to-brand-ice/20 flex flex-col items-center justify-center text-center p-4">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-blue/70">
            WELCOME INSIDE
          </span>
          <span className="text-[9px] text-brand-graphite/40 uppercase mt-1">
            AAA Protection Active
          </span>
        </div>

        {/* 3D Door Panel */}
        <div
          className={`absolute inset-0 bg-brand-graphite border-2 border-brand-near-black rounded shadow-2xl flex flex-col justify-between p-4 cursor-pointer transition-transform duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) origin-left z-20 ${
            isOpen ? "-rotate-y-[45deg]" : ""
          } @media (prefers-reduced-motion: reduce) { transform: none !important; }`}
          style={{
            transformStyle: "preserve-3d",
            transform: isOpen ? "rotateY(-45deg)" : "rotateY(0deg)",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Top Panel (Glazing Insert Mockup) */}
          <div className="w-full h-3/5 rounded border border-brand-near-black/50 bg-gradient-to-tr from-brand-white/10 to-brand-white/30 p-0.5 relative">
            {/* Laminated Glass highlight lines */}
            <div className="absolute inset-1.5 border border-brand-white/10 rounded-sm flex items-center justify-center">
              <span className="text-[9px] font-mono font-bold tracking-widest text-brand-white/40">
                LAMINATED GLASS
              </span>
            </div>
            {/* 4-pane grid design */}
            <div className="grid grid-cols-2 grid-rows-2 h-full gap-1 p-1">
              <div className="border border-brand-white/5 bg-brand-white/5 rounded-sm" />
              <div className="border border-brand-white/5 bg-brand-white/5 rounded-sm" />
              <div className="border border-brand-white/5 bg-brand-white/5 rounded-sm" />
              <div className="border border-brand-white/5 bg-brand-white/5 rounded-sm" />
            </div>
          </div>

          {/* Bottom Wood/Fibreglass Panel Mockup */}
          <div className="w-full h-1/3 rounded border border-brand-near-black/50 bg-brand-near-black/40 flex items-center justify-center relative">
            <div className="absolute inset-2 border border-brand-white/5 rounded-sm bg-brand-near-black/20" />
            <span className="text-[9px] font-sans font-bold text-brand-mid-gray/30 uppercase tracking-widest z-10">
              REINFORCED CORE
            </span>
          </div>

          {/* Door Handle & Lock */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-12 flex flex-col items-center justify-center gap-1.5 z-30">
            {/* Lock cylinder */}
            <div className="w-2.5 h-2.5 rounded-full bg-brand-mid-gray border border-brand-near-black shadow" />
            {/* Handle lever */}
            <div className="w-1.5 h-7 bg-brand-mid-gray rounded shadow-md transform origin-top group-hover:rotate-6 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}
