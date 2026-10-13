# Deore Academy - Civil Services Coaching Website (Nashik, Maharashtra)

A production-ready, client-aligned, fully responsive website for **Deore Academy**, built using semantic **HTML5**, modern **CSS3** (custom properties, 12-column grid, glassmorphism, responsive breakpoints), and vanilla **JavaScript (ES6+)**.

## 🎨 Visual Identity & Brand Direction
- **Primary Color:** Deep Navy Blue (`#0B1528` / `#070E1B`)
- **Accent Color:** Warm Golden Yellow (`#E5A93C`)
- **Background:** White (`#FFFFFF`) / Clean Light Slate (`#F8FAFC`)
- **Typography:** Plus Jakarta Sans & Inter
- **Aesthetic:** Trustworthy, modern Indian civil services academy with subtle shadows, 16–20px rounded cards, and smooth micro-interactions.

---

## 📂 Project Structure
```
deore-academy/
├── index.html               # Homepage (matching client-approved reference layout)
├── courses.html             # Academic catalog with category filter pills
├── course-detail.html       # Dynamic course page with syllabus, fee, and FAQ
├── results.html             # Toppers Hall of Fame & testimonials
├── batches.html             # Upcoming batch schedule & mode comparison
├── photos.html              # Interactive campus photo gallery & lightbox system
├── faculty.html             # Educator profiles & mentorship philosophy
├── study-material.html      # Aspirant resource center & PDF downloads
├── about.html               # 10+ years excellence, mission, and director's note
├── contact.html             # Nashik center address, map embed & message form
├── css/
│   └── styles.css           # Master design system & component styles
├── js/
│   ├── data.js              # Centralized data store (courses, results, batches, faculty)
│   ├── enquiry.js           # Interactive modal system, validation & WhatsApp hook
│   └── main.js              # Sticky navbar, mobile drawer, counter animations & tabs
└── package.json             # Dev server & build toolchain
```

---

## 🚀 Key Features Implemented

### 1. Sticky Navigation
- Sticky white navbar with brand logo, graduation cap emblem, and tagline *"For a Better Tomorrow"*.
- Smooth active page indicators.
- Responsive mobile menu drawer with backdrop blur.
- Prominent gold *"Enquire Now →"* action button.

### 2. Hero Section
- Deep navy background with subtle warm gold atmospheric glow.
- Trust badge: *"⭐ Nashik's Trusted Civil Services Academy for 15+ Years"*.
- Dual CTAs: *"Explore Courses →"* and *"☎ Talk to an Expert"*.
- Right-side student card with glass outer container and floating white quote card: *“Bigger Goals. Brighter India.”*.

### 3. Trust & Stats Strip
- 4 core metrics with circular icons:
  - 10+ Years of Excellence
  - Expert Faculty (Experienced Teachers)
  - Classroom + Online (Flexible Learning)
  - Thousands of Students

### 4. Courses Grid (3x2)
- 6 featured programs:
  1. **UPSC** (IAS • IPS • IRS • IFS)
  2. **MPSC State Services** (Rajyaseva Preparation)
  3. **PSI / STI / ASO** (Combined Preparation)
  4. **MPSC Saralseva** (Government Recruitment Exams)
  5. **Agriculture & Forest** (Specialized Preparation)
  6. **Group B and Group C** (Combined Examination Non-Gazetted)
- Colored circular category badges, hover zoom, and circular navy action buttons.

### 5. Results & Topper Showcase
- Deep navy section highlighting 500+ successful students and 100+ top rankers.
- 4 featured rankers with avatars, rank pills, and quotes:
  - **Aditya Patil** (AIR 147, UPSC CSE 2023)
  - **Priya Deshmukh** (Rank 1, MPSC Rajyaseva 2022)
  - **Rahul Jadhav** (Rank 3, MPSC PSI 2023)
  - **Sneha Kulkarni** (Rank 5, MPSC STI 2021)

### 6. Why Deore Academy
- 6 core institutional pillars: Experienced Faculty, Structured Curriculum, Regular Test Series, Personalized Mentorship, Updated Study Material, and Supportive Environment.

### 7. Upcoming Batches
- 3 batch cards with mode tags (Classroom / Hybrid), calendar start dates, Nashik center location, and direct *"Enroll Now →"* actions.

### 8. Final CTA & Footer
- Dark navy aspirational banner: *"A Better You Builds a Better India."*.
- Comprehensive 4-column footer with social links, course links, and Nashik campus address at Ashok Stambh.

### 9. Interactive Context-Aware Modal & Lead System
- Triggers on any *"Enquire Now"*, *"Enroll Now"*, or *"Talk to an Expert"* button.
- Automatically pre-selects the clicked course or batch.
- Validates 10-digit Indian mobile numbers and required fields.
- Provides immediate success confirmation and optional one-click redirect to WhatsApp.

---

## 💻 How to Run Locally

You can run this project in any standard browser or via the included dev server:

### Option A: Local Dev Server
```bash
cd deore-academy
npm run dev
```
Open [http://127.0.0.1:5173](http://127.0.0.1:5173) in your browser.

### Option B: Direct Static Open
Simply double-click `index.html` to open directly in Chrome, Edge, Safari, or Firefox without any server required.
"# Deore-academy" 
