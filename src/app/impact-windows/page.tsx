import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Shield, Lock, ThermometerSun, EyeOff, Sun, Sparkles, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { projects } from "@/data/projects";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { PhoneNumber } from "@/components/ui/PhoneNumber";
import WindowInteractiveGrid from "@/components/sections/WindowInteractiveGrid";

export const metadata: Metadata = {
  title: "Impact Windows Installation & Replacements | South Florida",
  description: "AAA installs premium High Velocity Hurricane Zone (HVHV) impact windows across South Florida. Serving Naples, Davie, Pembroke Pines, Sunrise, and Miramar.",
};

export default function ImpactWindowsPage() {
  const benefits = [
    {
      icon: Shield,
      title: "Hurricane Protection",
      desc: "Built to withstand South Florida wind speeds and flying debris. Eliminates the need for traditional storm panels or shutters.",
    },
    {
      icon: Lock,
      title: "Home Security",
      desc: "Multi-layer laminated glass acts as a strong deterrent against forced entry, keeping your family and belongings secure.",
    },
    {
      icon: ThermometerSun,
      title: "Energy Performance",
      desc: "Low-E coatings and insulated glass units reduce thermal transfer, helping lower air conditioning costs in summer heat.",
    },
    {
      icon: EyeOff,
      title: "Noise Reduction",
      desc: "Laminated glass blocks external ambient sounds, creating a significantly quieter and more peaceful home environment.",
    },
    {
      icon: Sun,
      title: "UV Protection",
      desc: "Blocks up to 99% of harmful ultraviolet rays, preventing furniture, rugs, and interior finishes from fading over time.",
    },
    {
      icon: Sparkles,
      title: "Curb Appeal",
      desc: "Enhances aesthetics with clean modern lines, structural frame designs, and updated styling options that increase property value.",
    },
  ];

  const windowProjects = projects.filter((p) => p.category.includes("windows")).slice(0, 3);

  const faqItems = [
    {
      question: "Do impact windows eliminate the need for hurricane shutters?",
      answer: "Yes. Impact windows are designed to withstand hurricane-force winds and impact from flying debris without needing shutters. They provide continuous, 24/7 protection without any setup time before a storm.",
    },
    {
      question: "How long does a typical window installation take?*",
      answer: "Installation timelines depend on the number of openings and scope. A typical single-family home takes 3 to 5 business days for physical installation. *[CLIENT VERIFY - confirm typical timeline]",
    },
    {
      question: "Will installing impact windows reduce my homeowners insurance premium?*",
      answer: "In Florida, insurance carriers are required to offer discounts for opening protection. Many homeowners see premium reductions after installing certified impact windows. *[CLIENT VERIFY - advise clients to contact their carrier directly]",
    },
    {
      question: "Are impact windows energy efficient?",
      answer: "Yes, our impact windows feature laminated, insulated glass with Low-E coatings that block solar heat transfer, helping reduce air conditioning loads and energy bills.",
    },
    {
      question: "What happens during a permit and code inspection?",
      answer: "AAA coordinates the complete permit approval, schedules the municipal inspection, and oversees the final walk-through with the inspector to verify code compliance.",
    },
    {
      question: "Do you handle debris cleanup and property protection?",
      answer: "Absolutely. Our crews lay down protective coverings over your floors, clean work areas daily, and handle all old window hauling and debris disposal.",
    },
  ];

  return (
    <div className="relative w-full">
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 StudioBackground border-b border-brand-cool-gray/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start max-w-3xl">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase mb-3 block">
              Services • Installation & Replacement
            </span>
            <h1 className="font-display text-display-xl font-extrabold text-brand-near-black leading-[1.0] mb-6 uppercase tracking-[-0.035em]">
              Impact Windows That Protect Your Home Through Every Season
            </h1>
            <p className="text-body-lg text-brand-graphite leading-relaxed mb-8">
              Code-compliant installation. Improved security, energy performance, and curb appeal. Backed by a team that answers the phone.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/get-estimate?service=windows"
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta hover:shadow-lg transition-all duration-200"
              >
                Get a Free Window Estimate
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
                src="/images/services/windows.png"
                alt="AAA Impact Windows installation process"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 1. Benefits (six cards, 2x3 grid) */}
      <section className="py-20 bg-brand-white border-b border-brand-cool-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
              Core Performance
            </span>
            <h2 className="text-display-lg font-bold text-brand-near-black">
              Why Upgrade to Impact Windows?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-brand-ice rounded-2xl border border-brand-cool-gray/40 flex items-start gap-5 hover:border-brand-blue/30 transition-all duration-300 shadow-card relative overflow-hidden group"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
                  <div className="w-12 h-12 rounded-xl bg-brand-white border border-brand-cool-gray/60 flex items-center justify-center text-brand-blue flex-shrink-0 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-heading-md font-bold text-brand-near-black mb-2 leading-tight">
                      {b.title}
                    </h4>
                    <p className="text-body-sm text-brand-graphite leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Window options */}
      <section className="py-20 bg-brand-ice border-b border-brand-cool-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
              Product Catalog
            </span>
            <h2 className="text-display-lg font-bold text-brand-near-black">
              Window Styles & Profiles
            </h2>
            <p className="text-body-md text-brand-graphite leading-relaxed">
              Choose the structural frame design that matches your home&apos;s architecture.
            </p>
          </div>

          <WindowInteractiveGrid />
        </div>
      </section>

      {/* 3. Why Installation Quality Matters (Editorial Section) */}
      <section className="py-20 DarkBackground-Graphite text-brand-white relative overflow-hidden border-b border-brand-white/10">
        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-brand-blue" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
              Installation Standard
            </span>
            <h2 className="text-display-lg font-bold text-brand-white leading-tight">
              Why Installation Quality Matters More Than the Brand
            </h2>
            <p className="text-body-md text-brand-mid-gray/90 leading-relaxed">
              Even the most expensive impact window will fail if the framing installation is off by millimeters. Wind loads in South Florida require exact anchoring, perimeter seal integrity, and structural shimming.
            </p>
            <p className="text-body-md text-brand-mid-gray/90 leading-relaxed">
              At AAA, our crews specialize in code-compliant anchoring. We handle the permit coordination, structural frame shimming, and weatherproofing to guarantee a zero-defect installation that passes municipal inspections.
            </p>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-card border border-brand-white/10 bg-brand-graphite">
              <Image
                src="/images/services/windows.png"
                alt="Anchoring detail on impact windows"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process (Abbreviated 4-step) */}
      <section className="py-20 bg-brand-white border-b border-brand-cool-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">Methodology</span>
            <h3 className="text-display-lg font-bold text-brand-near-black">
              Our 4-Step Window Project Process
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Measurements & Bidding", desc: "We review details on-site and present window styles that meet your budget and wind requirements." },
              { step: "02", title: "Permit Filing", desc: "AAA handles engineering, paperwork, and municipal filing directly so you don't have to chase bureaucracy." },
              { step: "03", title: "Window Installation", desc: "Our experienced crew securely anchors your frames, seals openings, and completes cleanup daily." },
              { step: "04", title: "Inspection Walkthrough", desc: "We schedule and attend the final code inspection to verify completion and code conformity." },
            ].map((item, idx) => (
              <div key={idx} className="bg-brand-ice p-6 rounded-2xl border border-brand-cool-gray/30 shadow-card flex flex-col gap-3 relative group hover:border-brand-blue/25 transition-colors">
                <span className="font-mono text-xs font-bold text-brand-blue block">{item.step}</span>
                <h4 className="text-heading-md font-bold text-brand-near-black leading-tight">{item.title}</h4>
                <p className="text-body-sm text-brand-graphite leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Window Projects */}
      <section className="py-20 bg-brand-ice border-b border-brand-cool-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
                Case Studies
              </span>
              <h2 className="text-display-lg font-bold text-brand-near-black">
                Recent Impact Window Installs
              </h2>
            </div>
            <Link href="/projects" className="text-label font-bold text-brand-blue hover:underline flex items-center gap-1">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {windowProjects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-brand-cool-gray/30 bg-brand-white shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-350 origin-bottom z-20" />
                <div className="relative aspect-[16/10] overflow-hidden select-none bg-brand-cool-gray/10">
                  <Image
                    src={project.images[0] || "/images/projects/placeholder-windows.png"}
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
              Window Project FAQs
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
            Protect Your Property Before Storm Season
          </h3>
          <p className="text-body-md text-brand-mid-gray/80 max-w-lg leading-relaxed">
            Schedule an on-site window evaluation. Get professional measurements and budget proposals with zero obligations.
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
          <Link href="/impact-doors" className="font-bold text-brand-graphite hover:text-brand-blue flex items-center gap-1.5 transition-colors">
            Impact Doors <ArrowRight className="w-4 h-4 text-brand-blue" />
          </Link>
          <Link href="/roofing" className="font-bold text-brand-graphite hover:text-brand-blue flex items-center gap-1.5 transition-colors">
            Roofing & Inspections <ArrowRight className="w-4 h-4 text-brand-blue" />
          </Link>
        </div>
      </section>
    </div>
  );
}
