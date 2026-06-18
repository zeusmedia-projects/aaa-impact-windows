import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Users, Shield, Trash2, Smile, Award } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { PhoneNumber } from "@/components/ui/PhoneNumber";

export const metadata: Metadata = {
  title: "About AAA Impact Windows & Doors | South Florida Contractor",
  description: "Learn about AAA Impact Windows & Doors, an owner-operated South Florida contractor built on accountability, precision glazing, and customer service.",
};

export default function AboutPage() {
  const principles = [
    {
      icon: Smile,
      title: "1. Prompt Responsiveness",
      desc: "If you call, we answer. No call routing centers. You speak directly with local coordinators who understand structural glazing and roofing.",
    },
    {
      icon: Trash2,
      title: "2. Clean Sites",
      desc: "We run magnetic sweeps daily, clean glass panes, throw away debris, and respect your family's landscape and driveway borders.",
    },
    {
      icon: Award,
      title: "3. Trade Competence",
      desc: "All windows, doors, and roofing details meet strict High Velocity Hurricane Zone (HVHZ) building code parameters.",
    },
    {
      icon: Shield,
      title: "4. Relationship-Driven",
      desc: "Most of our residential contracts originate from homeowner neighbor referrals. We earn referrals through positive handovers.",
    },
  ];

  const teamMembers = [
    {
      name: "Peter Segrera",
      role: "Sales",
      image: null,
    },
    {
      name: "Yordan Abreu",
      role: "Office Manager",
      image: "/images/about/employee2.png",
    },
    {
      name: "Herman Moreno",
      role: "Engineer",
      image: "/images/about/employee3.png",
    },
  ];

  return (
    <div className="relative w-full">
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 StudioBackground border-b border-brand-cool-gray/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center max-w-3xl">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase mb-3">
            About Our Company
          </span>
          <h1 className="text-display-xl font-bold text-brand-near-black leading-tight mb-6">
            A South Florida Company Built on Accountability
          </h1>
          <p className="text-body-lg text-brand-graphite max-w-2xl leading-relaxed">
            We started AAA with a simple goal: to provide high-quality wind-load envelopes backed by responsive support after the project is complete.
          </p>
        </div>
      </section>

      {/* 1. Who We Are Section */}
      <section className="py-20 bg-brand-white border-b border-brand-cool-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
                Local Values
              </span>
              <h2 className="text-display-lg font-bold text-brand-near-black leading-tight">
                Family-Owned, Locally-Operated*
              </h2>
              {/* [CLIENT VERIFY - confirm founding history, owner bio details, years operational] */}
              <p className="text-body-md text-brand-graphite leading-relaxed">
                AAA Impact Windows & Doors is an owner-operated specialty contractor serving homeowners and building professionals across Broward County, Palm Beach County, Miami Gardens, and Southwest Florida.
              </p>
              <p className="text-body-md text-brand-graphite leading-relaxed">
                As a local business, we know the exact wind pressures, exposure calculations, and permitting structures needed to secure homes and commercial spaces. We handle all shop drawings and local permits in-house to protect your envelope.
              </p>
              <span className="text-[11px] font-sans text-brand-mid-gray uppercase tracking-wider block mt-2">
                *[CLIENT VERIFY founding history & operational scope]
              </span>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-card border border-brand-cool-gray/30 bg-brand-cool-gray/20">
                <Image
                  src="/images/about/owner.png"
                  alt="Owner of AAA Impact Windows"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Owner's Philosophy Section */}
      <section className="py-20 DarkBackground-Graphite border-b border-brand-white/10 relative overflow-hidden">
        {/* L-stroke accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-brand-blue" />
        
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
            Philosophy
          </span>
          <h2 className="text-display-lg font-bold text-brand-white leading-tight">
            &ldquo;We stay available long after the final walkthrough.&rdquo;
          </h2>
          <p className="text-body-lg text-brand-mid-gray/90 leading-relaxed italic max-w-3xl">
            &ldquo;Many general and specialty contractors are impossible to reach once the final invoice is cleared. At AAA, we work with a different perspective. If a lock needs adjustment, or a screen seal requires review months down the line, we answer the phone and schedule a service visit. We build relationships first.&rdquo;
          </p>
          <div className="w-16 h-1 bg-brand-blue rounded mt-2"></div>
          <div className="text-center">
            <span className="text-label text-brand-white font-bold block">
              AAA Impact Management Team*
            </span>
            <span className="text-[10px] font-sans text-brand-mid-gray uppercase tracking-wider block mt-1">
              *[CLIENT VERIFY Owner Bios]
            </span>
          </div>
        </div>
      </section>

      {/* 3. Reusable expanded AAA Approach Principles */}
      <section className="py-20 bg-brand-white border-b border-brand-cool-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">Our Code</span>
            <h2 className="text-display-lg font-bold text-brand-near-black">
              How We Approach Every Project
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div 
                  key={idx} 
                  className="p-6 bg-brand-ice rounded-2xl border border-brand-cool-gray/40 flex flex-col gap-4 relative overflow-hidden group hover:border-brand-blue/30 transition-all duration-300 shadow-card"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
                  <div className="w-12 h-12 rounded-xl bg-brand-white border border-brand-cool-gray/50 flex items-center justify-center text-brand-blue shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-heading-md font-bold text-brand-near-black leading-tight">
                    {p.title}
                  </h4>
                  <p className="text-body-sm text-brand-graphite leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Team Section */}
      <section className="py-20 bg-brand-ice border-b border-brand-cool-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
              Our Crew
            </span>
            <h2 className="text-display-lg font-bold text-brand-near-black leading-tight">
              Meet the Team Behind the Work
            </h2>
            <span className="text-[10px] font-sans text-brand-mid-gray uppercase tracking-wider block mt-1">
              *[CLIENT VERIFY - confirm names, roles, and supply staff photos]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-brand-white rounded-2xl border border-brand-cool-gray/30 shadow-card overflow-hidden flex flex-col group hover:border-brand-blue/30 transition-colors"
              >
                {/* Photo Container */}
                <div className="relative aspect-[4/5] w-full bg-brand-ice border-b border-brand-cool-gray/20 overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover object-center group-hover:scale-102 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-ice text-brand-blue/40 p-4">
                      <div className="w-16 h-16 rounded-full bg-brand-white border border-brand-cool-gray/30 flex items-center justify-center shadow-sm text-brand-blue/50 mb-3 group-hover:scale-105 transition-transform duration-300">
                        <Users className="w-8 h-8" />
                      </div>
                      <span className="text-[11px] font-sans font-semibold text-brand-graphite/60 uppercase tracking-wider">
                        No Photo Available
                      </span>
                    </div>
                  )}
                </div>
                {/* Details Container */}
                <div className="p-6 text-center">
                  <h4 className="text-heading-md font-bold text-brand-near-black leading-tight mb-1">
                    {member.name}
                  </h4>
                  <span className="text-label text-brand-blue font-bold uppercase tracking-wider block">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Footer CTA Banner */}
      <section className="py-24 DarkBackground-Black text-brand-white text-center relative overflow-hidden border-t border-brand-white/10">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-blue" />
        
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center gap-6">
          <h2 className="text-display-lg font-bold text-brand-white uppercase tracking-tight">
            Work With a Contractor Who Answers the Phone.
          </h2>
          <p className="text-body-md text-brand-mid-gray/80 max-w-lg leading-relaxed">
            Schedule a free home visit or request a bid review for commercial blueprints.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center mt-2">
            <Link
              href="/get-estimate"
              className="inline-flex items-center justify-center h-12 px-8 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta hover:shadow-lg transition-all duration-200"
            >
              Get a Free Estimate
            </Link>
            <a 
              href={`tel:${siteConfig.phoneRawDefault}`} 
              className="text-body-md font-bold text-brand-blue hover:underline py-2"
            >
              Call Us: <PhoneNumber />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
