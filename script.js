const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
reveals.forEach((el) => observer.observe(el));

const navToggle = document.querySelector('.nav-toggle');
const navPanel = document.querySelector('.nav-panel');
navToggle.addEventListener('click', () => {
  const open = navPanel.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
navPanel.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  navPanel.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeButton = lightbox.querySelector('.lightbox-close');
document.querySelectorAll('.image-button').forEach((button) => {
  button.addEventListener('click', () => {
    lightboxImg.src = button.dataset.src;
    lightbox.showModal();
  });
});
closeButton.addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
