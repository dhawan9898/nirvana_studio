"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle, ShieldCheck, Check } from "lucide-react";
import { STUDIO_DETAILS } from "@/data/studioData";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-5 sm:px-8 overflow-hidden bg-[#0D0D0D]">
      {/* Background Studio Photo */}
      <div className="absolute inset-0 -z-20 opacity-30">
        <Image
          src="/assets/hero-studio.webp"
          alt="Nirvana Tattoo Studio Interior"
          fill
          priority
          className="object-cover object-center filter brightness-90 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/75 to-[#0D0D0D]/90" />
      </div>

      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center relative z-10">
        {/* Studio Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#141414]/90 backdrop-blur-md mb-6">
          <div className="relative w-4 h-4 rounded-full overflow-hidden shrink-0">
            <Image src={STUDIO_DETAILS.logo} alt="Logo" fill className="object-cover" />
          </div>
          <span className="text-[11px] uppercase tracking-wider text-[#E5C378] font-medium">
            Kondapur, Hyderabad • Open Daily 10 AM – 9 PM • By Rishith Reddy
          </span>
        </div>

        {/* Clear, Grounded Headline */}
        <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-normal tracking-wide leading-tight text-[#F5F5F7] max-w-3xl mb-4">
          TATTOO • TATTOO REMOVAL • PIERCING
        </h1>

        {/* Authentic Business Description */}
        <p className="max-w-2xl text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed mb-8 px-2">
          Welcome to <span className="text-[#F5F5F7] font-medium">Nirvana Tattoo Studio</span> in Kondapur, Hyderabad.
          We provide custom tattoo work, safe Pico laser tattoo removal, and sterile ear and body piercing
          conducted with high hygiene standards and single-use needles.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <Link
            href="/contact#booking"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#E5C378] text-[#0D0D0D] text-xs uppercase tracking-wider font-semibold transition-all shadow-md flex items-center justify-center gap-2"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={STUDIO_DETAILS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#25D366]/50 bg-[#141414] hover:bg-[#25D366] text-[#25D366] hover:text-black text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp (9966609982)</span>
          </a>

          <Link
            href="/portfolio"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#333333] hover:border-[#D4AF37] bg-[#141414]/70 text-[#D4D4D8] hover:text-[#F5F5F7] text-xs uppercase tracking-wider font-medium transition-all flex items-center justify-center"
          >
            View 48+ Real Works
          </Link>
        </div>

        {/* 4 Simple Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl text-left">
          <div className="p-3.5 rounded-xl bg-[#141414]/80 border border-[#222222]">
            <span className="text-xs font-semibold text-[#E5C378] block">Custom Tattoos</span>
            <p className="text-[11px] text-[#8E8E93] mt-1 leading-snug">
              Micro-realism, fine line, Devanagari script, mandalas & cover-ups.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#141414]/80 border border-[#222222]">
            <span className="text-xs font-semibold text-[#E5C378] block">Tattoo Removal</span>
            <p className="text-[11px] text-[#8E8E93] mt-1 leading-snug">
              Pico Laser fading or complete removal without skin scarring.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#141414]/80 border border-[#222222]">
            <span className="text-xs font-semibold text-[#E5C378] block">Safe Piercing</span>
            <p className="text-[11px] text-[#8E8E93] mt-1 leading-snug">
              Ear, helix, nose, and belly piercings with single-use needles.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#141414]/80 border border-[#222222]">
            <span className="text-xs font-semibold text-[#E5C378] block">Hygiene Standards</span>
            <p className="text-[11px] text-[#8E8E93] mt-1 leading-snug">
              Fresh sealed needles opened in front of you every session.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
