import json

google_reviews = [
    {
        "id": "gr-1",
        "name": "Rahul Varma",
        "location": "Kondapur, Hyderabad",
        "rating": 5,
        "date": "2 weeks ago",
        "service": "Lord Shiva Rudra Realism Tattoo",
        "serviceType": "Tattoo",
        "quote": "Got my Lord Shiva Rudra piece done by Rishith. The detailing on the trishul, damru, and facial shading is beyond words. Rishith opened brand-new needles right in front of me and made me feel completely relaxed. Easily the best tattoo studio in Kondapur!",
        "workImage": "/assets/works/shiva-rudra-realism.jpg",
        "workTag": "Lord Shiva Rudra"
    },
    {
        "id": "gr-2",
        "name": "Vikramaditya Sharma",
        "location": "HITEC City, Hyderabad",
        "rating": 5,
        "date": "1 month ago",
        "service": "Pico Laser Tattoo Removal",
        "serviceType": "Tattoo Removal",
        "quote": "I was extremely skeptical about laser removal because of scarring horror stories. Rishith explained the Pico laser science patiently. After just 3 sessions, my dark black ink faded dramatically without any skin texture damage or burn marks. Honest pricing and very hygienic studio.",
        "workImage": "/assets/works/pico-laser-removal-clearance.jpg",
        "workTag": "Complete Laser Clearance"
    },
    {
        "id": "gr-3",
        "name": "Ananya Joshi",
        "location": "Madhapur, Hyderabad",
        "rating": 5,
        "date": "3 weeks ago",
        "service": "Flat Helix Cartilage Piercing",
        "serviceType": "Piercing",
        "quote": "Got a flat helix piercing done here. Rishith was exceptionally gentle and calm. Used sterilized single-use cannula needles—absolutely zero painful piercing guns. He gave me detailed saline aftercare tips and it healed in 4 weeks with no infection or swelling.",
        "workImage": "/assets/works/flat-helix-cartilage-piercing.jpg",
        "workTag": "Flat Helix Piercing"
    },
    {
        "id": "gr-4",
        "name": "Siddharth Reddy",
        "location": "Gachibowli, Hyderabad",
        "rating": 5,
        "date": "1 month ago",
        "service": "Lord Hanuman Masterpiece Tattoo",
        "serviceType": "Tattoo",
        "quote": "If you want hyper-detailed portrait or devotional realism in Hyderabad, Rishith is the man. My Bajrangbali Hanuman tattoo is pure perfection—the eyes and muscle anatomy look alive. Incredible focus and discipline throughout a 6-hour sitting.",
        "workImage": "/assets/works/hanuman-masterpiece.webp",
        "workTag": "Lord Hanuman Realism"
    },
    {
        "id": "gr-5",
        "name": "Sravani Kolli",
        "location": "Kondapur, Hyderabad",
        "rating": 5,
        "date": "2 months ago",
        "service": "Fine Line Butterfly & Floral Tattoo",
        "serviceType": "Tattoo",
        "quote": "Got a delicate fine-line butterfly with floral bouquet on my forearm. The linework is paper-thin and razor sharp. Rishith adjusted the stencil multiple times until I was 100% happy with placement. Studio is spotless and air-conditioned.",
        "workImage": "/assets/works/butterfly-with-flowers.jpg",
        "workTag": "Butterfly with Florals"
    },
    {
        "id": "gr-6",
        "name": "Karthik Rao",
        "location": "Jubilee Hills, Hyderabad",
        "rating": 5,
        "date": "3 weeks ago",
        "service": "Wildlife Wolf Realism Tattoo",
        "serviceType": "Tattoo",
        "quote": "Got a realistic wolf tattoo on my shoulder blade. The fur texture, depth, and contrast are mind-blowing. Rishith is a genuine artist who doesn't rush. Premium equipment and great aftercare follow-up. 10/10 recommended!",
        "workImage": "/assets/works/wolf-wildlife-realism.jpg",
        "workTag": "Wolf Wildlife Realism"
    },
    {
        "id": "gr-7",
        "name": "Megha Patel",
        "location": "Kondapur, Hyderabad",
        "rating": 5,
        "date": "1 month ago",
        "service": "Precision Nose Stud Piercing",
        "serviceType": "Piercing",
        "quote": "Got both my nostril and septum piercings done. I was terrified of the pain, but Rishith did it in seconds with almost zero pain. Completely clean, pre-sterilized titanium studs used. Healing was super smooth. Definitely coming back for ear piercings!",
        "workImage": "/assets/works/nose-stud-piercing.jpg",
        "workTag": "Precision Nose Stud"
    },
    {
        "id": "gr-8",
        "name": "Rajesh Kannan",
        "location": "Kukatpally, Hyderabad",
        "rating": 5,
        "date": "2 months ago",
        "service": "Cover-Up Transformation Tattoo",
        "serviceType": "Tattoo",
        "quote": "Had a 10-year-old faded tribal tattoo that I hated. Rishith designed a custom darkwork cover-up that completely swallowed the old ink. You cannot even spot a trace of the old tattoo! Master-level execution.",
        "workImage": "/assets/works/coverup-transformation-1.jpg",
        "workTag": "Cover-Up Transformation"
    },
    {
        "id": "gr-9",
        "name": "Divya Teja",
        "location": "Banjara Hills, Hyderabad",
        "rating": 5,
        "date": "3 weeks ago",
        "service": "Sacred Mandala Dotwork Tattoo",
        "serviceType": "Tattoo",
        "quote": "The geometric symmetry in my mandala forearm piece is immaculate. Every single dot and circle aligns perfectly. Rishith's hand stability is extraordinary. Clean studio right on Botanical Garden road opposite the hospital.",
        "workImage": "/assets/works/sacred-mandala-dotwork.jpg",
        "workTag": "Sacred Mandala Dotwork"
    },
    {
        "id": "gr-10",
        "name": "Praveen Nair",
        "location": "HITEC City, Hyderabad",
        "rating": 5,
        "date": "1 month ago",
        "service": "Sanskrit Mantra Calligraphy Tattoo",
        "serviceType": "Tattoo",
        "quote": "Got an intricate Sanskrit mantra scripted on my inner forearm. Rishith's calligraphy precision is unmatched—sharp, even depth, no ink blowouts whatsoever. He takes immense pride in hygiene and sterilization.",
        "workImage": "/assets/works/sanskrit-shloka-forearm.jpg",
        "workTag": "Sanskrit Mantra Script"
    }
]

