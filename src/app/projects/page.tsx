"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects, ProjectCategory } from "@/data/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");

  const filterTabs: { id: "all" | ProjectCategory; label: string }[] = [
    { id: "all", label: "All Projects" },
    { id: "windows", label: "Impact Windows" },
    { id: "doors", label: "Impact Doors" },
    { id: "roofing", label: "Roofing" },
    { id: "commercial", label: "Commercial" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category.includes(activeFilter);
  });

  return (
    <div className="relative w-full">
      {/* Page Header */}
      <section className="relative pt-32 pb-20 StudioBackground border-b border-brand-cool-gray/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center max-w-3xl">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase mb-3">
            Case Studies
          </span>
          <h1 className="text-display-xl font-bold text-brand-near-black leading-tight mb-6">
            Our Work Across South Florida
          </h1>
          <p className="text-body-lg text-brand-graphite max-w-2xl leading-relaxed">
            Real projects completed for homeowners and trade partners. All data verified for accuracy before publish.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-brand-cool-gray/30 pb-6 justify-center">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2 text-label font-bold uppercase tracking-wider rounded-lg transition-all duration-200 focus:outline-none ${
                activeFilter === tab.id
                  ? "bg-brand-blue text-brand-white shadow-card"
                  : "bg-brand-white text-brand-graphite border border-brand-cool-gray hover:border-brand-blue/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredProjects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-brand-cool-gray/30 bg-brand-white shadow-card hover:shadow-card-hover transition-all duration-300 h-full"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-350 origin-bottom z-20" />
                
                <div className="relative aspect-[16/10] overflow-hidden select-none bg-brand-cool-gray/10">
                  <Image
                    src={project.images[0] || "/images/projects/placeholder-windows.png"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-102"
                  />
                  
                  <div className="absolute top-3 left-3 bg-brand-blue/95 text-brand-white text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-full uppercase">
                    {project.category[0]}
                  </div>
                </div>

                <div className="p-5 flex flex-col gap-2 flex-grow justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-[10px] font-mono font-semibold text-brand-mid-gray/70 uppercase">
                      <span>{project.location}</span>
                      <span>{project.propertyType}</span>
                    </div>
                    <h4 className="text-heading-md font-bold text-brand-near-black group-hover:text-brand-blue transition-colors duration-200 leading-tight">
                      {project.title}
                    </h4>
                    <p className="text-body-sm text-brand-graphite/80 leading-normal line-clamp-2 mt-1">
                      {project.scope}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-label font-bold text-brand-blue group-hover:text-brand-blue/80 transition-colors">
                    <span>VIEW CASE DETAILS</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-brand-white rounded-2xl border border-brand-cool-gray/30 max-w-md mx-auto shadow-card">
            <p className="text-body-md text-brand-graphite">
              No projects found in this category yet.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
