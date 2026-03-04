// ── NAV SCROLL ──
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // ── HAMBURGER ──
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobileMenu');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
  });
  function closeMobile() {
    ham.classList.remove('open');
    mob.classList.remove('open');
  }

  // ── REVEAL ON SCROLL ──
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => io.observe(el));

  // ── GALLERY FILTER (placeholder) ──
  function filterGallery(btn, cat) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  // ── LIGHTBOX ──
  function openLightbox(title, desc) {
    document.getElementById('lb-title').textContent = title;
    document.getElementById('lb-desc').textContent = desc;
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }
  document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
  });

  // ── SMOOTH MOBILE NAV ──
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── HERO TITLE STAGGER ──
  window.addEventListener('DOMContentLoaded', () => {
    const lines = document.querySelectorAll('.hero-title div');
    lines.forEach((l, i) => {
      l.style.opacity = '0';
      l.style.transform = 'translateY(20px)';
      l.style.transition = 'opacity .6s ease, transform .6s ease';
      setTimeout(() => {
        l.style.opacity = '1';
        l.style.transform = 'translateY(0)';
      }, 200 + i * 120);
    });

    // Badge
    const badge = document.querySelector('.hero-badge');
    badge.style.opacity = '0';
    badge.style.transition = 'opacity .5s ease';
    setTimeout(() => badge.style.opacity = '1', 100);

    // Sub & actions
    const sub = document.querySelector('.hero-sub');
    const actions = document.querySelector('.hero-actions');
    [sub, actions].forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0'; el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, 700 + i * 150);
    });
  });