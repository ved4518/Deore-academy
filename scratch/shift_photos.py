import re

with open('photos.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update coaching-courses, student-support-guidance, and deore-academy-about
# Replace their facility wrapper with a normal pure-photo-item
facility_items_to_shift = [
    ('assets/images/coaching-courses.jpg', 'Foundation Coaching & Programs - Deore Academy'),
    ('assets/images/student-support-guidance.jpg', 'Student Support & 1-on-1 Mentorship Cabin'),
    ('assets/images/deore-academy-about.jpg', 'Campus Academic Hall & Classroom - Deore Academy')
]

for src, alt in facility_items_to_shift:
    # Pattern matching the pure-photo-item block with data-category="facilities"
    escaped_src = re.escape(src)
    pattern = rf'<div class="pure-photo-item" data-category="facilities">\s*<span class="photo-card-tag">.*?</span>\s*<img src="{escaped_src}" alt=".*?" loading="lazy" />\s*</div>'
    replacement = f'<div class="pure-photo-item">\n            <img src="{src}" alt="{alt}" loading="lazy" />\n          </div>'
    new_content, count = re.subn(pattern, replacement, content, flags=re.DOTALL)
    print(f"Shifted {src}: count = {count}")
    content = new_content

# 2. Shift the gallery photos: gallery-33, 34, 35, 10, 02, 03, 04, 05, 01
gallery_photos = [
    'gallery-33.jpg',
    'gallery-34.jpg',
    'gallery-35.jpg',
    'gallery-10.jpg',
    'gallery-02.jpg',
    'gallery-03.jpg',
    'gallery-04.jpg',
    'gallery-05.jpg',
    'gallery-01.jpg'
]

for g in gallery_photos:
    escaped_g = re.escape(f"https://deoreacademy.com/images/gallery/{g}")
    pattern = rf'<div class="pure-photo-item" data-category="facilities">\s*<span class="photo-card-tag">.*?</span>\s*<img src="{escaped_g}" alt=".*?" loading="lazy" />\s*</div>'
    replacement = f'<div class="pure-photo-item">\n            <img src="https://deoreacademy.com/images/gallery/{g}" alt="Deore Academy Photo" loading="lazy" />\n          </div>'
    new_content, count = re.subn(pattern, replacement, content, flags=re.DOTALL)
    print(f"Shifted {g}: count = {count}")
    content = new_content

with open('photos.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Finished shifting photos in photos.html")
