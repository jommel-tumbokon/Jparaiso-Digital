// FADE IN ON LOAD (Page Enter Animation)
window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('page-transition-overlay');
    if (overlay) {
      // Siguraduhing visible muna bago i-fade out
      overlay.style.transition = 'none';
      overlay.style.opacity = '1';
      overlay.style.pointerEvents = 'none';
  
      // Small delay para ma-render ng browser ang initial state
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          overlay.style.transition = 'opacity 0.5s ease-out';
          overlay.style.opacity = '0';
        });
      });
      // Hindi na natin siya ire-remove — kailangan pa siya para sa exit transition
    }
  });

// RIPPLE EFFECT SA ACCOUNT DROPDOWN ITEMS
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
      // Ripple effect
      const ripple = document.createElement('span');
      ripple.classList.add('rip-ripple');
      const rect = item.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${e.clientX - rect.left - size/2}px;
        top:  ${e.clientY - rect.top  - size/2}px;
      `;
      item.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
  
      // White fade transition para sa mga links na may href na pupunta sa ibang page
      const href = item.getAttribute('href');
      const isExternalLink = href && href !== '#' && !href.startsWith('javascript');
      if (isExternalLink) {
        e.preventDefault();
        const overlay = document.getElementById('page-transition-overlay');
        if (overlay) {
          overlay.style.transition = 'opacity 0.4s ease';
          overlay.style.opacity = '1';
          overlay.style.pointerEvents = 'all';
          setTimeout(() => {
            window.location.href = href;
          }, 420);
        } else {
          window.location.href = href;
        }
      }
    });
  });
  

  // DAGDAG ITO DITO ↓
  function navigateWithFade(url) {
    const overlay = document.getElementById('page-transition-overlay');
    if (!overlay) { window.location.href = url; return; }
    overlay.style.transition = 'opacity 0.4s ease';
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';
    setTimeout(() => {
      window.location.href = url;
    }, 420);
  }
  