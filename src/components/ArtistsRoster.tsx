"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES, STUDIO_DETAILS } from "@/data/studioData";
import { Layers, Zap, Gem, Check, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export default function ArtistsRoster() {
  const handleScrollToBooking = () => {
    const el = document.querySelector("#booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const serviceIcons = {
    tattoo: Layers,
    "tattoo-removal": Zap,
    piercing: Gem,
  };

  return (
    <section id="services" className="py-20 px-5 sm:px-8 bg-[#0D0D0D] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#141414] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[10px] tracking-wider uppercase text-[#E5C378] font-medium">
              Studio Services
            </span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-normal tracking-wide text-[#F5F5F7] mb-3">
            What We Do
          </h2>

          <p className="max-w-xl text-xs sm:text-sm text-[#8E8E93] font-light">
            We focus strictly on three specialized services performed under clean, safe conditions in Kondapur.
          </p>
        </div>

        {/* 3 Core Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {SERVICES.map((srv) => {
            const IconComp = serviceIcons[srv.id];
            return (
              <div
                key={srv.id}
                className="rounded-2xl bg-[#141414] border border-[#222222] hover:border-[#D4AF37]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Photo */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />

                    <div className="absolute top-3 left-3 p-2 rounded-lg bg-black/80 text-[#D4AF37] border border-white/10">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-3">
                    <h3 className="font-cinzel text-xl text-[#F5F5F7]">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-[#8E8E93] font-light leading-relaxed">
                      {srv.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-[#1F1F1F]">
                      {srv.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center gap-2">
                  <Link
                    href={`/services#${srv.id}`}
                    className="flex-1 py-2.5 rounded-lg bg-[#1C1C1C] hover:bg-[#D4AF37] text-xs font-semibold uppercase tracking-wider text-[#F5F5F7] hover:text-black transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/contact?service=${encodeURIComponent(srv.title.split(" ")[0])}#booking`}
                    className="flex-1 py-2.5 rounded-lg border border-[#D4AF37]/40 hover:bg-[#D4AF37] text-xs font-semibold uppercase tracking-wider text-[#E5C378] hover:text-black transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Book</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* About Artist Rishith Reddy */}
        <div id="artist" className="rounded-2xl bg-[#141414] border border-[#2B2B2B] p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Real Studio Photo */}
            <div className="md:col-span-5 relative">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-[#262626] bg-black">
                <Image
                  src="/assets/rishith-artist.webp"
                  alt="Rishith Reddy - Nirvana Tattoo Studio"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Practical, Grounded Bio */}
            <div className="md:col-span-7 flex flex-col gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                  Founder & Tattoo Artist
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F5F5F7] mt-0.5">
                  Rishith Reddy
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
                Rishith is the artist and owner of Nirvana Tattoo & Removal Studio in Kondapur, Hyderabad.
                With over a decade of tattooing experience, he works directly with each client on custom designs,
                clean script lettering, spiritual iconography, and complete cover-ups.
              </p>

              <div className="space-y-2 pt-2 border-t border-[#222222]">
                <span className="text-xs font-medium text-[#F5F5F7] block">
                  Studio Standards:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#8E8E93]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Single-use, blister-packed sterile needles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Certified safe organic tattoo inks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Cleanroom medical surface disinfection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Pre-sterilized single-use piercing needles</span>
                  </div>
                </div>
              </div>

              {/* Direct Contact Links */}
              <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-[#222222]">
                <a
                  href={STUDIO_DETAILS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${STUDIO_DETAILS.phoneRaw}`}
                  className="px-4 py-2.5 rounded-full border border-[#333333] hover:border-[#D4AF37] text-xs uppercase tracking-wider text-[#D4D4D8] hover:text-[#E5C378] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Call {STUDIO_DETAILS.phone}</span>
                </a>

                <a
                  href={STUDIO_DETAILS.artistInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full border border-[#333333] hover:border-[#D4AF37] text-xs uppercase tracking-wider text-[#A1A1AA] hover:text-[#E5C378] transition-colors flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>@rishith_reddy_3333</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
