"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, Calendar } from "lucide-react";
import { STUDIO_DETAILS } from "@/data/studioData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#222222] py-3 shadow-lg"
          : "bg-gradient-to-b from-[#0D0D0D] to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#D4AF37]/50 shrink-0">
            <Image
              src={STUDIO_DETAILS.logo}
              alt="Nirvana Tattoo Studio Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-base sm:text-lg tracking-widest font-semibold text-[#F5F5F7] group-hover:text-[#E5C378] transition-colors">
              NIRVANA
            </span>
            <span className="text-[10px] tracking-wider text-[#8E8E93] uppercase font-light">
              Tattoo • Removal • Piercing
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs uppercase tracking-wider text-[#A1A1AA]">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all duration-200 font-medium relative py-1 ${
                  active
                    ? "text-[#E5C378] font-semibold"
                    : "hover:text-[#F5F5F7]"
                }`}
              >
                <span>{link.name}</span>
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Primary Booking & WhatsApp Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={STUDIO_DETAILS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-black transition-all text-xs font-medium flex items-center gap-1.5"
            title="Chat on WhatsApp (9966609982)"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>9966609982</span>
          </a>

          <Link
            href="/contact#booking"
            className="px-5 py-2 rounded-full bg-[#D4AF37] hover:bg-[#E5C378] text-[#0D0D0D] text-xs uppercase tracking-wider font-semibold transition-all shadow-md flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Session</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={STUDIO_DETAILS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#141414] border border-[#25D366]/40 text-[#25D366]"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-[#141414] border border-[#262626] text-[#F5F5F7]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-[#D4AF37]" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0D0D0D]/98 border-b border-[#222222] px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-wider text-[#A1A1AA]">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-2 px-3 rounded-lg transition-colors ${
                    active
                      ? "bg-[#181818] text-[#E5C378] font-semibold border-l-2 border-[#D4AF37]"
                      : "hover:text-[#F5F5F7] hover:bg-[#141414]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 mt-4 border-t border-[#1C1C1C] flex flex-col gap-3">
            <Link
              href="/contact#booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 rounded-full bg-[#D4AF37] text-[#0D0D0D] font-semibold text-xs uppercase tracking-wider text-center"
            >
              Book Appointment
            </Link>

            <a
              href={STUDIO_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full border border-[#25D366]/40 text-[#25D366] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 text-center"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp: 99666 09982</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
