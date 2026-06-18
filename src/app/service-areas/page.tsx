import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Service Areas | AAA Impact Windows & Doors | South Florida",
  description: "AAA serves homeowners and commercial properties across Naples, Davie, Sunrise, Miramar, Pembroke Pines, Broward County, Palm Beach, and Dade.",
};

export default function ServiceAreasPage() {
  const residentialAreas = [
    { 
      name: "Naples & Falling Waters", 
      details: "Gulf coast residential hurricane envelope protections, HVHZ windows, doors, and shingle roof replacements.",
      slug: "naples"
    },
    { 
      name: "Davie & Davie Country Estates", 
      details: "Premium storm openings upgrades matching local HOA parameters and Broward County wind pressures.",
      slug: "davie"
    },
    { 
      name: "Pembroke Pines", 
      details: "Multi-point locking door retrofits and custom shingle and tile roofing replacements.",
      slug: "pembroke-pines"
    },
    { 
      name: "Sunrise", 
      details: "Residential impact windows, patio gliders, and storefront storefront commercial envelopes.",
      slug: "sunrise"
    },
    { 
      name: "Miramar", 
      details: "Code-compliant impact replacements, in-house permit coordination, and daily site cleanups.",
      slug: "miramar"
    },
  ];

  return (
    <div className="relative w-full">
      {/* Page Header */}
      <section className="relative pt-32 pb-20 StudioBackground border-b border-brand-cool-gray/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center max-w-3xl">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase mb-3">
            Geographic Coverage
          </span>
          <h1 className="text-display-xl font-bold text-brand-near-black leading-tight mb-6">
            Serving South Florida — Residential & Commercial
          </h1>
          <p className="text-body-lg text-brand-graphite max-w-2xl leading-relaxed">
            Our residential crews serve Broward, Palm Beach, Miami Gardens, and Naples. Commercial bidding is active statewide.
          </p>
        </div>
      </section>

      {/* Coverage Split Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Service Details */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Residential Coverage */}
            <div className="bg-brand-white p-6 md:p-8 rounded-2xl border border-brand-cool-gray/30 shadow-card">
              <span className="text-label text-brand-blue font-bold tracking-widest uppercase block mb-6">
                🏠 Residential Coverage Districts
              </span>
              
              <div className="space-y-5">
                {residentialAreas.map((area, idx) => (
                  <div key={idx} className="border-b border-brand-cool-gray/20 pb-4 last:border-b-0 last:pb-0 group">
                    <Link href={`/service-areas/${area.slug}`} className="block">
                      <h4 className="text-heading-md font-bold text-brand-near-black flex items-center justify-between group-hover:text-brand-blue transition-colors duration-150">
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0" />
                          {area.name}
                        </span>
                        <ArrowRight className="w-4 h-4 text-brand-blue transform group-hover:translate-x-1 transition-transform" />
                      </h4>
                      <p className="text-body-sm text-brand-graphite pl-6 mt-1.5 leading-relaxed">
                        {area.details}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="border-t border-brand-cool-gray/30 mt-6 pt-4 text-body-sm text-brand-mid-gray italic leading-relaxed">
                Don&apos;t see your area listed? Contact us — we coordinate permit and engineering approvals across adjacent regions regularly.
              </div>
            </div>

            {/* Commercial Coverage */}
            <div className="DarkBackground-Graphite text-brand-white p-6 md:p-8 rounded-2xl border border-brand-white/5 flex flex-col justify-between shadow-card relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-blue" />
              <div>
                <span className="text-label text-brand-blue font-bold tracking-widest uppercase block mb-4">
                  🏗 Commercial Glazing & Roofing
                </span>
                <p className="text-body-sm text-brand-mid-gray/90 leading-relaxed mb-6">
                  Commercial projects are not geographically restricted to standard residential bounds. We coordinate storefront installations, plaza window retrofits, and commercial roofing statewide for General Contractors and property managers.
                </p>
              </div>
              <div className="border-t border-brand-white/10 pt-4 flex justify-between items-center text-label font-bold">
                <span className="text-brand-white tracking-widest">STATEWIDE BIDDING ACTIVE</span>
                <Link href="/commercial" className="text-brand-blue hover:underline flex items-center gap-1.5">
                  GC Partner portal <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Map Card */}
          <div className="lg:col-span-6 bg-brand-white rounded-2xl border border-brand-cool-gray/30 shadow-card p-4 flex flex-col gap-4">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase block pl-2 pt-2">
              📍 Showroom Location & Map
            </span>

            {/* Embedded Google Map */}
            <div className="relative w-full h-[320px] lg:h-full min-h-[350px] rounded-xl overflow-hidden border border-brand-cool-gray/40 shadow-inner">
              <iframe
                title={siteConfig.address.formatted}
                src={siteConfig.address.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label={siteConfig.address.formatted}
              />
            </div>

            {/* Showroom Details */}
            <div className="bg-brand-ice p-4 rounded-xl border border-brand-cool-gray/30 text-body-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <strong className="text-brand-near-black block mb-0.5">Showroom Address*</strong>
                {/* [CLIENT VERIFY - confirm showroom address] */}
                <span className="text-brand-graphite">{siteConfig.address.formatted}*</span>
              </div>
              <Link
                href="/get-estimate"
                className="w-full sm:w-auto inline-flex items-center justify-center h-10 px-6 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta transition-colors"
              >
                Request Visit
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
