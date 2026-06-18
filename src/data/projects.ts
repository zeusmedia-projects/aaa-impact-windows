export type ProjectCategory = "windows" | "doors" | "roofing" | "commercial" | "residential";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory[];
  location: string;
  propertyType: string;
  servicesPerformed: string[];
  challenge?: string;
  scope: string;
  outcome?: string;
  images: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string; // e.g. "Homeowner" | "General Contractor" | "Commercial Client"
    sourceUrl?: string;
  };
  featured: boolean;
  verified: boolean; // Flag to enforce data accuracy (all development entries start as false)
}

export const projects: Project[] = [
  {
    slug: "residential-windows-miramar",
    title: "Miramar Residential Glazing Upgrade",
    category: ["windows", "residential"],
    location: "Miramar, FL",
    propertyType: "Single Family Home",
    servicesPerformed: ["Impact Window Installation", "Permit Coordination"],
    challenge: "[PLACEHOLDER - Client to supply challenge description for Miramar residential window upgrade]",
    scope: "[PLACEHOLDER - Client to supply scope of work (e.g. number of windows, styles installed)]",
    outcome: "[PLACEHOLDER - Client to supply outcome (e.g. hurricane readiness, energy savings outcome)]",
    images: ["/images/projects/placeholder-windows.png"], // [CLIENT VERIFY] Client to supply project photo
    testimonial: {
      quote: "[PLACEHOLDER - Client to supply customer testimonial text]",
      author: "Resident Owner",
      role: "Homeowner",
    },
    featured: true,
    verified: false,
  },
  {
    slug: "impact-doors-pembroke-pines",
    title: "Pembroke Pines Custom Entry & Sliding Doors",
    category: ["doors", "residential"],
    location: "Pembroke Pines, FL",
    propertyType: "Townhome",
    servicesPerformed: ["Impact Entry Doors", "Sliding Glass Doors"],
    challenge: "[PLACEHOLDER - Client to supply challenge description for Pembroke Pines custom doors]",
    scope: "[PLACEHOLDER - Client to supply scope details for doors upgrade]",
    outcome: "[PLACEHOLDER - Client to supply door performance outcome details]",
    images: ["/images/projects/placeholder-doors.png"], // [CLIENT VERIFY] Client to supply project photo
    testimonial: {
      quote: "[PLACEHOLDER - Client to supply customer testimonial text]",
      author: "Property Owner",
      role: "Homeowner",
    },
    featured: true,
    verified: false,
  },
  {
    slug: "roofing-miami-gardens",
    title: "Miami Gardens Residential Roof Replacement",
    category: ["roofing", "residential"],
    location: "Miami Gardens, FL",
    propertyType: "Single Family Home",
    servicesPerformed: ["Residential Roof Replacement", "Storm-Readiness Upgrade"],
    challenge: "[PLACEHOLDER - Client to supply challenge description for Miami Gardens roofing replacement]",
    scope: "[PLACEHOLDER - Client to supply roofing materials, square footage, and permit scope]",
    outcome: "[PLACEHOLDER - Client to supply final inspection and safety outcome details]",
    images: ["/images/projects/placeholder-roofing.png"], // [CLIENT VERIFY] Client to supply project photo
    featured: true,
    verified: false,
  },
  {
    slug: "commercial-storefront-sunrise",
    title: "Sunrise Retail Plaza Glazing Restoration",
    category: ["commercial"],
    location: "Sunrise, FL",
    propertyType: "Retail Shopping Plaza",
    servicesPerformed: ["Storefront Glazing", "Commercial Impact Doors", "GC Coordination"],
    challenge: "[PLACEHOLDER - Client to supply GC storefront glazing challenges (e.g. business continuity, code compliance)]",
    scope: "[PLACEHOLDER - Client to supply commercial storefront square footage and window counts]",
    outcome: "[PLACEHOLDER - Client to supply commercial outcome details (wind load certifications)]",
    images: ["/images/projects/placeholder-commercial.png"], // [CLIENT VERIFY] Client to supply project photo
    testimonial: {
      quote: "[PLACEHOLDER - Client to supply General Contractor quote regarding bid accuracy and timeline execution]",
      author: "Lead Project Manager",
      role: "General Contractor",
    },
    featured: true,
    verified: false,
  },
];
