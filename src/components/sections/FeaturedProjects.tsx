"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects, ProjectCategory } from "@/data/projects";
import { trackEvent } from "@/lib/analytics";

// Lightweight Before/After Slider Component
function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:min-h-[400px] rounded-2xl overflow-hidden shadow-md border border-zinc-200 bg-black select-none cursor-ew-resize"
    >
      {/* 1. Before Image (Underneath) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/projects/placeholder-windows.png"
          alt="Before installation: standard single-pane window"
          fill
          sizes="(max-width: 1024px) 100vw, 80vw"
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute bottom-4 left-4 bg-brand-near-black/80 text-brand-white text-label px-3 py-1 rounded font-bold z-20">
          BEFORE
        </div>
      </div>

      {/* 2. After Image (Overlay with Clip Path) */}
      <div
        className="absolute inset-0 z-10"
        style={{
          clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
        }}
      >
        <Image
          src="/images/services/windows.png"
          alt="After installation: heavy-duty impact glass window"
          fill
          sizes="(max-width: 1024px) 100vw, 80vw"
          className="object-cover"
          priority
        />
        <div className="absolute bottom-4 right-4 bg-brand-blue/90 text-brand-white text-label px-3 py-1 rounded font-bold z-20">
          AFTER AAA IMPACT
        </div>
      </div>

      {/* 3. Slider line & handle indicator */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-brand-blue z-20"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-blue border-2 border-brand-white shadow-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-brand-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" className="rotate-90 origin-center" />
          </svg>
        </div>
      </div>

      {/* Spec labels card overlay */}
      <div className="absolute top-4 left-4 right-4 flex justify-between z-30 pointer-events-none">
        <span className="text-[10px] font-mono font-bold tracking-widest text-brand-white/80 bg-brand-near-black/60 px-2.5 py-1 rounded">
          SLIDE TO COMPARE
        </span>
        <span className="text-[10px] font-mono font-bold tracking-widest text-brand-blue bg-brand-white px-2.5 py-1 rounded">
          DAVIE PROJECT
        </span>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const [filter, setFilter] = useState<string>("all");
  const [visibleProjects, setVisibleProjects] = useState(projects);

  const filterOptions = [
    { label: "All", value: "all" },
    { label: "Windows", value: "windows" },
    { label: "Doors", value: "doors" },
    { label: "Roofing", value: "roofing" },
    { label: "Commercial", value: "commercial" },
  ];

  const handleFilterChange = (val: string) => {
    setFilter(val);
    if (val === "all") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter((p) => p.category.includes(val as ProjectCategory)));
    }
  };

  const handleCardClick = (slug: string, type: string) => {
    trackEvent("project_card_clicked", { project_slug: slug, project_type: type });
  };

  return (
    <section className="py-20 StudioBackground border-b border-brand-cool-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center mb-10 flex flex-col items-center gap-3">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase">Real Projects. Real Protection.</span>
          <h2 className="font-montserrat text-display-lg font-bold text-brand-near-black">
            See The Work Before You Decide
          </h2>
          <p className="text-body-md text-zinc-650 mt-2 max-w-2xl text-center leading-relaxed">
            Explore our recent storm protection and roofing installations across South Florida. From custom single-family retrofits to high-exposure commercial retail plazas, we deliver verified structural durability.
          </p>
        </div>

        {/* Highlighted Before/After Slider Element */}
        <div className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <BeforeAfterSlider />
            </div>
            <div className="lg:col-span-5 flex flex-col gap-4 text-brand-near-black">
              <span className="text-label text-brand-blue font-bold tracking-widest uppercase">Case Spotlight</span>
              <h3 className="font-montserrat text-display-lg font-bold tracking-tight leading-none text-brand-near-black">
                Davie Exterior Envelope Upgrade
              </h3>
              <p className="text-body-md text-zinc-600 leading-relaxed max-ch">
                Compare the difference between aging, high-maintenance single-pane windows and our custom-installed heavy-duty insulated impact glass packages. AAA managed the entire Davie HOA approval and city permit coordination.
              </p>
              <div className="mt-2">
                <Link
                  href="/get-estimate?service=windows"
                  className="inline-flex items-center justify-center h-11 px-6 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta transition-colors"
                >
                  Start Your Windows Upgrade
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Filter bar (horizontal scroll on mobile) */}
        <div className="flex justify-start md:justify-center items-center gap-2 pb-4 mb-8 overflow-x-auto no-scrollbar border-b border-brand-cool-gray/35 select-none">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleFilterChange(opt.value)}
              className={`px-4 py-2 rounded-full text-label font-bold whitespace-nowrap transition-all duration-200 focus:outline-none border ${
                filter === opt.value
                  ? "bg-black border-black text-white shadow-sm"
                  : "bg-white border-zinc-200 text-zinc-700 hover:border-zinc-300"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleProjects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              onClick={() => handleCardClick(project.slug, project.category.join(","))}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-zinc-200 bg-white hover:border-zinc-350 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden select-none bg-zinc-150">
                <Image
                  src={project.images[0] || "/images/projects/placeholder-windows.png"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                
                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 bg-black/80 text-white border border-white/10 text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-full uppercase backdrop-blur-sm">
                  {project.category[0]}
                </div>
              </div>

              {/* Project Card Info */}
              <div className="p-5 flex flex-col gap-2">
                <div className="flex justify-between items-center text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider">
                  <span>{project.location}</span>
                  <span>{project.propertyType}</span>
                </div>
                <h4 className="font-montserrat text-heading-md font-bold text-zinc-900 group-hover:text-brand-blue transition-colors duration-200 leading-tight">
                  {project.title}
                </h4>
                <p className="text-body-sm text-zinc-550 leading-relaxed line-clamp-2 mt-1">
                  {project.scope}
                </p>
                <div className="mt-4 flex items-center justify-between text-label font-bold text-brand-blue group-hover:text-brand-blue/80 transition-colors">
                  <span>VIEW CASE DETAILS</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
