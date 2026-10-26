import os
import urllib.request
import re

with open('photos.html', 'r', encoding='utf-8') as f:
    text = f.read()

items = re.findall(r'<div class="pure-photo-item"[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"[\s\S]*?</div>', text)
print(f"Total: {len(items)}")

os.makedirs('scratch/gallery_thumbs', exist_ok=True)

# Let's inspect which ones are available
for i, url in enumerate(items):
    ext = os.path.splitext(url)[1] or '.jpg'
    filename = f"scratch/gallery_thumbs/{i:02d}_{os.path.basename(url)}"
    if not os.path.exists(filename):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=5) as res:
                data = res.read()
                with open(filename, 'wb') as out:
                    out.write(data)
            print(f"Downloaded {i}: {url} ({len(data)} bytes)")
        except Exception as e:
            print(f"Error {i} {url}: {e}")
