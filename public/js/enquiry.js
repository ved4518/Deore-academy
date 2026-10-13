/**
 * DEORE ACADEMY - ENQUIRY MODAL & FORM CONTROLLER
 * Context-aware lead capture, validation, mock submission & WhatsApp integration
 */

const EnquirySystem = {
  overlay: null,
  form: null,
  successBox: null,
  currentContext: {},

  init() {
    this.createModalDOM();
    this.bindEvents();
  },

  createModalDOM() {
    if (document.getElementById('enquiryModal')) return;

    const modalHTML = `
      <div class="modal-overlay" id="enquiryModal" aria-hidden="true" role="dialog" aria-modal="true">
        <div class="modal-container">
          <div class="modal-header">
            <div>
              <span class="section-label" style="margin-bottom: 4px;">Admissions 2026-27</span>
              <h3 class="modal-title" id="modalTitle">Enquire for Admissions</h3>
              <p class="modal-subtitle" id="modalSubtitle">Get expert counseling, batch syllabus & free demo class access.</p>
            </div>
            <button class="modal-close-btn" id="modalCloseBtn" aria-label="Close modal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <div class="modal-body">
            <!-- Enquiry Form -->
            <form id="enquiryForm" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="enqName">Full Name *</label>
                  <input type="text" id="enqName" class="form-input" placeholder="e.g. Aditya Patil" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="enqPhone">Phone Number *</label>
                  <input type="tel" id="enqPhone" class="form-input" placeholder="10-digit mobile number" maxlength="10" required />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="enqEmail">Email Address</label>
                  <input type="email" id="enqEmail" class="form-input" placeholder="e.g. aditya@example.com" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="enqCourse">Select Course *</label>
                  <select id="enqCourse" class="form-select" required>
                    <option value="">-- Choose Course --</option>
                    <option value="UPSC">UPSC (IAS • IPS • IRS • IFS)</option>
                    <option value="MPSC State Services">MPSC State Services (Rajyaseva)</option>
                    <option value="PSI / STI / ASO">PSI / STI / ASO (Combined)</option>
                    <option value="MPSC Saralseva">MPSC Saralseva (Talathi / ZP)</option>
                    <option value="Group B and Group C">Group B and Group C (Combined)</option>
                    <option value="Other Competitive Exams">Other Competitive Exams (SSC, Banking, Railway)</option>
                    <option value="Test Series & Mentorship">Test Series & Mentorship Only</option>
                    <option value="General Counselling">General Career Counselling</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Coaching Mode</label>
                <div style="background: var(--color-bg-muted); padding: 10px 14px; border-radius: var(--radius-md); font-size: 0.9rem; font-weight: 600; color: var(--color-navy); display: flex; align-items: center; gap: 8px;">
                  <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #16a34a;"></span>
                  100% In-Person Offline Classroom (Ashok Stambh, Nashik)
                  <input type="hidden" name="learningMode" value="Classroom (Nashik Center)" />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="enqMessage">Your Question or Message (Optional)</label>
                <textarea id="enqMessage" class="form-textarea" rows="2" placeholder="Tell us about your educational background or specific requirements..."></textarea>
              </div>

              <button type="submit" class="form-submit-btn" id="submitEnquiryBtn">
                Submit Enquiry →
              </button>

              <div class="modal-whatsapp-note" id="directWhatsAppBtn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                <span>Prefer instant chat? Connect on WhatsApp (+91 98765 43210)</span>
              </div>
            </form>

            <!-- Success State Screen -->
            <div class="modal-success-box" id="modalSuccessBox">
              <div class="success-check-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h4 style="font-size: 1.35rem; font-weight: 800; color: #0b1528; margin-bottom: 8px;">Enquiry Submitted Successfully!</h4>
              <p style="color: #64748b; font-size: 0.9375rem; margin-bottom: 24px; line-height: 1.6;">
                Thank you, <strong id="successApplicantName" style="color: #0b1528;">Aspirant</strong>! Our senior academic counselor in Nashik will call you shortly to assist with syllabus, batch timings and fee concession details.
              </p>
              <div style="display: flex; gap: 12px; justify-content: center;">
                <button type="button" class="btn btn-navy" id="closeSuccessBtn">Close</button>
                <a href="https://wa.me/919876543210" target="_blank" class="btn btn-gold" style="gap: 6px;">
                  Open WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    this.overlay = document.getElementById('enquiryModal');
    this.form = document.getElementById('enquiryForm');
    this.successBox = document.getElementById('modalSuccessBox');
  },

  bindEvents() {
    // Close modal on click outside or close button
    const closeBtn = document.getElementById('modalCloseBtn');
    const closeSuccessBtn = document.getElementById('closeSuccessBtn');

    if (closeBtn) closeBtn.addEventListener('click', () => this.close());
    if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', () => this.close());

    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.close();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay.classList.contains('active')) {
        this.close();
      }
    });

    // Handle Form Submit
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleFormSubmit();
    });

    // Handle Direct WhatsApp Click
    const whatsappBtn = document.getElementById('directWhatsAppBtn');
    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', () => {
        const course = document.getElementById('enqCourse').value || "Civil Services Coaching";
        const message = encodeURIComponent(`Hello Deore Academy, I am interested in admission for ${course}. Please provide details on fees and upcoming batches.`);
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
      });
    }

    // Attach delegated click listener for all action buttons
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-modal-trigger]');
      if (!trigger) return;

      e.preventDefault();
      const course = trigger.getAttribute('data-course') || '';
      const mode = trigger.getAttribute('data-mode') || '';
      const title = trigger.getAttribute('data-title') || 'Enquire for Admissions';
      const type = trigger.getAttribute('data-type') || 'enquiry';

      this.open({ course, mode, title, type });
    });
  },

  open({ course = '', mode = '', title = 'Enquire for Admissions', type = 'enquiry' } = {}) {
    this.currentContext = { course, mode, title, type };

    // Reset forms
    this.form.style.display = 'block';
    this.successBox.classList.remove('active');

    // Title adjustments
    const titleEl = document.getElementById('modalTitle');
    const subEl = document.getElementById('modalSubtitle');
    if (type === 'talk-expert') {
      titleEl.textContent = 'Talk to an Academic Expert';
      subEl.textContent = 'Schedule a 1-on-1 counseling session with our senior faculty in Nashik.';
    } else if (type === 'enroll') {
      titleEl.textContent = `Enroll in ${course || 'Upcoming Batch'}`;
      subEl.textContent = 'Reserve your classroom seat before batch intake closes.';
    } else {
      titleEl.textContent = title;
      subEl.textContent = 'Get expert counseling, batch syllabus & free demo class access.';
    }

    // Pre-populate Course if passed
    if (course) {
      const courseSelect = document.getElementById('enqCourse');
      for (let i = 0; i < courseSelect.options.length; i++) {
        if (courseSelect.options[i].value.toLowerCase().includes(course.toLowerCase())) {
          courseSelect.selectedIndex = i;
          break;
        }
      }
    }

    // Open overlay
    this.overlay.classList.add('active');
    this.overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus first input
    setTimeout(() => {
      document.getElementById('enqName')?.focus();
    }, 200);
  },

  close() {
    this.overlay.classList.remove('active');
    this.overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  },

  handleFormSubmit() {
    const nameInput = document.getElementById('enqName');
    const phoneInput = document.getElementById('enqPhone');
    const courseSelect = document.getElementById('enqCourse');
    const emailInput = document.getElementById('enqEmail');
    const messageInput = document.getElementById('enqMessage');
    const modeEl = document.querySelector('input[name="learningMode"]:checked');

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const course = courseSelect.value;
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const mode = modeEl ? modeEl.value : 'Classroom';

    // Basic Validation
    if (!name) {
      alert('Please enter your full name');
      nameInput.focus();
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid 10-digit Indian mobile number');
      phoneInput.focus();
      return;
    }

    if (!course) {
      alert('Please select a course of interest');
      courseSelect.focus();
      return;
    }

    const submitBtn = document.getElementById('submitEnquiryBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting Enquiry...';

    // Simulate server dispatch / mock submission
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Enquiry →';

      // Log lead payload for future CRM / WhatsApp / Backend hookup
      const leadPayload = {
        name,
        phone,
        email,
        course,
        mode,
        message,
        timestamp: new Date().toISOString(),
        source: window.location.pathname
      };
      console.log('Lead captured successfully:', leadPayload);

      // Save locally to simulate CRM persistence
      try {
        const stored = JSON.parse(localStorage.getItem('deore_leads') || '[]');
        stored.push(leadPayload);
        localStorage.setItem('deore_leads', JSON.stringify(stored));
      } catch (err) {
        console.warn('Storage quota or private browsing:', err);
      }

      // Display Success State
      document.getElementById('successApplicantName').textContent = name;
      this.form.style.display = 'none';
      this.successBox.classList.add('active');
    }, 600);
  }
};

// Initialize once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  EnquirySystem.init();
});
