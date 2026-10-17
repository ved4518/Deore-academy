import os
import re

# 1. Update contact.html
with open('contact.html', 'r', encoding='utf-8') as f:
    contact_html = f.read()

old_contact_block_pattern = re.compile(
    r'<h2 style="font-size: 1\.65rem; font-weight: 800; color: var\(--color-navy\); margin-bottom: 24px;">Campus Headquarters</h2>\s*'
    r'<!-- Item 1: Address -->\s*'
    r'<div style="display: flex; gap: 16px; margin-bottom: 24px;">\s*'
    r'<div style="width: 44px; height: 44px;[^>]*>.*?</div>\s*'
    r'<div>\s*'
    r'<div style="font-size: 0\.8125rem; font-weight: 700; text-transform: uppercase; color: #64748b;">Address</div>\s*'
    r'<div style="font-size: 1rem; font-weight: 700; color: var\(--color-navy\); margin-top: 2px;">\s*'
    r'3rd Floor, Shreenath Enclave, Near Ashok Stambh, Gangapur Road, Nashik - 422002, Maharashtra\s*'
    r'</div>\s*</div>\s*</div>',
    re.DOTALL
)

new_contact_block = '''<h2 style="font-size: 1.65rem; font-weight: 800; color: var(--color-navy); margin-bottom: 20px;">Our Campuses & Branches</h2>

          <!-- 1. Main Branch -->
          <div style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 14px; padding: 16px 18px; margin-bottom: 14px; box-shadow: var(--shadow-sm);">
            <div style="display: flex; gap: 14px; align-items: flex-start;">
              <div style="width: 40px; height: 40px; border-radius: 10px; background: var(--color-navy); color: var(--color-gold); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
              <div>
                <span style="background: var(--color-gold); color: var(--color-navy); font-size: 0.75rem; font-weight: 800; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.04em;">1. Main Branch</span>
                <div style="font-size: 1rem; font-weight: 700; color: var(--color-navy); margin-top: 6px; line-height: 1.5;">
                  Behind Dairy Don Ice Cream, Sathe Baug, M.G. Road, Nashik, Maharashtra.
                </div>
              </div>
            </div>
          </div>

          <!-- 2. Branch -->
          <div style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 14px; padding: 16px 18px; margin-bottom: 14px; box-shadow: var(--shadow-sm);">
            <div style="display: flex; gap: 14px; align-items: flex-start;">
              <div style="width: 40px; height: 40px; border-radius: 10px; background: #f1f5f9; color: var(--color-navy); border: 1px solid #cbd5e1; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"></path><polyline points="1 21 23 21"></polyline></svg>
              </div>
              <div>
                <span style="background: #e2e8f0; color: #1e293b; font-size: 0.75rem; font-weight: 800; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.04em;">2. Branch</span>
                <div style="font-size: 1rem; font-weight: 700; color: var(--color-navy); margin-top: 6px; line-height: 1.5;">
                  2nd Floor, Sathe Baug, Above IDBI Bank, M.G. Road, Nashik, Maharashtra.
                </div>
              </div>
            </div>
          </div>

          <!-- 3. Hostel Address -->
          <div style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 14px; padding: 16px 18px; margin-bottom: 24px; box-shadow: var(--shadow-sm);">
            <div style="display: flex; gap: 14px; align-items: flex-start;">
              <div style="width: 40px; height: 40px; border-radius: 10px; background: #e0f2fe; color: #0369a1; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <span style="background: #bae6fd; color: #0369a1; font-size: 0.75rem; font-weight: 800; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.04em;">3. Hostel Address</span>
                <div style="font-size: 1rem; font-weight: 700; color: var(--color-navy); margin-top: 6px; line-height: 1.5;">
                  Pradhan Park, 4th Floor, Deore Academy Hostel, Nashik, Maharashtra.
                </div>
              </div>
            </div>
          </div>'''

