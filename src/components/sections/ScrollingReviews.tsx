"use client";

import React from "react";
import { Star } from "lucide-react";

interface Review {
  name: string;
  location: string;
  role: string;
  text: string;
}

export default function ScrollingReviews() {
  const reviews: Review[] = [
    {
      name: "Sarah Jenkins",
      location: "Boca Raton, FL",
      role: "Homeowner",
      text: "AAA Impact Windows completely transformed our home. The team was incredibly professional and walked us through every step. The installation crew was meticulous, and we finally feel secure for hurricane season.",
    },
    {
      name: "David & Maria Alvarez",
      location: "Miami Beach, FL",
      role: "Condo Owners",
      text: "We had a fantastic experience replacing our condo's sliding doors. The noise reduction alone is incredible. It's rare to find a contractor in South Florida who actually answers the phone and does what they say they will do.",
    },
    {
      name: "Robert Torres",
      location: "Fort Lauderdale, FL",
      role: "Property Manager",
      text: "Honest pricing, no high-pressure sales tactics, and top-tier workmanship. They handled the HOA approval and permitting flawlessly. Highly recommend AAA to anyone needing impact windows.",
    },
    {
      name: "John L.",
      location: "Naples, FL",
      role: "Homeowner",
      text: "Extremely happy with the quality of the impact windows. The crew arrived on time, completed the installation with zero mess, and handled the municipal inspection seamlessly.",
    },
    {
      name: "Amanda G.",
      location: "Pembroke Pines, FL",
      role: "Homeowner",
      text: "From start to finish, the communication was excellent. The pricing was fair, and they didn't try to upsell us on things we didn't need. Highly recommend the AAA team.",
    },
  ];

  // Duplicate the reviews array to ensure seamless marquee looping
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-20 bg-brand-ice border-b border-brand-cool-gray/30 overflow-hidden">
      <div className="w-full">
        
        {/* Section Headline */}
        <div className="text-center mb-12 max-w-3xl mx-auto px-4">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-display-lg font-bold text-brand-near-black mt-2 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-body-md text-brand-graphite/80 mt-3 max-ch mx-auto leading-relaxed">
            Read stories and feedback from homeowners and property managers across South Florida who trusted AAA for their impact projects.
          </p>
        </div>

        {/* Marquee Track Container */}
        <div className="relative w-full overflow-hidden flex py-4 select-none">
          {/* Left/Right fading gradients to look premium */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-brand-ice to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-brand-ice to-transparent z-10 pointer-events-none" />

          {/* Marquee scrolling track */}
          <div className="animate-marquee gap-6 flex px-6">
            {duplicatedReviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-brand-white rounded-2xl border border-brand-cool-gray/50 shadow-card hover:shadow-card-hover p-6 md:p-8 w-[360px] md:w-[400px] flex-shrink-0 flex flex-col justify-between transition-shadow duration-300"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#F5A623] stroke-[#F5A623]"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-body-sm text-brand-graphite/90 italic leading-relaxed mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Reviewer Info */}
                <div className="flex items-center justify-between border-t border-brand-cool-gray/40 pt-4 mt-auto">
                  <div>
                    <h4 className="font-display text-body-sm font-bold text-brand-near-black">
                      {review.name}
                    </h4>
                    <p className="text-body-xs text-brand-mid-gray font-medium">
                      {review.location}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-full">
                    {review.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
