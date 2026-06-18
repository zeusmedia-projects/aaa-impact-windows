"use client";

import React, { useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

interface PropertyOption {
  id: string;
  name: string;
  copy: string;
  iconType: "house" | "townhome" | "window" | "door" | "roof" | "multi";
}

// Inline SVGs for Property Types
function SelectorIcon({ type }: { type: string }) {
  switch (type) {
    case "house":
      return (
        <svg className="w-10 h-10 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
          <path d="M9 21V12h6v9" />
        </svg>
      );
    case "townhome":
      return (
        <svg className="w-10 h-10 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Left House */}
          <path d="M2 10.5L7 6.5L12 10.5V21H2V10.5z" />
          <line x1="5" y1="21" x2="5" y2="15" stroke="currentColor" strokeWidth="1.5" />
          {/* Right House */}
          <path d="M12 10.5L17 6.5L22 10.5V21H12" />
          <line x1="17" y1="21" x2="17" y2="15" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "window":
      return (
        <svg className="w-10 h-10 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="3" width="16" height="18" rx="1.5" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="12" y1="3" x2="12" y2="21" />
        </svg>
      );
    case "door":
      return (
        <svg className="w-10 h-10 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="1.5" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <circle cx="9" cy="12" r="1" fill="currentColor" />
          <circle cx="15" cy="12" r="1" fill="currentColor" />
        </svg>
      );
    case "roof":
      return (
        <svg className="w-10 h-10 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 17l9-10 9 10" strokeLinecap="round" />
          <path d="M6 17v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3" />
        </svg>
      );
    case "multi":
      return (
        <svg className="w-10 h-10 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Roof line */}
          <path d="M3 10l5-4 5 4" strokeLinecap="round" />
          <rect x="5" y="10" width="6" height="10" />
          {/* Window adjacent */}
          <rect x="14" y="7" width="7" height="9" />
          <line x1="14" y1="11.5" x2="21" y2="11.5" />
          <line x1="17.5" y1="7" x2="17.5" y2="16" />
        </svg>
      );
    default:
      return null;
  }
}

// Small four-pane window checkmark motif (16px SVG)
function SmallCheckmark() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-brand-blue"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  );
}

export default function PropertySelector() {
  const [selectedId, setSelectedId] = useState("house");

  const options: PropertyOption[] = [
    {
      id: "house",
      name: "Single-Family Home",
      copy: "Most Naples and Davie homeowners start with windows or full-window-and-door packages. We'll build a scope that fits.",
      iconType: "house",
    },
    {
      id: "townhome",
      name: "Townhome or Villa",
      copy: "We work throughout Falling Waters, Davie Country Estates, and surrounding communities. We understand HOA requirements.",
      iconType: "townhome",
    },
    {
      id: "window",
      name: "Impact Window Project",
      copy: "From single-room replacements to whole-home packages, we assess the project and recommend the right system.",
      iconType: "window",
    },
    {
      id: "door",
      name: "Impact Door Project",
      copy: "Entry, sliding, and French impact door systems — we'll review your opening sizes and recommend the best fit.",
      iconType: "door",
    },
    {
      id: "roof",
      name: "Roofing Project",
      copy: "Roof replacement with permit coordination, cleanup, and a clear scope before work begins.",
      iconType: "roof",
    },
    {
      id: "multi",
      name: "Multiple Services",
      copy: "We coordinate windows, doors, and roofing together when the project allows. Often the most efficient approach.",
      iconType: "multi",
    },
  ];

  const activeOption = options.find((opt) => opt.id === selectedId) || options[0];

  const handleSelect = (id: string) => {
    setSelectedId(id);
    // Trigger GA4 Event
    trackEvent("service_tile_selected", { selected_service: id });
  };

  return (
    <section className="py-20 WhiteBackground border-b border-brand-cool-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center mb-12 lg:mb-16 flex flex-col gap-3">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase">Start Your Estimate</span>
          <h2 className="text-display-lg font-bold text-brand-near-black">
            What Are We Protecting?
          </h2>
        </div>

        {/* 6-Tile interactive grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {options.map((option) => {
            const isSelected = option.id === selectedId;
            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className={`group relative aspect-square p-5 rounded-xl border flex flex-col items-center justify-center gap-4 text-center focus:outline-none transition-all duration-300 ${
                  isSelected
                    ? "border-2 border-brand-blue bg-brand-blue/5 text-brand-blue shadow-card"
                    : "border-brand-cool-gray/70 hover:border-brand-blue/40 text-brand-near-black bg-brand-white"
                }`}
              >
                {/* Checkmark in top-right */}
                {isSelected && (
                  <div className="absolute top-2.5 right-2.5">
                    <SmallCheckmark />
                  </div>
                )}
                
                {/* SVG Icon */}
                <div className={`transition-transform duration-300 group-hover:scale-105 ${isSelected ? "text-brand-blue" : "text-brand-graphite/60 group-hover:text-brand-blue"}`}>
                  <SelectorIcon type={option.iconType} />
                </div>

                {/* Title */}
                <span className="font-display text-body-sm font-bold tracking-tight">
                  {option.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamically changing copy & CTA section below */}
        <div className="mt-12 max-w-2xl mx-auto text-center flex flex-col items-center gap-6 animate-fade-in">
          <p className="text-body-md text-brand-graphite font-medium leading-relaxed min-h-[48px]">
            {activeOption.copy}
          </p>

          <Link
            href={`/get-estimate?service=${selectedId}`}
            className="inline-flex items-center justify-center h-12 px-8 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta transition-all"
          >
            Start My {activeOption.name} Estimate →
          </Link>
        </div>

      </div>
    </section>
  );
}