if old_contact_block_pattern.search(contact_html):
    contact_html = old_contact_block_pattern.sub(new_contact_block, contact_html, count=1)
    print("contact.html: replaced main address block successfully")
else:
    print("contact.html: regex pattern did not match, using fallback replace")
    contact_html = contact_html.replace(
        "3rd Floor, Shreenath Enclave, Near Ashok Stambh, Gangapur Road, Nashik - 422002, Maharashtra",
        "Behind Dairy Don Ice Cream, Sathe Baug, M.G. Road, Nashik, Maharashtra"
    )

# Also update map subtitle and link
contact_html = contact_html.replace(
    '<p style="font-size: 0.84375rem; color: #64748b;">Ashok Stambh, Gangapur Road, Nashik, Maharashtra</p>',
    '<p style="font-size: 0.84375rem; color: #64748b;">Sathe Baug, M.G. Road, Nashik, Maharashtra</p>'
)
contact_html = contact_html.replace(
    'https://maps.google.com/?q=Ashok+Stambh+Nashik',
    'https://maps.google.com/?q=Sathe+Baug+MG+Road+Nashik'
)

with open('contact.html', 'w', encoding='utf-8') as f:
    f.write(contact_html)

# 2. Update about.html (Hostel Facilities section)
with open('about.html', 'r', encoding='utf-8') as f:
    about_html = f.read()

target_hostel_wing = '<div class="hostel-wings-grid">'
replacement_hostel_wing = '''<!-- Primary Hostel Address -->
          <div style="background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 12px; padding: 12px 16px; margin-bottom: 14px;">
            <div style="font-size: 0.8125rem; font-weight: 800; color: #1e3a8a; text-transform: uppercase; letter-spacing: 0.04em; display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Hostel Address (Deore Academy Hostel)
            </div>
            <p style="font-size: 0.875rem; font-weight: 700; color: #1e293b; margin: 0; line-height: 1.5;">
              Pradhan Park, 4th Floor, Deore Academy Hostel, Nashik, Maharashtra.
            </p>
          </div>

          <div class="hostel-wings-grid">'''

if target_hostel_wing in about_html and 'Pradhan Park' not in about_html:
    about_html = about_html.replace(target_hostel_wing, replacement_hostel_wing, 1)
    with open('about.html', 'w', encoding='utf-8') as f:
        f.write(about_html)
    print("about.html: added Pradhan Park hostel address")
else:
    print("about.html: already has Pradhan Park or target not found")

# 3. Update index.html (footer)
with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

index_html = index_html.replace(
    'Shreenath Enclave, Near Ashok Stambh, Gangapur Road, Nashik, Maharashtra, India',
    'Behind Dairy Don Ice Cream, Sathe Baug, M.G. Road, Nashik, Maharashtra'
)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(index_html)
print("index.html: updated footer address")

# 4. Update js/data.js and public/js/data.js
for path in ['js/data.js', 'public/js/data.js']:
    with open(path, 'r', encoding='utf-8') as f:
        data_text = f.read()

    data_text = data_text.replace(
        'address: "3rd Floor, Shreenath Enclave, Near Ashok Stambh, Gangapur Road, Nashik - 422002",',
        'address: "Behind Dairy Don Ice Cream, Sathe Baug, M.G. Road, Nashik, Maharashtra",\n    branches: [\n      {\n        name: "Main Branch",\n        address: "Behind Dairy Don Ice Cream, Sathe Baug, M.G. Road, Nashik, Maharashtra"\n      },\n      {\n        name: "Branch 2",\n        address: "2nd Floor, Sathe Baug, Above IDBI Bank, M.G. Road, Nashik, Maharashtra"\n      },\n      {\n        name: "Hostel Address",\n        address: "Pradhan Park, 4th Floor, Deore Academy Hostel, Nashik, Maharashtra"\n      }\n    ],'
    )
    with open(path, 'w', encoding='utf-8') as f:
        f.write(data_text)
    print(f"{path}: updated address and branches")
