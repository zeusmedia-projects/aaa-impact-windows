"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

function BlueprintReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blueprintOverlayRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const pathsRef = useRef<SVGPathElement[]>([]);
  useEffect(() => {
    if (typeof window === "undefined") return;

    let isUnmounted = false;
    let ctx: any;

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        if (isUnmounted) return;
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          // Prepare SVG paths
          pathsRef.current.forEach((path) => {
            if (path) {
              const length = path.getTotalLength();
              gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
              });
            }
          });

          // Create Scroll-driven Timeline
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 65%",
              end: "bottom 30%",
              scrub: 0.5,
              toggleActions: "play none none reverse",
            },
          });

          // 1. Draw SVG lines sequentially
          tl.to(
            pathsRef.current,
            {
              strokeDashoffset: 0,
              duration: 1.5,
              stagger: 0.05,
              ease: "power1.inOut",
            },
            0
          );

          // 2. Crossfade blueprint overlay to photos
          tl.to(
            blueprintOverlayRef.current,
            {
              opacity: 0,
              duration: 0.8,
              ease: "power1.inOut",
            },
            "+=0.1"
          );

          tl.to(
            photoRef.current,
            {
              opacity: 1,
              duration: 0.8,
              ease: "power1.inOut",
            },
            "<"
          );
        }, containerRef);
      });
    });

    return () => {
      isUnmounted = true;
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-brand-white/10 bg-brand-near-black p-2"
    >
      {/* 1. Underlying photorealistic storefront (reveals at end of scroll) */}
      <div ref={photoRef} className="absolute inset-2 z-0 opacity-0 rounded-xl overflow-hidden select-none">
        <Image
          src="/images/services/commercial.png"
          alt="AAA Impact completed commercial storefront plaza"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* 2. Blueprint drawing overlay (drawn and then dissolved) */}
      <div
        ref={blueprintOverlayRef}
        className="absolute inset-2 z-10 bg-brand-near-black rounded-xl border border-brand-white/5 flex items-center justify-center"
      >
        <svg
          className="w-full h-full p-6 text-brand-blue"
          viewBox="0 0 500 375"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid lines (Technical background) */}
          <line x1="50" y1="0" x2="50" y2="375" stroke="#171B1F" strokeWidth="1" />
          <line x1="150" y1="0" x2="150" y2="375" stroke="#171B1F" strokeWidth="1" />
          <line x1="250" y1="0" x2="250" y2="375" stroke="#171B1F" strokeWidth="1" />
          <line x1="350" y1="0" x2="350" y2="375" stroke="#171B1F" strokeWidth="1" />
          <line x1="450" y1="0" x2="450" y2="375" stroke="#171B1F" strokeWidth="1" />
          
          <line x1="0" y1="75" x2="500" y2="75" stroke="#171B1F" strokeWidth="1" />
          <line x1="0" y1="175" x2="500" y2="175" stroke="#171B1F" strokeWidth="1" />
          <line x1="0" y1="275" x2="500" y2="275" stroke="#171B1F" strokeWidth="1" />

          {/* Building perimeter outlines (Thickness: 2.5px) */}
          <path
            ref={(el) => { if (el) pathsRef.current[0] = el; }}
            d="M 60,320 L 440,320 L 440,80 L 60,80 Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Floor separator (Thickness: 2.5px) */}
          <path
            ref={(el) => { if (el) pathsRef.current[1] = el; }}
            d="M 60,200 L 440,200"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Vertical Storefront columns (Thickness: 1.5px) */}
          <path
            ref={(el) => { if (el) pathsRef.current[2] = el; }}
            d="M 136,80 L 136,320"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            ref={(el) => { if (el) pathsRef.current[3] = el; }}
            d="M 250,80 L 250,320"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            ref={(el) => { if (el) pathsRef.current[4] = el; }}
            d="M 364,80 L 364,320"
            stroke="currentColor"
            strokeWidth="1.5"
          />

          {/* Glazing / Window grid horizontal details (Thickness: 1.5px) */}
          <path
            ref={(el) => { if (el) pathsRef.current[5] = el; }}
            d="M 60,140 L 440,140"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            ref={(el) => { if (el) pathsRef.current[6] = el; }}
            d="M 60,260 L 440,260"
            stroke="currentColor"
            strokeWidth="1.5"
          />

          {/* Double entry door details at the bottom center */}
          <path
            ref={(el) => { if (el) pathsRef.current[7] = el; }}
            d="M 210,320 L 210,230 L 290,230 L 290,320"
            stroke="currentColor"
            strokeWidth="2"
          />
          
          {/* Door swing vector arcs */}
          <path
            ref={(el) => { if (el) pathsRef.current[8] = el; }}
            d="M 210,320 A 40,40 0 0,0 250,280"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 2"
          />
          <path
            ref={(el) => { if (el) pathsRef.current[9] = el; }}
            d="M 290,320 A 40,40 0 0,1 250,280"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 2"
          />

          {/* Technical blueprint dimension labels */}
          <text x="75" y="70" fill="#AAB4BE" className="text-[7px] font-mono tracking-wider font-semibold">FACADE A-101</text>
          <text x="220" y="220" fill="currentColor" className="text-[7px] font-mono tracking-wider font-semibold">STOREFRONT DOORS</text>
        </svg>
      </div>
    </div>
  );
}

