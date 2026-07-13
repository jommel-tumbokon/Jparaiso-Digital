/* ==========================================================
   CART.JS
========================================================== */

// GLOBAL VARIABLES
let riparadiseCart = JSON.parse(localStorage.getItem('rip_cart')) || [];

function toggleCart() {
    const cartDropdown = document.querySelector('.rip-cart-dropdown');
    if (!cartDropdown) return;
    const isCurrentlyOpen = cartDropdown.classList.contains('is-active');
    closeAllDropdownsExcept('cart');
    if (!isCurrentlyOpen) {
      cartDropdown.classList.add('is-active', 'active');
      renderCartDropdownItems();
    }
  }

  function renderCartDropdownItems() {
    const bodyContainer = document.getElementById('cartDropdownBody');
    const totalSpan = document.getElementById('cartDropdownTotal');
    if (!bodyContainer) return;
    if (riparadiseCart.length === 0) {
      bodyContainer.innerHTML = '<div class="rip-cart-empty">YOUR BAG IS CURRENTLY EMPTY.</div>';
      if (totalSpan) totalSpan.innerText = "₱0.00";
      return;
    }
    let cartHTML = '';
    let grandTotal = 0;
    riparadiseCart.forEach((item, index) => {
      const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, "")) || 0;
      const itemSubtotal = numericPrice * item.quantity;
      grandTotal += itemSubtotal;
      cartHTML += `
        <div class="rip-dropdown-item">
          <div class="rip-dropdown-item__img"><img src="${item.image}" alt="${item.title}"></div>
          <div class="rip-dropdown-item__details">
            <h4 class="rip-dropdown-item__title">${item.title}</h4>
            <p class="rip-dropdown-item__variant">Size: ${item.size}</p>
            <div class="rip-dropdown-item__qty-control">
<button type="button" onclick="event.stopPropagation(); changeDropdownQty(${index}, -1)">-</button>
<span class="rip-dropdown-qty-num">${item.quantity}</span>
<button type="button" onclick="event.stopPropagation(); changeDropdownQty(${index}, 1)">+</button>
</div>
          </div>
          <div class="rip-dropdown-item__right">
            <button type="button" class="rip-dropdown-item__remove" onclick="event.stopPropagation(); removeDropdownItem(${index})" aria-label="Remove item">&times;</button>
            <span class="rip-dropdown-item__price">₱${itemSubtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
          </div>
        </div>`;
    });
    cartHTML += `<div style="margin-top: 20px; text-align: center;"><a href="#" onclick="navigateWithFade('checkout.html'); return false;" class="btn btn--primary" style="width: 100%; display: block; text-decoration: none;">PROCEED TO CHECKOUT</a></div>`;
    bodyContainer.innerHTML = cartHTML;
    if (totalSpan) totalSpan.innerText = `₱${grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  }

  
  function changeDropdownQty(index, amount) {
    riparadiseCart[index].quantity += amount;
    if (riparadiseCart[index].quantity <= 0) riparadiseCart.splice(index, 1);
    localStorage.setItem('rip_cart', JSON.stringify(riparadiseCart));
    updateCartBadgeUI();
    renderCartDropdownItems();
    const cartDropdown = document.querySelector('.rip-cart-dropdown');
    if (cartDropdown) cartDropdown.classList.add('is-active', 'active');
  }

  function removeDropdownItem(index) {
    riparadiseCart.splice(index, 1);
    localStorage.setItem('rip_cart', JSON.stringify(riparadiseCart));
    updateCartBadgeUI();
    renderCartDropdownItems();
    const cartDropdown = document.querySelector('.rip-cart-dropdown');
    if (cartDropdown) cartDropdown.classList.add('is-active', 'active');
  }

  function updateCartBadgeUI() {
    const totalItems = riparadiseCart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.querySelector('.site-header__cart-count');
    if (badge) badge.innerText = totalItems;
  }

 