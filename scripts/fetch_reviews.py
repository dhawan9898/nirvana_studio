import urllib.request
import re
import json

url = 'https://www.justdial.com/Hyderabad/Nirvana-Tattoo-Studio-Opposite-Govt-Hospital-Kondapur/040PXX40-XX40-210323145417-H5N9_BZDET'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5'
}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        print(f"Loaded {len(html)} bytes")
        
        # Look for JSON-LD blocks
        matches = re.findall(r'<script type=["\']application/ld\+json["\']>(.*?)</script>', html, re.DOTALL)
        for i, m in enumerate(matches):
            try:
                data = json.loads(m.strip())
                print(f"Block {i} type: {data.get('@type')}")
                if 'review' in data:
                    print("Found reviews!")
                    for r in data['review']:
                        author = r.get('author', {}).get('name') if isinstance(r.get('author'), dict) else r.get('author')
                        rating = r.get('reviewRating', {}).get('ratingValue') if isinstance(r.get('reviewRating'), dict) else r.get('reviewRating')
                        body = r.get('reviewBody') or r.get('description')
                        print(f"[{rating}*] {author}: {body}\n")
            except Exception as ex:
                pass
                
        # Also regex for review text or reviewer names
        review_texts = re.findall(r'<div class="[^"]*review[^"]*"[^>]*>(.*?)</div>', html, re.DOTALL | re.IGNORECASE)
        print(f"Review div matches: {len(review_texts)}")
        
except Exception as e:
    print("Fetch error:", e)

