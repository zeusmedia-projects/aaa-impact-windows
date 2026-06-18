"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { siteConfig } from "@/config/siteConfig";
import { trackEvent } from "@/lib/analytics";

// Zod validation schema for Commercial form
const commercialSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  role: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, "Please enter a valid 10-digit phone number"),
  projectAddress: z.string().min(3, "Project address/city is required"),
  projectType: z.string().min(1, "Please select a project type"),
  openings: z.string().optional(),
  timeline: z.string().optional(),
  notes: z.string().max(1000, "Notes cannot exceed 1000 characters").optional(),
});

type CommercialFormData = z.infer<typeof commercialSchema>;

export default function CommercialEstimateForm() {
  const router = useRouter();
  const [honeypot, setHoneypot] = useState(""); // Honeypot spam defense
  const [fileAttached, setFileAttached] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommercialFormData>({
    resolver: zodResolver(commercialSchema),
    mode: "onBlur",
  });

  // Track form started event
  useEffect(() => {
    trackEvent("form_started", { form_type: "commercial" });
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileAttached(true);
      trackEvent("file_upload_attempted");
    }
  };

  const onSubmit = async (data: CommercialFormData) => {
    if (honeypot) {
      console.warn("Spam commercial submission detected.");
      router.push("/thank-you");
      return;
    }

    // Capture UTM tracking params
    let utms: Record<string, string> = {};
    try {
      const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
      keys.forEach((key) => {
        const value = sessionStorage.getItem(key);
        if (value) utms[key] = value;
      });
    } catch (e) {
      // Ignore
    }

    const payload = {
      form_type: "commercial",
      ...data,
      fileAttached,
      ...utms,
    };

    console.log("[Submitting Commercial Estimate Request Payload]:", payload);

    // Track analytics lead event
    trackEvent("generate_lead", {
      form_type: "commercial",
      service_selected: `commercial-${data.projectType}`,
      location_entered: data.projectAddress,
      ...utms,
    });

    try {
      sessionStorage.setItem("__aaa_lead_form_type__", "commercial");
      sessionStorage.setItem("__aaa_lead_service__", `commercial-${data.projectType}`);
    } catch (e) {}

    // POST to CRM Webhook
    try {
      await fetch(siteConfig.crmWebhookEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        mode: "no-cors",
      });
    } catch (err) {
      console.error("CRM Webhook submission failed", err);
    }

    router.push("/thank-you");
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-brand-white border border-brand-cool-gray/30 rounded-2xl shadow-card p-6 md:p-8">
      {/* Title */}
      <div className="mb-6 text-center">
        <h3 className="text-heading-lg font-bold text-brand-near-black">
          Commercial Bid Submittal Portal
        </h3>
        <p className="text-body-sm text-brand-graphite mt-1">
          Provide your project requirements and upload drawings or specs for our estimating team.
        </p>
      </div>

      {/* Honeypot field */}
      <input
        type="text"
        name="_hp"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        
        {/* Contact Group */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-label font-bold text-brand-graphite mb-1.5">COMPANY NAME*</label>
            <input
              type="text"
              placeholder="e.g. Acme Construction"
              {...register("companyName")}
              className="w-full h-11 px-4 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-brand-white text-brand-near-black"
            />
            {errors.companyName && (
              <p className="text-[11px] text-red-600 mt-1">{errors.companyName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-label font-bold text-brand-graphite mb-1.5">YOUR NAME / CONTACT*</label>
            <input
              type="text"
              placeholder="John Doe"
              {...register("contactName")}
              className="w-full h-11 px-4 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-brand-white text-brand-near-black"
            />
            {errors.contactName && (
              <p className="text-[11px] text-red-600 mt-1">{errors.contactName.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-label font-bold text-brand-graphite mb-1.5">YOUR ROLE / TITLE</label>
            <input
              type="text"
              placeholder="e.g. Project Manager"
              {...register("role")}
              className="w-full h-11 px-4 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-brand-white text-brand-near-black"
            />
          </div>
          <div>
            <label className="block text-label font-bold text-brand-graphite mb-1.5">PHONE*</label>
            <input
              type="tel"
              placeholder="(954) 555-0199"
              {...register("phone")}
              className="w-full h-11 px-4 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-brand-white text-brand-near-black"
            />
            {errors.phone && (
              <p className="text-[11px] text-red-600 mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-label font-bold text-brand-graphite mb-1.5">EMAIL ADDRESS*</label>
          <input
            type="email"
            placeholder="estimator@acme.com"
            {...register("email")}
            className="w-full h-11 px-4 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-brand-white text-brand-near-black"
          />
          {errors.email && (
            <p className="text-[11px] text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Project details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-label font-bold text-brand-graphite mb-1.5">PROJECT TYPE*</label>
            <select
              {...register("projectType")}
              className="w-full h-11 px-3 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-brand-white text-brand-near-black"
            >
              <option value="">-- Select Type --</option>
              <option value="storefront">Storefront System</option>
              <option value="plaza">Plaza Renovation</option>
              <option value="windows">Commercial Windows</option>
              <option value="doors">Commercial Doors</option>
              <option value="retail">Retail Center</option>
              <option value="other">Other / Mixed-Use</option>
            </select>
            {errors.projectType && (
              <p className="text-[11px] text-red-600 mt-1">{errors.projectType.message}</p>
            )}
          </div>
          <div>
            <label className="block text-label font-bold text-brand-graphite mb-1.5">PROJECT ADDRESS / CITY*</label>
            <input
              type="text"
              placeholder="e.g. Fort Lauderdale"
              {...register("projectAddress")}
              className="w-full h-11 px-4 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-brand-white text-brand-near-black"
            />
            {errors.projectAddress && (
              <p className="text-[11px] text-red-600 mt-1">{errors.projectAddress.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-label font-bold text-brand-graphite mb-1.5">ESTIMATED OPENINGS</label>
            <input
              type="text"
              placeholder="e.g. 24 windows, 4 sliders"
              {...register("openings")}
              className="w-full h-11 px-4 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-brand-white text-brand-near-black"
            />
          </div>
          <div>
            <label className="block text-label font-bold text-brand-graphite mb-1.5">BID DEADLINE / TIMELINE</label>
            <input
              type="text"
              placeholder="e.g. Bids due July 15"
              {...register("timeline")}
              className="w-full h-11 px-4 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-brand-white text-brand-near-black"
            />
          </div>
        </div>

        {/* File upload */}
        <div>
          <label className="block text-label font-bold text-brand-graphite mb-1.5">
            ATTACH PLANS, PHOTOS, OR SPECS (OPTIONAL)
          </label>
          <div className="border-2 border-dashed border-brand-cool-gray rounded-lg p-4 flex flex-col items-center justify-center bg-brand-ice/30">
            <input
              type="file"
              id="file-attachment"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="file-attachment"
              className="cursor-pointer px-4 py-2 border border-brand-blue text-brand-blue hover:bg-brand-blue/5 rounded-md text-label font-bold transition-all duration-150"
            >
              Choose Files
            </label>
            <span className="text-[11px] text-brand-mid-gray mt-2 font-mono">
              {fileAttached ? "✓ Files attached successfully" : "PDF, CAD, ZIP, or JPG. Max 50MB."}
            </span>
          </div>
          <div className="text-[11px] text-brand-mid-gray mt-1 text-center">
            Alternately, email bid sets directly to:{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-brand-blue hover:underline font-semibold">
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-label font-bold text-brand-graphite mb-1.5">ADDITIONAL NOTES / INSTRUCTIONS</label>
          <textarea
            placeholder="Provide bid instructions, scope division details, or specialty hardware requirements..."
            rows={4}
            {...register("notes")}
            className="w-full p-4 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-brand-white text-brand-near-black resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full h-12 bg-brand-blue hover:bg-brand-blue/90 text-brand-white rounded-lg text-label font-bold shadow-cta transition-colors duration-150"
        >
          Submit Project for Review
        </button>

      </form>
    </div>
  );
}
