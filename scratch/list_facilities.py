import re

with open('photos.html', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'<div class="pure-photo-item"[^>]*data-category="facilities"[^>]*>(.*?)</div>', re.DOTALL)
matches = pattern.finditer(content)

count = 0
for m in matches:
    count += 1
    chunk = m.group(1)
    tag_match = re.search(r'<span class="photo-card-tag">(.*?)</span>', chunk, re.DOTALL)
    tag_clean = re.sub(r'<[^>]+>', '', tag_match.group(1)).strip() if tag_match else 'None'
    img_match = re.search(r'<img[^>]+src="([^"]+)"', chunk)
    img_src = img_match.group(1) if img_match else 'None'
    print(f"{count}. Tag: [{tag_clean}] | Src: {img_src}")
