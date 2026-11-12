"use client";

import React, { useState } from "react";
import { FAQS, FAQItem, STUDIO_DETAILS } from "@/data/studioData";
import { ChevronDown, HelpCircle, Search, MessageCircle, Sparkles } from "lucide-react";

interface FAQSectionProps {
  initialCategory?: "All" | "Studio & Appointments" | "Tattoos" | "Tattoo Removal" | "Piercing";
  limit?: number;
  showSearch?: boolean;
  showHeader?: boolean;
}

export default function FAQSection({
  initialCategory = "All",
  limit,
  showSearch = true,
  showHeader = true,
}: FAQSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | "Studio & Appointments" | "Tattoos" | "Tattoo Removal" | "Piercing"
  >(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // first open by default

  const categories = [
    "All",
    "Studio & Appointments",
    "Tattoos",
    "Tattoo Removal",
    "Piercing",
  ] as const;

  const toggleAccordion = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  return (
    <section id="faq" className="py-20 px-5 sm:px-8 bg-[#0D0D0D] border-t border-[#1C1C1C]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        {showHeader && (
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#141414] mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[10px] tracking-wider uppercase text-[#E5C378] font-medium">
                Got Questions?
              </span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-5xl font-normal tracking-wide text-[#F5F5F7] mb-3">
              Frequently Asked Questions
            </h2>

            <p className="max-w-2xl text-xs sm:text-sm text-[#8E8E93] font-light leading-relaxed">
              Transparent answers regarding appointments, pain levels, hygiene standards, laser sessions, and aftercare procedures at our Kondapur studio.
            </p>
          </div>
        )}

        {/* Search & Filters */}
        <div className="mb-10 space-y-4">
          {showSearch && (
            <div className="relative max-w-xl mx-auto">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#71717A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. pain, aftercare, pricing, sessions)..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-[#141414] border border-[#262626] text-xs sm:text-sm text-[#F5F5F7] placeholder-[#52525B] focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
          )}

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all font-medium cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#D4AF37] text-[#0D0D0D] font-semibold shadow-sm"
                    : "bg-[#141414] text-[#8E8E93] hover:text-[#F5F5F7] border border-[#222222]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {displayedFaqs.length === 0 ? (
            <div className="text-center py-12 text-[#71717A] text-xs sm:text-sm">
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another term or message us directly!
            </div>
          ) : (
            displayedFaqs.map((faq, index) => {
              const isOpen = openIndices.includes(index);
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? "bg-[#141414] border-[#D4AF37]/50 shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
                      : "bg-[#111111] border-[#222222] hover:border-[#333333]"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#1C1C1C] text-[#D4AF37] border border-white/5 shrink-0 hidden sm:inline-block">
                        {faq.category}
                      </span>
                      <span className="font-medium text-sm sm:text-base text-[#F5F5F7]">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`p-1.5 rounded-full transition-transform duration-300 shrink-0 ${
                        isOpen
                          ? "rotate-180 bg-[#D4AF37] text-black"
                          : "text-[#71717A] bg-[#181818]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed border-t border-white/5 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Help Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#141414] via-[#161616] to-[#141414] border border-[#2B2B2B] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold flex items-center justify-center sm:justify-start gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Have a custom design or question?
            </span>
            <h3 className="font-cinzel text-lg sm:text-xl text-[#F5F5F7]">
              Speak Directly with Rishith Reddy
            </h3>
            <p className="text-xs text-[#8E8E93] font-light mt-1">
              Get an honest estimate, design feedback, or aftercare support within hours.
            </p>
          </div>

          <a
            href={STUDIO_DETAILS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

