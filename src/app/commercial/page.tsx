import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, ShieldCheck, CheckSquare, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { projects } from "@/data/projects";
import CommercialEstimateForm from "@/components/forms/CommercialEstimateForm";
import { PhoneNumber } from "@/components/ui/PhoneNumber";

export const metadata: Metadata = {
  title: "Commercial Storefront Glazing & Roofing | South Florida GC Partner",
  description: "AAA partners with general contractors and property managers for storefront glazing, commercial doors, and roofing installations across South Florida.",
};

export default function CommercialPage() {
  const scopes = [
    { title: "Storefront Window & Door Systems", desc: "Heavy-wall aluminum framing systems and laminated impact safety glass optimized for retail plazas, office lobbies, and commercial storefront layouts." },
    { title: "Commercial Impact Glazing", desc: "Wind-load certified configurations and code compliance paperwork for storefront assemblies and retail centers." },
    { title: "Plaza & Retail Center Renovations", desc: "Phased opening replacements coordinated around tenant schedules to prevent business interruption." },
    { title: "Commercial Roofing*", desc: "Commercial roof replacements, deck structural updates, and drip edge flashings conforming to local HVHZ building code guidelines. *[CLIENT VERIFY]" },
  ];

  const standards = [
    {
      icon: Clock,
      title: "On-Site When Scheduled",
      desc: "We coordinate mobilization directly with your project managers. Our crews arrive when scheduled, equipped, and ready to execute.",
    },
    {
      icon: ShieldCheck,
      title: "Clean Jobsite Standard",
      desc: "Debris hauling, frame cleanup, and structural shimming lines are fully integrated. We leave our workspaces prepared for follow-on trades.",
    },
    {
      icon: CheckSquare,
      title: "Code Compliance Assured",
      desc: "We coordinate shop drawings, wind-load calculations, and local inspections, attending the final walk with the inspector to verify code conformity.",
    },
  ];

  const commercialProjects = projects.filter((p) => p.category.includes("commercial")).slice(0, 3);

  return (
    <div className="relative w-full">
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 DarkBackground-Graphite text-brand-white border-b border-brand-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/portals/commercial-hero.jpg"
            alt="South Florida commercial storefront glazing installation"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start max-w-3xl">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase mb-3 block">
              Trade Partner & Commercial Contractors
            </span>
            <h1 className="text-display-xl font-bold text-brand-white leading-tight mb-6">
              A Glazing and Roofing Trade Partner Who Can Execute
            </h1>
            <p className="text-body-lg text-brand-mid-gray/90 leading-relaxed mb-8">
              South Florida GCs work with AAA because we show up when scheduled, communicate transparently through the build, and resolve code inspection files without being chased.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#commercial-bid-form"
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta hover:shadow-lg transition-all duration-200"
              >
                Submit Plans for Bid Review
              </a>
              <a
                href={`tel:${siteConfig.phoneRawDefault}`}
                className="inline-flex items-center gap-2 text-body-md font-bold text-brand-blue hover:underline py-2"
              >
                Or call us: <PhoneNumber />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 w-full">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-brand-white/15 bg-brand-near-black/50">
              <Image
                src="/images/services/commercial.png"
                alt="Commercial elevation storefront glazing"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 1. What We Handle (Commercial Scope) */}
      <section className="py-20 bg-brand-white border-b border-brand-cool-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 flex flex-col gap-3">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
              Core Scope
            </span>
            <h2 className="text-display-lg font-bold text-brand-near-black">
              Storefront Glazing, Commercial Roofing & Multi-Family Upgrades
            </h2>
          </div>

          <div className="flex flex-col gap-6 max-w-5xl">
            {scopes.map((scope, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 bg-brand-ice rounded-2xl border border-brand-cool-gray/30 hover:border-brand-blue/20 transition-all duration-200 shadow-card relative overflow-hidden group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
                <div className="sm:w-1/3">
                  <h4 className="text-heading-md font-bold text-brand-near-black flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-blue" />
                    {scope.title}
                  </h4>
                </div>
                <div className="sm:w-2/3">
                  <p className="text-body-sm text-brand-graphite leading-relaxed">
                    {scope.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. What GCs Can Expect (GC standards) */}
      <section className="py-20 DarkBackground-Graphite text-brand-white border-b border-brand-white/10 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-brand-blue" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
              Service Delivery
            </span>
            <h2 className="text-display-lg font-bold text-brand-white">
              GC Standards: Coordination Without the Chase
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {standards.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="p-6 bg-brand-near-black border border-brand-white/5 rounded-2xl flex flex-col gap-4 hover:border-brand-blue/20 transition-colors">
                  <Icon className="w-8 h-8 text-brand-blue" />
                  <h4 className="text-heading-md font-bold text-brand-white">{s.title}</h4>
                  <p className="text-body-sm text-brand-mid-gray/80 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Project Coordination Process */}
      <section className="py-20 bg-brand-white border-b border-brand-cool-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center gap-3">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">Process Flow</span>
            <h3 className="text-display-lg font-bold text-brand-near-black">
              Commercial Project Bidding & Closeout Workflow
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {[
              { num: "01", title: "Plan Review", desc: "Send us specifications, architectural drawings, or bid templates for prompt review." },
              { num: "02", title: "Scope Bidding", desc: "We present a comprehensive structural glazing or roofing proposal matching code specs." },
              { num: "03", title: "Schedule", desc: "Our coordinators align mobilization timelines with your master construction chart." },
              { num: "04", title: "Execution", desc: "Experienced glaziers and roofers install frame systems, flashing, and sealing components." },
              { num: "05", title: "Closeout", desc: "AAA files manufacturer closeouts, conducts inspections, and completes sign-off drawings." },
            ].map((item, idx) => (
              <div key={idx} className="bg-brand-ice p-5 rounded-2xl border border-brand-cool-gray/30 shadow-card flex flex-col justify-between relative group hover:border-brand-blue/20 transition-colors">
                <div>
                  <span className="font-mono text-xs font-bold text-brand-blue block mb-2">{item.num}</span>
                  <h4 className="text-body-sm font-bold text-brand-near-black leading-tight">{item.title}</h4>
                </div>
                <p className="text-[11px] text-brand-graphite leading-relaxed mt-3">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Commercial Projects Gallery */}
      <section className="py-20 bg-brand-ice border-b border-brand-cool-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-label text-brand-blue font-bold tracking-widest uppercase font-sans">
                Portfolio
              </span>
              <h2 className="text-display-lg font-bold text-brand-near-black leading-tight">
                Commercial Portfolio Highlights
              </h2>
            </div>
            <Link href="/projects" className="text-label font-bold text-brand-blue hover:underline flex items-center gap-1">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commercialProjects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-brand-cool-gray/30 bg-brand-white shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-350 origin-bottom z-20" />
                <div className="relative aspect-[16/10] overflow-hidden select-none bg-brand-cool-gray/10">
                  <Image
                    src={project.images[0] || "/images/projects/placeholder-commercial.png"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-102"
                  />
                  <div className="absolute top-3 left-3 bg-brand-blue/95 text-brand-white text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-full uppercase">
                    {project.category[0]}
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <div className="flex justify-between items-center text-[10px] font-mono font-semibold text-brand-mid-gray/70 uppercase">
                    <span>{project.location}</span>
                    <span>{project.propertyType}</span>
                  </div>
                  <h4 className="text-heading-md font-bold text-brand-near-black group-hover:text-brand-blue transition-colors duration-200 leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-body-sm text-brand-graphite/80 leading-normal line-clamp-2 mt-1">
                    {project.scope}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-label font-bold text-brand-blue group-hover:text-brand-blue/80 transition-colors">
                    <span>VIEW CASE DETAILS</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Commercial Inquiry Form */}
      <section id="commercial-bid-form" className="py-20 bg-brand-white scroll-mt-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12 flex flex-col items-center gap-2">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
              Bid Requests
            </span>
            <h2 className="text-display-lg font-bold text-brand-near-black">
              Discuss a Commercial Project
            </h2>
            <p className="text-body-md text-brand-graphite mt-2">
              Submit architectural specifications or bid requests for plan review.
            </p>
          </div>

          <CommercialEstimateForm />
        </div>
      </section>

      {/* 6. Footer CTA Panel */}
      <section className="py-24 DarkBackground-Black text-brand-white text-center relative overflow-hidden border-t border-brand-white/10">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-blue" />
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center gap-6">
          <h2 className="text-display-lg font-bold text-brand-white uppercase">
            Let&apos;s Review Your Project Specs
          </h2>
          <p className="text-body-md text-brand-mid-gray/80 max-w-lg leading-relaxed">
            Email drawings directly to our estimating desk or submit your plans online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-2">
            <a
              href="#commercial-bid-form"
              className="inline-flex items-center justify-center h-12 px-8 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta hover:shadow-lg transition-all duration-200"
            >
              Submit Bid Details
            </a>
            <a 
              href={`mailto:${siteConfig.email}`} 
              className="text-body-md font-bold text-brand-blue hover:underline py-2"
            >
              Email plans: {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
