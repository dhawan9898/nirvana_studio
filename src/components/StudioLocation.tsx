"use client";

import React from "react";
import { STUDIO_DETAILS } from "@/data/studioData";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Compass,
  Star,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export default function StudioLocation() {
  return (
    <section id="location" className="py-20 px-5 sm:px-8 bg-[#0D0D0D] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#141414] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[10px] tracking-wider uppercase text-[#E5C378] font-medium">
              Studio Location
            </span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-normal tracking-wide text-[#F5F5F7] mb-3">
            Find Nirvana Tattoo Studio
          </h2>

          <p className="max-w-xl text-xs sm:text-sm text-[#8E8E93] font-light">
            Located in Kondapur on Botanical Garden Road, directly opposite the Government Civil Hospital.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Atelier Coordinates & Details */}
          <div className="lg:col-span-7 rounded-2xl bg-[#141414] border border-[#262626] p-6 sm:p-10 flex flex-col justify-between">
            <div className="space-y-8">
              {/* Studio Rating Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#222222]">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                    Studio Credential
                  </span>
                  <h3 className="font-cinzel text-2xl text-[#F5F5F7] mt-0.5">
                    Nirvana Tattoo Studio
                  </h3>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#333333]">
                  <div className="flex items-center text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-medium text-[#F5F5F7]">5.0</span>
                  <span className="text-[10px] text-[#71717A]">(380+ Verified Reviews)</span>
                </div>
              </div>

              {/* Exact Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1A1A1A] border border-[#2B2B2B] text-[#D4AF37] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#A1A1AA] mb-1 font-semibold">
                    Studio Address & Landmark
                  </h4>
                  <p className="text-sm sm:text-base text-[#F5F5F7] font-medium leading-relaxed">
                    House No. 157/5, Sri Ram Nagar, Botanical Garden Road,
                    <br />
                    Kondapur, Hyderabad, Telangana — 500084
                  </p>
                  <p className="text-xs text-[#E5C378] mt-1.5 flex items-center gap-1.5 font-light">
                    <Compass className="w-3.5 h-3.5" />
                    Directly Opposite the Government Civil Hospital
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1A1A1A] border border-[#2B2B2B] text-[#D4AF37] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h4 className="text-xs uppercase tracking-wider text-[#A1A1AA] mb-2 font-semibold">
                    Studio Operating Hours
                  </h4>
                  <div className="space-y-1.5 text-xs text-[#D4D4D8]">
                    {STUDIO_DETAILS.hours.map((h) => (
                      <div key={h.days} className="flex justify-between py-1 border-b border-[#1C1C1C]">
                        <span className="text-[#8E8E93]">{h.days}</span>
                        <span className="font-mono text-[#F5F5F7]">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-8 mt-8 border-t border-[#222222] flex flex-wrap gap-4">
              <a
                href={STUDIO_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp (+91 99666 09982)</span>
              </a>

              <a
                href={`tel:${STUDIO_DETAILS.phone.replace(/[^0-9+]/g, "")}`}
                className="px-6 py-3 rounded-full border border-[#333333] hover:border-[#D4AF37] text-xs uppercase tracking-[0.18em] text-[#F5F5F7] hover:text-[#E5C378] transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call {STUDIO_DETAILS.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Studio Environment Card */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-[#181818] via-[#141414] to-[#111111] border border-[#2B2B2B] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#D4AF37]/40 text-[10px] uppercase tracking-widest text-[#E5C378]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Studio Environment</span>
              </div>

              <h3 className="font-cinzel text-2xl text-[#F5F5F7] leading-snug">
                Clean & Focused Workspace
              </h3>

              <p className="text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
                At our Kondapur studio, we ensure a clean, comfortable, and hygienic setting for your sessions:
              </p>

              <ul className="space-y-2.5 text-xs text-[#D4D4D8]">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Dedicated, sanitized tattooing and piercing stations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Comfortable adjustable client seating</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Clean and sterile medical-grade disposal setup</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Air-conditioned studio with drinking water and refreshments</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Direct one-on-one session with artist Rishith Reddy</span>
                </li>
              </ul>
            </div>

            {/* Map Link Button */}
            <div className="pt-8 mt-8 border-t border-[#242424] relative z-10">
              <a
                href={`https://maps.google.com/?q=Nirvana+Tattoo+Studio+Kondapur+Hyderabad`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#1C1C1C] hover:bg-[#D4AF37] text-[#F5F5F7] hover:text-[#0D0D0D] border border-[#333333] hover:border-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Navigate via Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

