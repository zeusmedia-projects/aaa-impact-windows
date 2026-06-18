"use client";

import React from "react";
import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { PhoneNumber } from "../ui/PhoneNumber";

export default function MobileConversionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-14 bg-brand-near-black border-t border-brand-white/10 flex items-center justify-between px-4 z-30 md:hidden shadow-lg">
      {/* Click-to-call phone number */}
      <div className="flex items-center gap-2 text-body-sm font-semibold text-brand-white">
        <div className="w-8 h-8 rounded-full bg-brand-graphite flex items-center justify-center border border-brand-white/10">
          <Phone className="w-4 h-4 text-brand-blue" />
        </div>
        <PhoneNumber className="text-brand-white text-body-sm font-bold" />
      </div>

      {/* Direct estimate link */}
      <Link
        href="/get-estimate"
        className="flex items-center gap-1.5 px-4 h-9 bg-brand-blue text-brand-white rounded-md text-label font-bold tracking-wider hover:bg-brand-blue/90 active:scale-98 transition-all duration-150 shadow-cta"
      >
        <FileText className="w-3.5 h-3.5" />
        Get Estimate
      </Link>
    </div>
  );
}
