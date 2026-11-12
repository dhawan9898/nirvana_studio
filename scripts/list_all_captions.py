import os
import glob
import re

txt_files = glob.glob('public/assets/instagram/*.txt')
items = []

for tf in txt_files:
    base = tf[:-4]
    candidates = glob.glob(base + '*.jpg')
    if not candidates:
        continue
    with open(tf, 'r', encoding='utf-8', errors='ignore') as f:
        cap = f.read().strip()
    clean_cap = re.sub(r'☎.*?☎|\+91\s*\d+|[^\w\s#❤️🐶🌿🦋👂📍]', '', cap).strip()
    items.append({
        'base': os.path.basename(base),
        'images': [os.path.basename(c) for c in candidates],
        'caption': cap,
        'summary': clean_cap.replace('\n', ' ')[:80]
    })

print(f"Total post groups: {len(items)}")
for i, it in enumerate(items):
    print(f"{i+1:3d}. [{it['base']}] ({len(it['images'])} imgs) -> {it['summary']}")

