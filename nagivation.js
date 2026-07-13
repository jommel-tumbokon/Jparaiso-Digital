function closeAllDropdownsExcept(activeElement = 'none') {
    const cartDropdown = document.querySelector('.rip-cart-dropdown');
    if (cartDropdown && activeElement !== 'cart') cartDropdown.classList.remove('is-active', 'active');
    
    const searchWrapper = document.getElementById('searchDropdown');
    if (searchWrapper && activeElement !== 'search') {
      searchWrapper.classList.remove('is-active');
      const searchInput = document.getElementById('ripSearchInput');
      if (searchInput) { searchInput.value = ''; executeProductSearch(''); }
    }
  
    // DAGDAG — isara rin ang account dropdown
    const accountDropdown = document.getElementById('accountDropdown');
    if (accountDropdown && activeElement !== 'account') {
      accountDropdown.classList.remove('is-active');
    }
  }
  
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
  function closeSearch() {
    const searchWrapper = document.getElementById('searchDropdown');
    if (!searchWrapper) return;
    searchWrapper.classList.remove('is-active');
    const s = document.getElementById('ripSearchInput');
    if (s) { s.value = ''; executeProductSearch(''); }
  }
  function toggleSearch() {
    const searchWrapper = document.getElementById('searchDropdown');
    if (!searchWrapper) return;
    const isOpen = searchWrapper.classList.contains('is-active');
    closeAllDropdownsExcept('search');
    if (!isOpen) {
      searchWrapper.classList.add('is-active');
      setTimeout(() => { const s = document.getElementById('ripSearchInput'); if(s) s.focus(); }, 100);
    }
  }
  