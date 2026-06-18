"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { Phone, Mail, MapPin } from "lucide-react";
import { PhoneNumber } from "../ui/PhoneNumber";

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-400 pt-16 pb-24 md:pb-12 border-t border-zinc-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Brand details & Primary Action */}
        <div className="flex flex-col gap-5">
          <Link href="/" className="flex items-center group">
            <div className="relative h-12 w-40 transition-transform duration-250 group-hover:scale-102">
              <Image
                src="/logo.footer.long.png"
                alt="AAA Impact Windows & Doors Footer Logo"
                fill
                sizes="160px"
                className="object-contain object-left"
              />
            </div>
          </Link>
          <p className="text-body-sm text-zinc-400 leading-relaxed">
            Impact Protection, Engineered for South Florida. We install premium impact windows, doors, and roofing systems backed by a commitment to post-installation service.
          </p>
          <div className="flex flex-col gap-3 text-body-sm">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Phone className="w-4 h-4 text-brand-blue" />
              <PhoneNumber />
            </div>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white transition-colors duration-200">
              <Mail className="w-4 h-4 text-brand-blue" />
              {siteConfig.email}
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">
                {siteConfig.address.street}<br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </span>
            </div>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[15px] text-brand-blue font-bold tracking-wider uppercase">Services</h4>
          <ul className="flex flex-col gap-2.5 text-body-sm">
            <li>
              <Link href="/impact-windows" className="hover:text-brand-white transition-colors duration-200">
                Impact Windows
              </Link>
            </li>
            <li>
              <Link href="/impact-doors" className="hover:text-brand-white transition-colors duration-200">
                Impact Doors
              </Link>
            </li>
            <li>
              <Link href="/roofing" className="hover:text-brand-white transition-colors duration-200">
                Roofing
              </Link>
            </li>
            <li>
              <Link href="/residential" className="hover:text-brand-white transition-colors duration-200">
                Residential Portal
              </Link>
            </li>
            <li>
              <Link href="/commercial" className="hover:text-brand-white transition-colors duration-200">
                Commercial Portal
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[15px] text-brand-blue font-bold tracking-wider uppercase">Company</h4>
          <ul className="flex flex-col gap-2.5 text-body-sm">
            <li>
              <Link href="/about" className="hover:text-brand-white transition-colors duration-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-brand-white transition-colors duration-200">
                Projects Gallery
              </Link>
            </li>
            <li>
              <Link href="/service-areas" className="hover:text-brand-white transition-colors duration-200">
                Service Areas
              </Link>
            </li>
            <li>
              <Link href="/get-estimate" className="hover:text-brand-white transition-colors duration-200">
                Get an Estimate
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-brand-white transition-colors duration-200">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-brand-white transition-colors duration-200">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Service Areas */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[15px] text-brand-blue font-bold tracking-wider uppercase">Service Areas</h4>
          <ul className="flex flex-col gap-2.5 text-body-sm">
            {siteConfig.serviceAreas.residential.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="hover:text-brand-white transition-colors duration-200"
                >
                  {area.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/service-areas" className="text-brand-blue hover:text-brand-blue/80 font-semibold transition-colors duration-200">
                All Service Areas →
              </Link>
            </li>
          </ul>
          
          <Link
            href="/get-estimate"
            className="mt-2 inline-flex items-center justify-center h-10 px-5 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta transition-all duration-200 text-center"
          >
            Get a Free Estimate
          </Link>
        </div>

      </div>

      {/* Bottom Legal bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-body-sm text-zinc-500">
        <span>
          © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved. Licensed GC: {siteConfig.licenses.generalContractor} | Roofing: {siteConfig.licenses.roofing}.
        </span>
        <span className="text-center md:text-right">
          Full permit coordination and site cleanup included on all projects.
        </span>
      </div>
    </footer>
  );
}
