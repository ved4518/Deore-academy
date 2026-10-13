/**
 * DEORE ACADEMY - MAIN APPLICATION CONTROLLER
 * Navigation, Mobile Drawer, Counters, Accordions & Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileDrawer();
  initActiveNavLink();
  initStatsCounter();
  initAccordions();
  initTabNavigation();
  initYouTubeShowcase();
});

/**
 * 1. Sticky Header Elevation on Scroll
 */
function initStickyHeader() {
  const header = document.querySelector('.header-sticky');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.style.boxShadow = '0 8px 24px rgba(11, 21, 40, 0.08)';
      header.style.borderBottomColor = 'transparent';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(11, 21, 40, 0.03)';
      header.style.borderBottomColor = 'rgba(226, 232, 240, 0.8)';
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Mobile Drawer Navigation
 */
function initMobileDrawer() {
  const openBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('closeDrawerBtn');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileDrawerOverlay');

  if (!openBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Close drawer when clicking internal link
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/**
 * 3. Highlight Active Navigation Item
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-drawer-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('/').pop();

    if (
      linkPath === currentPath ||
      (currentPath === '' && (linkPath === 'index.html' || href === '#')) ||
      (currentPath.includes('course') && linkPath.includes('course'))
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * 4. Statistics Number Animation on Scroll
 */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('[data-counter]');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateValue(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => observer.observe(el));

  function animateValue(element) {
    const target = parseInt(element.getAttribute('data-counter'), 10);
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 1800;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);

      element.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  }
}

/**
 * 5. Accordion (FAQs)
 */
function initAccordions() {
  const triggers = document.querySelectorAll('.accordion-trigger');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const isExpanded = item.classList.contains('active');

      // Optional: Close siblings if accordion-exclusive
      const parent = item.closest('.accordion-group');
      if (parent) {
        parent.querySelectorAll('.accordion-item').forEach(sibling => {
          if (sibling !== item) sibling.classList.remove('active');
        });
      }

      item.classList.toggle('active', !isExpanded);
    });
  });
}

/**
 * 6. Tabs Controller (for Course details & Timetables)
 */
function initTabNavigation() {
  const tabContainers = document.querySelectorAll('[data-tabs]');
  tabContainers.forEach(container => {
    const buttons = container.querySelectorAll('.tab-btn');
    const panes = container.querySelectorAll('.tab-pane');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab-target');

        buttons.forEach(b => b.classList.remove('active'));
        panes.forEach(p => p.style.display = 'none');

        btn.classList.add('active');
        const targetPane = container.querySelector(targetId);
        if (targetPane) targetPane.style.display = 'block';
      });
    });
  });
}

/**
 * 7. Video Reels & Case Studies Controller
 */
function initYouTubeShowcase() {
  const container = document.getElementById('youtube-lectures');
  if (!container) return;

  // Filter Tabs
  const tabBtns = container.querySelectorAll('.reel-tab-btn');
  const gridFeatured = document.getElementById('reelsGridFeatured');
  const gridAcademy = document.getElementById('reelsGridAcademy');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-reel-filter');
      if (filter === 'academy') {
        if (gridFeatured) gridFeatured.style.display = 'none';
        if (gridAcademy) gridAcademy.style.display = 'grid';
      } else {
        if (gridFeatured) gridFeatured.style.display = 'grid';
        if (gridAcademy) gridAcademy.style.display = 'none';
      }
    });
  });

  // Modal Lightbox Controller
  const modal = document.getElementById('reelModalOverlay');
  const modalIframe = document.getElementById('reelModalIframe');
  const modalTitle = document.getElementById('reelModalTitle');
  const directLink = document.getElementById('reelModalDirectLink');
  const closeBtn = document.getElementById('reelModalClose');
  const closeFooterBtn = document.getElementById('closeReelModalBtn');
  const localNotice = document.getElementById('reelModalLocalNotice');

  const openModal = (videoUrl, title, videoId) => {
    if (!modal) return;
    if (modalTitle && title) modalTitle.textContent = title;
    if (directLink) {
      directLink.href = videoId
        ? `https://www.youtube.com/watch?v=${videoId}`
        : 'https://www.youtube.com/@deoreacademynsk';
    }

    // Check if running on local file:// protocol
    const isFileProtocol = window.location.protocol === 'file:';
    if (localNotice) {
      localNotice.style.display = isFileProtocol ? 'block' : 'none';
    }

    if (modalIframe) {
      modalIframe.referrerPolicy = 'strict-origin-when-cross-origin';
      // Build clean embed URL using privacy-enhanced domain and no broken enablejsapi flag
      let embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
      if (!isFileProtocol && window.location.origin) {
        embedUrl += `&origin=${encodeURIComponent(window.location.origin)}`;
      }
      modalIframe.src = embedUrl;
    }
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    if (modalIframe) modalIframe.src = '';
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (closeFooterBtn) closeFooterBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Attach click listener to each reel card & its action elements
  const reelCards = container.querySelectorAll('.reel-card');
  reelCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a') && !e.target.closest('.reel-cta-link')) return;

      const videoId = card.getAttribute('data-video-id') || 'cqzrfnR3Fjw';
      const videoUrl = card.getAttribute('data-video-url') || `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
      const title = card.getAttribute('data-video-title') || 'Featured Video';
      openModal(videoUrl, title, videoId);
    });
  });
}
