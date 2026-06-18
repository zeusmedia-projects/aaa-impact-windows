"use client";

import React, { useState } from "react";
import ResidentialEstimateForm from "../forms/ResidentialEstimateForm";
import CommercialEstimateForm from "../forms/CommercialEstimateForm";

type FormTab = "residential" | "commercial";

export default function EstimateSection() {
  const [activeTab, setActiveTab] = useState<FormTab>("residential");

  return (
    <section id="estimate-section" className="py-20 StudioBackground border-b border-brand-cool-gray/30 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center mb-10 max-w-2xl mx-auto flex flex-col items-center gap-3 animate-fade-in">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase">Ready to Begin?</span>
          <h2 className="text-display-lg font-bold text-brand-near-black">
            Let&apos;s Build Your Estimate.
          </h2>
          
          {/* Tabs Selector */}
          <div className="mt-6 flex p-1 bg-brand-cool-gray/50 rounded-full border border-brand-cool-gray w-fit select-none">
            <button
              onClick={() => setActiveTab("residential")}
              className={`px-5 py-2.5 rounded-full text-label font-bold transition-all duration-200 focus:outline-none ${
                activeTab === "residential"
                  ? "bg-brand-blue text-brand-white shadow-card"
                  : "text-brand-graphite/70 hover:text-brand-near-black"
              }`}
            >
              I&apos;m a Homeowner
            </button>
            <button
              onClick={() => setActiveTab("commercial")}
              className={`px-5 py-2.5 rounded-full text-label font-bold transition-all duration-200 focus:outline-none ${
                activeTab === "commercial"
                  ? "bg-brand-blue text-brand-white shadow-card"
                  : "text-brand-graphite/70 hover:text-brand-near-black"
              }`}
            >
              I&apos;m a Contractor / Owner
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="relative mt-8 min-h-[500px]">
          {activeTab === "residential" ? (
            <div className="animate-fade-in">
              <ResidentialEstimateForm />
            </div>
          ) : (
            <div className="animate-fade-in">
              <CommercialEstimateForm />
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
