/* Teakettle Tree and Trail — Main JS */

// Smooth active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

// Mobile hamburger nav toggle
const hamburger = document.getElementById('navHamburger');
const navMenu   = document.querySelector('.nav-links');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
  });
  // Close on nav link click
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });
}

// Contact form — Formspree handler with user feedback
const form = document.querySelector('.contact-form form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const data = new FormData(form);
      const res  = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        btn.textContent = '✓ Sent! We\'ll be in touch soon.';
        btn.style.background = '#2e5e2e';
        form.reset();
      } else {
        btn.textContent = 'Error — please email us directly';
        btn.style.background = '#8b2222';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Error — please email us directly';
      btn.style.background = '#8b2222';
      btn.disabled = false;
    }
  });
}
