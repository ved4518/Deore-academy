import re

with open('photos.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Add filter bar styles
filter_styles = """
    /* Filter Bar Container */
    .photo-filter-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 34px;
      padding: 0 16px;
    }

    .photo-filter-nav {
      display: inline-flex;
      gap: 8px;
      background: #f8fafc;
      padding: 6px;
      border-radius: 9999px;
      border: 1.5px solid #e2e8f0;
      box-shadow: 0 4px 16px rgba(11, 21, 40, 0.05);
      max-width: 100%;
      overflow-x: auto;
      scrollbar-width: none;
    }

    .photo-filter-nav::-webkit-scrollbar {
      display: none;
    }

    .photo-filter-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 24px;
      border-radius: 9999px;
      font-family: inherit;
      font-size: 0.9375rem;
      font-weight: 700;
      color: #475569;
      background: transparent;
      border: none;
      cursor: pointer;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      white-space: nowrap;
      user-select: none;
      text-decoration: none;
    }

    .photo-filter-btn:hover {
      color: var(--color-navy);
      background: rgba(255, 255, 255, 0.9);
    }

    .photo-filter-btn.active {
      background: var(--color-navy);
      color: #ffffff;
      box-shadow: 0 4px 14px rgba(11, 21, 40, 0.2);
    }

    .photo-filter-btn .filter-count {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 2px 9px;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 800;
      background: #e2e8f0;
      color: #475569;
      transition: all 0.25s ease;
    }

    .photo-filter-btn.active .filter-count {
      background: var(--color-gold);
      color: var(--color-navy);
    }

    /* Facility Badge Overlay on Cards */
    .photo-card-tag {
      position: absolute;
      top: 10px;
      left: 10px;
      background: rgba(11, 21, 40, 0.88);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      color: var(--color-gold);
      font-size: 0.6875rem;
      font-weight: 800;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      padding: 4px 9px;
      border-radius: 6px;
      border: 1px solid rgba(229, 169, 60, 0.35);
      z-index: 2;
      pointer-events: none;
      display: flex;
      align-items: center;
      gap: 5px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    }

    /* Filter animations */
    .pure-photo-item.filtered-out {
      display: none !important;
    }

    @keyframes photoFadeIn {
      from {
        opacity: 0;
        transform: translateY(8px) scale(0.98);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .pure-photo-item.animating {
      animation: photoFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
"""

html = html.replace('  </style>', filter_styles + '\n  </style>')

# 2. Add Filter Section HTML right after <h1 class="photos-page-heading">Photos</h1>
filter_html = """        <h1 class="photos-page-heading">Photos</h1>

        <!-- Filter Section -->
        <div class="photo-filter-wrapper">
          <div class="photo-filter-nav" role="tablist" aria-label="Photo Filters">
            <button type="button" class="photo-filter-btn active" data-filter="all" role="tab" aria-selected="true" id="filterBtnAll">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>All Photos</span>
              <span class="filter-count" id="countAll">All</span>
            </button>

            <button type="button" class="photo-filter-btn" data-filter="facilities" role="tab" aria-selected="false" id="filterBtnFacilities">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span>Facilities</span>
              <span class="filter-count" id="countFacilities">Facilities</span>
            </button>
          </div>
        </div>"""

html = html.replace('        <h1 class="photos-page-heading">Photos</h1>', filter_html)

# 3. Dedicated Facility photos at the top of pure-photo-grid
# Only real facilities have data-category="facilities"
# Achiever photos (coaching-courses, student-support-guidance, deore-academy-about) are placed in "All Photos" WITHOUT data-category="facilities"
facility_and_top_cards = """          <!-- Dedicated Physical Facilities (Filtered under Facilities & All Photos) -->
          <div class="pure-photo-item" data-category="facilities">
            <span class="photo-card-tag">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
              Study Hub Cubicles
            </span>
            <img src="assets/images/facility-study-hub-cubicles.jpg" alt="New Shivmanan Study Hub - Individual Study Cubicles with Ergonomic Chairs" loading="lazy" />
          </div>
          <div class="pure-photo-item" data-category="facilities">
            <span class="photo-card-tag">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
              Study Hub & Library
            </span>
            <img src="assets/images/facility-study-hub-reading.jpg" alt="New Shivmanan Study Hub - Dedicated Reading Hall with Reference Books" loading="lazy" />
          </div>
          <div class="pure-photo-item" data-category="facilities">
            <span class="photo-card-tag">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
              Quiet Study Hall
            </span>
            <img src="assets/images/facility-study-hub-hall.jpg" alt="New Shivmanan Study Hub - Silent Study Hall with Well-Ventilated Cubicles" loading="lazy" />
          </div>
          <div class="pure-photo-item" data-category="facilities">
            <span class="photo-card-tag">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
              Study Cabins & Washroom
            </span>
            <img src="assets/images/facility-study-hub-wings.jpg" alt="New Shivmanan Study Hub - Partitioned Study Cabins & Washroom Facilities" loading="lazy" />
          </div>
          <div class="pure-photo-item" data-category="facilities">
            <span class="photo-card-tag">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
              Classroom Lecture Batch
            </span>
            <img src="assets/images/facility-classroom-batch.jpg" alt="Deore Academy - Live Civil Services Batch Lecture Session" loading="lazy" />
          </div>
          <div class="pure-photo-item" data-category="facilities">
            <span class="photo-card-tag">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
              Hostel Facility
            </span>
            <img src="assets/images/anand-hostel.jpg" alt="Anand Hostel Facilities - Deore Academy" loading="lazy" />
          </div>
          <div class="pure-photo-item" data-category="facilities">
            <span class="photo-card-tag">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
              Smart Classroom
            </span>
            <img src="assets/images/classroom-lecture-hall.jpg" alt="Interactive Smart Lecture Hall - Deore Academy" loading="lazy" />
          </div>
          <div class="pure-photo-item" data-category="facilities">
            <span class="photo-card-tag">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
              Digital Learning
            </span>
            <img src="assets/images/deore-app-promo.jpg" alt="Deore Academy Mobile Application & Digital Tech" loading="lazy" />
          </div>
          <div class="pure-photo-item" data-category="facilities">
            <span class="photo-card-tag">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
              Hostel Amenities
            </span>
            <img src="assets/images/anand-hostel-brochure.jpg" alt="Anand Hostel Accommodation & Amenities" loading="lazy" />
          </div>

          <!-- Shifted Achiever & Campus Photos (Visible in All Photos) -->
          <div class="pure-photo-item">
            <img src="assets/images/coaching-courses.jpg" alt="Foundation Coaching & Programs - Deore Academy Achiever Felicitation" loading="lazy" />
          </div>
          <div class="pure-photo-item">
            <img src="assets/images/student-support-guidance.jpg" alt="Director Swapnil Deore Mentorship & Student Guidance" loading="lazy" />
          </div>
          <div class="pure-photo-item">
            <img src="assets/images/deore-academy-about.jpg" alt="Deore Academy Student Selection Celebration" loading="lazy" />
          </div>
"""

html = html.replace('<div class="pure-photo-grid" id="photosGrid">\n', '<div class="pure-photo-grid" id="photosGrid">\n' + facility_and_top_cards)

# Fix broken image G1.jpg at end if present
html = html.replace('src="https://deoreacademy.com/images/G1.jpg"', 'src="https://deoreacademy.com/images/gallery/G1.jpg"')

# 4. Filter and Lightbox Javascript
new_script = """  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const allItems = Array.from(document.querySelectorAll('.pure-photo-item'));
      const filterBtns = document.querySelectorAll('.photo-filter-btn');
      const countAll = document.getElementById('countAll');
      const countFacilities = document.getElementById('countFacilities');
      
      const lightbox = document.getElementById('pureLightbox');
      const lbImg = document.getElementById('pureLbImg');
      const closeBtn = document.getElementById('pureLbClose');
      const prevBtn = document.getElementById('pureLbPrev');
      const nextBtn = document.getElementById('pureLbNext');

      let currentFilter = 'all';
      let visibleItems = allItems;
      let currentIndex = 0;

      // Calculate counts
      const facilityCount = allItems.filter(el => el.getAttribute('data-category') === 'facilities').length;
      if (countAll) countAll.textContent = allItems.length;
      if (countFacilities) countFacilities.textContent = facilityCount;

      function applyFilter(filter) {
        currentFilter = filter;

        filterBtns.forEach(btn => {
          const isActive = btn.getAttribute('data-filter') === filter;
          btn.classList.toggle('active', isActive);
          btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        allItems.forEach(item => {
          const isFacility = item.getAttribute('data-category') === 'facilities';
          const shouldShow = (filter === 'all') || (filter === 'facilities' && isFacility);

          if (shouldShow) {
            item.classList.remove('filtered-out');
            item.classList.add('animating');
            setTimeout(() => item.classList.remove('animating'), 300);
          } else {
            item.classList.add('filtered-out');
          }
        });

        visibleItems = allItems.filter(el => !el.classList.contains('filtered-out'));
      }

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-filter');
          applyFilter(filter);
        });
      });

      // Check URL hash or query param on load
      const hash = window.location.hash.toLowerCase();
      const params = new URLSearchParams(window.location.search);
      if (hash === '#facilities' || hash === '#facility' || params.get('filter') === 'facilities') {
        applyFilter('facilities');
      } else {
        applyFilter('all');
      }

      // Lightbox functions - traverses ONLY currently visible photos
      function showImage(index) {
        if (!visibleItems.length) return;
        if (index < 0) index = visibleItems.length - 1;
        if (index >= visibleItems.length) index = 0;
        currentIndex = index;
        const targetImg = visibleItems[currentIndex].querySelector('img');
        if (targetImg) {
          lbImg.src = targetImg.src;
          lbImg.alt = targetImg.alt || 'Deore Academy Photo';
        }
      }

      function openLightbox(item) {
        visibleItems = allItems.filter(el => !el.classList.contains('filtered-out'));
        const index = visibleItems.indexOf(item);
        if (index === -1) return;
        showImage(index);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }

      function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }

      allItems.forEach((item) => {
        item.addEventListener('click', () => openLightbox(item));
      });

      closeBtn.addEventListener('click', closeLightbox);
      prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
      nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });

      document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
      });
    });
  </script>"""

# Replace the old inline lightbox script
pattern_old_script = re.compile(r'  <script>\s*document\.addEventListener\(\'DOMContentLoaded\',\s*\(\)\s*=>\s*\{.*?\}\);\s*</script>', re.DOTALL)
html = pattern_old_script.sub(new_script, html)

with open('photos.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Successfully regenerated photos.html with clean separation of Facilities and All Photos!")
