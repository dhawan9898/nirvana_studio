"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PORTFOLIO_WORKS, PortfolioItem, } from "@/data/studioData";
import { X, ZoomIn, MessageCircle, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

type FilterType = "all" | "Tattoo" | "Tattoo Removal" | "Piercing";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(16);

  const filteredItems =
    activeFilter === "all"
      ? PORTFOLIO_WORKS
      : PORTFOLIO_WORKS.filter((item) => item.serviceType === activeFilter);

  const modalOpen = selectedItemIndex !== null;
  // Lock page scroll while the lightbox is open
  useEffect(() => {
    if (!modalOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [modalOpen]);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleOpenModal = (index: number) => {
    setSelectedItemIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedItemIndex(null);
  };

  const handlePrevInModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNextInModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => (prev! + 1) % filteredItems.length);
    }
  };

  const handleWhatsAppInquiry = (item: PortfolioItem) => {
    const text = encodeURIComponent(
      `Hi Rishith! I saw your work on ${item.tag} (${item.serviceType}) on your studio website and would like to get something similar done.`
    );
    window.open(`https://wa.me/919966609982?text=${text}`, "_blank");
  };

  const tattooCount = PORTFOLIO_WORKS.filter((i) => i.serviceType === "Tattoo").length;
  const removalCount = PORTFOLIO_WORKS.filter((i) => i.serviceType === "Tattoo Removal").length;
  const piercingCount = PORTFOLIO_WORKS.filter((i) => i.serviceType === "Piercing").length;

  const filterTabs: { label: string; count: number; value: FilterType }[] = [
    { label: "All Works", count: PORTFOLIO_WORKS.length, value: "all" },
    { label: "Tattoos", count: tattooCount, value: "Tattoo" },
    { label: "Tattoo Removal", count: removalCount, value: "Tattoo Removal" },
    { label: "Piercings", count: piercingCount, value: "Piercing" },
  ];

  const selectedItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  return (
    <section id="work" className="py-20 px-5 sm:px-8 bg-[#0D0D0D] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#141414] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[10px] tracking-wider uppercase text-[#E5C378] font-medium">
              Curated Studio Works
            </span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-normal tracking-wide text-[#F5F5F7] mb-3">
            Recent Tattoos, Removal & Piercings
          </h2>

          <p className="max-w-xl text-xs sm:text-sm text-[#8E8E93] font-light">
            Real photography from our sessions at Nirvana Studio in Kondapur. Over 48 verified works selected directly from our Instagram portfolio.
          </p>

          {/* Clean Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1 rounded-full bg-[#141414] border border-[#222222]">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => {
                  setActiveFilter(tab.value);
                  setVisibleCount(16);
                }}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all font-medium cursor-pointer flex items-center gap-1.5 ${
                  activeFilter === tab.value
                    ? "bg-[#D4AF37] text-[#0D0D0D] shadow-sm font-semibold"
                    : "text-[#8E8E93] hover:text-[#F5F5F7] hover:bg-[#1A1A1A]"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeFilter === tab.value
                    ? "bg-black/20 text-black"
                    : "bg-[#222] text-[#8E8E93]"
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Visual-First Grid (Clean tags, photography focus) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenModal(idx)}
              className="group relative cursor-pointer rounded-xl overflow-hidden bg-[#141414] border border-[#222222] hover:border-[#D4AF37]/60 transition-all duration-300"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#0A0A0A]">
                <Image
                  src={item.image}
                  alt={item.tag}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5">
                  <div className="self-end p-1.5 rounded-full bg-black/60 text-[#D4AF37]">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider bg-[#D4AF37] text-black font-semibold inline-block mb-1">
                      {item.serviceType}
                    </span>
                    <span className="block text-xs font-medium text-[#F5F5F7]">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Subtle Permanent Corner Badge */}
                <div className="absolute bottom-2.5 left-2.5 group-hover:opacity-0 transition-opacity">
                  <span className="px-2 py-0.5 rounded-full text-[10px] tracking-wide bg-black/75 backdrop-blur-sm text-[#E5C378] border border-white/10 font-medium">
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 16)}
              className="px-8 py-3.5 rounded-full border border-[#D4AF37]/50 bg-[#141414] hover:bg-[#D4AF37] text-[#E5C378] hover:text-black transition-all duration-300 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Load More Works ({filteredItems.length - visibleCount} more)</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal with Carousel Navigation */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/92 backdrop-blur-md animate-fadeIn"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-2xl bg-[#141414] border border-[#333333] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-[#D4D4D8] hover:text-[#D4AF37] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev / Next Buttons in Modal */}
            <button
              onClick={handlePrevInModal}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/70 hover:bg-[#D4AF37] text-white hover:text-black border border-white/10 transition-colors cursor-pointer"
              aria-label="Previous artwork"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextInModal}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/70 hover:bg-[#D4AF37] text-white hover:text-black border border-white/10 transition-colors cursor-pointer"
              aria-label="Next artwork"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Photo */}
            <div className="relative aspect-square w-full max-h-[70vh] bg-black">
              <Image
                src={selectedItem.image}
                alt={selectedItem.tag}
                fill
                className="object-contain"
              />
            </div>

            {/* Bottom Info Bar */}
            <div className="p-5 bg-[#121212] border-t border-[#222222] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold block">
                  {selectedItem.serviceType} • Inked at Nirvana Tattoo Studio
                </span>
                <span className="text-base font-semibold text-[#F5F5F7] mt-0.5 block">
                  {selectedItem.tag}
                </span>
                <span className="text-xs text-[#8E8E93] font-light">
                  Kondapur, Hyderabad • Artist: Rishith Reddy • Piece {selectedItemIndex! + 1} of {filteredItems.length}
                </span>
              </div>

              <button
                onClick={() => handleWhatsAppInquiry(selectedItem)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Inquire on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
