import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Shield, Smile, Trash2 } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import ServiceAreaMap from "@/components/sections/ServiceAreaMap";
import { PhoneNumber } from "@/components/ui/PhoneNumber";

export const metadata: Metadata = {
  title: "Residential Impact Windows, Doors & Roofing | South Florida",
  description: "AAA installs premium impact windows, entryway doors, and roofing replacements for South Florida homeowners. Serving Naples, Davie, Sunrise, and Miramar.",
};

export default function ResidentialPage() {
  const services = [
    {
      title: "Impact Windows",
      desc: "Single-hung, sliding, casement, and custom shapes.",
      href: "/impact-windows",
      image: "/images/services/windows.png",
    },
    {
      title: "Impact Doors",
      desc: "Entryways, sliding glass patio systems, French doors.",
      href: "/impact-doors",
      image: "/images/services/doors.png",
    },
    {
      title: "Roofing Replacements",
      desc: "Shingle, tile, and metal roof envelope protection.",
      href: "/roofing",
      image: "/images/services/roofing.png",
    },
  ];

  const standards = [
    {
      icon: Smile,
      title: "Clear Daily Communication",
      desc: "You will know which crew is arriving, what time they start, and what will be completed by the time they pack up.",
    },
    {
      icon: Trash2,
      title: "Strict Property Cleanup",
      desc: "We sweep for nails with magnetic sweeps daily, clean glass panes, and haul off all debris so your lawn and driveway are left clean.",
    },
    {
      icon: Shield,
      title: "Full Code & Permit Filing",
      desc: "From initial wind-load calculation drawings to attending the final municipal building inspector sign-off, AAA manages the process.",
    },
  ];

  const concerns = [
    {
      q: "“What if I have issues after the job is finished and paid?”",
      a: "This is the single most common frustration with home contractors. At AAA, our business is built on referrals. If you notice issues with a door seal or window lock months after install, you call us, and we coordinate a crew to fix it without the runaround.",
    },
    {
      q: "“Will you leave debris, glass, or nails in my lawn?”",
      a: "Never. Our crews lay down protective ground blankets, sweep visual areas before departure, and run magnetic bars to collect dropped fasteners. Hauling and cleanup are written directly into our contracts.",
    },
    {
      q: "“How do I know the work complies with local building codes?”",
      a: "All our installations meet or exceed the Florida Building Code wind-load specifications. We pull the building permits, submit certified engineering documents, and attend the final physical walkthrough inspection with your local municipal inspector to confirm code compliance.",
    },
  ];

  return (
    <div className="relative w-full">
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 StudioBackground border-b border-brand-cool-gray/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start max-w-3xl">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase mb-3 block">
              Homeowner Services Portal
            </span>
            <h1 className="text-display-xl font-bold text-brand-near-black leading-tight mb-6">
              South Florida Home Protection, Handled by People Who Care About the Work
            </h1>
            <p className="text-body-lg text-brand-graphite leading-relaxed mb-8">
              From hurricane impact windows and entry doors to complete roof replacements — we make coordinates simple, transparent, and built to outlast Florida storm seasons.
            </p>
            <Link
              href="/get-estimate"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta hover:shadow-lg transition-all duration-200"
            >
              Request Your Free Property Estimate
            </Link>
          </div>
          <div className="lg:col-span-5 w-full">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-brand-cool-gray/30 bg-brand-cool-gray/20">
              <Image
                src="/images/portals/residential-hero.jpg"
                alt="South Florida home protection"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 1. Service Cards Grid */}
      <section className="py-20 bg-brand-white border-b border-brand-cool-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-label text-brand-blue font-bold tracking-widest uppercase text-center mb-10">
            Select a service area
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-card border border-brand-cool-gray/30 flex flex-col justify-end p-6 hover:shadow-card-hover hover:border-brand-blue/20 transition-all duration-300 bg-brand-graphite"
              >
                {/* Visual gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-near-black/95 via-brand-near-black/40 to-transparent z-10" />
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="relative z-20 text-brand-white flex flex-col gap-1.5">
                  <h4 className="text-heading-md font-bold group-hover:text-brand-blue transition-colors duration-200">
                    {item.title}
                  </h4>
                  <p className="text-body-sm text-brand-mid-gray/90 leading-tight">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. What it's like to work with us (editorial layout) */}
      <section className="py-20 bg-brand-ice border-b border-brand-cool-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
              Working Standards
            </span>
            <h2 className="text-display-lg font-bold text-brand-near-black leading-tight">
              No Runaround. Just Honest, Accountable Craftsmanship.
            </h2>
            
            <div className="space-y-6 mt-4">
              {standards.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-brand-white flex items-center justify-center text-brand-blue border border-brand-cool-gray/60 flex-shrink-0 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-heading-md font-bold text-brand-near-black mb-1">
                        {s.title}
                      </h4>
                      <p className="text-body-sm text-brand-graphite leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-card border border-brand-cool-gray/30 bg-brand-cool-gray/20">
              <Image
                src="/images/portals/residential-work.jpg"
                alt="AAA Impact Windows residential installation crew"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Homeowner concerns (Direct Q&A section) */}
      <section className="py-20 bg-brand-white border-b border-brand-cool-gray/25">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12 flex flex-col items-center gap-2">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">Honest Answers</span>
            <h2 className="text-display-lg font-bold text-brand-near-black">
              Common Concerns, Answered Honestly
            </h2>
          </div>

          <div className="space-y-8 text-body-sm leading-relaxed text-brand-graphite">
            {concerns.map((c, idx) => (
              <div key={idx} className="border-b border-brand-cool-gray/20 pb-6 last:border-0 last:pb-0">
                <h4 className="text-heading-md font-bold text-brand-near-black mb-2 italic">
                  {c.q}
                </h4>
                <p className="leading-relaxed">
                  {c.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Service Areas Map Section */}
      <ServiceAreaMap />

      {/* 5. Estimate CTA */}
      <section className="py-24 DarkBackground-Black text-brand-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-blue" />
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center gap-6">
          <h2 className="text-display-lg font-bold text-brand-white uppercase">
            Get an Honest Estimate for Your Home
          </h2>
          <p className="text-body-md text-brand-mid-gray/80 max-w-md leading-relaxed">
            Our estimators will measure your openings or review your roof deck on-site and present clear options without high-pressure sales pitches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-2">
            <Link
              href="/get-estimate"
              className="inline-flex items-center justify-center h-12 px-8 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta hover:shadow-lg transition-all duration-200"
            >
              Request Your Estimate
            </Link>
            <a 
              href={`tel:${siteConfig.phoneRawDefault}`} 
              className="text-body-md font-bold text-brand-blue hover:underline py-2"
            >
              Or call: <PhoneNumber />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
