export interface LocationData {
  slug: string;
  name: string;
  county: string;
  title: string;
  description: string;
  heroTitle: string;
  localHighlight: string;
  localPermittingInfo: string;
  bodyParagraphs: string[];
  neighborhoods: string[];
  windLoadRequirements: string;
  faqs: { question: string; answer: string }[];
}

export const locationsData: Record<string, LocationData> = {
  naples: {
    slug: "naples",
    name: "Naples",
    county: "Collier County",
    title: "Impact Windows, Doors & Roofing in Naples, FL | AAA",
    description: "Premium wind-load certified impact windows, doors, and roofing replacements in Naples and Falling Waters. Managed by AAA with full Collier County permits.",
    heroTitle: "Protecting Naples Homes with Serious Storm Envelopes",
    localHighlight: "Naples properties face severe Gulf of Mexico wind-pressures. From single-family homes in Falling Waters to luxury waterfront residences, our installations meet and exceed local Collier County wind-load building requirements.",
    localPermittingInfo: "AAA coordinates all permit filings directly with the Collier County building department and Naples city offices, including engineering drawings, product approvals, and scheduling inspector walks.",
    bodyParagraphs: [
      "Securing a home in Naples requires a builder who understands coastal exposure. High-velocity winds from Gulf storms put massive negative pressure on entryway seals and window frames. A weak threshold or single unanchored frame can jeopardize the home's structural integrity.",
      "AAA coordinates structural installations across Collier County. Our crews anchor each frame into masonry or wood using wind-tested fasteners and double sealant layers to prevent water intrusion. Whether you are replacing a patio sliding door or upgrading a full window package, we handle the permits, coordinate with HOAs, and clean the jobsite daily.",
    ],
    neighborhoods: ["Falling Waters", "Old Naples", "Pelican Bay", "Park Shore", "Lely Resort", "Port Royal", "Moorings"],
    windLoadRequirements: "140–160+ MPH structural wind speed ratings",
    faqs: [
      {
        question: "Do Naples HOA boards require specific window grid patterns?",
        answer: "Yes, communities like Falling Waters and Lely Resort often have strict HOA guidelines regarding frame colors (white or bronze) and grid styles. AAA coordinates drawings to match your HOA parameters before permit submission.",
      },
      {
        question: "How long does Collier County permit coordination take?*",
        answer: "Collier County and Naples municipal permit reviews typically range between 3 to 5 weeks. AAA manages the submittals, drawing files, and physical inspections. *[CLIENT VERIFY]",
      },
    ],
  },
  davie: {
    slug: "davie",
    name: "Davie",
    county: "Broward County",
    title: "Impact Windows, Doors & Roofing in Davie, FL | AAA",
    description: "Premium impact windows, entryway doors, and roofing systems installed in Davie and Davie Country Estates. Code-compliant Broward County contractor.",
    heroTitle: "Securing Davie Properties with Heavy-Duty Envelopes",
    localHighlight: "Davie homes and acreage estates require robust opening protection. From Davie Country Estates to surrounding equestrian properties, we install High Velocity Hurricane Zone (HVHZ) certified packages.",
    localPermittingInfo: "AAA files all permit applications directly with the Town of Davie building department, coordinating engineering drawings and municipal inspections.",
    bodyParagraphs: [
      "Davie's unique suburban properties often feature large window expansions, French doors, and expansive roofs. During storm season, these wide openings encounter extreme positive and negative wind pressures. Upgrading to laminated glass frames protects your family and home without the need for storm panels.",
      "AAA manages the design, permitting, and installation processes for Davie homeowners. We anchor frames to withstand high wind load pressures and seal thresholds against South Florida's torrential summer rains. Our crews respect your landscape, perform daily debris sweeps, and conduct final inspections to confirm code compliance.",
    ],
    neighborhoods: ["Davie Country Estates", "Falling Waters Davie", "Long Lake Ranches", "Shenandoah", "Forest Ridge", "Twin Lakes"],
    windLoadRequirements: "HVHZ (High Velocity Hurricane Zone) compliant, 170+ MPH ratings",
    faqs: [
      {
        question: "Does Davie require specific wind-load certifications for window replacements?",
        answer: "Yes, Davie lies within the HVHZ (High Velocity Hurricane Zone) of Broward County, requiring product approvals and pressure ratings certified to withstand 170+ MPH wind loads.",
      },
      {
        question: "Are sliding glass impact doors difficult to slide in Davie properties?",
        answer: "No. Although impact glass is heavy, our doors feature tandem brass or stainless steel rollers that slide smoothly across structural tracks, maintaining tight perimeter weatherseals.",
      },
    ],
  },
  "pembroke-pines": {
    slug: "pembroke-pines",
    name: "Pembroke Pines",
    county: "Broward County",
    title: "Impact Windows, Doors & Roofing in Pembroke Pines, FL",
    description: "Premium wind-resistant impact windows, patio gliders, and roofing replacements in Pembroke Pines. Code-compliant Broward County contractor.",
    heroTitle: "Storm Envelopes for Pembroke Pines Properties",
    localHighlight: "Pembroke Pines properties lie within Broward's High Velocity Hurricane Zone. Our impact windows, entry doors, and roofing systems are engineered to withstand extreme wind pressures.",
    localPermittingInfo: "AAA manages all permit submittals and engineering calculations with the City of Pembroke Pines building department, coordinating walks and approvals.",
    bodyParagraphs: [
      "Replacing old windows or single-pane patio doors in Pembroke Pines is the most effective way to secure your home. Impact-rated laminated glass acts as a continuous shield, protecting against wind debris and deterrents against forced entry.",
      "At AAA, we specialize in whole-home upgrades. Our crews anchor aluminum frame profiles, coordinate municipal inspections, and clean worksites daily. By upgrading windows, entryways, and roofs together under one contractor, Pembroke Pines homeowners enjoy cohesive project schedules and permit closeouts.",
    ],
    neighborhoods: ["Pines Village", "Pembroke Falls", "Pembroke Isles", "Silver Lakes", "Grand Palms", "Spring Valley"],
    windLoadRequirements: "HVHZ certified, 170+ MPH wind ratings",
    faqs: [
      {
        question: "How long does a typical window replacement take in Pembroke Pines?*",
        answer: "Physical installation for a standard home takes 3 to 5 business days. The permitting process with Pembroke Pines city offices usually takes 3 to 4 weeks. *[CLIENT VERIFY]",
      },
      {
        question: "Will installing impact windows reduce my homeowners insurance premium?*",
        answer: "In Florida, insurance carriers must offer premium discounts for homes with fully-protected openings. We recommend contacting your carrier directly to verify discount credits. *[CLIENT VERIFY]",
      },
    ],
  },
  sunrise: {
    slug: "sunrise",
    name: "Sunrise",
    county: "Broward County",
    title: "Impact Windows, Doors & Roofing in Sunrise, FL | AAA",
    description: "Premium residential and commercial storefront glazing, doors, and roofing replacements in Sunrise. Managed by AAA with full city permits.",
    heroTitle: "Residential & Commercial Storm Protection in Sunrise",
    localHighlight: "Sunrise properties—from residential communities near Sawgrass to commercial shopping centers—require HVHZ wind-resistant window, door, and roofing configurations.",
    localPermittingInfo: "AAA coordinates permit filings and engineering submittals directly with the City of Sunrise building department, scheduling and attending inspections.",
    bodyParagraphs: [
      "Sunrise residential homes and commercial plazas face severe seasonal weather threats. Installing certified impact glass storefronts, entry systems, and metal or shingle roofing secures your building envelope, maintaining safety when other structures fail.",
      "AAA manages both residential upgrades and commercial glazing projects in Sunrise. We anchor heavy-wall aluminum storefront profiles, install laminated safety glass, and complete roofing dry-ins cleanly. Our scheduling is precise, our communication is direct, and we stay available after the final walkthrough.",
    ],
    neighborhoods: ["Sawgrass area", "Sunrise Golf Village", "Welleby", "Kings Creek", "Sunset Strip district"],
    windLoadRequirements: "HVHZ certified, 170+ MPH structural load ratings",
    faqs: [
      {
        question: "Do you coordinate commercial storefront permitting in Sunrise?*",
        answer: "Yes, we handle all commercial permitting, shop drawings, wind-load pressure calculations, and progress inspections for Sunrise commercial projects. *[CLIENT VERIFY]",
      },
      {
        question: "Do you handle roof tear-offs and cleanup in Sunrise?",
        answer: "Yes. Our roofing service includes tearing off old shingles, repairing wood decks, laying waterproofing barriers, and daily magnetic scans to clear fasteners.",
      },
    ],
  },
  miramar: {
    slug: "miramar",
    name: "Miramar",
    county: "Broward County",
    title: "Impact Windows, Doors & Roofing in Miramar, FL | AAA",
    description: "Premium impact windows, entryway doors, and roofing systems installed in Miramar. Code-compliant Broward County contractor.",
    heroTitle: "Accountable Storm Envelopes for Miramar Property Owners",
    localHighlight: "Miramar properties demand certified High Velocity Hurricane Zone opening protection. We provide custom-installed impact windows, doors, and roofing replacements.",
    localPermittingInfo: "AAA coordinates permit filings and engineering files directly with the City of Miramar building department, ensuring code compliance walks.",
    bodyParagraphs: [
      "Upgrading Miramar home openings with impact windows and reinforced entry doors protects your property against hurricane wind debris and burglaries. The laminated glass core remains intact under force, sealing the interior envelope from pressure shifts and water leaks.",
      "AAA manages your Miramar property replacement cleanly. Our local crews anchor frame profiles, seal thresholds, and coordinate permit approvals. We lay down floor protections, sweep work areas daily, and handle all debris hauling so your lawn and driveway are left clean.",
    ],
    neighborhoods: ["Miramar Isles", "Silver Lakes Miramar", "Sunset Lakes", "Country Club Ranches", "Monarch Lakes"],
    windLoadRequirements: "HVHZ certified, 170+ MPH wind pressure ratings",
    faqs: [
      {
        question: "Can I coordinate windows, doors, and roofing replacements together in Miramar?",
        answer: "Yes. Coordinating these services with AAA streamlines schedules, reduces permitting delays, and ensures all flashing connections connect correctly.",
      },
      {
        question: "Do you offer frosted glass options for bathroom windows in Miramar?",
        answer: "Yes. We offer privacy frosted glass, clear glass, tinting options, and Low-E coatings to match your aesthetic and energy preferences.",
      },
    ],
  },
};
