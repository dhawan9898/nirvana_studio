"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { STUDIO_DETAILS } from "@/data/studioData";
import {
  Phone,
  MessageCircle,
  ArrowUp,
  Sparkles,
  Check,
} from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setNewsletterEmail("");
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#080808] border-t border-[#1F1F1F] text-[#F5F5F7] pt-20 pb-12 px-5 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1A1A1A]">
          {/* Col 1: Brand Logo & Studio Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37]/50 shrink-0">
                <Image
                  src={STUDIO_DETAILS.logo}
                  alt="Nirvana Tattoo Studio Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-lg tracking-widest font-semibold text-[#F5F5F7]">
                  NIRVANA
                </span>
                <span className="text-[10px] tracking-wider text-[#8E8E93] uppercase font-light">
                  TATTOO • REMOVAL • PIERCING
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8E8E93] font-light leading-relaxed max-w-sm">
              Professional tattoo, Pico laser tattoo removal, and body piercing studio in Kondapur,
              Hyderabad, run by artist <strong className="text-[#F5F5F7] font-medium">Rishith Reddy</strong>.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={STUDIO_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#141414] border border-[#2B2B2B] text-[#8E8E93] hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={STUDIO_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#141414] border border-[#2B2B2B] text-[#8E8E93] hover:text-[#25D366] hover:border-[#25D366]/50 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${STUDIO_DETAILS.phone.replace(/[^0-9+]/g, "")}`}
                className="p-2.5 rounded-full bg-[#141414] border border-[#2B2B2B] text-[#8E8E93] hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E5C378]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#8E8E93] font-light">
              <li>
                <Link href="/" className="hover:text-[#F5F5F7] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F5F5F7] transition-colors">
                  Services & FAQ
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#F5F5F7] transition-colors">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-[#F5F5F7] transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Coordinates & Hours (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E5C378]">
              Studio Address
            </h4>
            <div className="space-y-3 text-xs text-[#8E8E93] font-light">
              <p className="leading-relaxed">
                House No. 157/5, Sri Ram Nagar, Botanical Garden Road, Kondapur,
                Hyderabad — 500084
              </p>
              <p className="text-[#D4AF37] font-mono">
                Opp. Govt. Hospital
              </p>
              <p className="pt-1">
                Daily: 10:00 AM – 9:00 PM
              </p>
            </div>
          </div>

          {/* Col 4: Studio Updates (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E5C378] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Studio Updates</span>
            </h4>
            <p className="text-xs text-[#8E8E93] font-light leading-relaxed">
              Stay informed about upcoming studio slot openings and offers with artist Rishith Reddy.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-[#2B2B2B] text-xs text-[#F5F5F7] placeholder-[#52525B] focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-md bg-[#D4AF37] hover:bg-[#E5C378] text-[#0D0D0D] text-[10px] uppercase tracking-wider font-semibold transition-colors cursor-pointer"
                >
                  Join
                </button>
              </div>

              {isSubscribed && (
                <span className="text-[11px] text-[#25D366] flex items-center gap-1 animate-fadeIn">
                  <Check className="w-3 h-3" /> Subscribed to studio updates.
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#52525B] font-light">
          <p>
            © 2026 Nirvana Tattoo Studio. Kondapur, Hyderabad. Artist Rishith Reddy.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] tracking-wider uppercase text-[#71717A]">
              Kondapur • Hyderabad • India
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#141414] hover:bg-[#D4AF37] text-[#8E8E93] hover:text-[#0D0D0D] border border-[#262626] transition-all duration-300 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
