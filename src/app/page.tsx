import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { STUDIO_DETAILS } from "@/data/studioData";
import {
  ArrowRight,
  Star,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Layers,
  Sparkles,
  Camera,
  Calendar,
} from "lucide-react";
import { GoogleIcon } from "@/components/icons/GoogleIcon";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-[#F5F5F7] font-sans overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-[#E5C378]">
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Direct Gateway to Sub-Pages */}
        <section className="py-20 px-5 sm:px-8 bg-[#0D0D0D] border-t border-[#1C1C1C]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#141414] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span className="text-[10px] tracking-wider uppercase text-[#E5C378] font-medium">
                  Studio Portal
                </span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl text-[#F5F5F7] mb-3">
                Explore Nirvana Studio
              </h2>
              <p className="text-xs sm:text-sm text-[#8E8E93] font-light">
                Select a section below to explore our services, browse authentic client works, or read verified reviews.
              </p>
            </div>

            {/* 3 Gateway Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Services & FAQ */}
              <Link
                href="/services"
                className="group rounded-3xl bg-[#141414] border border-[#222222] hover:border-[#D4AF37]/60 p-8 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)] hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black border border-[#2B2B2B] flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:border-[#D4AF37] transition-all">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#E5C378] block mb-1">
                    Specialized Offerings
                  </span>
                  <h3 className="font-cinzel text-2xl text-[#F5F5F7] mb-3 group-hover:text-[#E5C378] transition-colors">
                    Services & FAQ
                  </h3>
                  <p className="text-xs text-[#8E8E93] font-light leading-relaxed">
                    Custom Tattoos (Realism, Fine Line, Devotional, Cover-ups), Pico Laser Tattoo Removal, and Sterile Body Piercings with complete FAQs.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1F1F1F] flex items-center justify-between text-xs font-semibold text-[#E5C378]">
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Card 2: Work Catalogue */}
              <Link
                href="/portfolio"
                className="group rounded-3xl bg-[#141414] border border-[#222222] hover:border-[#D4AF37]/60 p-8 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)] hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black border border-[#2B2B2B] flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:border-[#D4AF37] transition-all">
                    <Camera className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#E5C378] block mb-1">
                    Authentic Archives
                  </span>
                  <h3 className="font-cinzel text-2xl text-[#F5F5F7] mb-3 group-hover:text-[#E5C378] transition-colors">
                    48+ Work Catalogue
                  </h3>
                  <p className="text-xs text-[#8E8E93] font-light leading-relaxed">
                    High-resolution photographs of real clients inked, laser-treated, or pierced by Rishith Reddy. Filterable by category with high-detail lightbox.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1F1F1F] flex items-center justify-between text-xs font-semibold text-[#E5C378]">
                  <span>View Catalogue</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Card 3: Client Reviews */}
              <Link
                href="/reviews"
                className="group rounded-3xl bg-[#141414] border border-[#222222] hover:border-[#D4AF37]/60 p-8 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)] hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black border border-[#2B2B2B] flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:border-[#D4AF37] transition-all">
                    <GoogleIcon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#E5C378] block mb-1">
                    5.0 ★★★★★ (390+ Ratings)
                  </span>
                  <h3 className="font-cinzel text-2xl text-[#F5F5F7] mb-3 group-hover:text-[#E5C378] transition-colors">
                    Client Reviews
                  </h3>
                  <p className="text-xs text-[#8E8E93] font-light leading-relaxed">
                    Verified Google Reviews paired directly with the client&apos;s finished artwork in the background. Transparent feedback from clients across Hyderabad.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1F1F1F] flex items-center justify-between text-xs font-semibold text-[#E5C378]">
                  <span>Read Reviews</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. The Studio & Artist Spotlight */}
        <section className="py-20 px-5 sm:px-8 bg-[#0B0B0B] border-t border-[#1C1C1C]">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl bg-[#141414] border border-[#262626] p-8 sm:p-12 lg:p-14">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Artist Photo */}
                <div className="md:col-span-5 relative">
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-[#2B2B2B] bg-black shadow-2xl">
                    <Image
                      src="/assets/rishith-artist.webp"
                      alt="Artist Rishith Reddy - Nirvana Tattoo Studio"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Bio & Standards */}
                <div className="md:col-span-7 flex flex-col gap-5">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                      Founder & Lead Artist
                    </span>
                    <h2 className="font-cinzel text-3xl sm:text-4xl text-[#F5F5F7] mt-1">
                      Rishith Reddy
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
                    With over a decade of hands-on tattooing and body modification craft in Hyderabad, Rishith personally executes every single session at Nirvana. Every client receives private, dedicated one-on-one attention without rotating junior staff or rushed appointments.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#222222] text-xs text-[#8E8E93]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>100% single-use blister needles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>Certified safe organic inks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>Open Daily: 10:00 AM – 9:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>Opposite Govt. Civil Hospital</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-[#222222]">
                    <Link
                      href="/contact"
                      className="px-7 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#E5C378] text-[#0D0D0D] text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 shadow-md"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Consultation</span>
                    </Link>

                    <a
                      href={STUDIO_DETAILS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-full border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-black text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>WhatsApp (9966609982)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Quick Studio Visit Bar */}
        <section className="py-14 px-5 sm:px-8 bg-[#0D0D0D] border-t border-[#1C1C1C]">
          <div className="max-w-5xl mx-auto rounded-2xl bg-[#141414] border border-[#262626] p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block">
                Studio Address & Operating Schedule
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl text-[#F5F5F7]">
                Nirvana Tattoo Studio • Kondapur
              </h3>
              <p className="text-xs text-[#8E8E93] font-light">
                House No. 157/5, Botanical Garden Road (Opp. Govt Hospital) • Daily 10:00 AM – 9:00 PM
              </p>
            </div>

            <Link
              href="/contact"
              className="px-7 py-3 rounded-full bg-[#1C1C1C] hover:bg-[#D4AF37] text-xs font-semibold uppercase tracking-wider text-[#F5F5F7] hover:text-black border border-[#333] hover:border-[#D4AF37] transition-all flex items-center gap-2 shrink-0"
            >
              <span>Get Directions & Book</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
