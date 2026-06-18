import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Service | AAA Impact Windows & Doors",
  description: "Read our terms of service governing estimates, proposals, permitting disclaimers, and governing laws.",
};

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString("en-US", { 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  });

  return (
    <div className="relative w-full">
      <main className="min-h-screen pt-32 pb-16 bg-brand-ice text-brand-near-black font-sans">
        <div className="max-w-3xl mx-auto px-6 bg-brand-white p-8 md:p-12 rounded-2xl border border-brand-cool-gray/30 shadow-card">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase block mb-2">
            Legal Terms
          </span>
          <h1 className="text-display-lg font-bold text-brand-near-black mb-8 border-b border-brand-cool-gray/25 pb-4">
            Terms of Service
          </h1>

          <div className="space-y-6 text-body-sm text-brand-graphite leading-relaxed max-ch">
            <p className="font-mono text-[11px] text-brand-mid-gray">
              Last Updated: {currentDate}
            </p>

            <p>
              Welcome to the website of {siteConfig.companyName}. By accessing or using our website, you agree to comply with and be bound by the following Terms of Service.
            </p>

            <h3 className="text-heading-md font-bold text-brand-near-black pt-4">
              1. Estimates and Proposals
            </h3>
            {/* [CLIENT VERIFY - Confirm free estimate policies, exclusions, and quote validity periods] */}
            <p>
              All property estimates, quotes, or proposals provided through our website or subsequent in-person visits are subject to final contract verification. Estimates are based on initial on-site dimensions, and AAA reserves the right to modify quotes based on structural frame variations, manufacturer price shifts, or municipal permit modifications.*
            </p>

            <h3 className="text-heading-md font-bold text-brand-near-black pt-4">
              2. Permitting and Engineering
            </h3>
            {/* [CLIENT VERIFY - Confirm municipal permit timelines and disclaimer boundaries] */}
            <p>
              While AAA manages the preparation, filing, and coordination of building permits and municipal inspectors, we do not guarantee specific municipal turnaround times or board approval periods. Municipal timelines are beyond our control.*
            </p>

            <h3 className="text-heading-md font-bold text-brand-near-black pt-4">
              3. Disclaimer of Warranties
            </h3>
            <p>
              This website and its content are provided on an &ldquo;as is&rdquo; basis. AAA makes no warranties, expressed or implied, regarding the accuracy, completeness, or suitability of project placeholders, stock graphics, or text templates prior to final contract signing.
            </p>

            <h3 className="text-heading-md font-bold text-brand-near-black pt-4">
              4. Governing Law
            </h3>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
