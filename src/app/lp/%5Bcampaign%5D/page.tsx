"use client";

import React, { useState, useEffect } from "react";
import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, ShieldAlert, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { trackEvent } from "@/lib/analytics";
import { PhoneNumber } from "@/components/ui/PhoneNumber";

// Campaign Config Type
interface LandingPageConfig {
  campaign: string;
  headline: string;
  subheadline: string;
  heroImage: string;
  serviceContext: string;
  localContext: string;
  formTitle: string;
  formServiceDefault: string;
  showNav: boolean;
  trustBadges: string[];
  faqItems: { question: string; answer: string }[];
}

// Pre-built campaign configurations matching the bad build
const campaignConfigs: Record<string, LandingPageConfig> = {
  "impact-windows-broward": {
    campaign: "impact-windows-broward",
    headline: "Protect Your Broward Home with Premium Impact Windows",
    subheadline: "Code-compliant installation, energy savings, and direct support from a local team.",
    heroImage: "/images/lp/windows-broward.jpg",
    serviceContext: "Our impact windows are engineered to exceed Broward County High Velocity Hurricane Zone (HVHZ) wind-load requirements, offering structural safety and solar heat deflection.",
    localContext: "Serving Fort Lauderdale, Pembroke Pines, Miramar, Sunrise, and all municipalities across Broward County.",
    formTitle: "Get a Broward Window Quote",
    formServiceDefault: "Impact Windows",
    showNav: false,
    trustBadges: ["HVHZ Certified", "Family Owned", "Licensed & Insured*", "Free Quote"],
    faqItems: [
      { question: "Do impact windows eliminate the need for shutters in Broward?", answer: "Yes. Once installed, impact windows provide continuous hurricane protection, satisfying Broward code requirements without storm panels." },
      { question: "How long does municipal permitting take in Broward?*", answer: "Permit approval times vary by city, usually taking between 2 to 4 weeks. AAA coordinates all engineering submittals directly. *[CLIENT VERIFY]" },
    ],
  },
  "impact-windows-palm-beach": {
    campaign: "impact-windows-palm-beach",
    headline: "Palm Beach Certified Impact Windows & Replacements",
    subheadline: "Secure your coastal property with engineered laminated glass and zero-defect framing.",
    heroImage: "/images/lp/windows-pb.jpg",
    serviceContext: "Our window systems deflect up to 99% of fading UV rays and block coastal heat transfer, keeping your home insulated against Palm Beach summer humidity.",
    localContext: "Serving Boca Raton, Delray Beach, Boynton Beach, West Palm Beach, and coastal Palm Beach County.",
    formTitle: "Get a Palm Beach Window Estimate",
    formServiceDefault: "Impact Windows",
    showNav: false,
    trustBadges: ["Coastal Rated", "Licensed & Insured*", "Energy Efficient", "Zero Pressure"],
    faqItems: [
      { question: "Are these windows energy-star certified?", answer: "Yes, our impact windows feature Low-E coatings and insulated glass designs to help lower air conditioning loads in coastal Florida." },
      { question: "What is your typical lead time in Palm Beach?*", answer: "Production and permitting timelines typically average 4 to 6 weeks. AAA schedules crews immediately upon permit release. *[CLIENT VERIFY]" },
    ],
  },
  "impact-doors": {
    campaign: "impact-doors",
    headline: "Heavy-Duty Impact Entry & Patio Doors",
    subheadline: "Secure every entryway with multi-point locksets and certified hurricane laminated glass.",
    heroImage: "/images/lp/doors-hero.jpg",
    serviceContext: "From front entry doors to multi-panel sliding glass patio systems, our impact doors deliver high-velocity pressure security and clean modern styling.",
    localContext: "Custom sizing and professional installation active across Broward, Palm Beach, and Miami-Dade counties.",
    formTitle: "Get an Impact Door Quote",
    formServiceDefault: "Impact Doors",
    showNav: false,
    trustBadges: ["Multi-Point Locks", "Windload Certified", "Tandem Rollers", "Licensed & Insured*"],
    faqItems: [
      { question: "Do your doors feature high security locks?", answer: "Yes, our swing doors utilize multi-point locking systems that secure the panel into the frame at three distinct points to prevent forced entry." },
      { question: "Do you replace the entire door frame?", answer: "Yes, we replace the framing members to guarantee airtight seals, positive latching, and structural code anchoring." },
    ],
  },
  "roofing": {
    campaign: "roofing",
    headline: "South Florida Residential Roof Replacement",
    subheadline: "Accountable roofing installations from a team that stays available long after the crew departs.",
    heroImage: "/images/lp/roofing-hero.jpg",
    serviceContext: "We handle tile, shingle, and metal roof replacements, using high-performance underlayment barriers to secure your home against rain and wind leaks.",
    localContext: "Residential roof installations and storm-readiness assessments active in Broward, Palm Beach, and SW Florida.",
    formTitle: "Get a Roofing Estimate",
    formServiceDefault: "Roofing",
    showNav: false,
    trustBadges: ["HVHZ Shingles", "Magnet Sweeps Daily", "Permit Management", "Licensed & Insured*"],
    faqItems: [
      { question: "What is your daily cleanup standard?", answer: "We conduct daily magnet sweeps of yards and driveways to collect fasteners and clear project debris before our crews leave for the day." },
      { question: "Can I combine roofing and window installations?", answer: "Yes. Coordinating these upgrades under AAA simplifies municipal inspection scheduling and flashings joins." },
    ],
  },
  "naples": {
    campaign: "naples",
    headline: "Naples Impact Windows, Doors & Roofing",
    subheadline: "Owner-operated storm envelope protection for Southwest Florida properties.",
    heroImage: "/images/lp/naples-hero.jpg",
    serviceContext: "Providing shingle roofing, entry doors, and impact windows engineered to withstand severe Gulf coast exposures and wind pressures.",
    localContext: "Serving Naples, Marco Island, Bonita Springs, and Collier County regions.",
    formTitle: "Get a Naples Property Quote",
    formServiceDefault: "Multiple / Not Sure",
    showNav: false,
    trustBadges: ["SWFL Local Crew", "Licensed & Insured*", "Permit Filing", "HVHZ Rated"],
    faqItems: [
      { question: "Do you coordinate the permitting process in Collier County?*", answer: "Yes, AAA manages the engineering submittals and local permit filing directly with Collier County or Naples city offices. *[CLIENT VERIFY]" },
    ],
  },
  "commercial-storefront": {
    campaign: "commercial-storefront",
    headline: "Commercial Storefront Glazing & Impact Doors",
    subheadline: "High-performance glazing trade partners for retail plazas and storefront renovations.",
    heroImage: "/images/lp/commercial-hero.jpg",
    serviceContext: "We supply and install heavy-wall aluminum storefront systems, impact glass, and commercial doors matching GC drawings and schedule mobilization dates.",
    localContext: "Statewide bidding and coordination active for plazas and professional office buildings.",
    formTitle: "Request Plan Review",
    formServiceDefault: "Storefront",
    showNav: false,
    trustBadges: ["Statewide Bidding", "GC Coordination", "HVHZ Storefronts", "Licensed & Insured*"],
    faqItems: [
      { question: "Can you bid directly from architectural drawings?", answer: "Yes. You can submit specs or PDF floor plans through our inquiry portal for a prompt project bid." },
    ],
  },
};

