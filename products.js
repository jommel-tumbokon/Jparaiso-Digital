/* ==========================================================
   PRODUCTS COMPONENT
   Render Product Grid
========================================================== */

function generateProductGrid() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
  
    const products = CONFIG.products;
  
    grid.innerHTML = products.map((p) => `
          <li class="product-grid__item">
            <article class="product-card">
              <a href="#" class="product-card__link" onclick="openProductModal('${p.title}', '${p.price}', '${p.image}', ${p.hasSizeChart}); return false;">
                <div class="product-card__media">
                  ${p.badge ? `<span class="product-card__badge ${p.badgeClass}">${p.badge}</span>` : ''}
                  <img class="product-card__image" src="${p.image}" alt="${p.alt}" width="800" height="1000" loading="lazy">
                </div>
                <div class="product-card__body">
                  <h3 class="product-card__title">${p.title}</h3>
                  <p class="product-card__meta">${p.meta}</p>
                  <p class="product-card__price">${p.price}</p>
                </div>
              </a>
            </article>
          </li>`).join('');
          observeProductCards();
      }
      function executeProductSearch(query) {
        const items = document.querySelectorAll('.product-grid__item');
        const q = query.toLowerCase();
        items.forEach(item => {
          const title = item.querySelector('.product-card__title')?.innerText.toLowerCase() || '';
          item.style.display = title.includes(q) ? '' : 'none';
        });
      }
      