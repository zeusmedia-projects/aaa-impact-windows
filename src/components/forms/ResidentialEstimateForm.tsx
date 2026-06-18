"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { siteConfig } from "@/config/siteConfig";
import { trackEvent } from "@/lib/analytics";

// Zod Schema for Step 5 (Contact details)
const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required (min 2 chars)"),
  lastName: z.string().min(2, "Last name is required (min 2 chars)"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, "Please enter a valid 10-digit phone number"),
  email: z.string().email("Please enter a valid email address"),
  notes: z.string().max(500, "Notes cannot exceed 500 characters").optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

// SVG Four-Pane Window Progress Indicator Component
function FormProgressWindow({ step }: { step: number }) {
  // Determine color fill for each pane based on step (1 to 5)
  // Clockwise order: pane 1 (top-left), pane 2 (top-right), pane 3 (bottom-right), pane 4 (bottom-left)
  const isFilled = (paneNum: number) => {
    // pane 1 filled at step >= 1
    // pane 2 filled at step >= 2
    // pane 3 filled at step >= 3
    // pane 4 filled at step >= 4
    // at step 5 (contact), all panes are filled
    return step >= paneNum ? "fill-brand-blue text-brand-blue" : "fill-brand-cool-gray/30 text-brand-cool-gray/40";
  };

  return (
    <div className="flex flex-col items-center gap-2 mb-8 select-none">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="transition-all duration-300">
        {/* Pane 1 (Top Left) */}
        <rect x="3" y="3" width="8" height="8" rx="1" className={isFilled(1)} stroke="currentColor" strokeWidth="1" />
        {/* Pane 2 (Top Right) */}
        <rect x="13" y="3" width="8" height="8" rx="1" className={isFilled(2)} stroke="currentColor" strokeWidth="1" />
        {/* Pane 3 (Bottom Right) */}
        <rect x="13" y="13" width="8" height="8" rx="1" className={isFilled(3)} stroke="currentColor" strokeWidth="1" />
        {/* Pane 4 (Bottom Left) */}
        <rect x="3" y="13" width="8" height="8" rx="1" className={isFilled(4)} stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="text-label text-brand-mid-gray text-[10px] uppercase font-bold tracking-widest">
        STEP {step} OF 5
      </span>
    </div>
  );
}

