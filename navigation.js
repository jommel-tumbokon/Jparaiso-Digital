// ==========================================
// CLOSE ALL DROPDOWNS EXCEPT ACTIVE
// ==========================================
function closeAllDropdownsExcept(activeElement = 'none') {
  const cartDropdown = document.querySelector('.rip-cart-dropdown');
  if (cartDropdown && activeElement !== 'cart') {
    cartDropdown.classList.remove('is-active', 'active');
  }

  const searchWrapper = document.getElementById('searchDropdown');
  if (searchWrapper && activeElement !== 'search') {
    searchWrapper.classList.remove('is-active');
    const searchInput = document.getElementById('ripSearchInput');
    if (searchInput) {
      searchInput.value = '';
      executeProductSearch('');
    }
  }

  // Isara rin ang account dropdown
  const accountDropdown = document.getElementById('accountDropdown');
  if (accountDropdown && activeElement !== 'account') {
    accountDropdown.classList.remove('is-active');
  }
}



// ==========================================
// ESCAPE KEY
// ==========================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLoginModal();
    closeRegisterModal();
    closeAllDropdownsExcept('none');
    const dropdown = document.getElementById('accountDropdown');
    if (dropdown) dropdown.classList.remove('is-active');
  }
});

// ==========================================
// SCROLL LISTENER (SMART STICKY UPDATE)
// ==========================================
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  // Isara lang ang dropdowns kapag nag-scroll ng 5px pababa/pataas
  if (Math.abs(currentScrollY - lastScrollY) > 5) {
    closeAllDropdownsExcept('none');
  }

  const header = document.querySelector('.site-header') || document.querySelector('header');
  if (!header) {
    lastScrollY = currentScrollY; // Proteksyon para hindi mag-error kung walang header
    return;
  }

  // Kunin ang totoong laki ng video section (o fallback sa innerHeight kung wala)
  const videoSection = document.querySelector('.hero-video-section') || document.querySelector('.hero');
  const videoSectionHeight = videoSection ? videoSection.offsetHeight : window.innerHeight;
  const headerHeight = header.offsetHeight;

  // Alamin kung pababa o pataas ang scroll
  const isScrollingDown = currentScrollY > lastScrollY;

  // ESTADO 1: Nasa loob pa ng Video Hero Section
  if (currentScrollY <= (videoSectionHeight - headerHeight)) {
    // Mananatiling transparent at litaw ang header sa ibabaw ng video
    header.classList.remove('site-header--hidden', 'site-header--scrolled');
  } 
  // ESTADO 2: Lumalabas o lumagpas na sa Video (Boundary ng Products)
  else {
    // Gawin nang White Background ang header dahil nasa puting area na ng products
    header.classList.add('site-header--scrolled');

    if (isScrollingDown) {
      // Kung nag-scroll DOWN: Itago agad ang header para HINDI harangan ang produkto
      header.classList.add('site-header--hidden');
    } else {
      // Kung nag-scroll UP: Ipakita ang Eleganteng White Header bar
      header.classList.remove('site-header--hidden');
    }
  }

  // Laging i-update ang huling posisyon ng scroll sa pinakababa
  lastScrollY = currentScrollY;
});

// ==========================================
// CLOSE DROPDOWNS ON OUTSIDE CLICK
// ==========================================
document.addEventListener('click', (e) => {
  // X button ng cart header — isara
  if (e.target.closest('.cart-dropdown-close')) {
    closeAllDropdownsExcept('none');
    return;
  }

  // Kung nag-click sa loob ng cart (kasama remove/qty buttons) — huwag isara
  if (e.target.closest('.rip-cart-dropdown')) return;

  // Kung nag-click sa cart ICON — hayaan ang toggleCart()
  if (e.target.closest('.site-header__cart')) return;

  // Kung nag-click sa account dropdown — hayaan ang toggleAccountMenu()
  if (e.target.closest('.account-dropdown')) return;

  // Kung nag-click sa search — hayaan
  if (e.target.closest('.rip-search-container')) return;

  // Lahat ng iba — outside click, isara lahat
  closeAllDropdownsExcept('none');
});
