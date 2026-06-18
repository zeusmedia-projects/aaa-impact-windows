import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | AAA Impact Windows & Doors",
  description: "Read our privacy policy governing info collection, usage, and disclosures for residential and commercial estimates.",
};

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString("en-US", { 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  });

  return (
    <div className="relative w-full">
      <main className="min-h-screen pt-32 pb-16 bg-brand-ice text-brand-near-black font-sans">
        <div className="max-w-3xl mx-auto px-6 bg-brand-white p-8 md:p-12 rounded-2xl border border-brand-cool-gray/30 shadow-card">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase block mb-2">
            Legal Compliance
          </span>
          <h1 className="font-display text-display-lg font-extrabold text-brand-near-black mb-8 border-b border-brand-cool-gray/25 pb-4 uppercase tracking-[-0.035em] leading-[1.0]">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-body-sm text-brand-graphite leading-relaxed max-ch">
            <p className="font-mono text-[11px] text-brand-mid-gray">
              Last Updated: {currentDate}
            </p>

            <p>
              At {siteConfig.companyName}, we respect your privacy and are committed to protecting the personally identifiable information you may provide us through our website. This Privacy Policy governs information collection, usage, and disclosure.
            </p>

            <h3 className="text-heading-md font-bold text-brand-near-black pt-4">
              1. Information We Collect
            </h3>
            <p>
              We collect information that you voluntarily provide to us when requesting an estimate or submitting a commercial inquiry. This information may include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Contact details such as first and last name, email address, and phone number.</li>
              <li>Project details, including ZIP code, service preferences, timeline, and property types.</li>
              <li>Hidden analytics data including UTM source parameters, page referrers, and submission timestamps.</li>
            </ul>

            <h3 className="text-heading-md font-bold text-brand-near-black pt-4">
              2. How We Use Your Information
            </h3>
            <p>
              We use the collected information primarily to coordinate residential property estimates, evaluate commercial specifications, communicate schedule details, and coordinate building permits.
            </p>

            <h3 className="text-heading-md font-bold text-brand-near-black pt-4">
              3. Security and Storage
            </h3>
            {/* [CLIENT VERIFY - Confirm secure data handling compliance rules] */}
            <p>
              The security of your Personal Information is important to us. We implement industry-standard practices to protect data during transmission and storage. No method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.*
            </p>

            <h3 className="text-heading-md font-bold text-brand-near-black pt-4">
              4. Contact Us
            </h3>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us at:
            </p>
            <p className="font-semibold p-4 rounded-xl bg-brand-ice border border-brand-cool-gray/30 w-fit">
              {siteConfig.legalName}<br />
              Email: <a href={`mailto:${siteConfig.email}`} className="text-brand-blue hover:underline">{siteConfig.email}</a><br />
              Phone: {siteConfig.phoneDefault}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
