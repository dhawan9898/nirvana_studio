import os
import shutil
import glob

# Destination directory
dest_dir = "public/assets/works"
os.makedirs(dest_dir, exist_ok=True)

# Curated list of best posts from the 71 groups (170 images)
curated_selections = [
    # Devotional & Spiritual
    {
        "src": "public/assets/instagram/2025-07-22_13-00-00_UTC.jpg",
        "dest": "shiva-rudra-realism.jpg",
        "serviceType": "Tattoo",
        "tag": "Lord Shiva Rudra",
        "category": "Devotional & Spiritual"
    },
    {
        "src": "public/assets/instagram/2025-02-11_13-33-29_UTC_1.jpg",
        "dest": "om-namo-bhagavate.jpg",
        "serviceType": "Tattoo",
        "tag": "Om Namo Bhagavate Mantra",
        "category": "Script & Lettering"
    },
    {
        "src": "public/assets/instagram/2024-12-20_09-03-06_UTC_1.jpg",
        "dest": "sanskrit-shloka-forearm.jpg",
        "serviceType": "Tattoo",
        "tag": "Sanskrit Shloka",
        "category": "Script & Lettering"
    },
    {
        "src": "public/assets/instagram/2026-03-23_11-58-35_UTC.jpg",
        "dest": "swastik-om-devotional.jpg",
        "serviceType": "Tattoo",
        "tag": "Sacred Swastik & Om",
        "category": "Devotional & Spiritual"
    },
    {
        "src": "public/assets/instagram/2026-07-22_12-15-02_UTC_4.jpg",
        "dest": "antah-asti-prarambah.jpg",
        "serviceType": "Tattoo",
        "tag": "Antah Asti Prarambah Script",
        "category": "Script & Lettering"
    },
    # Realism & Portrait
    {
        "src": "public/assets/instagram/2025-01-08_14-16-27_UTC_1.jpg",
        "dest": "joker-portrait-realism.jpg",
        "serviceType": "Tattoo",
        "tag": "Joker Portrait Realism",
        "category": "Realism & Portrait"
    },
    {
        "src": "public/assets/instagram/2026-08-07_12-30-02_UTC_1.jpg",
        "dest": "wolf-wildlife-realism.jpg",
        "serviceType": "Tattoo",
        "tag": "Wolf Wildlife Realism",
        "category": "Realism & Portrait"
    },
    {
        "src": "public/assets/instagram/2025-04-13_12-38-01_UTC_1.jpg",
        "dest": "phoenix-mythical-realism.jpg",
        "serviceType": "Tattoo",
        "tag": "Rising Phoenix",
        "category": "Realism & Portrait"
    },
    {
        "src": "public/assets/instagram/2026-06-05_13-25-59_UTC_2.jpg",
        "dest": "japanese-dragon-realism.jpg",
        "serviceType": "Tattoo",
        "tag": "Japanese Dragon",
        "category": "Realism & Portrait"
    },
    {
        "src": "public/assets/instagram/2026-05-18_13-00-02_UTC.jpg",
        "dest": "feline-cat-realism.jpg",
        "serviceType": "Tattoo",
        "tag": "Feline Realism",
        "category": "Realism & Portrait"
    },
    {
        "src": "public/assets/instagram/2026-11-12_05-55-02_UTC.jpg",
        "dest": "game-of-thrones-portrait.jpg",
        "serviceType": "Tattoo",
        "tag": "Game of Thrones Art",
        "category": "Realism & Portrait"
    },
    # Fine Line, Floral & Minimal
    {
        "src": "public/assets/instagram/2026-07-14_12-00-03_UTC_1.jpg",
        "dest": "butterfly-with-flowers.jpg",
        "serviceType": "Tattoo",
        "tag": "Butterfly with Floral Bouquet",
        "category": "Fine Line & Floral"
    },
    {
        "src": "public/assets/instagram/2026-08-09_12-00-04_UTC_2.jpg",
        "dest": "snake-butterfly-fineline.jpg",
        "serviceType": "Tattoo",
        "tag": "Serpent & Butterfly Fine Line",
        "category": "Fine Line & Floral"
    },
    {
        "src": "public/assets/instagram/2025-11-29_13-04-53_UTC_2.jpg",
        "dest": "lotus-fine-line.jpg",
        "serviceType": "Tattoo",
        "tag": "Fine Line Lotus",
        "category": "Fine Line & Floral"
    },
    {
        "src": "public/assets/instagram/2026-07-31_13-56-00_UTC_2.jpg",
        "dest": "dog-ears-memorial.jpg",
        "serviceType": "Tattoo",
        "tag": "Pet Dog Ears Minimal Line",
        "category": "Fine Line & Floral"
    },
    {
        "src": "public/assets/instagram/2026-08-05_10-55-42_UTC_1.jpg",
        "dest": "infinity-minimal-ink.jpg",
        "serviceType": "Tattoo",
        "tag": "Infinity Minimal Line",
        "category": "Fine Line & Floral"
    },
    {
        "src": "public/assets/instagram/2026-10-23_11-32-43_UTC_1.jpg",
        "dest": "micro-butterfly-wrist.jpg",
        "serviceType": "Tattoo",
        "tag": "Micro Butterfly",
        "category": "Fine Line & Floral"
    },
    {
        "src": "public/assets/instagram/2025-08-16_13-00-00_UTC.jpg",
        "dest": "minimal-friendship-geometry.jpg",
        "serviceType": "Tattoo",
        "tag": "Minimal Friendship Art",
        "category": "Fine Line & Floral"
    },
    {
        "src": "public/assets/instagram/2026-07-12_08-11-03_UTC_1.jpg",
        "dest": "siblings-love-fineline.jpg",
        "serviceType": "Tattoo",
        "tag": "Siblings Love Fine Line",
        "category": "Fine Line & Floral"
    },
    # Geometric, Mandalas & Darkwork
    {
        "src": "public/assets/instagram/2026-08-17_12-15-25_UTC_2.jpg",
        "dest": "sacred-mandala-dotwork.jpg",
        "serviceType": "Tattoo",
        "tag": "Sacred Mandala Dotwork",
        "category": "Geometric & Mandala"
    },
    {
        "src": "public/assets/instagram/2025-02-07_14-13-30_UTC_1.jpg",
        "dest": "scorpion-darkwork.jpg",
        "serviceType": "Tattoo",
        "tag": "Scorpion Darkwork",
        "category": "Geometric & Mandala"
    },
    {
        "src": "public/assets/instagram/2026-01-11_13-00-00_UTC_1.jpg",
        "dest": "viking-compass-vegvisir.jpg",
        "serviceType": "Tattoo",
        "tag": "Viking Vegvisir Compass",
        "category": "Geometric & Mandala"
    },
    {
        "src": "public/assets/instagram/2026-09-12_12-30-03_UTC_1.jpg",
        "dest": "geometric-linework-arm.jpg",
        "serviceType": "Tattoo",
        "tag": "Geometric Linework Composition",
        "category": "Geometric & Mandala"
    },
    # Cover-ups & Custom Compositions
    {
        "src": "public/assets/instagram/2025-08-06_13-00-00_UTC.jpg",
        "dest": "coverup-transformation-1.jpg",
        "serviceType": "Tattoo",
        "tag": "Cover-Up Transformation",
        "category": "Cover-Ups & Custom"
    },
    {
        "src": "public/assets/instagram/2026-01-03_13-53-12_UTC_1.jpg",
        "dest": "coverup-rework-2.jpg",
        "serviceType": "Tattoo",
        "tag": "Old Tattoo Rework & Cover",
        "category": "Cover-Ups & Custom"
    },
    {
        "src": "public/assets/instagram/2026-09-14_12-30-03_UTC_2.jpg",
        "dest": "salaar-insignia-seal.jpg",
        "serviceType": "Tattoo",
        "tag": "Salaar Insignia Seal",
        "category": "Cover-Ups & Custom"
    },
    {
        "src": "public/assets/instagram/2025-05-25_10-31-07_UTC.jpg",
        "dest": "skeleton-dance-illustrative.jpg",
        "serviceType": "Tattoo",
        "tag": "Skeleton Dance Illustrative",
        "category": "Cover-Ups & Custom"
    },
    {
        "src": "public/assets/instagram/2026-03-12_13-32-56_UTC_1.jpg",
        "dest": "chef-knife-culinary.jpg",
        "serviceType": "Tattoo",
        "tag": "Chef Knife & Culinary Custom",
        "category": "Cover-Ups & Custom"
    },
    {
        "src": "public/assets/instagram/2026-11-06_12-56-26_UTC_1.jpg",
        "dest": "japanese-kanji-script.jpg",
        "serviceType": "Tattoo",
        "tag": "Japanese Kanji Calligraphy",
        "category": "Script & Lettering"
    },
    {
        "src": "public/assets/instagram/2026-08-11_12-49-26_UTC_1.jpg",
        "dest": "keep-me-safe-script.jpg",
        "serviceType": "Tattoo",
        "tag": "Keep Me Safe Script",
        "category": "Script & Lettering"
    },
    {
        "src": "public/assets/instagram/2026-10-08_03-35-14_UTC.jpg",
        "dest": "i-am-greater-quote.jpg",
        "serviceType": "Tattoo",
        "tag": "Motivational Quote Script",
        "category": "Script & Lettering"
    },
    {
        "src": "public/assets/instagram/2026-07-20_12-26-42_UTC_1.jpg",
        "dest": "veni-vidi-vici-dragon.jpg",
        "serviceType": "Tattoo",
        "tag": "Veni Vidi Vici with Dragon",
        "category": "Cover-Ups & Custom"
    },
    {
        "src": "public/assets/instagram/2026-02-11_12-45-45_UTC_1.jpg",
        "dest": "matching-couple-ink.jpg",
        "serviceType": "Tattoo",
        "tag": "Matching Couple Tattoo",
        "category": "Cover-Ups & Custom"
    },
    # Tattoo Removal (Pico Laser)
    {
        "src": "public/assets/instagram/2026-06-19_13-00-03_UTC_1.jpg",
        "dest": "pico-laser-removal-result-1.jpg",
        "serviceType": "Tattoo Removal",
        "tag": "Pico Laser Removal Progress",
        "category": "Tattoo Removal"
    },
    {
        "src": "public/assets/instagram/2026-06-19_13-00-03_UTC_2.jpg",
        "dest": "pico-laser-removal-clearance.jpg",
        "serviceType": "Tattoo Removal",
        "tag": "Complete Ink Clearance",
        "category": "Tattoo Removal"
    },
    {
        "src": "public/assets/instagram/2026-06-19_13-00-03_UTC_3.jpg",
        "dest": "pico-laser-fading-sessions.jpg",
        "serviceType": "Tattoo Removal",
        "tag": "Multi-Session Fading Comparison",
        "category": "Tattoo Removal"
    },
    {
        "src": "public/assets/instagram/2026-10-10_07-37-08_UTC_1.jpg",
        "dest": "laser-session-in-progress.jpg",
        "serviceType": "Tattoo Removal",
        "tag": "Pico Laser Treatment Session",
        "category": "Tattoo Removal"
    },
    {
        "src": "public/assets/instagram/2026-10-10_07-37-08_UTC_2.jpg",
        "dest": "laser-tattoo-fading-coverup.jpg",
        "serviceType": "Tattoo Removal",
        "tag": "Pre-Coverup Laser Lightening",
        "category": "Tattoo Removal"
    },
    # Body Piercings
    {
        "src": "public/assets/instagram/2025-12-16_16-48-14_UTC_1.jpg",
        "dest": "flat-helix-cartilage-piercing.jpg",
        "serviceType": "Piercing",
        "tag": "Flat Helix Cartilage Piercing",
        "category": "Piercing"
    },
    {
        "src": "public/assets/instagram/2026-01-07_14-04-22_UTC_2.jpg",
        "dest": "helix-titanium-piercing.jpg",
        "serviceType": "Piercing",
        "tag": "Helix Piercing with Titanium Stud",
        "category": "Piercing"
    },
    {
        "src": "public/assets/instagram/2025-11-14_16-48-37_UTC_2.jpg",
        "dest": "nose-stud-piercing.jpg",
        "serviceType": "Piercing",
        "tag": "Precision Nose Stud Piercing",
        "category": "Piercing"
    },
    {
        "src": "public/assets/instagram/2025-12-02_11-37-58_UTC_2.jpg",
        "dest": "septum-piercing.jpg",
        "serviceType": "Piercing",
        "tag": "Sterile Septum Piercing",
        "category": "Piercing"
    },
    {
        "src": "public/assets/instagram/2025-05-01_13-00-00_UTC_1.jpg",
        "dest": "belly-navel-piercing.jpg",
        "serviceType": "Piercing",
        "tag": "Navel Belly Piercing with Gem",
        "category": "Piercing"
    },
    {
        "src": "public/assets/instagram/2026-06-17_10-08-24_UTC_2.jpg",
        "dest": "double-lobe-piercing.jpg",
        "serviceType": "Piercing",
        "tag": "Second Earlobe Piercing",
        "category": "Piercing"
    },
    {
        "src": "public/assets/instagram/2026-01-23_14-10-57_UTC_1.jpg",
        "dest": "ear-curation-set.jpg",
        "serviceType": "Piercing",
        "tag": "Curated Ear Piercing Set",
        "category": "Piercing"
    },
    {
        "src": "public/assets/instagram/2026-07-16_12-15-02_UTC_2.jpg",
        "dest": "conch-cartilage-piercing.jpg",
        "serviceType": "Piercing",
        "tag": "Conch Cartilage Piercing",
        "category": "Piercing"
    },
    {
        "src": "public/assets/instagram/2026-08-19_12-30-02_UTC_2.jpg",
        "dest": "multiple-ear-lobe-piercing.jpg",
        "serviceType": "Piercing",
        "tag": "Triple Earlobe Piercing",
        "category": "Piercing"
    },
    {
        "src": "public/assets/instagram/2025-03-06_13-12-15_UTC_3.jpg",
        "dest": "standard-lobe-piercing.jpg",
        "serviceType": "Piercing",
        "tag": "Classic Lobe Piercing",
        "category": "Piercing"
    }
]

copied_count = 0
verified_items = []

for item in curated_selections:
    src_path = item["src"]
    dest_path = os.path.join(dest_dir, item["dest"])
    if os.path.exists(src_path):
        shutil.copy2(src_path, dest_path)
        copied_count += 1
        verified_items.append({
            "id": f"work-{copied_count}",
            "serviceType": item["serviceType"],
            "tag": item["tag"],
            "image": f"/assets/works/{item['dest']}"
        })
    else:
        print(f"Warning: source file not found: {src_path}")

print(f"Successfully copied {copied_count} curated works to {dest_dir}!")
print(f"Total verified items: {len(verified_items)}")
