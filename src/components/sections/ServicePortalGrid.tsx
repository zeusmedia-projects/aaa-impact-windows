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
      className="group relative w-full aspect-[16/9] md:aspect-[3/4] md:min-h-[480px] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover border border-brand-cool-gray/25 transition-all duration-500 bg-zinc-900 flex flex-col justify-end"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${index * 80}ms`,
        transitionDuration: "600ms",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src={imageSrc}
          alt={`${title} service illustration`}
          fill
          sizes="(max-width: 768px) 100vw, 30vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-70 group-hover:opacity-80"
        />
      </div>

      {/* Softer dark overlay for clean readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />

      {/* Card Content Stack */}
      <div className="relative z-20 p-6 md:p-8 flex flex-col gap-3 text-brand-white">
        {eyebrow && (
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
            {eyebrow}
          </span>
        )}
        <h3 className="font-montserrat text-heading-lg font-bold tracking-tight text-brand-white leading-tight">
          {title}
        </h3>
        <p className="text-body-sm text-zinc-300 leading-relaxed max-w-xs mb-3">
          {benefit}
        </p>

        {/* Dual Actions Group */}
        <div className="flex items-center gap-3">
          <Link
            href={linkUrl}
            className="flex-grow md:flex-grow-0 inline-flex items-center justify-center h-10 px-5 border border-brand-white/20 rounded-lg text-label font-bold text-brand-white hover:bg-brand-white/10 hover:border-brand-white transition-all duration-200 text-center"
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
      eyebrow: "",
      title: "Impact Windows",
      benefit: "Upgrade aging openings with impact-rated windows designed for storm protection, security, comfort, and curb appeal.",
      imageSrc: "/images/services/windows.png",
      linkUrl: "/impact-windows",
    },
    {
      id: "doors",
      eyebrow: "",
      title: "Impact Doors",
      benefit: "Protect entryways, sliders, and patio openings with doors built for South Florida weather and everyday use.",
      imageSrc: "/images/services/doors.png",
      linkUrl: "/impact-doors",
    },
    {
      id: "roofing",
      eyebrow: "",
      title: "Roofing",
      benefit: "Plan roof replacement or storm-readiness work with a team that handles the project cleanly and carefully.",
      imageSrc: "/images/services/roofing.png",
      linkUrl: "/roofing",
    },
  ];

  return (
    <section ref={containerRef} className="py-20 StudioBackground border-b border-brand-cool-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase">Homeowner Solutions</span>
          <h2 className="font-montserrat text-display-lg font-bold text-brand-near-black mt-2">
            What Can We Help You Protect?
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