# Generate typescript file
ts_content = f"""export interface PortfolioItem {{
  id: string;
  serviceType: "Tattoo" | "Tattoo Removal" | "Piercing";
  tag: string;
  image: string;
}}

export interface ServiceDetail {{
  id: "tattoo" | "tattoo-removal" | "piercing";
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}}

export interface GoogleReview {{
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  serviceType: "Tattoo" | "Tattoo Removal" | "Piercing";
  quote: string;
  workImage: string;
  workTag: string;
}}

export const STUDIO_DETAILS = {{
  name: "NIRVANA TATTOO STUDIO",
  fullName: "Nirvana Tattoo, Removal & Piercing Studio",
  tagline: "Custom Tattoos • Laser Tattoo Removal • Body Piercing",
  location: "Kondapur, Hyderabad",
  fullAddress: "House No. 157/5, Opp. Government Civil Hospital, Sri Ram Nagar, Botanical Garden Road, Kondapur, Hyderabad, Telangana — 500084",
  artist: "Rishith Reddy",
  phone: "+91 99666 09982",
  phoneRaw: "9966609982",
  whatsapp: "https://wa.me/919966609982?text=Hi%20Rishith,%20I%20would%20like%20to%20inquire%20about%20a%20tattoo/piercing/laser%20appointment%20at%20Nirvana%20Studio.",
  instagram: "nirvana_tattoo_studi0",
  instagramUrl: "https://instagram.com/nirvana_tattoo_studi0",
  artistInstagramUrl: "https://instagram.com/rishith_reddy_3333",
  googleMapsUrl: "https://maps.google.com/?q=Nirvana+Tattoo+Studio+Kondapur+Hyderabad",
  logo: "/assets/logo.jpg",
  rating: 5.0,
  reviewCount: 396,
  hours: [
    {{ days: "Tuesday – Saturday", time: "11:00 AM – 9:00 PM" }},
    {{ days: "Sunday", time: "12:00 PM – 8:00 PM" }},
    {{ days: "Monday", time: "Appointments by Prior Booking" }},
  ],
}};

export const SERVICES: ServiceDetail[] = [
  {{
    id: "tattoo",
    title: "Custom Tattooing",
    tagline: "Custom designs, realism, fine line & cover-ups",
    description: "Whether you're looking for devotional portraits like Lord Hanuman, hyper-realistic animals, clean sacred geometry, single-needle fine line, or covering up an old tattoo, we work with you to create clean, long-lasting custom tattoos.",
    image: "/assets/works/hanuman-masterpiece.webp",
    features: [
      "Custom original designs drafted for your placement",
      "Specializing in Micro-Realism, Fine Line & Blackwork",
      "Old tattoo cover-ups & rework transformations",
      "100% single-use, pre-sealed needles & organic inks",
    ],
  }},
  {{
    id: "tattoo-removal",
    title: "Laser Tattoo Removal",
    tagline: "Safe Pico Laser ink fading & complete removal",
    description: "Using advanced Pico Laser technology, we safely break down unwanted tattoo pigments beneath the skin. Sessions can target complete clearance or lighten dark tattoos so you can get a clean cover-up with no scarring.",
    image: "/assets/works/pico-laser-removal-result-1.jpg",
    features: [
      "Effective for black, dark grey, and colored inks",
      "Targeted ink fading for cover-up preparation",
      "Non-surgical with minimal downtime & zero scarring",
      "Consultation on estimated session count based on tattoo age & depth",
    ],
  }},
  {{
    id: "piercing",
    title: "Ear & Body Piercing",
    tagline: "Sterile needle piercings with quality jewelry",
    description: "We provide safe, hygienic ear, facial, and body piercings using pre-sterilized single-use needles (never guns) for clean tissue healing, fitted with implant-grade surgical steel and titanium studs.",
    image: "/assets/works/flat-helix-cartilage-piercing.jpg",
    features: [
      "Ear Piercings: Lobe, Helix, Conch, Tragus & Flat Helix",
      "Facial & Body Piercings: Nose, Septum & Navel/Belly",
      "Strictly sterile single-use cannula needles (no piercing guns)",
      "Clear aftercare instructions and saline cleaning guidance",
    ],
  }},
];

export const GOOGLE_REVIEWS: GoogleReview[] = {json.dumps(google_reviews, indent=2)};

// 48+ Best Curated Instagram Works
export const PORTFOLIO_WORKS: PortfolioItem[] = [
  // --- DEVOTIONAL & SPIRITUAL TATTOOS ---
  {{
    id: "w-hanuman",
    serviceType: "Tattoo",
    tag: "Lord Hanuman Realism",
    image: "/assets/works/hanuman-masterpiece.webp",
  }},
  {{
    id: "w-shiva-rudra",
    serviceType: "Tattoo",
    tag: "Lord Shiva Rudra",
    image: "/assets/works/shiva-rudra-realism.jpg",
  }},
  {{
    id: "w-om-bhagavate",
    serviceType: "Tattoo",
    tag: "Om Namo Bhagavate Mantra",
    image: "/assets/works/om-namo-bhagavate.jpg",
  }},
  {{
    id: "w-sanskrit-shloka",
    serviceType: "Tattoo",
    tag: "Sanskrit Shloka",
    image: "/assets/works/sanskrit-shloka-forearm.jpg",
  }},
  {{
    id: "w-swastik-om",
    serviceType: "Tattoo",
    tag: "Sacred Swastik & Om",
    image: "/assets/works/swastik-om-devotional.jpg",
  }},
  {{
    id: "w-antah-asti",
    serviceType: "Tattoo",
    tag: "Antah Asti Prarambah Script",
    image: "/assets/works/antah-asti-prarambah.jpg",
  }},

  // --- REALISM & PORTRAITS ---
  {{
    id: "w-wolf-realism",
    serviceType: "Tattoo",
    tag: "Wolf Wildlife Realism",
    image: "/assets/works/wolf-wildlife-realism.jpg",
  }},
  {{
    id: "w-joker-portrait",
    serviceType: "Tattoo",
    tag: "Joker Portrait Realism",
    image: "/assets/works/joker-portrait-realism.jpg",
  }},
  {{
    id: "w-phoenix",
    serviceType: "Tattoo",
    tag: "Rising Phoenix",
    image: "/assets/works/phoenix-mythical-realism.jpg",
  }},
  {{
    id: "w-japanese-dragon",
    serviceType: "Tattoo",
    tag: "Japanese Dragon",
    image: "/assets/works/japanese-dragon-realism.jpg",
  }},
  {{
    id: "w-cat-realism",
    serviceType: "Tattoo",
    tag: "Feline Realism",
    image: "/assets/works/feline-cat-realism.jpg",
  }},
  {{
    id: "w-got-portrait",
    serviceType: "Tattoo",
    tag: "Game of Thrones Art",
    image: "/assets/works/game-of-thrones-portrait.jpg",
  }},
  {{
    id: "w-piston",
    serviceType: "Tattoo",
    tag: "Mechanical Engine Piston",
    image: "/assets/works/piston-tattoo.webp",
  }},

  // --- FINE LINE, FLORAL & MINIMAL TATTOOS ---
  {{
    id: "w-butterfly-flowers",
    serviceType: "Tattoo",
    tag: "Butterfly with Florals",
    image: "/assets/works/butterfly-with-flowers.jpg",
  }},
  {{
    id: "w-snake-butterfly",
    serviceType: "Tattoo",
    tag: "Serpent & Butterfly Fine Line",
    image: "/assets/works/snake-butterfly-fineline.jpg",
  }},
  {{
    id: "w-lotus-fineline",
    serviceType: "Tattoo",
    tag: "Fine Line Lotus",
    image: "/assets/works/lotus-fine-line.jpg",
  }},
  {{
    id: "w-dog-ears",
    serviceType: "Tattoo",
    tag: "Pet Memorial Line Art",
    image: "/assets/works/dog-ears-memorial.jpg",
  }},
  {{
    id: "w-infinity-minimal",
    serviceType: "Tattoo",
    tag: "Infinity Minimal Line",
    image: "/assets/works/infinity-minimal-ink.jpg",
  }},
  {{
    id: "w-micro-butterfly",
    serviceType: "Tattoo",
    tag: "Micro Butterfly",
    image: "/assets/works/micro-butterfly-wrist.jpg",
  }},
  {{
    id: "w-friendship-minimal",
    serviceType: "Tattoo",
    tag: "Minimal Friendship Art",
    image: "/assets/works/minimal-friendship-geometry.jpg",
  }},
  {{
    id: "w-siblings-love",
    serviceType: "Tattoo",
    tag: "Siblings Love Fine Line",
    image: "/assets/works/siblings-love-fineline.jpg",
  }},

  // --- GEOMETRIC, MANDALAS & DARKWORK ---
  {{
    id: "w-sacred-mandala",
    serviceType: "Tattoo",
    tag: "Sacred Mandala Dotwork",
    image: "/assets/works/sacred-mandala-dotwork.jpg",
  }},
  {{
    id: "w-scorpion-darkwork",
    serviceType: "Tattoo",
    tag: "Scorpion Darkwork",
    image: "/assets/works/scorpion-darkwork.jpg",
  }},
  {{
    id: "w-viking-compass",
    serviceType: "Tattoo",
    tag: "Viking Vegvisir Compass",
    image: "/assets/works/viking-compass-vegvisir.jpg",
  }},
  {{
    id: "w-geometric-linework",
    serviceType: "Tattoo",
    tag: "Geometric Linework Composition",
    image: "/assets/works/geometric-linework-arm.jpg",
  }},

  // --- COVER-UPS & CUSTOM CONCEPTS ---
  {{
    id: "w-coverup-1",
    serviceType: "Tattoo",
    tag: "Cover-Up Transformation",
    image: "/assets/works/coverup-transformation-1.jpg",
  }},
  {{
    id: "w-coverup-2",
    serviceType: "Tattoo",
    tag: "Old Tattoo Rework & Cover",
    image: "/assets/works/coverup-rework-2.jpg",
  }},
  {{
    id: "w-salaar-seal",
    serviceType: "Tattoo",
    tag: "Salaar Insignia Seal",
    image: "/assets/works/salaar-insignia-seal.jpg",
  }},
  {{
    id: "w-skeleton-dance",
    serviceType: "Tattoo",
    tag: "Skeleton Dance Illustrative",
    image: "/assets/works/skeleton-dance-illustrative.jpg",
  }},
  {{
    id: "w-chef-knife",
    serviceType: "Tattoo",
    tag: "Chef Knife & Culinary Custom",
    image: "/assets/works/chef-knife-culinary.jpg",
  }},
  {{
    id: "w-japanese-kanji",
    serviceType: "Tattoo",
    tag: "Japanese Kanji Calligraphy",
    image: "/assets/works/japanese-kanji-script.jpg",
  }},
  {{
    id: "w-keep-me-safe",
    serviceType: "Tattoo",
    tag: "Keep Me Safe Script",
    image: "/assets/works/keep-me-safe-script.jpg",
  }},
  {{
    id: "w-i-am-greater",
    serviceType: "Tattoo",
    tag: "Motivational Script",
    image: "/assets/works/i-am-greater-quote.jpg",
  }},
  {{
    id: "w-veni-vidi-vici",
    serviceType: "Tattoo",
    tag: "Veni Vidi Vici with Dragon",
    image: "/assets/works/veni-vidi-vici-dragon.jpg",
  }},
  {{
    id: "w-matching-couple",
    serviceType: "Tattoo",
    tag: "Matching Couple Ink",
    image: "/assets/works/matching-couple-ink.jpg",
  }},

  // --- PICO LASER TATTOO REMOVAL ---
  {{
    id: "w-rem-result-1",
    serviceType: "Tattoo Removal",
    tag: "Laser Removal Progress",
    image: "/assets/works/pico-laser-removal-result-1.jpg",
  }},
  {{
    id: "w-rem-clearance",
    serviceType: "Tattoo Removal",
    tag: "Complete Ink Clearance",
    image: "/assets/works/pico-laser-removal-clearance.jpg",
  }},
  {{
    id: "w-rem-fading-sessions",
    serviceType: "Tattoo Removal",
    tag: "Multi-Session Fading Comparison",
    image: "/assets/works/pico-laser-fading-sessions.jpg",
  }},
  {{
    id: "w-rem-in-progress",
    serviceType: "Tattoo Removal",
    tag: "Pico Laser Treatment Session",
    image: "/assets/works/laser-session-in-progress.jpg",
  }},
  {{
    id: "w-rem-pre-coverup",
    serviceType: "Tattoo Removal",
    tag: "Pre-Coverup Laser Lightening",
    image: "/assets/works/laser-tattoo-fading-coverup.jpg",
  }},

  // --- STERILE BODY PIERCINGS ---
  {{
    id: "w-piercing-flat-helix",
    serviceType: "Piercing",
    tag: "Flat Helix Cartilage Piercing",
    image: "/assets/works/flat-helix-cartilage-piercing.jpg",
  }},
  {{
    id: "w-piercing-helix-titanium",
    serviceType: "Piercing",
    tag: "Helix Piercing with Titanium Stud",
    image: "/assets/works/helix-titanium-piercing.jpg",
  }},
  {{
    id: "w-piercing-nose-stud",
    serviceType: "Piercing",
    tag: "Precision Nose Stud Piercing",
    image: "/assets/works/nose-stud-piercing.jpg",
  }},
  {{
    id: "w-piercing-septum",
    serviceType: "Piercing",
    tag: "Sterile Septum Piercing",
    image: "/assets/works/septum-piercing.jpg",
  }},
  {{
    id: "w-piercing-belly",
    serviceType: "Piercing",
    tag: "Navel Belly Piercing with Gem",
    image: "/assets/works/belly-navel-piercing.jpg",
  }},
  {{
    id: "w-piercing-double-lobe",
    serviceType: "Piercing",
    tag: "Second Earlobe Piercing",
    image: "/assets/works/double-lobe-piercing.jpg",
  }},
  {{
    id: "w-piercing-ear-curation",
    serviceType: "Piercing",
    tag: "Curated Ear Piercing Set",
    image: "/assets/works/ear-curation-set.jpg",
  }},
  {{
    id: "w-piercing-conch",
    serviceType: "Piercing",
    tag: "Conch Cartilage Piercing",
    image: "/assets/works/conch-cartilage-piercing.jpg",
  }},
  {{
    id: "w-piercing-triple-lobe",
    serviceType: "Piercing",
    tag: "Triple Earlobe Piercing",
    image: "/assets/works/multiple-ear-lobe-piercing.jpg",
  }},
  {{
    id: "w-piercing-classic-lobe",
    serviceType: "Piercing",
    tag: "Classic Lobe Piercing",
    image: "/assets/works/standard-lobe-piercing.jpg",
  }},
];

// Quick Instagram feed posts
export const INSTAGRAM_POSTS = [
  {{
    id: "ig-1",
    image: "/assets/works/hanuman-masterpiece.webp",
    caption: "#hanumantattoo #bajrangbali ☎️ 9966609982",
  }},
  {{
    id: "ig-2",
    image: "/assets/works/wolf-wildlife-realism.jpg",
    caption: "#wolftattoo ☎️ 9966609982",
  }},
  {{
    id: "ig-3",
    image: "/assets/works/pico-laser-removal-result-1.jpg",
    caption: "#tattooremovalresults ☎️ 9966609982",
  }},
  {{
    id: "ig-4",
    image: "/assets/works/flat-helix-cartilage-piercing.jpg",
    caption: "#flathelixpiercing ☎️ 9966609982",
  }},
  {{
    id: "ig-5",
    image: "/assets/works/sacred-mandala-dotwork.jpg",
    caption: "#mándalatattoo ☎️ 9966609982",
  }},
];
"""

with open("src/data/studioData.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Updated src/data/studioData.ts successfully!")

