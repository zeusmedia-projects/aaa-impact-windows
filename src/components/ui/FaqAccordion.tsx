"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-brand-cool-gray/50 rounded-xl bg-brand-white shadow-card overflow-hidden transition-all duration-300"
          >
            {/* Question Bar */}
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center p-5 text-left font-display text-heading-md font-bold text-brand-near-black hover:text-brand-blue transition-colors focus:outline-none"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-brand-blue transition-transform duration-300 flex-shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer Panel */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[300px] border-t border-brand-cool-gray/20" : "max-h-0"
              } overflow-hidden`}
            >
              <div className="p-5 text-body-md text-brand-graphite leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
