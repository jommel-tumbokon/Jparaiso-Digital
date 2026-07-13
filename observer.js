/* ==========================================================
   INTERSECTION OBSERVER
   Purpose:
   Reveal product cards
   once they enter the viewport.
========================================================== */
const productObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      productObserver.unobserve(entry.target);
    }
  });
}, { root: null, threshold: 0.15 });

function observeProductCards() {
document.querySelectorAll('.product-grid__item').forEach(item => productObserver.observe(item));
}