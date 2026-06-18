"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/config/siteConfig";
import { Check, ArrowLeft, ArrowRight, Loader2, Info, Phone } from "lucide-react";

export default function EstimateSection() {
  const router = useRouter();
  const formRef = useRef<HTMLDivElement>(null);
  
  // Step State
  const [step, setStep] = useState(1);
  
  // Form Values State
  const [service, setService] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [timeline, setTimeline] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  
  // Submission & Validation States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formStarted, setFormStarted] = useState(false);

  // Initialize tracking
  useEffect(() => {
    // Record form view
    trackEvent("form_started", { form_type: "estimate_builder_view" });
  }, []);

  const handleStartForm = () => {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent("form_started", { form_type: "estimate_builder" });
    }
  };

  const handleServiceSelect = (val: string) => {
    handleStartForm();
    setService(val);
    trackEvent("form_step_completed", { step_number: 1, step_name: "Service Selection", service_selected: val });
    setStep(2);
  };

  const handlePropertySelect = (val: string) => {
    setPropertyType(val);
    trackEvent("form_step_completed", { step_number: 2, step_name: "Property Type", selected_service: val });
    setStep(3);
  };

  const handleLocationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipCode.trim()) {
      setErrorMsg("Please enter your ZIP code");
      return;
    }
    setErrorMsg("");
    trackEvent("form_step_completed", { step_number: 3, step_name: "Location", location_entered: zipCode });
    setStep(4);
  };

  const handleTimelineSelect = (val: string) => {
    setTimeline(val);
    trackEvent("form_step_completed", { step_number: 4, step_name: "Timeline" });
    setStep(5);
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg("Please enter your name");
      return;
    }
    const cleanPhone = phone.replace(/\D/g, "");
    if (!phone.trim() || cleanPhone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit phone number");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    // Capture UTM tracking params from SessionStorage
    const utms: Record<string, string> = {};
    try {
      const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
      keys.forEach((key) => {
        const value = sessionStorage.getItem(key);
        if (value) utms[key] = value;
      });
    } catch {
      // Ignore sessionStorage errors
    }

    const payload = {
      form_type: "estimate_builder",
      service: service,
      propertyType: propertyType,
      zipCode: zipCode,
      city: city,
      timeline: timeline,
      contactName: name,
      phone: phone,
      email: email,
      notes: notes,
      ...utms,
    };

    console.log("[Submitting Estimate Builder Payload]:", payload);

    // Track lead event in analytics
    trackEvent("generate_lead", {
      form_type: "estimate_builder",
      service_selected: service,
      location_entered: zipCode,
      ...utms,
    });

    try {
      sessionStorage.setItem("__aaa_lead_form_type__", "estimate_builder");
      sessionStorage.setItem("__aaa_lead_service__", service);
    } catch {
      // Ignore sessionStorage errors
    }

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

    setIsSubmitting(false);
    router.push("/thank-you");
  };

  const handleTalkOptions = () => {
    trackEvent("cta_click", { cta_text: "Talk Through My Options", cta_location: "financing_panel" });
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePhoneClick = () => {
    trackEvent("phone_click", { location: "inner_cta" });
  };

  return (
    <section id="estimate-section" className="py-24 bg-black border-b border-zinc-900 scroll-mt-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center gap-3">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase">Plan Your Project</span>
          <h2 className="font-display text-display-lg font-extrabold text-white uppercase tracking-[-0.03em]">
            BUILD YOUR <span className="text-brand-blue">ESTIMATE</span>
          </h2>
          <p className="text-body-md text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            Answer a few quick questions about your property, and AAA will help you understand the right next step for your impact windows, doors, or roofing project.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Multi-Step Form */}
          <div ref={formRef} className="lg:col-span-7 bg-zinc-950 border border-zinc-800 p-6 sm:p-8 rounded-2xl shadow-2xl min-h-[460px] flex flex-col justify-between">
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between gap-2 mb-8 select-none">
                {[1, 2, 3, 4, 5].map((stepNum) => {
                  const isCompleted = stepNum < step;
                  const isActive = stepNum === step;
                  return (
                    <div key={stepNum} className="flex-1 flex flex-col items-center gap-1.5">
                      <div
                        className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                          isCompleted
                            ? "border-brand-blue bg-brand-blue text-white"
                            : isActive
                            ? "border-brand-blue bg-brand-blue/10 text-brand-blue shadow-sm ring-2 ring-brand-blue/20"
                            : "border-zinc-800 bg-zinc-900 text-zinc-500"
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <line x1="12" y1="3" x2="12" y2="21" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-[9px] font-bold uppercase tracking-wider hidden sm:inline ${
                        isActive ? "text-brand-blue" : isCompleted ? "text-zinc-300" : "text-zinc-500"
                      }`}>
                        {stepNum === 1 && "Service"}
                        {stepNum === 2 && "Property"}
                        {stepNum === 3 && "Location"}
                        {stepNum === 4 && "Timeline"}
                        {stepNum === 5 && "Contact"}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Step Title / Error Messages */}
              {errorMsg && (
                <div className="p-3 mb-4 bg-red-950/50 border border-red-900 text-red-400 rounded-lg text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              {/* STEP 1: Service Selection */}
              {step === 1 && (
                <div className="animate-fade-in">
                  <h3 className="font-montserrat text-heading-lg font-bold text-white mb-6">
                    What do you need help with?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: "windows", label: "Impact Windows" },
                      { id: "doors", label: "Impact Doors" },
                      { id: "roofing", label: "Roofing Solutions" },
                      { id: "windows_doors", label: "Windows + Doors" },
                      { id: "multiple", label: "Multiple Services" },
                      { id: "not_sure", label: "Not Sure Yet" }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleServiceSelect(opt.label)}
                        className="w-full text-left py-3.5 px-4 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-brand-blue/40 hover:bg-brand-blue/[0.02] text-zinc-100 transition-all font-semibold shadow-sm h-[52px]"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Property Type */}
              {step === 2 && (
                <div className="animate-fade-in">
                  <h3 className="font-montserrat text-heading-lg font-bold text-white mb-6">
                    What type of property is this?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: "single_family", label: "Single-family home" },
                      { id: "townhome", label: "Townhome / villa" },
                      { id: "condo", label: "Condo / association" },
                      { id: "commercial", label: "Commercial property" },
                      { id: "plaza", label: "Plaza / storefront" },
                      { id: "other", label: "Other" }
                    ].map((opt) => {
                      const isSelected = propertyType === opt.label;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handlePropertySelect(opt.label)}
                          className={`w-full text-left py-3.5 px-4 rounded-xl border transition-all font-semibold shadow-sm h-[52px] ${
                            isSelected
                              ? "border-2 border-brand-blue bg-brand-blue/10 text-brand-blue font-bold"
                              : "border-zinc-800 bg-zinc-900 text-zinc-100 hover:border-brand-blue/40"
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 3: Location */}
              {step === 3 && (
                <div className="animate-fade-in">
                  <h3 className="font-montserrat text-heading-lg font-bold text-white mb-6">
                    Where is the property located?
                  </h3>
                  <form onSubmit={handleLocationSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          required
                          pattern="[0-9]*"
                          inputMode="numeric"
                          maxLength={5}
                          value={zipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                          placeholder="e.g. 33314"
                          className="w-full h-12 px-4 rounded-xl border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-zinc-900 text-white placeholder-zinc-650"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">
                          City / Community
                        </label>
                        <input
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="e.g. Davie"
                          className="w-full h-12 px-4 rounded-xl border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-zinc-900 text-white placeholder-zinc-650"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-zinc-900/50 border border-zinc-850 p-4 rounded-xl flex items-start gap-3 mt-4">
                      <Info className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-zinc-400 leading-normal">
                        AAA serves South Florida, with current residential emphasis in Naples/Falling Waters, Davie/Davie Country Estates, Pembroke Pines, Sunrise, Miramar, and nearby communities.
                      </p>
                    </div>
                  </form>
                </div>
              )}

              {/* STEP 4: Timeline */}
              {step === 4 && (
                <div className="animate-fade-in">
                  <h3 className="font-montserrat text-heading-lg font-bold text-white mb-6">
                    When are you looking to start?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: "asap", label: "As soon as possible" },
                      { id: "30days", label: "Within 30 days" },
                      { id: "1_3months", label: "1–3 months" },
                      { id: "planning_ahead", label: "Planning ahead" },
                      { id: "not_sure", label: "Not sure yet" }
                    ].map((opt) => {
                      const isSelected = timeline === opt.label;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleTimelineSelect(opt.label)}
                          className={`w-full text-left py-3.5 px-4 rounded-xl border transition-all font-semibold shadow-sm h-[52px] ${
                            isSelected
                              ? "border-2 border-brand-blue bg-brand-blue/10 text-brand-blue font-bold"
                              : "border-zinc-800 bg-zinc-900 text-zinc-100 hover:border-brand-blue/40"
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 5: Contact Info */}
              {step === 5 && (
                <div className="animate-fade-in">
                  <h3 className="font-montserrat text-heading-lg font-bold text-white mb-6">
                    How should we contact you?
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Jane Smith"
                          className="w-full h-12 px-4 rounded-xl border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-zinc-900 text-white placeholder-zinc-650"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(954) 555-0199"
                          className="w-full h-12 px-4 rounded-xl border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-zinc-900 text-white placeholder-zinc-650"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@example.com"
                        className="w-full h-12 px-4 rounded-xl border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-zinc-900 text-white placeholder-zinc-650"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">
                        Project Notes (Optional)
                      </label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Share any details or questions here..."
                        rows={3}
                        className="w-full p-4 rounded-xl border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-md bg-zinc-900 text-white placeholder-zinc-650 resize-none"
                      />
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Navigation Buttons footer */}
            <div className="flex items-center justify-between mt-8 border-t border-zinc-900 pt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-zinc-400 hover:text-white transition-colors focus:outline-none h-11"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : (
                <div />
              )}

              {/* Steps next triggers */}
              {step === 3 && (
                <button
                  type="button"
                  onClick={handleLocationSubmit}
                  className="inline-flex items-center justify-center bg-white hover:bg-zinc-200 text-black px-6 h-12 rounded-xl text-sm font-bold transition-all shadow-sm flex gap-1.5"
                >
                  Next <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {step === 5 && (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue/90 disabled:opacity-50 text-white px-6 h-12 rounded-xl text-sm font-bold transition-all shadow-cta flex gap-1.5"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>Request My Estimate</>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Payment or Planning Panel */}
          <div className="lg:col-span-5 bg-zinc-950 border border-zinc-850 p-6 sm:p-8 rounded-2xl flex flex-col justify-between min-h-[460px] text-white">
            <div>
              <div className="flex flex-col gap-2 mb-6">
                <span className="text-label text-brand-blue font-bold tracking-widest uppercase">FINANCING & PLANNING</span>
                <h3 className="font-montserrat text-heading-lg font-bold text-white leading-tight">
                  Ask About Monthly Payment Options
                </h3>
                <p className="text-body-sm text-zinc-450 leading-relaxed">
                  Home protection is a major investment. During your estimate, AAA can walk you through your project scope and available payment options so you can make a confident decision.
                </p>
              </div>

              {/* Three Planning Cards */}
              <div className="space-y-4">
                {[
                  {
                    num: "01",
                    title: "Small Upgrade",
                    desc: "A few windows, doors, or targeted openings. AAA will provide an actual estimate after reviewing the property."
                  },
                  {
                    num: "02",
                    title: "Whole-Home Protection",
                    desc: "Multiple windows and doors across the home. AAA will provide an actual estimate after reviewing the property."
                  },
                  {
                    num: "03",
                    title: "Roofing or Combined Project",
                    desc: "Roofing, windows, doors, or multiple exterior upgrades. AAA will provide an actual estimate after reviewing the property."
                  }
                ].map((card) => (
                  <div key={card.num} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex flex-col gap-1 shadow-sm">
                    <span className="text-[9px] font-bold text-brand-blue tracking-wider">OPTION {card.num}</span>
                    <h4 className="font-montserrat text-body-md font-bold text-white">{card.title}</h4>
                    <p className="text-xs text-zinc-400 leading-normal mt-0.5">{card.desc}</p>
                  </div>
                ))}
              </div>

              {/* Savings Tips Card with Disclaimer */}
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex items-start gap-3 mt-6 shadow-sm">
                <Info className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <div className="text-xs text-zinc-350">
                  <span className="font-bold text-white block mb-1">Potential Property Benefits:</span>
                  Improved storm readiness, noise reduction considerations, security enhancement, energy efficiency potential, and potential insurance premium reductions.
                  <span className="block mt-2.5 text-[9px] text-zinc-500 leading-tight">
                    * Savings and eligibility vary by property, product, insurance provider, utility usage, and project scope. AAA can discuss potential considerations, but final savings are not guaranteed.
                  </span>
                </div>
              </div>
            </div>

            {/* Talk Through Options CTA & Phone Link */}
            <div className="mt-8 pt-6 border-t border-zinc-850 flex flex-col sm:flex-row items-center gap-4 justify-between">
              <button
                type="button"
                onClick={handleTalkOptions}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-zinc-200 text-black px-5 h-11 rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                Talk Through My Options
              </button>
              
              <a
                href={`tel:${siteConfig.phoneDefault}`}
                onClick={handlePhoneClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-zinc-800 hover:border-zinc-700 text-zinc-300 bg-zinc-900 px-5 h-11 rounded-xl text-xs font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                Call AAA Direct
              </a>
            </div>

            <p className="text-[9px] text-zinc-500 leading-normal mt-6">
              Disclaimer: Monthly payment examples, if shown, are for planning purposes only and are not a financing offer. Final pricing, approval, rates, terms, and eligibility depend on project scope, lender approval, customer qualifications, and current program availability.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
