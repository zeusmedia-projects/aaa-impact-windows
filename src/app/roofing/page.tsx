import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { projects } from "@/data/projects";
import FaqAccordion from "@/components/ui/FaqAccordion";
import LayeredRoof from "@/components/ui/LayeredRoof";
import { PhoneNumber } from "@/components/ui/PhoneNumber";

export const metadata: Metadata = {
  title: "Roof Replacement & Storm-Readiness Upgrades | South Florida",
  description: "AAA manages premium shingle, tile, and metal roof replacements across South Florida. Serving Naples, Davie, Pembroke Pines, Sunrise, and Miramar.",
};

export default function RoofingPage() {
  const roofingServices = [
    {
      title: "Residential Roof Replacement*",
      desc: "Complete shingle, tile, and metal roof replacements engineered to meet the latest Florida Building Code wind ratings. *[CLIENT VERIFY - confirm scope]",
    },
    {
      title: "Roofing Evaluations*",
      desc: "Comprehensive visual and structural assessments of age, deck fastening, and shingle/tile cohesion. *[CLIENT VERIFY - confirm if offered]",
    },
    {
      title: "Storm-Readiness Prep*",
      desc: "Installing hurricane straps and replacing damaged deck areas to optimize roof-to-wall integrity before storm season. *[CLIENT VERIFY]",
    },
    {
      title: "Coordinated Upgrades*",
      desc: "Combining windows, doors, and roofing installations under a unified schedule to prevent project overlap. *[CLIENT VERIFY]",
    },
    {
      title: "Permit Coordination*",
      desc: "Handling municipal drawings, wind load calculations, and inspections from start to final sign-off. *[CLIENT VERIFY]",
    },
  ];

  const roofingProjects = projects.filter((p) => p.category.includes("roofing")).slice(0, 3);

  const faqItems = [
    {
      question: "When should I consider a roof replacement?",
      answer: "Key indicators include active ceiling leaks, missing or curling shingles, cracked roof tiles, or a roof age exceeding 15 to 20 years. A certified inspection can confirm deck and underlayment conditions.",
    },
    {
      question: "Do you coordinate the permitting process?*",
      answer: "Yes, AAA handles the complete engineering calculations, municipal permit filing, progress inspections, and final approval sign-off. *[CLIENT VERIFY]",
    },
    {
      question: "What roofing materials do you install?*",
      answer: "We work with standard architectural shingles, concrete/clay roof tiles, and modern metal roofing systems tailored for wind resilience. *[CLIENT VERIFY]",
    },
    {
      question: "Can I combine roofing replacements with window installations?",
      answer: "Yes. Coordinating these upgrades under AAA minimizes scheduling conflicts, ensures window flashing and roof dripedges connect correctly, and streamlines municipal inspector visits.",
    },
    {
      question: "How long does a typical roof replacement take?*",
      answer: "A standard residential roof replacement takes between 3 to 7 business days, depending on material choice, weather conditions, and structural deck repairs. *[CLIENT VERIFY]",
    },
    {
      question: "Do you offer financing options for roofing?*",
      answer: "Yes, financing packages are available for qualified South Florida homeowners to help spread out project costs. *[CLIENT VERIFY - confirm financing partner terms]",
    },
  ];

  return (
    <div className="relative w-full">
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 StudioBackground border-b border-brand-cool-gray/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start max-w-3xl">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase mb-3 block">
              Services • Shingle, Tile & Metal Roofing
            </span>
            <h1 className="text-display-xl font-bold text-brand-near-black leading-tight mb-6">
              South Florida Roofing by a Team You Can Trust After the Job
            </h1>
            <p className="text-body-lg text-brand-graphite leading-relaxed mb-8">
              AAA handles residential roofing with the same accountability and care we bring to every impact window and door installation. One team, one point of contact, and consistent communication from estimate through final inspection.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/get-estimate?service=roofing"
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta hover:shadow-lg transition-all duration-200"
              >
                Request a Roofing Estimate
              </Link>
              <a
                href={`tel:${siteConfig.phoneRawDefault}`}
                className="inline-flex items-center gap-2 text-body-md font-bold text-brand-blue hover:underline py-2"
              >
                Or call us: <PhoneNumber />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 w-full">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-brand-cool-gray/30 bg-brand-cool-gray/20">
              <Image
                src="/images/services/roofing.png"
                alt="AAA Impact Roofing services South Florida"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 1. What We Handle (Service Scope) */}
      <section className="py-20 bg-brand-white border-b border-brand-cool-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
              Our Capabilities
            </span>
            <h2 className="text-display-lg font-bold text-brand-near-black">
              Roofing Upgrades We Coordinate
            </h2>
            <p className="text-body-md text-brand-graphite leading-relaxed">
              All systems are engineered for code-compliant Florida wind loads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roofingServices.map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-brand-ice rounded-2xl border border-brand-cool-gray/40 flex flex-col justify-between hover:border-brand-blue/25 transition-all duration-300 shadow-card relative overflow-hidden group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
                <div>
                  <h4 className="text-heading-md font-bold text-brand-near-black mb-2 leading-tight">
                    {service.title}
                  </h4>
                  <p className="text-body-sm text-brand-graphite leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-cool-gray/20 text-[10px] font-sans font-bold text-brand-blue uppercase tracking-widest">
                  Licensed & Insured
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Interactive Layered Roof Showcase */}
      <section className="py-20 bg-brand-ice border-b border-brand-cool-gray/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
              Interactive Blueprint
            </span>
            <h2 className="text-display-lg font-bold text-brand-near-black leading-tight">
              Anatomy of a Code-Compliant Roof Envelope
            </h2>
            <p className="text-body-md text-brand-graphite leading-relaxed">
              Scroll to see the full assembly process of a modern South Florida roof replacement. By layering a structural roof deck, secondary polymer water barriers, high-wind shingles or clay tiles, and ridge ventilation caps, AAA locks down your home envelope against rainwater pressure and storm wind loads.
            </p>
            <div className="mt-2">
              <Link
                href="/get-estimate?service=roofing"
                className="inline-flex items-center justify-center h-12 px-8 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta transition-colors"
              >
                Discuss Materials Scope
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <LayeredRoof />
          </div>
        </div>
      </section>

      {/* 3. Why Roofing With AAA (Core Differences) */}
      <section className="py-20 DarkBackground-Graphite text-brand-white relative overflow-hidden border-b border-brand-white/10">
        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-brand-blue" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
              AAA Difference
            </span>
            <h2 className="text-display-lg font-bold text-brand-white leading-tight">
              No Subcontracted Strangers. Just Our Reliable Crew.
            </h2>
            <p className="text-body-md text-brand-mid-gray/90 leading-relaxed">
              Many roofing companies operate as bid brokers, hiring third-party day crews to run the installation. With AAA, you deal with local coordinators who manage our crews directly and remain accountable after the invoice is settled.
            </p>

            <div className="flex flex-col gap-4 text-body-sm font-sans mt-2 text-brand-mid-gray">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span><strong>Clean Jobsite Standards:</strong> We run daily magnet sweeps to clear dropped nails and debris from lawns and driveways.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span><strong>Full Dry-In Protection:</strong> If weather threatens during installation, we dry-in active decking sections immediately to prevent ceiling leaks.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span><strong>Same Crew Coordination:</strong> Coordinating roofing alongside impact windows prevents double-inspections and scheduling overlaps.</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-card border border-brand-white/10 bg-brand-graphite">
              <Image
                src="/images/services/roofing.png"
                alt="Quality underlayment and drip edge install detail"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process (5-step roofing specific) */}
      <section className="py-20 bg-brand-white border-b border-brand-cool-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">Methodology</span>
            <h3 className="text-display-lg font-bold text-brand-near-black">
              Our 5-Step Roofing Process
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Deck Evaluation", desc: "We review shingles/tiles, flashing joints, and evaluate wood deck fastening requirements on-site." },
              { step: "02", title: "Code Proposal", desc: "We present tile, metal, or shingle options certified for local High Velocity Hurricane Zone wind loads." },
              { step: "03", title: "Permit Submissions", desc: "AAA handles engineering layout, permit drafting, and municipal approvals directly." },
              { step: "04", title: "System Installation", desc: "Crews tear off old underlayment, re-nail decks, lay down secondary water barriers, and install shingles or tiles." },
              { step: "05", title: "Inspection Walkthrough", desc: "We coordinate with the building inspector to approve dry-in and final structural sign-offs." },
            ].map((item, idx) => (
              <div key={idx} className="bg-brand-ice p-5 rounded-2xl border border-brand-cool-gray/30 shadow-card flex flex-col gap-3 relative group hover:border-brand-blue/25 transition-colors">
                <span className="font-mono text-xs font-bold text-brand-blue block">{item.step}</span>
                <h4 className="text-heading-md font-bold text-brand-near-black leading-tight">{item.title}</h4>
                <p className="text-[11px] text-brand-graphite leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Roofing Projects */}
      <section className="py-20 bg-brand-ice border-b border-brand-cool-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
                Case Studies
              </span>
              <h2 className="text-display-lg font-bold text-brand-near-black">
                Recent Roofing Installs
              </h2>
            </div>
            <Link href="/projects" className="text-label font-bold text-brand-blue hover:underline flex items-center gap-1">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roofingProjects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-brand-cool-gray/30 bg-brand-white shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-350 origin-bottom z-20" />
                <div className="relative aspect-[16/10] overflow-hidden select-none bg-brand-cool-gray/10">
                  <Image
                    src={project.images[0] || "/images/projects/placeholder-roofing.png"}
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

      {/* 6. FAQs */}
      <section className="py-20 bg-brand-white border-b border-brand-cool-gray/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
              Common Questions
            </span>
            <h2 className="text-display-lg font-bold text-brand-near-black">
              Roofing Project FAQs
            </h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* 7. Final CTA Panel */}
      <section className="py-24 DarkBackground-Black text-brand-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-blue" />
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center gap-6">
          <h3 className="text-display-lg font-bold text-brand-white uppercase">
            Protect Your Roof Envelope
          </h3>
          <p className="text-body-md text-brand-mid-gray/80 max-w-lg leading-relaxed">
            Schedule an on-site roofing evaluation. Get custom material proposals and storm-readiness estimations with zero obligations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-2">
            <Link
              href="/get-estimate"
              className="inline-flex items-center justify-center h-12 px-8 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta hover:shadow-lg transition-all duration-200"
            >
              Request Your Free Estimate
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

      {/* 8. Related Services Cross Links */}
      <section className="py-12 bg-brand-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center gap-8 items-center text-body-sm">
          <span className="text-label font-bold text-brand-mid-gray uppercase tracking-widest">
            Other Services:
          </span>
          <Link href="/impact-windows" className="font-bold text-brand-graphite hover:text-brand-blue flex items-center gap-1.5 transition-colors">
            Impact Windows <ArrowRight className="w-4 h-4 text-brand-blue" />
          </Link>
          <Link href="/impact-doors" className="font-bold text-brand-graphite hover:text-brand-blue flex items-center gap-1.5 transition-colors">
            Impact Doors <ArrowRight className="w-4 h-4 text-brand-blue" />
          </Link>
        </div>
      </section>
    </div>
  );
}
