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
    <section className="py-20 StudioBackground border-b border-brand-cool-gray/30 overflow-hidden">
      <div className="w-full">
        
        {/* Section Headline */}
        <div className="text-center mb-12 max-w-3xl mx-auto px-4">
          <span className="text-label text-brand-blue font-bold tracking-widest uppercase">
            Google Reviews
          </span>
          <h2 className="font-montserrat text-display-lg font-bold text-brand-near-black mt-2 leading-tight">
            Trusted By Homeowners Across South Florida
          </h2>
          <p className="text-body-md text-zinc-600 mt-3 max-ch mx-auto leading-relaxed">
            Real feedback from homeowners and property owners who trusted AAA with impact windows, doors, roofing, and commercial work.
          </p>
        </div>

        {/* Marquee Track Container */}
        <div className="relative w-full overflow-hidden flex py-4 select-none">
          {/* Left/Right fading gradients to look premium */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none" />

          {/* Marquee scrolling track */}
          <div className="animate-marquee gap-6 flex px-6">
            {duplicatedReviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-zinc-200/80 shadow-sm hover:shadow-md p-6 md:p-8 w-[360px] md:w-[400px] flex-shrink-0 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Google Verification & Stars Block */}
                  <div className="flex items-center justify-between mb-4 gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#F5A623] stroke-[#F5A623]"
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-bold uppercase tracking-wider bg-zinc-100/80 px-2 py-0.5 rounded border border-zinc-200/50">
                      <svg className="w-3 h-3 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                      </svg>
                      <span>Google Review</span>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-body-sm text-zinc-700 italic leading-relaxed mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Reviewer Info */}
                <div className="flex items-center justify-between border-t border-zinc-100 pt-4 mt-auto">
                  <div>
                    <h4 className="font-display text-body-sm font-bold text-brand-near-black">
                      {review.name}
                    </h4>
                    <p className="text-body-xs text-zinc-400 font-medium">
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
