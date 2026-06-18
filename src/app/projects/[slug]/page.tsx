import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Calendar, Wrench, FileCheck, ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { siteConfig } from "@/config/siteConfig";
import { PhoneNumber } from "@/components/ui/PhoneNumber";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | AAA Impact Projects`,
    description: project.scope,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Related projects (same category, excluding current project)
  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug && p.category.some((c) => project.category.includes(c)))
    .slice(0, 3);

  // Map category to fallback placeholders
  const getFallbackImage = (cat: string) => {
    if (cat === "doors") return "/images/services/doors.png";
    if (cat === "roofing") return "/images/services/roofing.png";
    if (cat === "commercial") return "/images/services/commercial.png";
    return "/images/services/windows.png";
  };

  return (
    <div className="relative w-full">
      {/* Navigation Breadcrumb Back link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-label font-bold text-brand-graphite hover:text-brand-blue transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4 text-brand-blue" />
          Back to All Projects
        </Link>
      </div>

      {/* Project Layout Split */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Image & Details */}
          <div className="lg:col-span-7 flex flex-col gap-6 animate-fade-in">
            {/* Main Image Wrapper */}
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-card border border-brand-cool-gray/30 bg-brand-cool-gray/20">
              <Image
                src={project.images[0] || getFallbackImage(project.category[0])}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Case Study Details */}
            <div className="bg-brand-white p-6 md:p-8 rounded-2xl border border-brand-cool-gray/30 shadow-card space-y-6">
              <div>
                <h3 className="text-heading-md font-bold mb-3 border-b border-brand-cool-gray/20 pb-2 text-brand-near-black">
                  The Challenge
                </h3>
                <p className="text-body-sm text-brand-graphite leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-heading-md font-bold mb-3 border-b border-brand-cool-gray/20 pb-2 text-brand-near-black">
                  What We Did (Scope of Work)
                </h3>
                <p className="text-body-sm text-brand-graphite leading-relaxed">
                  {project.scope}
                </p>
              </div>

              {project.outcome && (
                <div>
                  <h3 className="text-heading-md font-bold mb-3 border-b border-brand-cool-gray/20 pb-2 text-brand-near-black">
                    The Outcome
                  </h3>
                  <p className="text-body-sm text-brand-graphite leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Spec Panel & Testimonial */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Spec Card */}
            <div className="bg-brand-white p-6 md:p-8 rounded-2xl border border-brand-cool-gray/30 shadow-card">
              <span className="text-label text-brand-blue font-bold tracking-widest uppercase block mb-2">
                Project Specifications
              </span>
              <h1 className="text-heading-lg font-bold text-brand-near-black mb-6 leading-tight">
                {project.title}
              </h1>

              <div className="space-y-4 text-body-sm font-sans">
                <div className="flex items-center gap-3 border-b border-brand-cool-gray/20 pb-3">
                  <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-mid-gray block leading-none mb-1">Location</span>
                    <span className="font-semibold text-brand-near-black">{project.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-b border-brand-cool-gray/20 pb-3">
                  <Calendar className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-mid-gray block leading-none mb-1">Property Type</span>
                    <span className="font-semibold text-brand-near-black">{project.propertyType}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-b border-brand-cool-gray/20 pb-3">
                  <Wrench className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-mid-gray block leading-none mb-1">Services Performed</span>
                    <span className="font-semibold text-brand-near-black leading-tight block mt-0.5">{project.servicesPerformed.join(", ")}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-mid-gray block leading-none mb-1">Status</span>
                    <span className="font-bold text-brand-blue uppercase tracking-widest text-[10px] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
                      {project.verified ? "Verified Accurate" : "Draft Placeholder*"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial if exists */}
            {project.testimonial && (
              <div className="DarkBackground-Graphite text-brand-white p-6 md:p-8 rounded-2xl border border-brand-white/5 relative overflow-hidden shadow-card">
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-brand-blue" />
                <span className="text-[9px] uppercase tracking-widest text-brand-blue font-bold block mb-4">
                  Client Testimonial
                </span>
                <p className="text-body-sm text-brand-mid-gray/90 italic leading-relaxed mb-4">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-brand-white/10 pt-3 flex justify-between items-center text-[10px] font-bold">
                  <span className="text-brand-white">{project.testimonial.author}</span>
                  <span className="text-brand-mid-gray uppercase tracking-wider">{project.testimonial.role}</span>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <Link
                href="/get-estimate"
                className="w-full inline-flex items-center justify-center h-12 px-8 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta hover:shadow-lg transition-all duration-200"
              >
                Start Your Own Project
              </Link>
              <a
                href={`tel:${siteConfig.phoneRawDefault}`}
                className="w-full flex items-center justify-center h-12 border border-brand-cool-gray hover:bg-brand-white rounded-lg text-label font-bold text-brand-graphite transition-colors"
              >
                Or call: <PhoneNumber />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 border-t border-brand-cool-gray/20 bg-brand-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-label font-bold text-brand-blue mb-8 uppercase tracking-widest">
              Related Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((proj) => (
                <Link
                  href={`/projects/${proj.slug}`}
                  key={proj.slug}
                  className="group relative flex flex-col rounded-2xl overflow-hidden border border-brand-cool-gray/30 bg-brand-white shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-350 origin-bottom z-20" />
                  
                  <div className="relative aspect-[16/10] overflow-hidden select-none bg-brand-cool-gray/10">
                    <Image
                      src={proj.images[0] || getFallbackImage(proj.category[0])}
                      alt={proj.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-102"
                    />
                    
                    <div className="absolute top-3 left-3 bg-brand-blue/95 text-brand-white text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-full uppercase">
                      {proj.category[0]}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col gap-2">
                    <div className="flex justify-between items-center text-[10px] font-mono font-semibold text-brand-mid-gray/70 uppercase">
                      <span>{proj.location}</span>
                      <span>{proj.propertyType}</span>
                    </div>
                    <h4 className="text-heading-md font-bold text-brand-near-black group-hover:text-brand-blue transition-colors duration-200 leading-tight">
                      {proj.title}
                    </h4>
                    <p className="text-body-sm text-brand-graphite/80 leading-normal line-clamp-2 mt-1">
                      {proj.scope}
                    </p>
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
    </div>
  );
}
