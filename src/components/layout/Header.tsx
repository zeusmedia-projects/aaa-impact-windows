"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/siteConfig";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { PhoneNumber } from "../ui/PhoneNumber";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Track scroll depth for sticky transition and dark background detection
  useEffect(() => {
    const handleScroll = () => {
      // 1. Check sticky state
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // 2. Check if header overlaps any dark background sections
      const darkSections = document.querySelectorAll(
        "section.bg-brand-near-black, div.bg-brand-near-black, .DarkBackground-Graphite, .DarkBackground-Black"
      );
      
      let overDark = false;
      const headerHeight = 72; // Approximate height of the header

      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // The header is at top: 0. So it overlaps the section if the section's top is <= 0
        // and the section's bottom is >= headerHeight.
        if (rect.top <= 0 && rect.bottom >= headerHeight) {
          overDark = true;
        } else if (rect.top > 0 && rect.top < headerHeight) {
          // If the section is entering the header area
          overDark = true;
        }
      });

      setIsOverDark(overDark);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close services dropdown on clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const isActive = (path: string) => pathname === path;
  
  // Distraction-free check for estimate flow and campaign landing pages
  const isPpcCampaign = pathname?.startsWith("/lp/") ?? false;
  const isGetEstimate = pathname === "/get-estimate";
  const isDistractionFree = isPpcCampaign || isGetEstimate;

  // Header should style as dark if it is not sticky on the homepage (transparent hero overlay) OR if it is scrolled over a dark section
  const isHeaderDark = (pathname === "/" ? !isSticky : false) || isOverDark;

  // Header style classes
  const headerClasses = (isSticky || pathname !== "/")
    ? isOverDark
      ? "fixed top-0 left-0 right-0 bg-brand-near-black/96 backdrop-blur-md border-b border-brand-white/10 shadow-card py-3 text-brand-white"
      : "fixed top-0 left-0 right-0 bg-brand-white/96 backdrop-blur-md border-b border-brand-cool-gray/30 shadow-card py-3 text-brand-near-black"
    : "absolute top-0 left-0 right-0 bg-transparent py-5 text-brand-white";

  const navLinkClasses = (path: string) => {
    const activeClass = isActive(path)
      ? "text-brand-blue font-semibold"
      : isHeaderDark
      ? "text-brand-white/85 hover:text-brand-blue"
      : "text-brand-near-black/85 hover:text-brand-blue";
    return `text-body-sm font-sans font-medium transition-colors duration-200 ${activeClass}`;
  };

  return (
    <>
      <header className={`z-40 transition-all duration-250 ease-in-out ${headerClasses}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* 1. Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group">
                <div className="relative h-12 w-40 transition-transform duration-250 group-hover:scale-102">
                  <Image
                    src={isHeaderDark ? "/logo.footer.long.png" : "/logo.long.png"}
                    alt="AAA Impact Windows & Doors Logo"
                    fill
                    sizes="160px"
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* 2. Desktop Navigation (Hidden in distraction-free mode) */}
            {!isDistractionFree && (
              <nav className="hidden lg:flex items-center gap-7">
                <Link href="/residential" className={navLinkClasses("/residential")}>
                  Residential
                </Link>
                <Link href="/commercial" className={navLinkClasses("/commercial")}>
                  Commercial
                </Link>

                {/* Services Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`flex items-center gap-1 ${
                      isHeaderDark ? "text-brand-white/85 hover:text-brand-blue" : "text-brand-near-black/85 hover:text-brand-blue"
                    } text-body-sm font-sans font-medium transition-colors duration-200 focus:outline-none`}
                  >
                    Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isServicesOpen && (
                    <div className="absolute left-0 mt-3.5 w-52 rounded-lg bg-brand-white shadow-card-hover border border-brand-cool-gray/30 py-2 z-50 transform origin-top-left animate-fade-in">
                      <Link
                        href="/impact-windows"
                        onClick={() => setIsServicesOpen(false)}
                        className={`block px-4 py-2.5 text-body-sm text-brand-near-black hover:bg-brand-ice hover:text-brand-blue transition-colors duration-150 ${
                          isActive("/impact-windows") ? "text-brand-blue font-semibold bg-brand-ice" : ""
                        }`}
                      >
                        Impact Windows
                      </Link>
                      <Link
                        href="/impact-doors"
                        onClick={() => setIsServicesOpen(false)}
                        className={`block px-4 py-2.5 text-body-sm text-brand-near-black hover:bg-brand-ice hover:text-brand-blue transition-colors duration-150 ${
                          isActive("/impact-doors") ? "text-brand-blue font-semibold bg-brand-ice" : ""
                        }`}
                      >
                        Impact Doors
                      </Link>
                      <Link
                        href="/roofing"
                        onClick={() => setIsServicesOpen(false)}
                        className={`block px-4 py-2.5 text-body-sm text-brand-near-black hover:bg-brand-ice hover:text-brand-blue transition-colors duration-150 ${
                          isActive("/roofing") ? "text-brand-blue font-semibold bg-brand-ice" : ""
                        }`}
                      >
                        Roofing
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/projects" className={navLinkClasses("/projects")}>
                  Projects
                </Link>
                <Link href="/about" className={navLinkClasses("/about")}>
                  About
                </Link>
                <Link href="/service-areas" className={navLinkClasses("/service-areas")}>
                  Service Areas
                </Link>
              </nav>
            )}

            {/* 3. Action Group */}
            <div className="flex items-center gap-4">
              {/* Phone Target (Always visible) */}
              <div className="flex items-center gap-2 text-body-sm font-semibold font-sans">
                <Phone className={`w-4 h-4 ${isHeaderDark ? "text-brand-white" : "text-brand-blue"}`} />
                <PhoneNumber className={isHeaderDark ? "text-brand-white" : "text-brand-near-black"} />
              </div>

              {/* Estimate Button (Hidden in distraction-free mode) */}
              {!isDistractionFree && (
                <Link
                  href="/get-estimate"
                  className="hidden md:inline-flex items-center justify-center h-10 px-5 text-label font-bold text-brand-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg shadow-cta hover:shadow-lg transition-all duration-200"
                >
                  Get a Free Estimate
                </Link>
              )}

              {/* Hamburger Button (Mobile, Hidden in distraction-free mode) */}
              {!isDistractionFree && (
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden p-2 rounded-lg hover:bg-brand-cool-gray/25 transition-colors focus:outline-none"
                  aria-label="Open Navigation Menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent page jumping on sticky transition (only for inner pages that aren't absolute-top, home page hero is absolute top) */}
      {(isSticky || pathname !== "/") && <div className="h-[72px]" />}

      {/* Mobile full-screen menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
