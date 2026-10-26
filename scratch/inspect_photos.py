import re

with open('photos.html', 'r', encoding='utf-8') as f:
    text = f.read()

items = re.findall(r'<div class="pure-photo-item"[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"[\s\S]*?</div>', text)
print(f'Total items: {len(items)}')
for i, url in enumerate(items):
    print(f'{i}: {url}')
