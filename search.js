

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

  function closeSearch() {
    const searchWrapper = document.getElementById('searchDropdown');
    if (!searchWrapper) return;
    searchWrapper.classList.remove('is-active');
    const s = document.getElementById('ripSearchInput');
    if (s) { s.value = ''; executeProductSearch(''); }
  }

  // ==========================================
// SEARCH
// ==========================================
const searchInput = document.getElementById('ripSearchInput');
if (searchInput) {
  searchInput.addEventListener('input', (e) => executeProductSearch(e.target.value));
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const shopSection = document.getElementById('shop');
      if (shopSection && searchInput.value.trim() !== '') {
        shopSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
}