export default function ResidentialEstimateForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  // Selections state
  const [selectedService, setSelectedService] = useState("");
  const [selectedProperty, setSelectedProperty] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Honeypot spam field

  // React Hook Form setup for Step 5
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  // Track form_started event
  useEffect(() => {
    trackEvent("form_started", { form_type: "residential" });
  }, []);

  // South Florida City Autocomplete datalist items
  const cities = [
    "Naples",
    "Davie",
    "Pembroke Pines",
    "Sunrise",
    "Miramar",
    "Miami Gardens",
    "Fort Lauderdale",
    "Miami",
    "Hollywood",
    "Pompano Beach",
    "Boca Raton",
    "West Palm Beach",
    "Coral Springs",
    "Cape Coral",
    "Fort Myers",
    "Bonita Springs",
    "Marco Island",
    "Weston",
    "Deerfield Beach",
  ];

  // Navigation handlers
  const handleNextStep = () => {
    if (step === 1 && !selectedService) return;
    if (step === 2 && !selectedProperty) return;
    if (step === 3 && !locationValue.trim()) return;
    if (step === 4 && !selectedTimeline) return;

    // Track step completion
    const stepNames = ["Service Type", "Property Type", "Location", "Timeline", "Contact info"];
    trackEvent("form_step_completed", {
      step_number: step,
      step_name: stepNames[step - 1],
    });

    setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Submit Handler
  const onSubmit = async (data: ContactFormData) => {
    // If honeypot is filled, discard submission silently (spam filter)
    if (honeypot) {
      console.warn("Spam submission detected by honeypot.");
      router.push("/thank-you");
      return;
    }

    // Capture UTM tracking params from URL or SessionStorage
    let utms: Record<string, string> = {};
    try {
      const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
      keys.forEach((key) => {
        const value = sessionStorage.getItem(key);
        if (value) utms[key] = value;
      });
    } catch (e) {
      // Ignore sessionStorage blocked cases
    }

    const payload = {
      form_type: "residential",
      service: selectedService,
      propertyType: selectedProperty,
      location: locationValue,
      timeline: selectedTimeline,
      ...data,
      ...utms,
    };

    console.log("[Submitting Estimate Request Payload]:", payload);

    // Track analytics lead event
    trackEvent("generate_lead", {
      form_type: "residential",
      service_selected: selectedService,
      location_entered: locationValue,
      ...utms,
    });

    // Store service and location selection in sessionStorage for thank-you page
    try {
      sessionStorage.setItem("__aaa_lead_form_type__", "residential");
      sessionStorage.setItem("__aaa_lead_service__", selectedService);
    } catch (e) {}

    // POST to CRM Webhook Placeholder
    try {
      await fetch(siteConfig.crmWebhookEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        mode: "no-cors", // Allow sandbox placeholder mock endpoint
      });
    } catch (err) {
      console.error("CRM Webhook submission failed", err);
    }

    // Redirect
    router.push("/thank-you");
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-brand-white border border-brand-cool-gray/30 rounded-2xl shadow-card p-6 md:p-8">
      {/* Progress Indicator */}
      <FormProgressWindow step={step} />

      {/* Honeypot spam defense */}
      <input
        type="text"
        name="_hp"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* STEP 1: SERVICE SELECTOR */}
        {step === 1 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-heading-lg font-bold text-brand-near-black text-center">
              What do you need installed?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {[
                { id: "windows", label: "Impact Windows" },
                { id: "doors", label: "Impact Doors" },
                { id: "roofing", label: "Roof Replacement" },
                { id: "windows-doors", label: "Windows + Doors" },
                { id: "full-package", label: "Full Package (All Three)" },
                { id: "unsure", label: "I'm Not Sure Yet" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedService(opt.id)}
                  className={`p-4 rounded-xl border text-left font-display font-bold text-body-sm transition-all duration-150 ${
                    selectedService === opt.id
                      ? "border-2 border-brand-blue bg-brand-blue/5 text-brand-blue"
                      : "border-brand-cool-gray hover:border-brand-blue/40 text-brand-near-black bg-brand-white"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={handleNextStep}
              disabled={!selectedService}
              className="w-full mt-6 h-12 bg-brand-blue hover:bg-brand-blue/90 disabled:bg-brand-cool-gray text-brand-white rounded-lg text-label font-bold shadow-cta transition-colors"
            >
              Continue
            </button>
          </div>
        )}

        {/* STEP 2: PROPERTY SELECTOR */}
        {step === 2 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-heading-lg font-bold text-brand-near-black text-center">
              What type of property is this?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {[
                { id: "house", label: "Single-Family Home" },
                { id: "townhome", label: "Townhome" },
                { id: "villa", label: "Villa" },
                { id: "condo", label: "Condo" },
                { id: "other", label: "Other Structure" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedProperty(opt.id)}
                  className={`p-4 rounded-xl border text-left font-display font-bold text-body-sm transition-all duration-150 ${
                    selectedProperty === opt.id
                      ? "border-2 border-brand-blue bg-brand-blue/5 text-brand-blue"
                      : "border-brand-cool-gray hover:border-brand-blue/40 text-brand-near-black bg-brand-white"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={handlePrevStep}
                className="w-1/3 h-12 border border-brand-cool-gray text-brand-near-black rounded-lg text-label font-bold hover:bg-brand-ice transition-colors"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                disabled={!selectedProperty}
                className="w-2/3 h-12 bg-brand-blue hover:bg-brand-blue/90 disabled:bg-brand-cool-gray text-brand-white rounded-lg text-label font-bold shadow-cta transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: LOCATION SELECTOR */}
        {step === 3 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-heading-lg font-bold text-brand-near-black text-center">
              Where is the property located?
            </h3>
            <div className="mt-4">
              <label htmlFor="city-input" className="block text-label font-bold text-brand-graphite mb-2">
                CITY OR ZIP CODE
              </label>
              <input
                id="city-input"
                list="south-florida-cities"
                type="text"
                placeholder="Start typing your city..."
                value={locationValue}
                onChange={(e) => setLocationValue(e.target.value)}
                className="w-full h-12 px-4 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md text-brand-near-black bg-brand-white"
              />
              <datalist id="south-florida-cities">
                {cities.map((city) => (
                  <option key={city} value={city} />
                ))}
              </datalist>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={handlePrevStep}
                className="w-1/3 h-12 border border-brand-cool-gray text-brand-near-black rounded-lg text-label font-bold hover:bg-brand-ice transition-colors"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                disabled={!locationValue.trim()}
                className="w-2/3 h-12 bg-brand-blue hover:bg-brand-blue/90 disabled:bg-brand-cool-gray text-brand-white rounded-lg text-label font-bold shadow-cta transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: TIMELINE SELECTOR */}
        {step === 4 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-heading-lg font-bold text-brand-near-black text-center">
              When would you like to start?
            </h3>
            <div className="grid grid-cols-1 gap-3 mt-4">
              {[
                { id: "asap", label: "As soon as possible" },
                { id: "1-3m", label: "Within 1 to 3 months" },
                { id: "3-6m", label: "3 to 6 months" },
                { id: "planning", label: "Just planning ahead" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedTimeline(opt.id)}
                  className={`p-4 rounded-xl border text-left font-display font-bold text-body-sm transition-all duration-150 ${
                    selectedTimeline === opt.id
                      ? "border-2 border-brand-blue bg-brand-blue/5 text-brand-blue"
                      : "border-brand-cool-gray hover:border-brand-blue/40 text-brand-near-black bg-brand-white"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={handlePrevStep}
                className="w-1/3 h-12 border border-brand-cool-gray text-brand-near-black rounded-lg text-label font-bold hover:bg-brand-ice transition-colors"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                disabled={!selectedTimeline}
                className="w-2/3 h-12 bg-brand-blue hover:bg-brand-blue/90 disabled:bg-brand-cool-gray text-brand-white rounded-lg text-label font-bold shadow-cta transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: CONTACT details & SUBMIT */}
        {step === 5 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-heading-lg font-bold text-brand-near-black text-center mb-4">
              Where should we send your estimate?
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-label font-bold text-brand-graphite mb-1.5">FIRST NAME</label>
                <input
                  type="text"
                  placeholder="John"
                  {...register("firstName")}
                  className="w-full h-11 px-4 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-brand-white text-brand-near-black"
                />
                {errors.firstName && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <label className="block text-label font-bold text-brand-graphite mb-1.5">LAST NAME</label>
                <input
                  type="text"
                  placeholder="Doe"
                  {...register("lastName")}
                  className="w-full h-11 px-4 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-brand-white text-brand-near-black"
                />
                {errors.lastName && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-label font-bold text-brand-graphite mb-1.5">PHONE NUMBER</label>
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

            <div>
              <label className="block text-label font-bold text-brand-graphite mb-1.5">EMAIL ADDRESS</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                {...register("email")}
                className="w-full h-11 px-4 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-brand-white text-brand-near-black"
              />
              {errors.email && (
                <p className="text-[11px] text-red-600 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-label font-bold text-brand-graphite mb-1.5">PROJECT NOTES (OPTIONAL)</label>
              <textarea
                placeholder="Include details about the sizes, styles, or specific concerns..."
                rows={3}
                {...register("notes")}
                className="w-full p-4 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-brand-white text-brand-near-black resize-none"
              />
              {errors.notes && (
                <p className="text-[11px] text-red-600 mt-1">{errors.notes.message}</p>
              )}
            </div>

            <div className="text-[11px] text-brand-mid-gray leading-normal">
              Your information is used only to prepare and deliver your estimate. We do not sell or share your data.
            </div>

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={handlePrevStep}
                className="w-1/3 h-12 border border-brand-cool-gray text-brand-near-black rounded-lg text-label font-bold hover:bg-brand-ice transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-2/3 h-12 bg-brand-blue hover:bg-brand-blue/90 text-brand-white rounded-lg text-label font-bold shadow-cta transition-colors"
              >
                Send My Estimate Request
              </button>
            </div>

            <div className="text-center text-body-sm text-brand-graphite/75 mt-3">
              Or call us directly: <span className="font-semibold">{siteConfig.phoneDefault}</span>
            </div>
          </div>
        )}

      </form>
    </div>
  );
}
