"use client";

import React from "react";
import { ShieldCheck, CheckCircle2, HeartHandshake } from "lucide-react";

export default function ExperienceCraft() {
  const steps = [
    {
      num: "01",
      title: "Consultation & Design",
      desc: "We discuss your design ideas, placement, and size. You can bring reference images or let Rishith customize the design to suit your preferences.",
    },
    {
      num: "02",
      title: "Custom Sizing & Stencil Placement",
      desc: "A temporary stencil is placed on your skin so you can see the exact sizing and positioning in the mirror before we start.",
    },
    {
      num: "03",
      title: "The Session",
      desc: "All tattooing, laser removal, and piercing procedures are performed using pre-sterilized single-use equipment opened directly in front of you.",
    },
    {
      num: "04",
      title: "Aftercare Guidance",
      desc: "We apply a protective breathable bandage and provide clear instructions on cleaning and healing your new tattoo or piercing.",
    },
  ];

  const safetyItems = [
    {
      title: "Fresh Single-Use Needles",
      desc: "Every tattoo and piercing needle comes sealed and is opened fresh for your session, then safely disposed of.",
    },
    {
      title: "Certified Inks & Pigments",
      desc: "We use tested, safe organic tattoo inks that heal evenly and maintain their tone over time.",
    },
    {
      title: "Surface & Station Sanitization",
      desc: "All client chairs, work surfaces, and clip cords are disinfected and covered with protective barrier film before each appointment.",
    },
    {
      title: "Safe Laser Removal Standards",
      desc: "Pico laser removal is calibrated according to your skin type and ink depth to prevent burns or scarring.",
    },
  ];

  return (
    <section id="hygiene" className="py-20 px-5 sm:px-8 bg-[#0D0D0D] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#141414] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[10px] tracking-wider uppercase text-[#E5C378] font-medium">
              Studio Process
            </span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-normal tracking-wide text-[#F5F5F7] mb-3">
            How We Work
          </h2>

          <p className="text-xs sm:text-sm text-[#8E8E93] font-light leading-relaxed">
            Straightforward procedures, clean equipment, and honest advice for every client who walks through our doors.
          </p>
        </div>

        {/* Two-Column Process and Safety */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Column 1: Step by Step */}
          <div className="bg-[#141414] border border-[#222222] p-6 sm:p-8 rounded-2xl flex flex-col gap-6">
            <h3 className="font-cinzel text-lg sm:text-xl text-[#F5F5F7] pb-4 border-b border-[#222222]">
              Appointment Steps
            </h3>

            <div className="flex flex-col gap-6">
              {steps.map((st) => (
                <div key={st.num} className="flex items-start gap-4">
                  <span className="font-cinzel text-lg text-[#D4AF37] font-semibold shrink-0">
                    {st.num}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F5F7]">
                      {st.title}
                    </h4>
                    <p className="text-xs text-[#8E8E93] leading-relaxed mt-1 font-light">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Safety & Aftercare */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#141414] border border-[#222222] p-6 sm:p-8 rounded-2xl flex flex-col gap-5">
              <h3 className="font-cinzel text-lg sm:text-xl text-[#F5F5F7] pb-4 border-b border-[#222222]">
                Safety & Cleanliness
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {safetyItems.map((item) => (
                  <div key={item.title} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <h4 className="text-xs font-semibold text-[#F5F5F7]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#8E8E93] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Touch-Up Guarantee */}
            <div className="rounded-2xl border border-[#2B2B2B] bg-[#141414] p-5 sm:p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-black border border-[#2B2B2B] text-[#D4AF37] shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#F5F5F7]">
                  Healed Check-In & Touch-Up
                </h4>
                <p className="text-xs text-[#8E8E93] font-light mt-1 leading-relaxed">
                  We check in on your tattoo once it has healed. If any minor touch-up is needed after the healing period, we take care of it for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
