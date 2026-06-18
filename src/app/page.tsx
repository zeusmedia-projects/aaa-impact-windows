import React from "react";
import HeroSequence from "@/components/hero/HeroSequence";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicePortalGrid from "@/components/sections/ServicePortalGrid";
import AAADifference from "@/components/sections/AAADifference";
import ScrollingReviews from "@/components/sections/ScrollingReviews";
import EstimateSection from "@/components/sections/EstimateSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CommercialSection from "@/components/sections/CommercialSection";
import ServiceAreaMap from "@/components/sections/ServiceAreaMap";
import PropertySelector from "@/components/sections/PropertySelector";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* 1. Signature Hero - Background Video & Static Copy */}
      <HeroSequence />

      {/* 2. Trust badges strip */}
      <TrustStrip />

      {/* 3. Core Service Portals */}
      <ServicePortalGrid />

      {/* 4. Process & Differentiator timeline */}
      <AAADifference />

      {/* 5. Scrolling Testimonials / Reviews */}
      <ScrollingReviews />

      {/* 6. Direct Estimate flow section */}
      <EstimateSection />

      {/* 7. Case studies & Comparison slider */}
      <FeaturedProjects />

      {/* 8. Commercial GC partnerships & Blueprint reveal */}
      <CommercialSection />

      {/* 9. South Florida service areas Google Maps locator */}
      <ServiceAreaMap />

      {/* 10. Interactive Property selector */}
      <PropertySelector />
    </div>
  );
}
