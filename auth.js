// ==========================================
    // GLOBAL FUNCTIONS (ACCESSIBLE BY ONCLICK)
    // ==========================================
    
    function openLoginModal() {
        const modal = document.getElementById('loginModal');
        if (modal) { modal.classList.add('is-active'); document.body.style.overflow = 'hidden'; }
      }
  
      function closeLoginModal() {
        const modal = document.getElementById('loginModal');
        if (modal) { modal.classList.remove('is-active'); document.body.style.overflow = ''; }
      }
  
      function openRegisterModal() {
        const modal = document.getElementById('registerModal');
        if (modal) { modal.classList.add('is-active'); document.body.style.overflow = 'hidden'; }
      }
  
      function closeRegisterModal() {
        const modal = document.getElementById('registerModal');
        if (modal) { modal.classList.remove('is-active'); document.body.style.overflow = ''; }
      }
  
      function toggleAccountMenu() {
    const dropdown = document.getElementById('accountDropdown');
    if (!dropdown) return;
    const isOpen = dropdown.classList.contains('is-active');
    closeAllDropdownsExcept('account');
    if (!isOpen) {
      dropdown.classList.add('is-active');
      updateAccountMenu();
    }
  }
  
  function logout() {
    localStorage.removeItem('rip_user');
    updateAccountMenu();
    showNotification('You have been logged out', 'success');
    closeAllDropdownsExcept('none');
  }
  
      function showNotification(message, type = 'success') {
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => {
          notification.style.animation = 'slideOut 0.3s ease forwards';
          setTimeout(() => notification.remove(), 300);
        }, 3000);
      }
  
      function updateAccountMenu() {
        const user = JSON.parse(localStorage.getItem('rip_user'));
        const loggedOutView = document.getElementById('accountLoggedOut');
        const loggedInView = document.getElementById('accountLoggedIn');
        const userEmailDisplay = document.getElementById('userEmailDisplay');
        const mobileGuest = document.getElementById('mobileAccountGuest');
        const mobileUser = document.getElementById('mobileAccountUser');
        const mobileUserEmail = document.getElementById('mobileUserEmail');
        
        if (user && loggedOutView && loggedInView) {
          loggedOutView.style.display = 'none';
          loggedInView.style.display = 'block';
          userEmailDisplay.textContent = user.email;
        } else if (loggedOutView && loggedInView) {
          loggedOutView.style.display = 'block';
          loggedInView.style.display = 'none';
        }
        
        if (user && mobileGuest && mobileUser) {
          mobileGuest.style.display = 'none';
          mobileUser.style.display = 'block';
          if (mobileUserEmail) mobileUserEmail.textContent = user.email;
        } else if (mobileGuest && mobileUser) {
          mobileGuest.style.display = 'block';
          mobileUser.style.display = 'none';
        }
      }