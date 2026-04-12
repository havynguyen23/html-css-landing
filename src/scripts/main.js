import { classList, getElementById } from './utils/dom';

const logo = getElementById('logo');
const hamburger = getElementById('hamburger');
const navLinks = getElementById('navLinks');
const overlay = getElementById('navOverlay');

const openMenu = () => {
  classList.add(navLinks, 'open');
  classList.add(hamburger, 'open');
  classList.add(overlay, 'open');

  hamburger.setAttribute('aria-expanded', 'true');

  document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
  classList.remove(navLinks, 'open');
  classList.remove(hamburger, 'open');
  classList.remove(overlay, 'open');

  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
};

hamburger.addEventListener('click', () => {
  classList.contains(navLinks, 'open') ? closeMenu() : openMenu();
});

overlay.addEventListener('click', closeMenu);

logo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});
