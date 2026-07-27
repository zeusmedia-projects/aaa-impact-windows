"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Phone, FileText, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { PhoneNumber } from "../ui/PhoneNumber";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Focus trap and keyboard handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      // Set focus to the close button when opened
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Uniform, premium, responsive display text size classes (2xl in Barlow Condensed is compact and readable)
  const linkClasses = "font-display text-2xl font-bold uppercase tracking-wider hover:text-brand-blue transition-colors py-3 border-b border-brand-white/5 flex items-center justify-between w-full text-left";

  return (
    <div
      className="fixed inset-0 z-50 bg-brand-near-black/95 backdrop-blur-md flex flex-col lg:hidden animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      ref={menuRef}
    >
      {/* Top Header Bar */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-brand-white/10">
        <div className="flex items-center">
          <div className="relative h-10 w-32">
            <Image
              src="/logo.footer.long.png"
              alt="AAA Impact Logo"
              fill
              sizes="128px"
              className="object-contain object-left"
            />
          </div>
        </div>
        
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="p-2 rounded-lg text-brand-white hover:bg-brand-white/10 focus:outline-none focus:ring-2 focus:ring-brand-blue"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow overflow-y-auto px-8 py-10 flex flex-col gap-6 text-brand-white">
        <Link
          href="/residential"
          onClick={onClose}
          className={linkClasses}
        >
          <span>Residential</span>
        </Link>
        <Link
          href="/commercial"
          onClick={onClose}
          className={linkClasses}
        >
          <span>Commercial</span>
        </Link>
        
        {/* Services Dropdown Segment */}
        <div className="flex flex-col">
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className={linkClasses}
          >
            <span>Services</span>
            <ChevronDown className={`w-5 h-5 text-brand-blue transition-transform duration-250 ${isServicesOpen ? "rotate-180" : ""}`} />
          </button>
          
          {/* Collapse Container */}
          <div className={`pl-4 flex flex-col gap-4 overflow-hidden transition-all duration-300 ease-in-out ${isServicesOpen ? "max-h-48 mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
            <Link
              href="/impact-windows"
              onClick={onClose}
              className="font-montserrat text-lg font-semibold hover:text-brand-blue transition-colors py-1.5 border-l-2 border-brand-blue/30 pl-3 text-brand-mid-gray/90 hover:text-brand-blue"
            >
              Impact Windows
            </Link>
            <Link
              href="/impact-doors"
              onClick={onClose}
              className="font-montserrat text-lg font-semibold hover:text-brand-blue transition-colors py-1.5 border-l-2 border-brand-blue/30 pl-3 text-brand-mid-gray/90 hover:text-brand-blue"
            >
              Impact Doors
            </Link>
            <Link
              href="/roofing"
              onClick={onClose}
              className="font-montserrat text-lg font-semibold hover:text-brand-blue transition-colors py-1.5 border-l-2 border-brand-blue/30 pl-3 text-brand-mid-gray/90 hover:text-brand-blue"
            >
              Roofing
            </Link>
          </div>
        </div>

        <Link
          href="/projects"
          onClick={onClose}
          className={linkClasses}
        >
          <span>Projects</span>
        </Link>
        <Link
          href="/about"
          onClick={onClose}
          className={linkClasses}
        >
          <span>About</span>
        </Link>
        <Link
          href="/service-areas"
          onClick={onClose}
          className={linkClasses}
        >
          <span>Service Areas</span>
        </Link>
      </nav>

      {/* Action Footer */}
      <div className="bg-brand-graphite border-t border-brand-white/10 p-6 flex flex-col gap-4">
        {/* Large click-to-call target */}
        <div className="flex items-center justify-center gap-3 py-3 border border-brand-white/10 rounded-lg bg-brand-near-black/50">
          <Phone className="w-5 h-5 text-brand-blue" />
          <PhoneNumber className="text-body-lg font-semibold text-brand-white" />
        </div>

        <Link
          href="/get-estimate"
          onClick={onClose}
          className="w-full flex items-center justify-center gap-2.5 py-4 bg-brand-blue hover:bg-brand-blue/90 text-brand-white rounded-lg text-body-md font-bold shadow-cta active:scale-98 transition-all duration-150"
        >
          <FileText className="w-5 h-5" />
          Get a Free Estimate
        </Link>
      </div>
    </div>
  );
}
