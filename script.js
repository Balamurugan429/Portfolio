/* ==========================================================================
   ACADEMIC & SYSTEMS PORTFOLIO - JAVASCRIPT
   Clean, accessible interaction: navigation drawer and scroll spy
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section[id]');

  // 1. Mobile Menu Toggle
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      siteNav.classList.toggle('open');
      const isOpen = siteNav.classList.contains('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Active Section Scroll Spy
  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPosition = window.pageYOffset + 180;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${currentId}`) {
        item.classList.add('active');
      }
    });
  });
});
