"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ServiceAreaMap() {
  return (
    <section className="py-20 StudioBackground border-b border-brand-cool-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase">Service Coverage</span>
          <h2 className="font-montserrat text-display-lg font-bold text-brand-near-black mt-2 leading-tight">
            Where We Work
          </h2>
          <p className="text-body-md text-zinc-650 mt-3 max-ch mx-auto leading-relaxed">
            AAA serves homeowners and commercial clients throughout South Florida, with current residential emphasis in Naples, Davie, Pembroke Pines, Sunrise, Miramar, and surrounding communities.
          </p>
        </div>

        {/* Map and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Recolored Google Maps Locator */}
          <div className="lg:col-span-7 w-full">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-brand-cool-gray/30 shadow-card bg-[#e2f0fd]">
              <iframe
                src={siteConfig.address.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) contrast(1.2) brightness(0.98)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-90"
              />
              {/* Carolina Blue multiply tint overlay for land/water color branding */}
              <div className="absolute inset-0 bg-brand-blue/20 pointer-events-none mix-blend-multiply z-10" />
              {/* Carolina Blue color blend overlay to tint the roads, borders, and text accents */}
              <div className="absolute inset-0 bg-brand-blue/15 pointer-events-none mix-blend-color z-10" />
            </div>
          </div>

          {/* Right Column: Office Address & Contact details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-montserrat text-heading-lg font-bold text-brand-near-black leading-tight">
                Our Office & Showroom
              </h3>
              <p className="text-body-md text-brand-graphite leading-relaxed">
                Visit our Miami showroom or contact our team to discuss your residential or commercial project. We offer code-compliant impact solutions tailored to your property.
              </p>
            </div>

            <div className="flex flex-col gap-5 font-sans">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="p-2.5 bg-brand-ice border border-brand-cool-gray/50 rounded-lg text-brand-blue">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-body-sm font-bold text-brand-near-black uppercase tracking-wider">Showroom Address</h4>
                  <p className="text-body-md text-brand-graphite mt-1">
                    {siteConfig.address.formatted}
                  </p>
                </div>
              </div>

              {/* Phone Contacts */}
              <div className="flex gap-4 items-start">
                <div className="p-2.5 bg-brand-ice border border-brand-cool-gray/50 rounded-lg text-brand-blue">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-body-sm font-bold text-brand-near-black uppercase tracking-wider">Contact Phone</h4>
                  <div className="flex flex-col gap-1 mt-1 text-body-md text-brand-graphite">
                    <p className="flex items-center gap-1.5">
                      <span className="font-semibold text-brand-near-black">Broward:</span>
                      <a href={`tel:${siteConfig.phoneRawDefault}`} className="hover:text-brand-blue transition-colors">
                        {siteConfig.phoneDefault}
                      </a>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <span className="font-semibold text-brand-near-black">Miami-Dade:</span>
                      <a href={`tel:${siteConfig.phoneRawDade}`} className="hover:text-brand-blue transition-colors">
                        {siteConfig.phoneDade}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex gap-4 items-start">
                <div className="p-2.5 bg-brand-ice border border-brand-cool-gray/50 rounded-lg text-brand-blue">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-body-sm font-bold text-brand-near-black uppercase tracking-wider">Email Inquiry</h4>
                  <p className="text-body-md text-brand-graphite mt-1">
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-blue transition-colors">
                      {siteConfig.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/get-estimate"
                className="inline-flex items-center justify-center h-12 px-6 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta transition-all w-full sm:w-auto text-center"
              >
                Request a Free Estimate
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
