import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nirvana Tattoo Studio | Tattoos, Laser Removal & Piercing | Kondapur, Hyderabad",
  description:
    "Nirvana Tattoo Studio in Kondapur, Hyderabad. Professional custom tattoos, Pico laser tattoo removal, and sterile ear and body piercing by artist Rishith Reddy.",
  keywords: [
    "Nirvana Tattoo Studio",
    "Tattoo Studio Kondapur",
    "Tattoo Studio Hyderabad",
    "Tattoo Removal Hyderabad",
    "Laser Tattoo Removal Kondapur",
    "Piercing Studio Hyderabad",
    "Rishith Reddy Tattoo",
  ],
  authors: [{ name: "Nirvana Tattoo Studio" }],
};

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#0D0D0D] text-[#F5F5F7] font-sans selection:bg-[#D4AF37]/30 selection:text-[#E5C378] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
