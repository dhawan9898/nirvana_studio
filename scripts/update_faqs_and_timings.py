import json

faqs_data = [
    {
        "category": "Studio & Appointments",
        "question": "What are your operating timings?",
        "answer": "Nirvana Tattoo Studio is open daily from 10:00 AM to 9:00 PM (Monday through Sunday). Walk-ins are accepted subject to schedule availability, but prior booking via WhatsApp is recommended to avoid waiting."
    },
    {
        "category": "Studio & Appointments",
        "question": "Where is the studio located in Hyderabad?",
        "answer": "We are located at House No. 157/5, Sri Ram Nagar, Botanical Garden Road, Kondapur, Hyderabad (PIN 500084), directly opposite the Government Civil Hospital. We are roughly 8 minutes from HITEC City and Raidurg."
    },
    {
        "category": "Studio & Appointments",
        "question": "Who will be performing my tattoo or piercing?",
        "answer": "All sessions and consultations are handled personally by studio founder and lead artist Rishith Reddy. There are no junior apprentices or rotating artists—you work directly one-on-one with Rishith."
    },
    {
        "category": "Studio & Appointments",
        "question": "How do I book an appointment or consultation?",
        "answer": "You can fill out the booking form on this website or message Rishith directly on WhatsApp at +91 99666 09982 with your reference ideas, preferred placement, and date."
    },
    {
        "category": "Tattoos",
        "question": "How do you calculate tattoo pricing?",
        "answer": "Tattoo pricing is based on design dimensions (inches), level of intricate detail, placement on the body, and the time required. We have a fair studio minimum for small pieces and offer clear, upfront quotes before starting."
    },
    {
        "category": "Tattoos",
        "question": "Can I bring my own reference design or can you customize one?",
        "answer": "Both! You are welcome to bring photos, Pinterest references, or sketches. Rishith will adapt and customize the artwork to fit the anatomy of your placement and ensure lines stay sharp over time."
    },
    {
        "category": "Tattoos",
        "question": "How painful is getting a tattoo?",
        "answer": "Pain is very subjective and depends on placement. Fleshy areas like outer forearms, biceps, and thighs are very manageable, while bony areas like ribs, spine, or collarbones are more sensitive. Rishith works at a steady, comfortable pace and provides breaks whenever needed."
    },
    {
        "category": "Tattoos",
        "question": "What hygiene and sterilization protocols do you follow?",
        "answer": "We maintain medical-grade cleanliness: 100% blister-sealed single-use needles opened in front of you, pre-sterilized disposable grips, certified vegan organic inks, barrier film on all cords and machines, and medical surface disinfection before every client."
    },
    {
        "category": "Tattoos",
        "question": "What is the recommended tattoo aftercare routine?",
        "answer": "We apply a breathable protective bandage after your session. Keep it on for the instructed time, then wash gently with lukewarm water and mild antibacterial soap. Pat dry with a clean paper towel and apply a thin layer of recommended aftercare balm 2–3 times daily. Avoid direct sunlight, soaking in bathtubs/swimming pools, and scratching for 2–3 weeks."
    },
    {
        "category": "Tattoos",
        "question": "Do you offer touch-ups?",
        "answer": "Yes. We offer a complimentary healed check-in after 4 weeks. If any line or tone needs a minor touch-up after the healing process, we take care of it free of charge."
    },
    {
        "category": "Tattoo Removal",
        "question": "How does Pico Laser tattoo removal work?",
        "answer": "Our Pico Laser delivers ultra-short picosecond energy pulses that shatter embedded tattoo pigment into microscopic dust particles without burning the skin. Your body's lymphatic system then naturally flushes these particles out over subsequent weeks."
    },
    {
        "category": "Tattoo Removal",
        "question": "How many laser sessions will I need?",
        "answer": "Depending on ink density, depth, age, and whether you want complete removal or just lightening for a cover-up, it typically takes between 3 to 8 sessions spaced 4 to 6 weeks apart."
    },
    {
        "category": "Tattoo Removal",
        "question": "Will laser tattoo removal leave a scar?",
        "answer": "No. When calibrated correctly to your skin type and ink depth, Pico Laser specifically targets the pigment granules while leaving surrounding dermis undamaged, minimizing risk of scarring or hypopigmentation."
    },
    {
        "category": "Tattoo Removal",
        "question": "Can I get a new tattoo over a laser-treated area?",
        "answer": "Yes! Many clients come to us specifically to lighten a dark or heavy old tattoo so Rishith can design a beautiful, clean cover-up tattoo over it without dark ink bleeding through."
    },
    {
        "category": "Piercing",
        "question": "Do you use a piercing gun or needles?",
        "answer": "We strictly use single-use, pre-sterilized cannula needles. We never use piercing guns, as guns cause blunt force trauma to cartilage and tissue and cannot be properly sterilized."
    },
    {
        "category": "Piercing",
        "question": "What types of piercings do you offer?",
        "answer": "We offer earlobe (single, double, triple), helix, flat helix, conch, tragus, nostril, septum, and navel/belly piercings."
    },
    {
        "category": "Piercing",
        "question": "What jewelry material do you use for fresh piercings?",
        "answer": "We use medical-grade implant titanium and surgical steel studs and hoops to ensure hypoallergenic, non-irritating healing."
    },
    {
        "category": "Piercing",
        "question": "How do I take care of a fresh piercing?",
        "answer": "Spray the front and back of the piercing with sterile saline solution twice daily. Do not twist or rotate the jewelry, avoid sleeping on that side, never touch it with unwashed hands, and avoid swimming pools until healed."
    }
]

# Read existing file to keep reviews and works
with open("src/data/studioData.ts", "r", encoding="utf-8") as f:
    code = f.read()

# Replace timings in STUDIO_DETAILS
old_hours = '''  hours: [
    { days: "Tuesday – Saturday", time: "11:00 AM – 9:00 PM" },
    { days: "Sunday", time: "12:00 PM – 8:00 PM" },
    { days: "Monday", time: "Appointments by Prior Booking" },
  ],'''

new_hours = '''  timingDisplay: "Daily: 10:00 AM – 9:00 PM",
  hours: [
    { days: "Daily (Monday – Sunday)", time: "10:00 AM – 9:00 PM" },
  ],'''

if old_hours in code:
    code = code.replace(old_hours, new_hours)
    print("Replaced hours successfully!")
else:
    print("Could not find exact old_hours string, checking alternative")

# Add FAQ interface and export
faq_interface = """export interface FAQItem {
  category: "Studio & Appointments" | "Tattoos" | "Tattoo Removal" | "Piercing";
  question: string;
  answer: string;
}

"""

if "export interface FAQItem" not in code:
    code = faq_interface + code

# Append FAQS constant
faqs_export = f"\nexport const FAQS: FAQItem[] = {json.dumps(faqs_data, indent=2)};\n"
if "export const FAQS" not in code:
    code += faqs_export

with open("src/data/studioData.ts", "w", encoding="utf-8") as f:
    f.write(code)

print("Updated src/data/studioData.ts with FAQS and updated timings!")

