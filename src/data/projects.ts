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
    role: string;
    sourceUrl?: string;
  };
  featured: boolean;
  verified: boolean;
}

export const projects: Project[] = [
  {
    slug: "residential-windows-miramar",
    title: "Residential Impact Window Upgrade",
    category: ["windows", "residential"],
    location: "South Florida",
    propertyType: "Single Family Home",
    servicesPerformed: ["Impact Window Installation", "Permit Coordination"],
    challenge: "Upgrading outdated single-pane windows to meet modern wind-load and hurricane safety standards.",
    scope: "Complete home installation of heavy-duty impact windows, including permit coordination and HOA approval.",
    outcome: "Successfully installed impact windows providing storm protection, noise reduction, and improved energy efficiency.",
    images: ["/images/projects/placeholder-windows.png"],
    featured: true,
    verified: false,
  },
  {
    slug: "impact-doors-pembroke-pines",
    title: "Custom Entry & Sliding Doors",
    category: ["doors", "residential"],
    location: "South Florida",
    propertyType: "Townhome",
    servicesPerformed: ["Impact Entry Doors", "Sliding Glass Doors"],
    challenge: "Replacing drafty, non-impact doors with high-security, storm-rated door systems.",
    scope: "Custom installation of multi-lock impact entry doors and smooth-glide sliding glass doors.",
    outcome: "Enhanced entryway security and storm readiness with clean, code-compliant installations.",
    images: ["/images/projects/placeholder-doors.png"],
    featured: true,
    verified: false,
  },
  {
    slug: "roofing-miami-gardens",
    title: "Residential Roof Replacement",
    category: ["roofing", "residential"],
    location: "South Florida",
    propertyType: "Single Family Home",
    servicesPerformed: ["Residential Roof Replacement", "Storm-Readiness Upgrade"],
    challenge: "Restoring roof integrity to prevent leaks and prepare the property for severe hurricane weather.",
    scope: "Complete residential roof replacement with secondary water barrier and final safety inspections.",
    outcome: "Completed a clean, durable roof replacement fully coordinated with municipal building inspectors.",
    images: ["/images/projects/placeholder-roofing.png"],
    featured: true,
    verified: false,
  },
  {
    slug: "commercial-storefront-sunrise",
    title: "Commercial Storefront Project",
    category: ["commercial"],
    location: "South Florida",
    propertyType: "Retail Shopping Plaza",
    servicesPerformed: ["Storefront Glazing", "Commercial Impact Doors", "GC Coordination"],
    challenge: "Upgrading storefront glazing to meet commercial code guidelines without disrupting active tenants.",
    scope: "Installation of heavy-duty commercial storefront systems, impact entry doors, and closeout compliance.",
    outcome: "Delivered a fully compliant commercial glazing solution with zero client business downtime.",
    images: ["/images/projects/placeholder-commercial.png"],
    featured: true,
    verified: false,
  },
];
