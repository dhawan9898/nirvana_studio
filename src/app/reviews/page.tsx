import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { GOOGLE_REVIEWS, STUDIO_DETAILS } from "@/data/studioData";
import { Star, CheckCircle2, ArrowUpRight } from "lucide-react";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Client Reviews | 5.0 Star Google Reviews | Nirvana Tattoo Studio",
  description:
    "Read real Google Reviews for Nirvana Tattoo Studio in Kondapur, Hyderabad. Rated 5.0 stars across 390+ client reviews for custom tattoos, laser tattoo removal, and sterile body piercings.",
};

export default function ReviewsPage() {
  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-[#F5F5F7] font-sans overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-[#E5C378]">
      <Navbar />

      <main className="pt-28 pb-16">
        {/* Page Top Title */}
        <section className="px-5 sm:px-8 py-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#141414] mb-3">
            <GoogleIcon className="w-4 h-4" />
            <span className="text-[10px] tracking-wider uppercase text-[#E5C378] font-medium">
              Verified Client Experiences
            </span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl font-normal tracking-wide text-[#F5F5F7] mb-3">
            Google Reviews & Client Stories
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#8E8E93] font-light leading-relaxed">
            Rated 5.0 stars with over 390 verified reviews. Here is what clients say about their sessions with artist Rishith Reddy in Kondapur, Hyderabad.
          </p>
        </section>

        {/* Feature Spotlight Carousel: Work in Background, Review on Top */}
        <Testimonials />

        {/* All Reviews Full Grid */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 border-t border-[#1C1C1C]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                Complete Collection
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl text-[#F5F5F7] mt-0.5">
                All Verified Client Reviews
              </h2>
            </div>

            <a
              href={STUDIO_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#333333] hover:border-[#D4AF37] bg-[#141414] text-xs uppercase tracking-wider text-[#D4D4D8] hover:text-[#E5C378] transition-colors"
            >
              <GoogleIcon className="w-4 h-4" />
              <span>Review on Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GOOGLE_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#D4AF37]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Work Photo Header */}
                <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
                  <Image
                    src={rev.workImage}
                    alt={rev.workTag}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 border border-white/10 text-[10px] text-[#E5C378] font-mono">
                    {rev.serviceType}
                  </div>
                </div>

                {/* Review Body */}
                <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1 text-[#D4AF37]">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#71717A]">{rev.date}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#D4D4D8] font-light leading-relaxed italic">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1F1F1F] flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-[#F5F5F7]">
                          {rev.name}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                      </div>
                      <span className="text-[10px] text-[#8E8E93] font-light block">
                        {rev.location}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#E5C378] font-mono">
                      {rev.workTag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

