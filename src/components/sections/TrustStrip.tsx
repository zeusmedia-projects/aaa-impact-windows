"use client";

import React, { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/siteConfig";

// Custom four-pane window checkmark motif (16px SVG)
function WindowCheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-brand-blue flex-shrink-0"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
    </svg>
  );
}

export default function TrustStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const items = [
    "Family Owned & Operated",
    "Residential & Commercial",
    "Serving South Florida",
    "Permit Coordination",
    "Licensed & Insured",
  ];

  return (
    <div
      ref={containerRef}
      className="bg-black border-y border-zinc-800 py-5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-nowrap md:flex-wrap items-center justify-between gap-6 md:gap-4 overflow-x-auto md:overflow-x-visible no-scrollbar select-none">
          {items.map((item, index) => (
            <div
              key={item}
              className={`flex items-center gap-3 whitespace-nowrap transition-all duration-500 ease-out`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(20px)",
                transitionDelay: `${index * 60}ms`,
              }}
            >
              <WindowCheckIcon />
              <span className="text-body-sm font-sans font-semibold text-brand-white tracking-wide uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
