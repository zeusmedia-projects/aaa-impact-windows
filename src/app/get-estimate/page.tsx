"use client";

import React, { useState } from "react";
import ResidentialEstimateForm from "@/components/forms/ResidentialEstimateForm";
import CommercialEstimateForm from "@/components/forms/CommercialEstimateForm";

type FormTab = "residential" | "commercial";

export default function GetEstimatePage() {
  const [activeTab, setActiveTab] = useState<FormTab>("residential");

  return (
    <div className="min-h-screen pt-24 pb-16 StudioBackground flex items-center justify-center">
      <div className="max-w-3xl w-full px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center mb-8 flex flex-col items-center gap-2">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
            Start the Conversation
          </span>
          <h1 className="font-display text-display-lg font-extrabold text-brand-near-black leading-[1.0] uppercase tracking-[-0.035em]">
            Get a Free Estimate.
          </h1>
          <p className="text-body-md text-brand-graphite max-w-lg">
            Tell us about your project and we&apos;ll be in touch to build out the scope.
          </p>

          {/* Toggle pill */}
          <div className="mt-6 flex p-1 bg-brand-cool-gray/50 rounded-full border border-brand-cool-gray w-fit select-none">
            <button
              onClick={() => setActiveTab("residential")}
              className={`px-5 py-2 rounded-full text-label font-bold transition-all duration-200 focus:outline-none ${
                activeTab === "residential"
                  ? "bg-brand-blue text-brand-white shadow-card"
                  : "text-brand-graphite/70 hover:text-brand-near-black"
              }`}
            >
              I&apos;m a Homeowner
            </button>
            <button
              onClick={() => setActiveTab("commercial")}
              className={`px-5 py-2 rounded-full text-label font-bold transition-all duration-200 focus:outline-none ${
                activeTab === "commercial"
                  ? "bg-brand-blue text-brand-white shadow-card"
                  : "text-brand-graphite/70 hover:text-brand-near-black"
              }`}
            >
              I&apos;m a Contractor
            </button>
          </div>
        </div>

        {/* Selected Form Display */}
        <div className="relative mt-6">
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
    </div>
  );
}
