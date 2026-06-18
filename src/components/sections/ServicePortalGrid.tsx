"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface PortalCardProps {
  id: string;
  eyebrow: string;
  title: string;
  benefit: string;
  imageSrc: string;
  linkUrl: string;
  index: number;
  isVisible: boolean;
}

function ServicePortalCard({
  eyebrow,
  title,
  benefit,
  imageSrc,
  linkUrl,
  index,
  isVisible,
}: PortalCardProps) {
  return (
    <div
      className="group relative w-full aspect-[16/9] md:aspect-[3/4] md:min-h-[480px] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover border border-brand-cool-gray/30 transition-all duration-500 bg-brand-near-black flex flex-col justify-end"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${index * 80}ms`,
        transitionDuration: "600ms",
      }}
    >
      {/* Background Image with Hover Parallax Translate & Scale */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src={imageSrc}
          alt={`${title} service illustration`}
          fill
          sizes="(max-width: 768px) 100vw, 30vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2 opacity-60 group-hover:opacity-75"
        />
      </div>

      {/* Edge glow lighting highlight (electric Carolina blue left border) */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-350 origin-bottom z-20" />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-near-black via-brand-near-black/40 to-transparent z-10" />

      {/* Card Content Stack */}
      <div className="relative z-20 p-6 md:p-8 flex flex-col gap-3 text-brand-white">
        <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
          {eyebrow}
        </span>
        <h3 className="text-display-lg font-bold tracking-tight text-brand-white leading-none">
          {title}
        </h3>
        <p className="text-body-sm text-brand-cool-gray/90 leading-relaxed max-w-xs mb-3">
          {benefit}
        </p>

        {/* Dual Actions Group */}
        <div className="flex items-center gap-3">
          <Link
            href={linkUrl}
            className="flex-grow md:flex-grow-0 inline-flex items-center justify-center h-10 px-5 border border-brand-white/30 rounded-lg text-label font-bold text-brand-white hover:bg-brand-white/10 hover:border-brand-white transition-all duration-200 text-center"
          >
            Learn More
          </Link>
          <Link
            href="/get-estimate"
            className="flex-grow md:flex-grow-0 inline-flex items-center justify-center h-10 px-5 bg-brand-blue hover:bg-brand-blue/90 rounded-lg text-label font-bold text-brand-white shadow-cta transition-all duration-200 text-center"
          >
            Get Estimate
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ServicePortalGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portals = [
    {
      id: "windows",
      eyebrow: "Service 01",
      title: "Impact Windows",
      benefit: "Hurricane protection. Security. Noise reduction. Energy performance.",
      imageSrc: "/images/services/windows.png",
      linkUrl: "/impact-windows",
    },
    {
      id: "doors",
      eyebrow: "Service 02",
      title: "Impact Doors",
      benefit: "Entry, sliding, and French door systems built to the same standard as the windows.",
      imageSrc: "/images/services/doors.png",
      linkUrl: "/impact-doors",
    },
    {
      id: "roofing",
      eyebrow: "Service 03",
      title: "Roofing",
      benefit: "Roof replacement and storm readiness, with the same cleanup and permit coordination as every AAA project.",
      imageSrc: "/images/services/roofing.png",
      linkUrl: "/roofing",
    },
  ];

  return (
    <section ref={containerRef} className="py-20 WhiteBackground border-b border-brand-cool-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase">Scope of Work</span>
          <h2 className="text-display-lg font-bold text-brand-near-black mt-2">
            Our Services
          </h2>
        </div>

        {/* 3-Column Portal Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {portals.map((portal, index) => (
            <ServicePortalCard
              key={portal.id}
              id={portal.id}
              eyebrow={portal.eyebrow}
              title={portal.title}
              benefit={portal.benefit}
              imageSrc={portal.imageSrc}
              linkUrl={portal.linkUrl}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
