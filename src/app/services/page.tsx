import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExperienceCraft from "@/components/ExperienceCraft";
import FAQSection from "@/components/FAQSection";
import { SERVICES } from "@/data/studioData";
import { Layers, Zap, Gem, Check, MessageCircle, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Studio Services | Tattoos, Pico Laser Removal & Piercing | Nirvana Tattoo Studio",
  description:
    "Explore our 3 specialized services in Kondapur, Hyderabad: Custom Tattooing (Realism, Fine Line, Devotional, Cover-ups), Pico Laser Tattoo Removal, and Sterile Ear & Body Piercings by artist Rishith Reddy.",
};

export default function ServicesPage() {
  const serviceIcons = {
    tattoo: Layers,
    "tattoo-removal": Zap,
    piercing: Gem,
  };

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-[#F5F5F7] font-sans overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-[#E5C378]">
      <Navbar />

      <main className="pt-28 pb-16">
        {/* Page Header */}
        <section className="px-5 sm:px-8 py-12 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#141414] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[10px] tracking-wider uppercase text-[#E5C378] font-medium">
              Specialized Studio Offerings
            </span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl font-normal tracking-wide text-[#F5F5F7] mb-4">
            Our Three Core Services
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-base text-[#8E8E93] font-light leading-relaxed">
            At Nirvana Tattoo Studio in Kondapur, we maintain strict dedication to three specialized crafts performed personally by artist <strong className="text-[#F5F5F7] font-medium">Rishith Reddy</strong> under sterile conditions.
          </p>
        </section>

        {/* 3 Detailed Service Deep Dives */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16 py-8">
          {SERVICES.map((srv, idx) => {
            const IconComp = serviceIcons[srv.id];
            const isEven = idx % 2 === 1;

            return (
              <div
                key={srv.id}
                id={srv.id}
                className={`rounded-3xl bg-[#141414] border border-[#262626] p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Image */}
                <div
                  className={`lg:col-span-5 relative ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black border border-[#2B2B2B] shadow-2xl">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-black/80 text-[#D4AF37] border border-white/10 backdrop-blur-md">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div
                  className={`lg:col-span-7 flex flex-col gap-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                      Service {String(idx + 1).padStart(2, "0")} • {srv.tagline}
                    </span>
                    <h2 className="font-cinzel text-2xl sm:text-4xl text-[#F5F5F7] mt-1">
                      {srv.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
                    {srv.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2.5 pt-2 border-t border-[#222222]">
                    <span className="text-xs font-semibold text-[#F5F5F7] block">
                      Standards & Included Features:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#D4D4D8]">
                      {srv.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-[#222222]">
                    <Link
                      href={`/contact?service=${encodeURIComponent(srv.title.split(" ")[0])}#booking`}
                      className="px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#E5C378] text-[#0D0D0D] text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 shadow-md"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book {srv.title.split(" ")[0]} Session</span>
                    </Link>

                    <a
                      href={`https://wa.me/919966609982?text=${encodeURIComponent(
                        `Hi Rishith! I would like to inquire about your ${srv.title} service at Nirvana Tattoo Studio.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-full border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-black text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Inquire via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Studio Process & Cleanliness Standards */}
        <ExperienceCraft />

        {/* Complete Studio & Service FAQs */}
        <FAQSection showSearch={true} showHeader={true} />
      </main>

      <Footer />
    </div>
  );
}

