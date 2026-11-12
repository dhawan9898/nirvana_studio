import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio Catalogue | Tattoos, Pico Laser Removal & Piercing | Nirvana Studio",
  description:
    "Browse over 48 authentic photographs of custom tattoos, devotional realism, fine line art, Pico laser tattoo removal progress, and body piercings by Rishith Reddy at Nirvana Tattoo Studio in Kondapur, Hyderabad.",
};

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-[#F5F5F7] font-sans overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-[#E5C378]">
      <Navbar />

      <main className="pt-28 pb-16">
        <div className="px-5 sm:px-8 py-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#141414] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[10px] tracking-wider uppercase text-[#E5C378] font-medium">
              Authentic Instagram Archives
            </span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl font-normal tracking-wide text-[#F5F5F7] mb-3">
            Full Portfolio Catalogue
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#8E8E93] font-light leading-relaxed">
            Every photo shown here represents real work inked or pierced at Nirvana Tattoo Studio in Kondapur, Hyderabad. Filter by service or click any piece to inspect full-size details.
          </p>
        </div>

        {/* The 48-item Curated Portfolio */}
        <Portfolio />
      </main>

      <Footer />
    </div>
  );
}

