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

      // Login Form
      const loginForm = document.getElementById('loginForm');
      if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const email = document.getElementById('loginEmail').value.trim();
          const password = document.getElementById('loginPassword').value;
          const users = JSON.parse(localStorage.getItem('rip_users')) || [];
          const user = users.find(u => u.email === email && u.password === password);
          if (user) {
            localStorage.setItem('rip_user', JSON.stringify(user));
            closeLoginModal();
            updateAccountMenu();
            showNotification('Welcome back to RIPARADISE', 'success');
            loginForm.reset();
          } else {
            showNotification('Invalid email or password', 'error');
          }
        });
      }

      // Register Form
      const registerForm = document.getElementById('registerForm');
      if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const name = document.getElementById('registerName').value.trim();
          const email = document.getElementById('registerEmail').value.trim();
          const password = document.getElementById('registerPassword').value;
          const users = JSON.parse(localStorage.getItem('rip_users')) || [];
          if (users.find(u => u.email === email)) {
            showNotification('Email already registered', 'error');
            return;
          }
          const newUser = { name, email, password, createdAt: new Date().toISOString() };
          users.push(newUser);
          localStorage.setItem('rip_users', JSON.stringify(users));
          localStorage.setItem('rip_user', JSON.stringify(newUser));
          closeRegisterModal();
          updateAccountMenu();
          showNotification('Account created! Welcome to RIPARADISE', 'success');
          registerForm.reset();
        });
      }

      
  function showRiparadiseToast(detailsText) {
    const toast = document.getElementById('toastNotification');
    const detailsContainer = document.getElementById('toastItemDetails');
    if (toast && detailsContainer) {
      detailsContainer.innerText = detailsText;
      toast.classList.add('show');
      setTimeout(() => { toast.classList.remove('show'); }, 3500);
    }
  }