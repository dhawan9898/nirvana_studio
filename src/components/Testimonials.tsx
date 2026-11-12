"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GOOGLE_REVIEWS, INSTAGRAM_POSTS, STUDIO_DETAILS, GoogleReview } from "@/data/studioData";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, ZoomIn, X, MessageCircle } from "lucide-react";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export default function Testimonials() {
  const [filter, setFilter] = useState<"All" | "Tattoo" | "Tattoo Removal" | "Piercing">("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; tag: string } | null>(null);

  const filteredReviews = filter === "All"
    ? GOOGLE_REVIEWS
    : GOOGLE_REVIEWS.filter((r) => r.serviceType === filter);

  // Lock page scroll while the lightbox is open
  const lightboxOpen = lightboxImage !== null;
  useEffect(() => {
    if (!lightboxOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lightboxOpen]);

  // Auto-rotation every 7 seconds when not paused
  useEffect(() => {
    if (isPaused || filteredReviews.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, filteredReviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  const current: GoogleReview = filteredReviews[currentIndex] || GOOGLE_REVIEWS[0];

  const handleOpenLightbox = (e: React.MouseEvent, review: GoogleReview) => {
    e.stopPropagation();
    setLightboxImage({
      src: review.workImage,
      alt: review.workTag,
      tag: `${review.workTag} — Work done for ${review.name}`,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <section className="py-24 px-5 sm:px-8 bg-[#0D0D0D] border-t border-[#1C1C1C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Google Rating Badge */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#141414] mb-4">
            <GoogleIcon className="w-4 h-4" />
            <span className="text-xs uppercase tracking-wider text-[#F5F5F7] font-medium">
              5.0 ★★★★★ on Google Reviews
            </span>
            <span className="text-[#8E8E93] text-xs">•</span>
            <span className="text-[11px] text-[#E5C378] font-mono">
              390+ Verified Ratings
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-normal tracking-wide text-[#F5F5F7] mb-3">
            Client Reviews
          </h2>

          <p className="max-w-2xl text-xs sm:text-sm text-[#8E8E93] font-light leading-relaxed">
            Every review reflects actual tattoos, Pico laser removals, and piercings performed by{" "}
            <strong className="text-[#F5F5F7] font-medium">Rishith Reddy</strong>. See the client&apos;s finished work directly behind their words.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1 rounded-full bg-[#141414] border border-[#222222]">
            {(["All", "Tattoo", "Tattoo Removal", "Piercing"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setCurrentIndex(0);
                }}
                className={`px-4 sm:px-5 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all font-medium cursor-pointer ${
                  filter === cat
                    ? "bg-[#D4AF37] text-[#0D0D0D] shadow-sm"
                    : "text-[#8E8E93] hover:text-[#F5F5F7] hover:bg-[#1A1A1A]"
                }`}
              >
                {cat === "All" ? `All Reviews (${GOOGLE_REVIEWS.length})` : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Showcase Card: Work in the Background, Name and Review on Top */}
        <div
          className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden border border-[#2A2A2A] shadow-[0_20px_60px_rgba(0,0,0,0.9)] min-h-[460px] flex flex-col justify-between"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* THE WORK IN THE BACKGROUND */}
          <div className="absolute inset-0 -z-10 bg-black">
            <Image
              src={current.workImage}
              alt={current.workTag}
              fill
              priority
              className="object-cover object-center filter brightness-[0.75] contrast-105 transition-transform duration-1000 ease-out scale-100 hover:scale-105"
            />
            {/* Elegant high-contrast dark vignette overlay ensuring text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/55 backdrop-blur-[1px]" />
          </div>

          {/* Top Bar on Top of Work */}
          <div className="relative z-10 p-6 sm:p-10 pb-0 flex flex-wrap items-center justify-between gap-4">
            {/* Google Badge & Date */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/70 border border-white/10 backdrop-blur-md">
              <GoogleIcon className="w-4 h-4" />
              <span className="text-xs font-medium text-[#F5F5F7]">
                Google Review
              </span>
              <span className="text-[10px] text-[#A1A1AA]">
                • {current.date}
              </span>
            </div>

            {/* Service & Work Tag Pill */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#E5C378] backdrop-blur-md">
                {current.service}
              </span>
              <button
                onClick={(e) => handleOpenLightbox(e, current)}
                className="px-3 py-1 rounded-full text-[11px] uppercase tracking-wider bg-black/60 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black border border-[#D4AF37]/40 transition-colors flex items-center gap-1.5 cursor-pointer backdrop-blur-md"
                title="View full-size photo of this work"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>View Work</span>
              </button>
            </div>
          </div>

          {/* Review Body & Quote on Top of Work */}
          <div className="relative z-10 p-6 sm:p-10 my-auto flex flex-col items-center text-center">
            {/* 5 Champagne Stars */}
            <div className="flex items-center gap-1.5 text-[#D4AF37] mb-5">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-cinzel text-xl sm:text-2xl md:text-3xl text-[#F5F5F7] font-normal leading-relaxed italic tracking-wide max-w-2xl drop-shadow-md">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
          </div>

          {/* Client Name & Verification on Top of Work */}
          <div className="relative z-10 p-6 sm:p-10 pt-0">
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Client Identity */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/60 flex items-center justify-center text-[#E5C378] font-cinzel font-semibold text-base shadow-md">
                  {current.name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-medium text-base text-[#F5F5F7]">
                      {current.name}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <span className="text-xs text-[#A1A1AA] font-light">
                    {current.location}
                  </span>
                </div>
              </div>

              {/* Artist Credit & Google Verified Badge */}
              <div className="flex items-center gap-3 text-xs text-[#8E8E93]">
                <div className="px-3 py-1 rounded-md bg-black/60 border border-white/10 text-[11px] font-mono text-[#E5C378]">
                  Artist: Rishith Reddy
                </div>
                <a
                  href={STUDIO_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#A1A1AA] hover:text-[#D4AF37] transition-colors flex items-center gap-1"
                >
                  <GoogleIcon className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Next / Prev Navigation Buttons */}
          <div className="flex items-center justify-between absolute inset-x-4 sm:inset-x-6 top-1/2 -translate-y-1/2 pointer-events-none z-20">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-black/75 hover:bg-[#D4AF37] text-[#F5F5F7] hover:text-black border border-white/20 hover:border-[#D4AF37] pointer-events-auto transition-all cursor-pointer backdrop-blur-md shadow-lg"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-black/75 hover:bg-[#D4AF37] text-[#F5F5F7] hover:text-black border border-white/20 hover:border-[#D4AF37] pointer-events-auto transition-all cursor-pointer backdrop-blur-md shadow-lg"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Thumbnail Selector Row: Direct jump to any review with work preview */}
        <div className="max-w-4xl mx-auto mt-6 flex items-center justify-center gap-2 overflow-x-auto py-2">
          {filteredReviews.map((rev, idx) => (
            <button
              key={rev.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 shrink-0 cursor-pointer border ${
                currentIndex === idx
                  ? "w-20 h-14 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-105"
                  : "w-14 h-12 border-[#262626] opacity-60 hover:opacity-100 hover:border-[#555]"
              }`}
              title={`${rev.name} — ${rev.service}`}
            >
              <Image
                src={rev.workImage}
                alt={rev.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              {currentIndex === idx && (
                <div className="absolute inset-x-0 bottom-0 bg-[#D4AF37] text-[#0D0D0D] text-[9px] font-semibold text-center py-0.5 truncate px-1">
                  {rev.name.split(" ")[0]}
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Instagram Grid Showcase */}
        <div className="mt-24 pt-16 border-t border-[#1F1F1F]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                Instagram Feed
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl text-[#F5F5F7] mt-0.5">
                @{STUDIO_DETAILS.instagram}
              </h3>
            </div>

            <a
              href={STUDIO_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D4AF37]/40 bg-[#161616] text-[#E5C378] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300 text-xs uppercase tracking-[0.18em] font-medium"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow on Instagram</span>
            </a>
          </div>

          {/* 5-Photo Editorial Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href={STUDIO_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden bg-[#141414] border border-[#222222] hover:border-[#D4AF37]/60 transition-all duration-500 block"
              >
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />

                <div className="absolute inset-0 bg-[#0D0D0D]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-xs">
                  <div className="flex items-center justify-between text-[#D4AF37]">
                    <span className="font-mono text-[11px] flex items-center gap-1">
                      <InstagramIcon className="w-3.5 h-3.5" /> @nirvana_tattoo_studi0
                    </span>
                  </div>

                  <p className="text-[11px] text-[#F5F5F7] line-clamp-3 leading-snug font-light">
                    {post.caption}
                  </p>

                  <span className="text-[10px] text-[#E5C378] font-mono tracking-wider">
                    View on Instagram →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox for Viewing Clean Artwork Photo */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-md animate-fadeIn"
          onClick={handleCloseLightbox}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] flex flex-col items-center bg-[#141414] border border-[#333333] rounded-2xl overflow-hidden p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-[#8E8E93] hover:text-[#F5F5F7] border border-white/10 transition-colors z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo */}
            <div className="relative w-full aspect-square max-h-[65vh] rounded-xl overflow-hidden bg-black mb-4">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                fill
                className="object-contain"
              />
            </div>

            {/* Details & CTA */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-[#222]">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block">
                  Studio Work by Rishith Reddy
                </span>
                <h4 className="font-cinzel text-base text-[#F5F5F7]">
                  {lightboxImage.tag}
                </h4>
              </div>

              <a
                href={STUDIO_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
