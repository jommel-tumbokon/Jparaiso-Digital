/* ==========================================================
   MODAL COMPONENT
   Product Quick View
   Cart Modal Actions
========================================================== */
let isModalOpen = false;

function openProductModal(title, price, imgSrc, showSizeChart = true) {
    const modal = document.getElementById('productQuickViewModal');
    if (!modal) return;
    const sizeSection = document.getElementById('modalSizeChartSection');
    const sizeHeader = document.querySelector('.p-size-header-row');
    const sizeGrid = document.querySelector('.p-size-options-grid');
    if (showSizeChart) {
      if (sizeSection) sizeSection.style.display = '';
      if (sizeHeader) sizeHeader.style.display = '';
      if (sizeGrid) sizeGrid.style.display = '';
    } else {
      if (sizeSection) sizeSection.style.display = 'none';
      if (sizeHeader) sizeHeader.style.display = 'none';
      if (sizeGrid) sizeGrid.style.display = 'none';
    }
    if (title) document.getElementById('modalProductTitle').innerText = title;
    if (price) document.getElementById('modalProductPrice').innerText = price;
    if (imgSrc) document.getElementById('modalProductImg').src = imgSrc;
    document.getElementById('modalQtyInput').value = 1;
    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    isModalOpen = true;
    document.addEventListener('keydown', handleEscKey);
}

function closeProductModal() {
    const modal = document.getElementById('productQuickViewModal');
    if (modal) {
      modal.classList.remove('is-active');
      document.body.style.overflow = '';
      isModalOpen = false;
      document.removeEventListener('keydown', handleEscKey);
    }
}

function handleEscKey(event) {
    if (event.key === 'Escape' && isModalOpen) closeProductModal();
}

// Close modal when clicking backdrop
document.addEventListener('click', (event) => {
    const modal = document.getElementById('productQuickViewModal');
    if (event.target == modal) closeProductModal();
});

function adjustModalQty(change) {
    const qtyInput = document.getElementById('modalQtyInput');
    if (!qtyInput) return;
    let currentQty = parseInt(qtyInput.value) || 1;
    currentQty += change;
    if (currentQty < 1) currentQty = 1;
    qtyInput.value = currentQty;
}

function scrollToSizeChart() {
    const targetSection = document.getElementById('modalSizeChartSection');
    const detailsPanel = document.getElementById('modalDetailsContainer');
    if (targetSection && detailsPanel) {
      const targetOffset = targetSection.offsetTop - 20;
      detailsPanel.scrollTo({ top: targetOffset, behavior: 'smooth' });
    }
}

function triggerAddToCart() {
    const sizeInput = document.querySelector('input[name="product-size"]:checked');
    const selectedSize = sizeInput ? sizeInput.value : 'S';
    const qtyEl = document.getElementById('modalQtyInput');
    const itemQuantity = qtyEl ? (parseInt(qtyEl.value) || 1) : 1;
    const productTitle = document.getElementById('modalProductTitle').innerText;
    const productPrice = document.getElementById('modalProductPrice').innerText;
    const productImg = document.getElementById('modalProductImg').src;
    const cartItem = { title: productTitle, price: productPrice, size: selectedSize, quantity: itemQuantity, image: productImg };
    const existingItemIndex = riparadiseCart.findIndex(item => item.title === cartItem.title && item.size === cartItem.size);
    if (existingItemIndex > -1) {
      riparadiseCart[existingItemIndex].quantity += itemQuantity;
    } else {
      riparadiseCart.push(cartItem);
    }
    localStorage.setItem('rip_cart', JSON.stringify(riparadiseCart));
    updateCartBadgeUI();
    // Toast utility now lives in ui-feedback.js or auth.js
    showRiparadiseToast(`${productTitle} (${selectedSize}) x${itemQuantity}`);
    closeProductModal();
}
