import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Shield, HelpCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { locationsData } from "@/data/locations";
import { projects } from "@/data/projects";
import { siteConfig } from "@/config/siteConfig";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { PhoneNumber } from "@/components/ui/PhoneNumber";

interface LocationPageProps {
  params: {
    location: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(locationsData).map((slug) => ({
    location: slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const loc = locationsData[params.location];
  if (!loc) return {};
  return {
    title: loc.title,
    description: loc.description,
  };
}

export default function LocationDetailPage({ params }: LocationPageProps) {
  const loc = locationsData[params.location];

  if (!loc) {
    notFound();
  }

  // Related projects in this location (case-insensitive search)
  const relatedProjects = projects.filter((p) =>
    p.location.toLowerCase().includes(loc.name.toLowerCase())
  );

  return (
    <div className="relative w-full">
      {/* Back to Service Areas Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <Link
          href="/service-areas"
          className="inline-flex items-center gap-2 text-label font-bold text-brand-graphite hover:text-brand-blue transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4 text-brand-blue" />
          Back to Service Areas
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 StudioBackground border-b border-brand-cool-gray/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center max-w-3xl">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase mb-3">
            {loc.county} Service District
          </span>
          <h1 className="text-display-xl font-bold text-brand-near-black leading-tight mb-6">
            {loc.heroTitle}
          </h1>
          <p className="text-body-lg text-brand-graphite leading-relaxed">
            {loc.description}
          </p>
        </div>
      </section>

      {/* Section 1: Local Highlights & Spec Parameters */}
      <section className="py-20 bg-brand-white border-b border-brand-cool-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
              District Context
            </span>
            <h2 className="text-display-lg font-bold text-brand-near-black leading-tight">
              Hurricane Envelopes for {loc.name} Properties
            </h2>
            <p className="text-body-md text-brand-graphite leading-relaxed">
              {loc.localHighlight}
            </p>
            <div className="flex flex-col gap-4 mt-2">
              {loc.bodyParagraphs.map((para, index) => (
                <p key={index} className="text-body-sm text-brand-graphite leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Side Spec Box */}
          <div className="lg:col-span-5 bg-brand-ice p-6 md:p-8 rounded-2xl border border-brand-cool-gray/30 shadow-card flex flex-col gap-6">
            <div>
              <span className="text-label text-brand-blue font-bold tracking-widest uppercase block mb-3">
                📋 Structural Requirements
              </span>
              <div className="p-4 rounded-xl bg-brand-white border border-brand-cool-gray/30 text-body-sm flex items-start gap-3">
                <Shield className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-near-black block mb-0.5">Wind load rating</strong>
                  <span className="text-brand-graphite font-semibold">{loc.windLoadRequirements}</span>
                </div>
              </div>
            </div>

            <div>
              <span className="text-label text-brand-blue font-bold tracking-widest uppercase block mb-3">
                📍 Neighborhoods Served
              </span>
              <div className="flex flex-wrap gap-2">
                {loc.neighborhoods.map((n) => (
                  <span 
                    key={n} 
                    className="px-3 py-1.5 bg-brand-white border border-brand-cool-gray/50 rounded-lg text-body-sm text-brand-graphite font-medium"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Permit & HOA Requirements (Editorial Block) */}
      <section className="py-20 DarkBackground-Graphite text-brand-white relative overflow-hidden border-b border-brand-white/10">
        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-brand-blue" />
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
            Coordination Standards
          </span>
          <h2 className="text-display-lg font-bold text-brand-white leading-tight">
            In-House Permit & HOA Management
          </h2>
          <p className="text-body-lg text-brand-mid-gray/90 leading-relaxed">
            {loc.localPermittingInfo}
          </p>
          <div className="w-16 h-1 bg-brand-blue rounded mt-2"></div>
          <span className="text-body-sm text-brand-mid-gray italic">
            AAA manages all drawings and inspections directly. No third-party brokers.
          </span>
        </div>
      </section>

      {/* Section 3: Related Local Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-brand-ice border-b border-brand-cool-gray/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-label font-bold text-brand-blue mb-12 uppercase tracking-widest text-center">
              Recent Work in {loc.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((project) => (
                <Link
                  href={`/projects/${project.slug}`}
                  key={project.slug}
                  className="group relative flex flex-col rounded-2xl overflow-hidden border border-brand-cool-gray/30 bg-brand-white shadow-card hover:shadow-card-hover transition-all duration-300 h-full"
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

                  <div className="p-5 flex flex-col gap-2 flex-grow justify-between">
                    <div>
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
                    </div>
                    <div className="mt-4 flex items-center justify-between text-label font-bold text-brand-blue group-hover:text-brand-blue/80 transition-colors">
                      <span>VIEW CASE DETAILS</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 4: Local FAQs */}
      <section className="py-20 bg-brand-white border-b border-brand-cool-gray/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <HelpCircle className="w-8 h-8 text-brand-blue" />
            <h2 className="text-display-lg font-bold text-brand-near-black">
              {loc.name} Project FAQs
            </h2>
          </div>
          <FaqAccordion items={loc.faqs} />
        </div>
      </section>

      {/* Section 5: Estimate CTA */}
      <section className="py-24 DarkBackground-Black text-brand-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-blue" />
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center gap-6">
          <h2 className="text-display-lg font-bold text-brand-white uppercase">
            Secure Your {loc.name} Property Clearly
          </h2>
          <p className="text-body-md text-brand-mid-gray/80 max-w-md leading-relaxed">
            Discuss wind loads, grid styles, or roofing materials with an in-house estimator.
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
    </div>
  );
}
