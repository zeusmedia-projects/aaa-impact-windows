"use client";

import React, { useEffect, useState, useRef } from "react";

export default function AAADifference() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-brand-white via-brand-ice to-brand-white overflow-hidden text-brand-near-black border-t border-brand-cool-gray/30"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-brand-blue/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-brand-blue/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Slightly Tinted Carolina Blue Glass Container */}
        <div className="bg-brand-blue/[0.06] border border-brand-blue/15 rounded-[32px] p-8 md:p-16 shadow-card relative overflow-hidden backdrop-blur-md">
          {/* Subtle light reflection overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent pointer-events-none" />
          
          {/* Editorial Header Block */}
          <div className="max-w-3xl mb-8 md:mb-10 flex flex-col gap-4 relative z-10">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase block">
              THE PART MOST CONTRACTORS LEAVE OUT
            </span>
            <h2 className="text-display-lg font-bold text-brand-near-black leading-tight">
              The Job Is Not Over When the Crew Leaves.
            </h2>
          </div>

          {/* Featured Value Block: AFTER THE INSTALL (Saturated Carolina Blue Panel) */}
          <div className={`mb-12 bg-brand-blue text-brand-white rounded-2xl p-6 md:p-10 shadow-cta relative overflow-hidden transition-all duration-700 delay-100 z-10 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
            {/* Visual background element */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-brand-white/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Title Panel */}
              <div className="md:col-span-4 flex flex-col gap-1">
                <span className="text-[10px] text-brand-white/80 font-bold uppercase tracking-widest">
                  Featured Differentiator
                </span>
                <h3 className="text-heading-lg font-extrabold tracking-tight text-brand-white uppercase leading-none">
                  AFTER THE INSTALL
                </h3>
              </div>
              
              {/* Value Items */}
              <div className="md:col-span-8 flex flex-col gap-4 md:border-l md:border-brand-white/20 md:pl-8">
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    "Real people who answer",
                    "Support when something needs attention",
                    "A team that stands behind the work",
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 font-semibold text-body-sm text-brand-white">
                      <svg className="w-5 h-5 text-brand-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-brand-white/20 pt-4 mt-2">
                  <p className="text-body-md font-bold text-brand-white leading-relaxed">
                    The installation is the project. Standing behind it is the AAA difference.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Timeline Section */}
          <div className="hidden lg:flex flex-col gap-16 mb-6 relative z-10">
            
            {/* Pathway: AAA (Light Glass Container) */}
            <div className="relative pl-4 bg-brand-white/80 border border-brand-cool-gray/30 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand-blue">
                  AAA Differentiator Pathway
                </span>
                <span className="text-xs text-brand-blue/90 font-bold uppercase tracking-wider animate-pulse mr-4">
                  Relationship Continues
                </span>
              </div>
              
              {/* Timeline Track & Active Path Line */}
              <div className="relative h-[3px] bg-brand-cool-gray/60 rounded w-[95%] mb-12">
                <div 
                  className="absolute left-0 top-0 h-full bg-brand-blue transition-all duration-[1500ms] delay-300 ease-out motion-reduce:transition-none"
                  style={{ width: animate ? "105%" : "0%" }}
                />
              </div>
              
              {/* 5-Column layout */}
              <div className="grid grid-cols-5 w-full relative -mt-[57px]">
                {/* Step 1: Plan */}
                <div className="flex flex-col items-start">
                  <div className={`w-4 h-4 rounded-full bg-brand-white border-3 border-brand-blue shadow-sm z-10 transition-all duration-300 delay-100 ${animate ? 'scale-100' : 'scale-0'}`} />
                  <h4 className="text-body-md font-bold text-brand-near-black mt-4">Plan</h4>
                </div>
                
                {/* Step 2: Install */}
                <div className="flex flex-col items-start">
                  <div className={`w-4 h-4 rounded-full bg-brand-white border-3 border-brand-blue shadow-sm z-10 transition-all duration-300 delay-200 ${animate ? 'scale-100' : 'scale-0'}`} />
                  <h4 className="text-body-md font-bold text-brand-near-black mt-4">Install</h4>
                </div>
                
                {/* Step 3: Inspect */}
                <div className="flex flex-col items-start">
                  <div className={`w-4 h-4 rounded-full bg-brand-white border-3 border-brand-blue shadow-sm z-10 transition-all duration-300 delay-300 ${animate ? 'scale-100' : 'scale-0'}`} />
                  <h4 className="text-body-md font-bold text-brand-near-black mt-4">Inspect</h4>
                </div>
                
                {/* Step 4: Support */}
                <div className="flex flex-col items-start">
                  <div className={`w-4 h-4 rounded-full bg-brand-white border-3 border-brand-blue shadow-sm z-10 transition-all duration-300 delay-400 ${animate ? 'scale-100' : 'scale-0'}`} />
                  <h4 className="text-body-md font-bold text-brand-near-black mt-4">Support</h4>
                </div>
                
                {/* Step 5: Still Reachable (Visual Hero) */}
                <div className="flex flex-col items-start relative -mt-[17px]">
                  {/* Glowing Hero Node */}
                  <div className={`relative z-20 flex-shrink-0 transition-all duration-500 delay-[1000ms] motion-reduce:transition-none ${
                    animate ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}>
                    {/* Glowing outer circle animation */}
                    <div className="absolute inset-0 rounded-full bg-brand-blue/30 animate-ping motion-reduce:animate-none" />
                    <div className="w-12 h-12 rounded-full bg-brand-blue border-3 border-brand-white shadow-[0_0_20px_rgba(59,158,232,0.6)] flex items-center justify-center text-brand-white hover:scale-110 transition-transform duration-300">
                      {/* Four-pane window icon */}
                      <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4zM12 4v16M4 12h16" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-body-md font-extrabold text-brand-blue mt-4">Still Reachable</h4>
                </div>
              </div>
            </div>

          </div>

          {/* Mobile Timeline Section (Stacked Vertically) */}
          <div className="flex flex-col gap-10 lg:hidden relative z-10">
            
            {/* AAA Pathway (Mobile) */}
            <div className="border border-brand-cool-gray/30 bg-brand-white/80 rounded-2xl p-6 shadow-sm">
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand-blue block mb-6">
                AAA Differentiator Pathway
              </span>
              
              <div className="relative pl-8 border-l-2 border-brand-blue/30 flex flex-col gap-8">
                {/* Plan */}
                <div className="relative flex items-center gap-3">
                  <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-brand-white border-3 border-brand-blue" />
                  <span className="text-body-md font-bold text-brand-near-black">Plan</span>
                </div>
                {/* Install */}
                <div className="relative flex items-center gap-3">
                  <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-brand-white border-3 border-brand-blue" />
                  <span className="text-body-md font-bold text-brand-near-black">Install</span>
                </div>
                {/* Inspect */}
                <div className="relative flex items-center gap-3">
                  <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-brand-white border-3 border-brand-blue" />
                  <span className="text-body-md font-bold text-brand-near-black">Inspect</span>
                </div>
                {/* Support */}
                <div className="relative flex items-center gap-3">
                  <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-brand-white border-3 border-brand-blue" />
                  <span className="text-body-md font-bold text-brand-near-black">Support</span>
                </div>
                {/* Still Reachable */}
                <div className="relative flex items-center gap-4 py-1">
                  <div className="absolute -left-[54px] w-10 h-10 rounded-full bg-brand-blue border-3 border-brand-white shadow-[0_0_12px_rgba(59,158,232,0.6)] flex items-center justify-center text-brand-white">
                    <svg className="w-4 h-4 text-brand-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4zM12 4v16M4 12h16" />
                    </svg>
                  </div>
                  <span className="text-body-md font-extrabold text-brand-blue">Still Reachable</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
