import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingConsultation from "@/components/BookingConsultation";
import StudioLocation from "@/components/StudioLocation";

export const metadata: Metadata = {
  title: "Book Consultation & Location | Nirvana Tattoo Studio Hyderabad",
  description:
    "Schedule an appointment with artist Rishith Reddy for tattoos, Pico laser tattoo removal, or body piercing at Nirvana Tattoo Studio, Kondapur, Hyderabad. Open daily 10:00 AM – 9:00 PM.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-[#F5F5F7] font-sans overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-[#E5C378]">
      <Navbar />

      <main className="pt-28 pb-16">
        {/* Direct Appointment Booking Form */}
        <BookingConsultation />

        {/* Studio Location & Timings */}
        <StudioLocation />
      </main>

      <Footer />
    </div>
  );
}

