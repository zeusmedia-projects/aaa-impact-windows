// Centralized GA4 Analytics utility matching Section 10.1 specs

export type GA4EventName =
  | "generate_lead"
  | "lead_confirmed"
  | "form_started"
  | "form_step_completed"
  | "form_abandoned"
  | "phone_click"
  | "cta_click"
  | "service_tile_selected"
  | "map_toggle_changed"
  | "project_card_clicked"
  | "benefit_tab_selected"
  | "hero_chapter_reached"
  | "landing_page_view"
  | "file_upload_attempted"; // Crossover from commercial form

interface EventParameters {
  form_type?: "residential" | "commercial" | string;
  service_selected?: string;
  selected_service?: string; // mapping variant
  location_entered?: string;
  step_number?: number;
  step_name?: string;
  step_last_reached?: number;
  location?: "header" | "footer" | "mobile_bar" | "hero" | "thank_you" | "commercial_cta" | "inner_cta";
  cta_text?: string;
  cta_location?: string;
  selected_audience?: "residential" | "commercial";
  project_slug?: string;
  project_type?: string;
  selected_benefit?: string;
  chapter?: number;
  campaign?: string;
  service?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  [key: string]: unknown;
}

export const trackEvent = (eventName: GA4EventName, params: EventParameters = {}) => {
  if (typeof window === "undefined") return;

  const defaultParams = {
    page_location: window.location.href,
    page_title: document.title,
    referrer: document.referrer || "",
    timestamp: new Date().toISOString(),
  };

  // Merge default parameters with active parameters
  const payload = { ...defaultParams, ...params };

  // Log in development console for verification
  console.log(`[GA4 Event Logged]: ${eventName}`, payload);

  // Dispatch to GTM / direct GA4 script via standard gtag function
  const globalGtag = (window as unknown as { gtag?: (type: string, name: string, data: Record<string, unknown>) => void }).gtag;
  if (typeof globalGtag === "function") {
    try {
      globalGtag("event", eventName, payload);
    } catch (err) {
      console.error("GA4 gtag event dispatch failed", err);
    }
  }
};

export default trackEvent;
