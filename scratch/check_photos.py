import re

with open('photos.html', 'r', encoding='utf-8') as f:
    text = f.read()

urls = re.findall(r'<img[^>]+src=[\'"]([^\'"]+)[\'"]', text)
print(f'Total img src in photos.html: {len(urls)}')
for u in set(urls):
    print(' ', u)
