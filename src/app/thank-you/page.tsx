"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { PhoneNumber } from "@/components/ui/PhoneNumber";
import { trackEvent } from "@/lib/analytics";

export default function ThankYouPage() {
  const [formType, setFormType] = useState("");
  const [service, setService] = useState("");

  useEffect(() => {
    // Capture details from sessionStorage (written by forms on submission)
    try {
      const storedType = sessionStorage.getItem("__aaa_lead_form_type__") || "residential";
      const storedService = sessionStorage.getItem("__aaa_lead_service__") || "general";
      
      setFormType(storedType);
      setService(storedService);

      // Trigger GA4 event lead_confirmed
      trackEvent("lead_confirmed", {
        form_type: storedType as "residential" | "commercial",
        service_selected: storedService,
      });
    } catch (e) {
      // Ignore sessionStorage blocked cases
    }
  }, []);

  return (
    <div className="min-h-screen DarkBackground-Black text-brand-white flex items-center justify-center pt-24 pb-16">
      <div className="max-w-md w-full px-6 text-center flex flex-col items-center gap-6 animate-fade-in">
        
        {/* Success checkmark symbol using 4-pane window motif */}
        <div className="w-16 h-16 rounded-full border-2 border-brand-blue flex items-center justify-center text-brand-blue pulse-node mb-2 bg-brand-graphite">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="12" y1="3" x2="12" y2="21" />
            <line x1="3" y1="12" x2="21" y2="12" />
          </svg>
        </div>

        <h1 className="text-display-lg font-bold text-brand-white leading-none">
          We&apos;ve Got It.
        </h1>
        
        <p className="text-body-md text-brand-mid-gray/80 leading-relaxed">
          Your request came through successfully. A member of the AAA team will review your project requirements and reach out within one business day.
        </p>

        <div className="border-t border-brand-white/10 w-full pt-6 text-body-sm text-brand-mid-gray/90 flex flex-col gap-2">
          <span>If you would like to reach our office directly:</span>
          <div className="text-body-lg font-bold text-brand-white">
            <PhoneNumber />
          </div>
        </div>

        <Link
          href="/"
          className="mt-4 text-label font-bold text-brand-blue hover:text-brand-blue/80 transition-colors uppercase tracking-widest"
        >
          ← Back to the homepage
        </Link>

      </div>
    </div>
  );
}
