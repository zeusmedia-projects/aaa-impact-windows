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
      className="relative py-24 md:py-32 bg-black overflow-hidden text-white border-t border-zinc-800"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-brand-blue/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Header Block */}
        <div className="max-w-3xl mb-16 flex flex-col gap-4">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase block">
            A Better Way to Build
          </span>
          <h2 className="text-display-lg font-bold text-white leading-tight">
            The job is not over when the crew leaves.
          </h2>
          <p className="text-body-md text-zinc-400 max-w-2xl">
            Most window contractors collect the final check and disappear. At AAA Impact, we set a new standard—standing by our work and remaining fully reachable long after the dust settles.
          </p>
        </div>

        {/* 2-Column Comparison Layout */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch transition-all duration-[800ms] transform ease-out ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          
          {/* Column 1: Most Contractors */}
          <div className="bg-zinc-950/40 border border-zinc-800/80 rounded-3xl p-8 lg:p-10 flex flex-col justify-between transition-all duration-500 hover:border-zinc-700/50">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <h3 className="text-heading-md font-bold text-zinc-300 uppercase tracking-wider">
                  Most Contractors
                </h3>
              </div>

              <div className="relative pl-6 border-l border-zinc-800 flex flex-col gap-8">
                {/* Step 1 */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <h4 className="text-body-md font-bold text-zinc-400">Rushed Estimates</h4>
                  <p className="text-body-sm text-zinc-500 mt-1">
                    Quick sales pitches using high-pressure tactics and estimated measurements.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <h4 className="text-body-md font-bold text-zinc-400">Subcontracted Crews</h4>
                  <p className="text-body-sm text-zinc-500 mt-1">
                    Unverified, rushed crews cutting corners to move on to the next job quickly.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <h4 className="text-body-md font-bold text-zinc-400">Final Payment Request</h4>
                  <p className="text-body-sm text-zinc-500 mt-1">
                    Pressure to pay in full immediately, even with pending inspection items.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="relative">
                  <div className="absolute -left-[32px] top-0.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-red-500 flex items-center justify-center">
                    <span className="text-red-500 text-[10px] font-bold">!</span>
                  </div>
                  <h4 className="text-body-md font-bold text-red-400">Hard to Reach</h4>
                  <p className="text-body-sm text-zinc-500 mt-1">
                    Ghosted when you call about drafts, leaks, or warranty service requests.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800/80 pt-6 mt-8">
              <p className="text-body-sm italic text-zinc-500">
                Leaves homeowners to deal with code inspections and warranty disputes alone.
              </p>
            </div>
          </div>

          {/* Column 2: The AAA Way */}
          <div className="relative bg-zinc-950 border border-brand-blue/30 rounded-3xl p-8 lg:p-10 flex flex-col justify-between shadow-[0_0_50px_rgba(59,158,232,0.05)] transition-all duration-500 hover:border-brand-blue/50">
            {/* Top highlight glow */}
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse" />
                  <h3 className="text-heading-md font-bold text-white uppercase tracking-wider">
                    The AAA Way
                  </h3>
                </div>
                <span className="text-[10px] bg-brand-blue/10 border border-brand-blue/30 text-brand-blue font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Our Promise
                </span>
              </div>

              <div className="relative pl-6 border-l border-brand-blue/20 flex flex-col gap-8">
                {/* Step 1 */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-blue" />
                  <h4 className="text-body-md font-bold text-white">Precise Project Plan</h4>
                  <p className="text-body-sm text-zinc-300 mt-1">
                    Laser measurements, verified engineering plans, and all municipal permits handled correctly.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-blue" />
                  <h4 className="text-body-md font-bold text-white">Experienced, Professional Crews</h4>
                  <p className="text-body-sm text-zinc-300 mt-1">
                    Courteous, specialized installers who respect your property and leave it cleaner than they found it.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-blue" />
                  <h4 className="text-body-md font-bold text-white">Inspections & Walkthrough</h4>
                  <p className="text-body-sm text-zinc-300 mt-1">
                    We coordinate final code inspections and walk the job with you to verify absolute satisfaction.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="relative">
                  {/* Glowing custom indicator */}
                  <div className="absolute -left-[35px] -top-1 w-5 h-5 rounded-full bg-brand-blue border-2 border-white shadow-[0_0_10px_rgba(59,158,232,0.6)] flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-body-md font-bold text-brand-blue">Continued Support</h4>
                  <p className="text-body-sm text-zinc-300 mt-1">
                    A dedicated South Florida team always ready to answer calls and assist with adjustments or warranty claims.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800/80 pt-6 mt-8">
              <p className="text-body-sm font-semibold text-zinc-300 leading-relaxed">
                The installation is the project. Standing behind it is the AAA difference.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