export default function CommercialSection() {
  const proofPoints = [
    {
      title: "Responsive Communication",
      desc: "You reach us. Your crews and managers hear back directly.",
    },
    {
      title: "Clean Jobsite Practices",
      desc: "We coordinate trash hauling and clean throughout the installation window.",
    },
    {
      title: "Permit & Schedule Coordination",
      desc: "We align with building departments and GC master calendars.",
    },
    {
      title: "Established GC Relationships",
      desc: "Ask us about current commercial references in retail and office spaces.",
    },
  ];

  return (
    <section className="py-20 DarkBackground-Black text-brand-white border-y border-brand-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content Details */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
                GC Partners & Commercial Properties
              </span>
              <h2 className="text-display-xl font-bold tracking-tight text-brand-white">
                A Trade Partner Built for Serious Projects.
              </h2>
            </div>
            
            <p className="text-body-md text-brand-mid-gray/80 leading-relaxed max-ch">
              AAA works with general contractors and commercial property owners on storefront systems, plaza replacements, and commercial window and door projects across South Florida. Our reputation in this space was built through consistent execution, responsive communication, and clean jobsites.
            </p>

            {/* 2x2 Callout Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {proofPoints.map((point, index) => (
                <div
                  key={index}
                  className="group relative p-5 rounded-lg bg-brand-graphite border border-brand-white/5 flex flex-col gap-1.5"
                >
                  {/* Left edge accent glow */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-350 origin-bottom" />
                  
                  <h4 className="text-heading-md font-bold text-brand-white group-hover:text-brand-blue transition-colors duration-200">
                    {point.title}
                  </h4>
                  <p className="text-body-sm text-brand-mid-gray/70 leading-normal">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/commercial#project-form"
                className="inline-flex items-center justify-center h-12 px-6 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta transition-all text-center"
              >
                Submit a Project for Review
              </Link>
              <a
                href={`tel:${siteConfig.phoneDefault}`}
                className="inline-flex items-center justify-center h-12 px-6 border border-brand-white/20 rounded-lg text-label font-bold text-brand-white hover:bg-brand-white/10 transition-colors text-center"
              >
                Send Plans or Discuss Scope
              </a>
            </div>
          </div>

          {/* Right Column: Blueprint Reveal Canvas */}
          <div className="lg:col-span-6 w-full">
            <BlueprintReveal />
          </div>

        </div>
      </div>
    </section>
  );
}
