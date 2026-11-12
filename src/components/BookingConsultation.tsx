"use client";

import React, { useState } from "react";
import Image from "next/image";
import { STUDIO_DETAILS, PortfolioItem } from "@/data/studioData";
import {
  Sparkles,
  Calendar,
  Clock,
  UploadCloud,
  CheckCircle2,
  X,
  FileCheck,
  Send,
  MessageCircle,
  Shield,
  Layers,
  Zap,
  Gem,
} from "lucide-react";

interface BookingConsultationProps {
  initialPiece?: PortfolioItem | null;
}

export default function BookingConsultation({
  initialPiece = null,
}: BookingConsultationProps) {
  // Personal Info
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Exactly 3 Core Services: Tattoo, Tattoo Removal, Piercing
  const [service, setService] = useState<"Tattoo" | "Tattoo Removal" | "Piercing">(
    (initialPiece?.serviceType as "Tattoo" | "Tattoo Removal" | "Piercing") || "Tattoo"
  );

  // Sub-options for Tattoo
  const [tattooStyle, setTattooStyle] = useState("Custom Tattoo");
  const [placement, setPlacement] = useState("Forearm");
  const [size, setSize] = useState("Medium (4\" – 6\")");

  // Sub-options for Tattoo Removal
  const [removalGoal, setRemovalGoal] = useState("Complete Laser Clearance");
  const [tattooAge, setTattooAge] = useState("1 – 5 Years Old");

  // Sub-options for Piercing
  const [piercingLocation, setPiercingLocation] = useState("Ear Helix / Cartilage");

  // Scheduling & Notes
  const [preferredDate, setPreferredDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("Afternoon (2:00 PM – 6:00 PM)");
  const [conceptNotes, setConceptNotes] = useState(
    initialPiece ? `Interested in work similar to: ${initialPiece.tag} (${initialPiece.serviceType}).` : ""
  );

  // Simulated image upload state
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string>("");

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState("");

  const tattooPlacementOptions = [
    "Forearm",
    "Upper Arm / Shoulder",
    "Spine / Cervical Back",
    "Sternum / Ribcage",
    "Thigh / Lower Leg",
    "Collarbone",
    "Wrist / Hand",
    "Other Placement",
  ];

  const tattooSizeOptions = [
    { label: "Small / Micro", sub: "Under 3 inches", desc: "Single-session minimal piece" },
    { label: "Medium", sub: "4 – 6 inches", desc: "Detailed forearm or arm canvas" },
    { label: "Large", sub: "7 – 10 inches", desc: "Expansive multi-hour artwork" },
    { label: "Full Composition", sub: "Sleeve / Backpiece", desc: "Multi-session bespoke project" },
  ];

  const piercingOptions = [
    "Ear Helix / Cartilage",
    "Standard Earlobe (Single/Pair)",
    "Conch Piercing",
    "Tragus Piercing",
    "Nose / Nostril Piercing",
    "Septum Piercing",
    "Navel / Belly Piercing",
    "Other Piercing Placement",
  ];

  const handleImageUploadSimulation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
    setUploadedFileName("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomCode = `NIRVANA-HYD-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceCode(randomCode);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleWhatsAppExpedite = () => {
    let serviceDetail = "";
    if (service === "Tattoo") {
      serviceDetail = `Style: ${tattooStyle}, Placement: ${placement}, Size: ${size}`;
    } else if (service === "Tattoo Removal") {
      serviceDetail = `Goal: ${removalGoal}, Placement: ${placement}, Tattoo Age: ${tattooAge}`;
    } else {
      serviceDetail = `Piercing: ${piercingLocation}`;
    }

    const text = encodeURIComponent(
      `Hello Rishith! I just submitted an appointment inquiry at Nirvana Tattoo Studio (Ref: ${referenceCode}). Name: ${fullName}, Service: ${service} (${serviceDetail}). Looking forward to scheduling my session.`
    );
    window.open(`https://wa.me/919966609982?text=${text}`, "_blank");
  };

  return (
    <section id="booking" className="py-24 px-5 sm:px-8 bg-[#0D0D0D] border-t border-[#1C1C1C] relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#141414] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#E5C378] font-light">
              Direct Studio Appointment
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-normal tracking-wide text-[#F5F5F7] mb-3">
            Book With Rishith Reddy
          </h2>

          <p className="max-w-xl text-sm sm:text-base text-[#8E8E93] font-light">
            All appointments are conducted one-on-one by founder & lead artist{" "}
            <span className="text-[#F5F5F7] font-medium">Rishith Reddy</span> in our private
            Kondapur studio. Select your service below.
          </p>
        </div>

        {/* The Intake Form */}
        <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 sm:p-10 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Step 1: Client Coordinates */}
            <div>
              <div className="flex items-center gap-2.5 pb-4 border-b border-[#222222] mb-6">
                <span className="font-cinzel text-sm text-[#D4AF37]">01</span>
                <h3 className="font-cinzel text-base sm:text-lg text-[#F5F5F7] tracking-wider uppercase">
                  Client Contact Coordinates
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-2">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Siddharth Varma"
                    className="w-full px-4 py-3 rounded-lg bg-[#0D0D0D] border border-[#2B2B2B] text-sm text-[#F5F5F7] placeholder-[#52525B] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="siddharth@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-[#0D0D0D] border border-[#2B2B2B] text-sm text-[#F5F5F7] placeholder-[#52525B] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 99666 09982"
                    className="w-full px-4 py-3 rounded-lg bg-[#0D0D0D] border border-[#2B2B2B] text-sm text-[#F5F5F7] placeholder-[#52525B] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Exactly 3 Services: Tattoo, Tattoo Removal, Piercing */}
            <div>
              <div className="flex items-center gap-2.5 pb-4 border-b border-[#222222] mb-6">
                <span className="font-cinzel text-sm text-[#D4AF37]">02</span>
                <h3 className="font-cinzel text-base sm:text-lg text-[#F5F5F7] tracking-wider uppercase">
                  Select Studio Service
                </h3>
              </div>

              {/* 3 Service Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {/* 1. Tattoo */}
                <button
                  type="button"
                  onClick={() => setService("Tattoo")}
                  className={`p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 ${
                    service === "Tattoo"
                      ? "bg-[#D4AF37]/15 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                      : "bg-[#0D0D0D] border-[#262626] hover:border-[#404040]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Layers className={`w-5 h-5 ${service === "Tattoo" ? "text-[#D4AF37]" : "text-[#71717A]"}`} />
                    {service === "Tattoo" && (
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    )}
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold uppercase tracking-wider ${
                      service === "Tattoo" ? "text-[#E5C378]" : "text-[#F5F5F7]"
                    }`}>
                      Tattoo
                    </h4>
                    <p className="text-xs text-[#8E8E93] mt-1 font-light leading-snug">
                      Custom ink, micro-realism, fine line, sacred geometry & cover-ups.
                    </p>
                  </div>
                </button>

                {/* 2. Tattoo Removal */}
                <button
                  type="button"
                  onClick={() => setService("Tattoo Removal")}
                  className={`p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 ${
                    service === "Tattoo Removal"
                      ? "bg-[#D4AF37]/15 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                      : "bg-[#0D0D0D] border-[#262626] hover:border-[#404040]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Zap className={`w-5 h-5 ${service === "Tattoo Removal" ? "text-[#D4AF37]" : "text-[#71717A]"}`} />
                    {service === "Tattoo Removal" && (
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    )}
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold uppercase tracking-wider ${
                      service === "Tattoo Removal" ? "text-[#E5C378]" : "text-[#F5F5F7]"
                    }`}>
                      Tattoo Removal
                    </h4>
                    <p className="text-xs text-[#8E8E93] mt-1 font-light leading-snug">
                      Advanced Pico Laser fading or complete scar-free clearance.
                    </p>
                  </div>
                </button>

                {/* 3. Piercing */}
                <button
                  type="button"
                  onClick={() => setService("Piercing")}
                  className={`p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 ${
                    service === "Piercing"
                      ? "bg-[#D4AF37]/15 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                      : "bg-[#0D0D0D] border-[#262626] hover:border-[#404040]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Gem className={`w-5 h-5 ${service === "Piercing" ? "text-[#D4AF37]" : "text-[#71717A]"}`} />
                    {service === "Piercing" && (
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    )}
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold uppercase tracking-wider ${
                      service === "Piercing" ? "text-[#E5C378]" : "text-[#F5F5F7]"
                    }`}>
                      Piercing
                    </h4>
                    <p className="text-xs text-[#8E8E93] mt-1 font-light leading-snug">
                      Precision sterile needle piercings with titanium studs.
                    </p>
                  </div>
                </button>
              </div>

              {/* Dynamic Service Sub-Fields */}
              {service === "Tattoo" && (
                <div className="space-y-6 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-2">
                        Tattoo Style
                      </label>
                      <select
                        value={tattooStyle}
                        onChange={(e) => setTattooStyle(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-[#0D0D0D] border border-[#2B2B2B] text-sm text-[#F5F5F7] focus:border-[#D4AF37] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Micro-Realism">Micro-Realism & Portraits</option>
                        <option value="Spiritual Devotion">Spiritual Art (Lord Hanuman, Devanagari)</option>
                        <option value="Fine Line">Delicate Single-Needle Fine Line</option>
                        <option value="Blackwork">Sacred Geometry & Mandala Blackwork</option>
                        <option value="Cover-Up">Cover-Up Transformation</option>
                        <option value="Custom Ink">Bespoke Custom Concept</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-2">
                        Placement Area
                      </label>
                      <select
                        value={placement}
                        onChange={(e) => setPlacement(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-[#0D0D0D] border border-[#2B2B2B] text-sm text-[#F5F5F7] focus:border-[#D4AF37] focus:outline-none transition-colors cursor-pointer"
                      >
                        {tattooPlacementOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Size Selectors */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-3">
                      Estimated Dimensions:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {tattooSizeOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt.label}
                          onClick={() => setSize(opt.label)}
                          className={`p-3 rounded-lg text-left transition-all border cursor-pointer ${
                            size === opt.label
                              ? "bg-[#D4AF37]/15 border-[#D4AF37]"
                              : "bg-[#0D0D0D] border-[#262626] hover:border-[#404040]"
                          }`}
                        >
                          <span className={`block text-xs font-semibold uppercase tracking-wider ${
                            size === opt.label ? "text-[#E5C378]" : "text-[#F5F5F7]"
                          }`}>
                            {opt.label}
                          </span>
                          <span className="block text-[10px] font-mono text-[#71717A] mt-0.5">
                            {opt.sub}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {service === "Tattoo Removal" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-2">
                      Laser Removal Goal
                    </label>
                    <select
                      value={removalGoal}
                      onChange={(e) => setRemovalGoal(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#0D0D0D] border border-[#2B2B2B] text-sm text-[#F5F5F7] focus:border-[#D4AF37] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Complete Laser Clearance">Complete Clearance (100% Removal)</option>
                      <option value="Fading for Cover-Up">Lightening / Fading for Cover-Up Tattoo</option>
                      <option value="Partial Tattoo Adjustment">Partial Ink Line Removal</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-2">
                      Approximate Age of Tattoo
                    </label>
                    <select
                      value={tattooAge}
                      onChange={(e) => setTattooAge(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#0D0D0D] border border-[#2B2B2B] text-sm text-[#F5F5F7] focus:border-[#D4AF37] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Less than 1 Year">Less than 1 Year Old</option>
                      <option value="1 – 5 Years Old">1 – 5 Years Old</option>
                      <option value="5+ Years Old">Older than 5 Years</option>
                    </select>
                  </div>
                </div>
              )}

              {service === "Piercing" && (
                <div className="pt-2">
                  <label className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-2">
                    Select Piercing Location
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {piercingOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setPiercingLocation(opt)}
                        className={`px-3 py-2.5 rounded-lg text-xs uppercase tracking-wider text-left transition-all border cursor-pointer ${
                          piercingLocation === opt
                            ? "bg-[#D4AF37]/15 border-[#D4AF37] text-[#E5C378] font-medium"
                            : "bg-[#0D0D0D] border-[#262626] text-[#A1A1AA] hover:border-[#404040]"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Step 3: Scheduling & Details */}
            <div>
              <div className="flex items-center gap-2.5 pb-4 border-b border-[#222222] mb-6">
                <span className="font-cinzel text-sm text-[#D4AF37]">03</span>
                <h3 className="font-cinzel text-base sm:text-lg text-[#F5F5F7] tracking-wider uppercase">
                  Appointment Date & Visual Reference
                </h3>
              </div>

              <div className="space-y-6">
                {/* Scheduling */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#0D0D0D] border border-[#2B2B2B] text-sm text-[#F5F5F7] focus:border-[#D4AF37] focus:outline-none transition-colors [color-scheme:dark]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-2">
                      Preferred Time Window
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#0D0D0D] border border-[#2B2B2B] text-sm text-[#F5F5F7] focus:border-[#D4AF37] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Morning (11:00 AM – 2:00 PM)">Morning (11:00 AM – 2:00 PM)</option>
                      <option value="Afternoon (2:00 PM – 6:00 PM)">Afternoon (2:00 PM – 6:00 PM)</option>
                      <option value="Evening (6:00 PM – 9:00 PM)">Evening (6:00 PM – 9:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-2">
                    Session Notes / Description
                  </label>
                  <textarea
                    rows={3}
                    value={conceptNotes}
                    onChange={(e) => setConceptNotes(e.target.value)}
                    placeholder={
                      service === "Tattoo"
                        ? "Describe your design vision, elements, size, and personal significance..."
                        : service === "Tattoo Removal"
                        ? "Describe the existing tattoo size, color, age, and previous treatments..."
                        : "Describe the piercing location, jewelry preference, or any skin sensitivity..."
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#0D0D0D] border border-[#2B2B2B] text-sm text-[#F5F5F7] placeholder-[#52525B] focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Simulated Image Upload */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-2">
                    Reference Image or Current Tattoo Photo (Optional)
                  </label>

                  {uploadedImage ? (
                    <div className="p-4 rounded-xl bg-[#0D0D0D] border border-[#D4AF37]/40 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-[#333333]">
                          <img
                            src={uploadedImage}
                            alt="Reference"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <span className="text-xs text-[#F5F5F7] font-medium block truncate max-w-xs">
                            {uploadedFileName}
                          </span>
                          <span className="text-[10px] text-[#D4AF37] flex items-center gap-1">
                            <FileCheck className="w-3 h-3" /> Attached for Rishith&apos;s review
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="p-1.5 rounded-full hover:bg-[#1E1E1E] text-[#8E8E93] hover:text-[#EF4444] transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <label className="border-2 border-dashed border-[#2B2B2B] hover:border-[#D4AF37]/50 rounded-xl p-5 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors bg-[#0D0D0D]/50">
                      <UploadCloud className="w-6 h-6 text-[#D4AF37]" />
                      <span className="text-xs text-[#F5F5F7] font-medium">
                        Click or drag images to upload sketches or current tattoo photo
                      </span>
                      <span className="text-[10px] text-[#71717A]">
                        Supports PNG, JPG, WEBP (Up to 10MB)
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUploadSimulation}
                      />
                    </label>
                  )}
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left text-xs text-[#71717A] max-w-sm">
                Direct one-on-one session with <strong>Rishith Reddy</strong>. We respond via WhatsApp within 24 hours.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#E5C378] text-[#0D0D0D] font-semibold text-xs uppercase tracking-[0.22em] transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.35)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#0D0D0D] border-t-transparent rounded-full animate-spin" />
                    <span>Booking Session...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Confirm {service} Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal Receipt */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#141414] border border-[#D4AF37]/50 rounded-2xl p-8 sm:p-10 shadow-[0_0_80px_rgba(212,175,55,0.25)] text-center">
            {/* Close Button */}
            <button
              onClick={() => setIsSubmitted(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#8E8E93] hover:text-[#F5F5F7] hover:bg-[#222222] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Seal / Icon */}
            <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#D4AF37] flex items-center justify-center mx-auto mb-6 text-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.3)]">
              <Sparkles className="w-8 h-8" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#E5C378] font-semibold block mb-1">
              Appointment Request Received
            </span>

            <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F5F5F7] mb-3">
              Nirvana Studio
            </h3>

            <p className="text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed mb-6">
              Thank you, <strong className="text-[#F5F5F7] font-medium">{fullName}</strong>. Your request for{" "}
              <strong className="text-[#E5C378]">{service}</strong> has been forwarded directly to{" "}
              <strong className="text-[#F5F5F7]">Rishith Reddy</strong>.
            </p>

            {/* Dossier Code Card */}
            <div className="p-4 rounded-xl bg-[#0D0D0D] border border-[#262626] text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between border-b border-[#1E1E1E] pb-1.5">
                <span className="text-[#71717A] uppercase text-[10px] tracking-wider">Reference Code</span>
                <span className="font-mono text-[#D4AF37] font-bold">{referenceCode}</span>
              </div>
              <div className="flex justify-between border-b border-[#1E1E1E] pb-1.5">
                <span className="text-[#71717A] uppercase text-[10px] tracking-wider">Service Selected</span>
                <span className="text-[#F5F5F7] font-medium">{service}</span>
              </div>
              <div className="flex justify-between border-b border-[#1E1E1E] pb-1.5">
                <span className="text-[#71717A] uppercase text-[10px] tracking-wider">Sole Artist</span>
                <span className="text-[#F5F5F7]">Rishith Reddy</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#71717A] uppercase text-[10px] tracking-wider">Studio Location</span>
                <span className="text-[#F5F5F7]">Kondapur, Hyderabad</span>
              </div>
            </div>

            {/* Expedite via WhatsApp CTA */}
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppExpedite}
                className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Expedite via WhatsApp (+91 99666 09982)</span>
              </button>

              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full py-3 rounded-full border border-[#2B2B2B] text-xs uppercase tracking-wider text-[#8E8E93] hover:text-[#F5F5F7] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
