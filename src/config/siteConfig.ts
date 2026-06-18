// [CLIENT VERIFY] Confirm all details below before launching the production website.
export const siteConfig = {
  companyName: "AAA Impact Windows & Doors",
  legalName: "AAA Impact Windows & Doors",
  phoneDefault: "(954) 399-3542", // Broward / Primary default contact
  phoneDade: "(786) 547-2828", // Miami-Dade alternate contact
  phoneRawDefault: "+19543993542",
  phoneRawDade: "+17865472828",
  email: "sales@aaaimpact.com",
  crmWebhookEndpoint: "https://api.aaaimpact.com/leads/webhook-placeholder", // CRM Integration Placeholder

  // Business Showroom & Office Address
  address: {
    street: "4878 NW 167th Street",
    city: "Miami",
    state: "FL",
    zip: "33014",
    formatted: "4878 NW 167th Street, Miami, FL 33014",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=4878%20NW%20167th%20St%20%20Miami%2C%20FL%2033014&t=m&z=12&output=embed&iwloc=near",
  },

  // Service Areas defined in the INI specification
  serviceAreas: {
    residential: [
      { name: "Naples", slug: "naples", label: "Naples & Falling Waters", county: "Collier" },
      { name: "Davie", slug: "davie", label: "Davie & Davie Country Estates", county: "Broward" },
      { name: "Pembroke Pines", slug: "pembroke-pines", label: "Pembroke Pines", county: "Broward" },
      { name: "Sunrise", slug: "sunrise", label: "Sunrise", county: "Broward" },
      { name: "Miramar", slug: "miramar", label: "Miramar", county: "Broward" },
    ],
    commercial: "South Florida & Statewide",
  },

  // State Contractor Licenses
  licenses: {
    generalContractor: "CGC1529944", // GC license
    roofing: "CCC1331234", // Roofing license
  },

  // Business Claims and Policies
  claims: {
    licensedAndInsured: true,
    financingAvailable: true,
    yearsInBusiness: "10+",
    freeEstimates: true,
    responseTimeCommitment: "24 hours",
  },

  // Google Analytics & Marketing Tracking
  googleAnalyticsId: "G-YC2MTSPNQW",
  googleTagManagerId: "GTM-XXXXXXX",
};

export type SiteConfig = typeof siteConfig;
