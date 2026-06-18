import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShieldAlert, DoorOpen, Thermometer, Volume2, EyeOff, LayoutGrid, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { projects } from "@/data/projects";
import FaqAccordion from "@/components/ui/FaqAccordion";
import InteractiveDoor from "@/components/ui/InteractiveDoor";
import { PhoneNumber } from "@/components/ui/PhoneNumber";

export const metadata: Metadata = {
  title: "Impact Doors Installation & Entryway Upgrades | South Florida",
  description: "AAA installs premium impact entry doors, sliding glass patios, and French doors across South Florida. Serving Naples, Davie, Pembroke Pines, Sunrise, and Miramar.",
};

export default function ImpactDoorsPage() {
  const benefits = [
    {
      icon: ShieldAlert,
      title: "Intrusion Security",
      desc: "Laminated glass coupled with heavy-duty structural frames and multi-point locksets make entry points virtually impenetrable.",
    },
    {
      icon: DoorOpen,
      title: "Wind Pressure Resistance",
      desc: "Engineered to withstand the extreme negative and positive pressures of category 5 South Florida hurricanes.",
    },
    {
      icon: Thermometer,
      title: "Thermal Efficiency",
      desc: "Sealed weatherstripping and energy-efficient glazing panels block outdoor humidity and heat from seeping into your home.",
    },
    {
      icon: Volume2,
      title: "Sound Dampening",
      desc: "Significantly reduces transmission of traffic, neighborhood, and weather noise for a quiet interior atmosphere.",
    },
    {
      icon: EyeOff,
      title: "UV Blockage",
      desc: "Deflects up to 99% of sun fading rays, protecting entryway flooring, art, and console furniture from solar damage.",
    },
    {
      icon: LayoutGrid,
      title: "Aesthetic Upgrades",
      desc: "Instantly elevates your entryway from basic builder grade to a premium statement, boosting overall curb appeal.",
    },
  ];

  const doorTypes = [
    { name: "Impact Entry Doors", desc: "Available in single and double configurations. Heavy-duty fiberglass or aluminum with custom glass insert panels." },
    { name: "Sliding Glass Doors", desc: "Heavy-duty rollers, bypass tracks, and structural panels. Creates smooth indoor-outdoor transitions for patios." },
    { name: "French Doors", desc: "Classic double-swing style. Provides traditional styling with updated multi-point latching security and impact safety." },
    { name: "Patio Systems", desc: "Configured for side entries and balconies. Tailored weatherstripping anchors secure high wind exposures." },
    { name: "Storefront Doors", desc: "Commercial-grade heavy-wall profiles designed for high-traffic retail plaza entries and professional lobbies." },
  ];

  const doorProjects = projects.filter((p) => p.category.includes("doors")).slice(0, 3);

  const faqItems = [
    {
      question: "What hardware and locking mechanisms do you use for impact doors?",
      answer: "We utilize multi-point locking systems on our swing doors. This hooks or latches the door into the frame at three distinct points (top, middle, and bottom) to distribute wind loads and resist forced entry.",
    },
    {
      question: "Can I customize the glass styles on my entry door?*",
      answer: "Yes. You can select from clear glass, frosted privacy glass, decorative glass inserts, and low-E coatings. *[CLIENT VERIFY - confirm manufacturer availability list]",
    },
    {
      question: "Are sliding glass impact doors difficult to slide?*",
      answer: "No. Although impact glass is heavy, our doors are built with premium heavy-duty tandem brass or stainless steel rollers that glide smoothly along structural tracks. *[CLIENT VERIFY]",
    },
    {
      question: "How long does a door installation take?*",
      answer: "Typically, replacing a single standard entryway door takes 1 day. A multi-panel sliding glass door system takes 1 to 2 days including framing and trim work. *[CLIENT VERIFY]",
    },
    {
      question: "Do doors require municipal inspections?",
      answer: "Yes, in South Florida all impact door replacements require building permits and final physical code inspections. AAA coordinates the entire filing and inspection process.",
    },
  ];

  return (
    <div className="relative w-full">
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 StudioBackground border-b border-brand-cool-gray/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start max-w-3xl">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase mb-3 block">
              Services • Entryway & Patio Systems
            </span>
            <h1 className="font-display text-display-xl font-extrabold text-brand-near-black leading-[1.0] mb-6 uppercase tracking-[-0.035em]">
              Impact Doors That Secure Every Entrance
            </h1>
            <p className="text-body-lg text-brand-graphite leading-relaxed mb-8">
              Heavy-duty styling. Certified hurricane pressure ratings. Direct, responsive installation that leaves your home clean and protected.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/get-estimate?service=doors"
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta hover:shadow-lg transition-all duration-200"
              >
                Get a Free Door Estimate
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
                src="/images/services/doors.png"
                alt="AAA Impact Doors showcase"
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
              Secure, High-Performance Entry Points
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

      {/* 2. Interactive Door Showcase (3D CSS Door Reveal) */}
      <section className="py-20 bg-brand-ice border-b border-brand-cool-gray/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
              Interactive Showcase
            </span>
            <h2 className="text-display-lg font-bold text-brand-near-black leading-tight">
              Experience the Action of a Premium Impact Entry Door
            </h2>
            <p className="text-body-md text-brand-graphite leading-relaxed">
              Click or tap the door to see how our impact doors open and secure. Engineered with a multi-point locking system, heavy-wall structural profiles, and insulated laminated impact glass, AAA doors maintain absolute seals against category 5 wind loads.
            </p>
            <div className="mt-2">
              <Link
                href="/get-estimate?service=doors"
                className="inline-flex items-center justify-center h-12 px-8 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta transition-colors"
              >
                Configure Your Door Now
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <InteractiveDoor />
          </div>
        </div>
      </section>

      {/* 3. Door options */}
      <section className="py-20 bg-brand-white border-b border-brand-cool-gray/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
              Product Catalog
            </span>
            <h2 className="text-display-lg font-bold text-brand-near-black">
              Door Types & System Layouts
            </h2>
            <p className="text-body-md text-brand-graphite leading-relaxed">
              Choose entry and sliding systems optimized for South Florida wind speeds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doorTypes.map((type, idx) => (
              <div
                key={idx}
                className="bg-brand-ice p-6 rounded-2xl border border-brand-cool-gray/30 shadow-card flex flex-col justify-between hover:border-brand-blue/35 transition-colors"
              >
                <div>
                  <h4 className="text-heading-md font-bold text-brand-near-black mb-2 leading-tight">
                    {type.name}
                  </h4>
                  <p className="text-body-sm text-brand-graphite leading-relaxed">
                    {type.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-cool-gray/20 text-[10px] font-sans font-bold text-brand-blue uppercase tracking-widest">
                  Full windload compliance
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Complete Envelope Safety Editorial */}
      <section className="py-20 DarkBackground-Graphite text-brand-white relative overflow-hidden border-b border-brand-white/10">
        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-brand-blue" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
              Complete Envelope Safety
            </span>
            <h2 className="text-display-lg font-bold text-brand-white leading-tight">
              More Than a Window Replacement — Complete Your Home&apos;s Protection
            </h2>
            <p className="text-body-md text-brand-mid-gray/90 leading-relaxed">
              Upgrading windows while leaving old builder-grade doors creates a weak link in your home&apos;s storm envelope. A failed door under wind pressure can lead to complete roof pressurization and structural damage.
            </p>
            <p className="text-body-md text-brand-mid-gray/90 leading-relaxed">
              By coordinating windows, entry doors, and roofing under a single point of accountability with AAA, you ensure uniform structural security, matching trim finishes, and streamlined municipal inspections.
            </p>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-card border border-brand-white/10 bg-brand-graphite">
              <Image
                src="/images/services/doors.png"
                alt="Coordinated door replacement on home"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process (Abbreviated 4-step) */}
      <section className="py-20 bg-brand-white border-b border-brand-cool-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">Methodology</span>
            <h3 className="text-display-lg font-bold text-brand-near-black">
              Our 4-Step Door Project Process
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Clearance Review", desc: "We measure threshold height, side clearances, and present sliding or swing configurations." },
              { step: "02", title: "Permit Submissions", desc: "AAA handles engineering layout, permit drafting, and municipal approvals." },
              { step: "03", title: "System Installation", desc: "Crews securely anchor heavy door tracks, hang panels, adjust locks, and seal perimeter seams." },
              { step: "04", title: "Final Walkthrough", desc: "We clean tracks, run smooth glider tests, and accompany the municipal code inspector." },
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

      {/* 6. Featured Door Projects */}
      <section className="py-20 bg-brand-ice border-b border-brand-cool-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
                Case Studies
              </span>
              <h2 className="text-display-lg font-bold text-brand-near-black">
                Recent Impact Door Installs
              </h2>
            </div>
            <Link href="/projects" className="text-label font-bold text-brand-blue hover:underline flex items-center gap-1">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doorProjects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-brand-cool-gray/30 bg-brand-white shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-350 origin-bottom z-20" />
                <div className="relative aspect-[16/10] overflow-hidden select-none bg-brand-cool-gray/10">
                  <Image
                    src={project.images[0] || "/images/projects/placeholder-doors.png"}
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

      {/* 7. FAQs */}
      <section className="py-20 bg-brand-white border-b border-brand-cool-gray/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
              Common Questions
            </span>
            <h2 className="text-display-lg font-bold text-brand-near-black">
              Door Project FAQs
            </h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* 8. Final CTA Panel */}
      <section className="py-24 DarkBackground-Black text-brand-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-blue" />
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center gap-6">
          <h3 className="text-display-lg font-bold text-brand-white uppercase">
            Secure Your Property&apos;s Openings
          </h3>
          <p className="text-body-md text-brand-mid-gray/80 max-w-lg leading-relaxed">
            Schedule an on-site door configuration assessment. Get custom sizing recommendations and budget proposals with zero obligations.
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

      {/* 9. Related Services Cross Links */}
      <section className="py-12 bg-brand-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center gap-8 items-center text-body-sm">
          <span className="text-label font-bold text-brand-mid-gray uppercase tracking-widest">
            Other Services:
          </span>
          <Link href="/impact-windows" className="font-bold text-brand-graphite hover:text-brand-blue flex items-center gap-1.5 transition-colors">
            Impact Windows <ArrowRight className="w-4 h-4 text-brand-blue" />
          </Link>
          <Link href="/roofing" className="font-bold text-brand-graphite hover:text-brand-blue flex items-center gap-1.5 transition-colors">
            Roofing & Inspections <ArrowRight className="w-4 h-4 text-brand-blue" />
          </Link>
        </div>
      </section>
    </div>
  );
}
