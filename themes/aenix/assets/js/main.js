/* Ænix Theme — Main JS */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      mobileMenu.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  // Mobile submenu toggles
  document.querySelectorAll('.mobile-nav-item.has-children > button').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.mobile-nav-item');
      item.classList.toggle('open');
      btn.setAttribute('aria-expanded', item.classList.contains('open'));
    });
  });
});