// Form schema with strict validation
const lpFormSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, "Please enter a valid 10-digit phone number"),
  email: z.string().email("Valid email address is required"),
  zipCode: z.string().regex(/^\d{5}$/, "Valid 5-digit ZIP code is required"),
});

type LPFormData = z.infer<typeof lpFormSchema>;

export default function PPCLandingPage({ params }: { params: { campaign: string } }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [utmData, setUtmData] = useState<Record<string, string>>({});

  const config = campaignConfigs[params.campaign];

  // Capture UTMs
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const capturedUtm: Record<string, string> = {
        utm_source: searchParams.get("utm_source") || "google_ppc",
        utm_medium: searchParams.get("utm_medium") || "cpc",
        utm_campaign: searchParams.get("utm_campaign") || params.campaign,
      };
      setUtmData(capturedUtm);
    }
  }, [params.campaign]);

  if (!config) {
    notFound();
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LPFormData>({
    resolver: zodResolver(lpFormSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: LPFormData) => {
    if (honeypot) {
      console.warn("Spam lead attempt blocked.");
      router.push("/thank-you");
      return;
    }
    
    setIsSubmitting(true);
    const payload = {
      form_type: "ppc-landing-page",
      ...data,
      ...utmData,
      form_id: `ppc-${config.campaign}`,
      service_requested: config.formServiceDefault,
      submission_timestamp: new Date().toISOString(),
    };

    console.log("[Submitting PPC Lead Payload]:", payload);

    // Track analytics lead event
    trackEvent("generate_lead", {
      form_type: `ppc-${config.campaign}`,
      service_selected: config.formServiceDefault,
      location_entered: data.zipCode,
      ...utmData,
    });

    try {
      sessionStorage.setItem("__aaa_lead_form_type__", `ppc-${config.campaign}`);
      sessionStorage.setItem("__aaa_lead_service__", config.formServiceDefault);
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

    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    router.push("/thank-you");
  };

  return (
    <div className="relative w-full bg-brand-ice min-h-screen text-brand-near-black">
      {/* Hero Section with Inline Form */}
      <section className="relative pt-32 pb-20 DarkBackground-Graphite text-brand-white border-b border-brand-white/10 overflow-hidden">
        <div className="absolute inset-0 opacity-15 z-0">
          <Image
            src={config.heroImage}
            alt={config.headline}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Headline Column */}
          <div className="lg:col-span-7 flex flex-col max-w-xl">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase block mb-3">
              Limited-Time Proposal Offers*
            </span>
            <h1 className="font-display text-display-xl font-extrabold text-brand-white leading-[1.0] mb-4 uppercase tracking-[-0.035em]">
              {config.headline}
            </h1>
            <p className="text-body-lg text-brand-mid-gray/90 leading-relaxed mb-6">
              {config.subheadline}
            </p>
            
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-brand-mid-gray/80 mt-2">
              <span className="flex items-center gap-1">✓ Hurricane Rated</span>
              <span>•</span>
              <span className="flex items-center gap-1">✓ Full Code Compliance</span>
              <span>•</span>
              <span className="flex items-center gap-1">✓ Complete Cleanup</span>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto">
            <div className="bg-brand-white text-brand-near-black p-6 md:p-8 rounded-2xl shadow-card border border-brand-cool-gray/30">
              <h3 className="text-heading-md font-bold text-brand-near-black mb-4 text-center">
                {config.formTitle}
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-12 h-12 text-brand-blue mx-auto mb-3 animate-bounce" />
                  <h4 className="text-heading-md font-bold text-brand-near-black mb-1">Request Sent!</h4>
                  <p className="text-body-sm text-brand-graphite">Redirecting to next steps walkthrough...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-label font-bold text-brand-graphite mb-1">FIRST NAME*</label>
                      <input
                        type="text"
                        {...register("firstName")}
                        className="w-full h-10 px-3 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-sm bg-brand-white text-brand-near-black"
                      />
                      {errors.firstName && <p className="text-[10px] text-red-600 mt-0.5">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-label font-bold text-brand-graphite mb-1">LAST NAME*</label>
                      <input
                        type="text"
                        {...register("lastName")}
                        className="w-full h-10 px-3 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-sm bg-brand-white text-brand-near-black"
                      />
                      {errors.lastName && <p className="text-[10px] text-red-500 mt-0.5">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-label font-bold text-brand-graphite mb-1">PHONE NUMBER*</label>
                    <input
                      type="tel"
                      placeholder="(954) 555-0199"
                      {...register("phone")}
                      className="w-full h-10 px-3 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-sm bg-brand-white text-brand-near-black"
                    />
                    {errors.phone && <p className="text-[10px] text-red-600 mt-0.5">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-label font-bold text-brand-graphite mb-1">EMAIL ADDRESS*</label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      {...register("email")}
                      className="w-full h-10 px-3 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-sm bg-brand-white text-brand-near-black"
                    />
                    {errors.email && <p className="text-[10px] text-red-600 mt-0.5">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-label font-bold text-brand-graphite mb-1">ZIP CODE*</label>
                    <input
                      type="text"
                      placeholder="e.g. 33014"
                      {...register("zipCode")}
                      className="w-full h-10 px-3 rounded-md border border-brand-cool-gray focus:outline-none focus:ring-2 focus:ring-brand-blue text-body-sm bg-brand-white text-brand-near-black"
                    />
                    {errors.zipCode && <p className="text-[10px] text-red-600 mt-0.5">{errors.zipCode.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full h-11 bg-brand-blue hover:bg-brand-blue/90 text-brand-white rounded-lg text-label font-bold shadow-cta transition-colors mt-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting details..." : "Send My Quote Request"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trust Strip (4 badges) */}
      <section className="bg-brand-white border-b border-brand-cool-gray/30 py-6 text-center text-xs font-sans font-bold text-brand-near-black shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {config.trustBadges.map((badge, idx) => (
            <span key={idx} className="flex items-center gap-1.5 uppercase tracking-wider text-brand-graphite">
              <ShieldAlert className="w-4 h-4 text-brand-blue" />
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* 4. Service Context Section */}
      <section className="py-20 bg-brand-white border-b border-brand-cool-gray/20">
        <div className="max-w-3xl mx-auto px-4 text-center flex flex-col items-center gap-3">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
            Why Choose AAA
          </span>
          <h2 className="text-display-lg font-bold text-brand-near-black">
            Precision Products Built for Florida Windloads
          </h2>
          <p className="text-body-md text-brand-graphite leading-relaxed">
            {config.serviceContext}
          </p>
        </div>
      </section>

      {/* 5. Local Proof Context */}
      <section className="py-16 bg-brand-ice border-b border-brand-cool-gray/30">
        <div className="max-w-3xl mx-auto px-4 text-center flex flex-col items-center gap-3">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
            Local Service area
          </span>
          <p className="text-body-lg text-brand-graphite leading-relaxed font-semibold">
            {config.localContext}
          </p>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="py-20 bg-brand-white border-b border-brand-cool-gray/25">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-display-lg text-center font-bold text-brand-near-black mb-12">
            Frequently Asked Questions
          </h3>
          <FaqAccordion items={config.faqItems} />
        </div>
      </section>

      {/* 7. Final Call CTA Banner */}
      <section className="py-20 DarkBackground-Black text-brand-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-blue" />
        <div className="max-w-xl mx-auto px-4 flex flex-col items-center gap-4">
          <h3 className="text-display-lg font-bold uppercase">
            Prefer to speak directly?
          </h3>
          <p className="text-body-sm text-brand-mid-gray/80">
            Our estimators can give you pricing ranges over the phone.
          </p>
          <a
            href={`tel:${siteConfig.phoneRawDefault}`}
            className="inline-flex items-center gap-2 py-3.5 px-8 bg-brand-blue hover:bg-brand-blue/90 text-brand-white rounded-lg text-label font-bold shadow-cta transition-colors mt-2"
          >
            <Phone className="w-4 h-4 text-brand-white" />
            Call: {siteConfig.phoneDefault}
          </a>
        </div>
      </section>
    </div>
  );
}
