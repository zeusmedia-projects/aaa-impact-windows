"use client";

import React from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { PhoneNumber } from "../ui/PhoneNumber";

export default function HeroSequence() {
  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-brand-near-black text-brand-white">
      {/* Background Video */}
      <video
        src="/hero/hero, video.mov"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center lg:object-[75%_center] opacity-50 z-0 pointer-events-none"
        poster="/hero/fallback-static.webp"
      />

      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-20 pt-24 pb-16 lg:py-0">
        <div className="w-full lg:w-[55%] flex flex-col gap-6">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
            Hurricane Readiness
          </span>
          <h1 className="font-display text-display-xl font-extrabold tracking-[-0.035em] text-white leading-[1.0] uppercase">
            Impact protection, <span className="text-brand-blue">engineered for South Florida.</span>
          </h1>
          <p className="text-body-lg text-brand-white/80 max-ch leading-relaxed">
            AAA installs premium impact windows, doors, and roofing systems for South Florida properties — backed by an owner-operated team that stands behind the work long after installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/get-estimate"
              className="inline-flex items-center justify-center h-12 px-6 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta transition-all"
            >
              Get a Free Estimate
            </Link>
            <div className="inline-flex items-center justify-center gap-2 h-12 px-6 border border-brand-white/20 rounded-lg font-semibold bg-brand-white/10 hover:bg-brand-white/20 backdrop-blur-sm transition-colors text-brand-white">
              <Phone className="w-4 h-4 text-brand-blue" />
              <PhoneNumber className="text-brand-white" />
            </div>
          </div>
          <div className="mt-4 text-body-sm text-brand-white/60">
            Planning a commercial storefront or plaza replacement?{" "}
            <Link
              href="/commercial"
              className="text-brand-blue hover:underline inline-flex items-center gap-0.5"
            >
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
