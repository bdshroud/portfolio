/* ===========================
   MAIN JAVASCRIPT
=========================== */

/* ─── Theme Toggle ─────────────────────────────── */
const themeToggle = document.getElementById('theme-toggle');
const prefersDark  = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);
  themeToggle.innerHTML = theme === 'light'
    ? '<i class="fas fa-moon"></i>'
    : '<i class="fas fa-sun"></i>';
}

(function initTheme() {
  const saved = localStorage.getItem('portfolio-theme');
  if (saved) { setTheme(saved); return; }
  setTheme(prefersDark.matches ? 'dark' : 'light');
})();

themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

/* ─── Navbar Scroll ────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ─── Mobile Menu ──────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');

hamburger?.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu?.classList.remove('open');
    hamburger?.classList.remove('open');
  });
});

// Close menu on outside click
document.addEventListener('click', e => {
  if (!navbar?.contains(e.target)) {
    navMenu?.classList.remove('open');
    hamburger?.classList.remove('open');
  }
});

/* ─── Active Nav Link on Scroll ─────────────────── */
const sections   = document.querySelectorAll('section[id]');
const navLinks   = document.querySelectorAll('.nav-link');

const sectionObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(sec => sectionObs.observe(sec));

/* ─── Typewriter Effect ─────────────────────────── */
const roles = [
  'Full Stack Developer',
  'Frontend Engineer',
  'UI/UX Enthusiast',
  'React Developer',
  'Problem Solver',
];

(function typewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  let roleIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const current = roles[roleIdx];

    if (!deleting) {
      el.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      el.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx  = (roleIdx + 1) % roles.length;
      }
    }

    setTimeout(type, deleting ? 60 : 90);
  }

  type();
})();

/* ─── Scroll Reveal Animations ──────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
        .forEach(el => revealObs.observe(el));

/* ─── Skills Tabs ───────────────────────────────── */
const skillTabs   = document.querySelectorAll('.skill-tab');
const skillPanels = document.querySelectorAll('.skills-panel');

function showSkillPanel(tabId) {
  skillPanels.forEach(p => p.classList.remove('active'));
  skillTabs.forEach(t => t.classList.remove('active'));

  const panel = document.getElementById(`tab-${tabId}`);
  panel?.classList.add('active');
  document.querySelector(`[data-tab="${tabId}"]`)?.classList.add('active');

  // Animate bars in the shown panel
  panel?.querySelectorAll('.skill-fill').forEach(fill => {
    fill.classList.remove('animated');
    requestAnimationFrame(() => requestAnimationFrame(() => fill.classList.add('animated')));
  });
}

skillTabs.forEach(tab => {
  tab.addEventListener('click', () => showSkillPanel(tab.dataset.tab));
});

// Animate bars when skills section first becomes visible
const skillSectionObs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    document.querySelectorAll('.skills-panel.active .skill-fill')
            .forEach(fill => fill.classList.add('animated'));
    skillSectionObs.disconnect();
  }
}, { threshold: 0.1 });

const skillsSection = document.getElementById('skills');
if (skillsSection) skillSectionObs.observe(skillsSection);

/* ─── Projects Filter ───────────────────────────── */
const filterBtns    = document.querySelectorAll('.filter-btn');
const projectCards  = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    projectCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.style.transition = 'all 0.3s';
      card.style.opacity    = match ? '1' : '0';
      card.style.transform  = match ? 'scale(1)' : 'scale(0.95)';
      setTimeout(() => card.classList.toggle('hidden', !match), 300);
    });
  });
});

/* ─── Contact Form Validation ───────────────────── */
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

function validateField(field) {
  const errorEl = field.parentElement.querySelector('.form-error');
  const val = field.value.trim();
  let msg = '';

  if (!val) {
    msg = 'This field is required.';
  } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    msg = 'Please enter a valid email address.';
  }

  field.classList.toggle('error', !!msg);
  if (errorEl) errorEl.textContent = msg;
  return !msg;
}

contactForm?.querySelectorAll('input, textarea').forEach(field => {
  field.addEventListener('blur', () => validateField(field));
  field.addEventListener('input', () => {
    if (field.classList.contains('error')) validateField(field);
  });
});

contactForm?.addEventListener('submit', e => {
  e.preventDefault();
  const fields  = [...contactForm.querySelectorAll('input[required], textarea[required]')];
  const isValid = fields.every(f => validateField(f));

  if (!isValid) return;

  // Simulate sending (replace with real API call or EmailJS)
  const btn  = contactForm.querySelector('[type="submit"]');
  const text = btn.querySelector('.btn-text');
  btn.disabled = true;
  text.textContent = 'Sending…';
  btn.style.opacity = '0.7';

  setTimeout(() => {
    contactForm.reset();
    btn.disabled = false;
    text.textContent = 'Send Message';
    btn.style.opacity = '1';
    formSuccess?.classList.add('show');
    setTimeout(() => formSuccess?.classList.remove('show'), 4000);
  }, 1500);
});

/* ─── Footer Year ───────────────────────────────── */
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ─── Page Fade-In ──────────────────────────────── */
document.body.classList.add('page-fade');

/* ─── Stagger Reveal on DOM ready ──────────────── */
(function staggerReveal() {
  const cards = document.querySelectorAll('.project-card, .skill-card, .timeline-card');
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 60}ms`;
    revealObs.observe(card);
  });
})();
