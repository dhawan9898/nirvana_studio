import os
import glob
import json

jpg_files = glob.glob('public/assets/instagram/*.jpg')
print(f"Total jpg files in public/assets/instagram: {len(jpg_files)}")

txt_files = glob.glob('public/assets/instagram/*.txt')
print(f"Total txt files: {len(txt_files)}")

posts = []
for tf in txt_files:
    base = tf[:-4]
    # find corresponding image(s)
    candidates = glob.glob(base + '*.jpg')
    if not candidates:
        continue
    with open(tf, 'r', encoding='utf-8', errors='ignore') as f:
        cap = f.read().strip()
    for c in candidates:
        # check file size
        size = os.path.getsize(c)
        posts.append({
            'img': c.replace('\\', '/'),
            'filename': os.path.basename(c),
            'caption': cap,
            'size': size
        })

print(f"Total valid post images with captions: {len(posts)}")

# Categorize them
tattoos = []
removals = []
piercings = []

for p in posts:
    cap_lower = p['caption'].lower()
    if 'piercing' in cap_lower or 'helix' in cap_lower or 'nose' in cap_lower or 'tragus' in cap_lower or 'conch' in cap_lower:
        piercings.append(p)
    elif 'removal' in cap_lower or 'laser' in cap_lower or 'fade' in cap_lower:
        removals.append(p)
    else:
        tattoos.append(p)

print(f"Tattoos found: {len(tattoos)}")
print(f"Removals found: {len(removals)}")
print(f"Piercings found: {len(piercings)}")

# Print sample of piercings and removals
print("\n--- SAMPLE REMOVALS ---")
for r in removals:
    print(r['filename'], "|", r['caption'].replace('\n', ' ')[:70], "| size:", r['size'])

print("\n--- SAMPLE PIERCINGS ---")
for pi in piercings:
    print(pi['filename'], "|", pi['caption'].replace('\n', ' ')[:70], "| size:", pi['size'])

print("\n--- SAMPLE TATTOOS (Top by size) ---")
tattoos.sort(key=lambda x: x['size'], reverse=True)
for t in tattoos[:25]:
    print(t['filename'], "|", t['caption'].replace('\n', ' ')[:70], "| size:", t['size'])

