/* ADMIN DASHBOARD LOGIC - FIXED & DEFENSIVE */

document.addEventListener('DOMContentLoaded', () => {
    console.log('🔧 Admin Dashboard loaded');

    // ==================== NEW: DEEP MERGE HELPER ====================
    // Kinopya natin ito para mabasa ng admin ang saved data mula sa LocalStorage
    function deepMergeConfig(target, source) {
        if (!source || typeof source !== 'object') return target;
        Object.keys(source).forEach((key) => {
            const sourceVal = source[key];
            const targetVal = target[key];
            if (
                sourceVal && typeof sourceVal === 'object' && !Array.isArray(sourceVal) &&
                targetVal && typeof targetVal === 'object' && !Array.isArray(targetVal)
            ) {
                deepMergeConfig(targetVal, sourceVal);
            } else {
                target[key] = sourceVal;
            }
        });
        return target;
    }

    // ==================== NEW: LOAD SAVED CONFIG ====================
    try {
        const savedConfig = localStorage.getItem('studioos_config');
        if (savedConfig) {
            const parsedConfig = JSON.parse(savedConfig);
            deepMergeConfig(CONFIG, parsedConfig);
            console.log('✅ Admin loaded saved config from LocalStorage');
        }
    } catch (e) {
        console.error('❌ Error loading saved config, falling back to default CONFIG:', e);
    }

    // Helper para safe ang pagkuha ng value (kahit walang laman ang CONFIG)
    const getVal = (obj, path, fallback = '') => {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj) || fallback;
    };

    // Helper para safe ang pag-save ng value (Gawa ni Claude strategy)
    const setVal = (obj, path, value) => {
        const keys = path.split('.');
        let current = obj;
        for (let i = 0; i < keys.length - 1; i++) {
            if (!current[keys[i]] || typeof current[keys[i]] !== 'object') {
                current[keys[i]] = {};
            }
            current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
    };

    // 1. Populate General Settings Form
    document.getElementById('input-shopName').value = CONFIG.shopName || '';
    document.getElementById('input-primaryColor').value = getVal(CONFIG, 'colors.primary', '#000000');

    // 2. Populate Hero Section Form
    document.getElementById('input-heroTitle').value = getVal(CONFIG, 'hero.title', '');
    document.getElementById('input-heroSubtitle').value = getVal(CONFIG, 'hero.subtitle', '');
    document.getElementById('input-heroButton').value = getVal(CONFIG, 'hero.button', '');
    document.getElementById('input-heroVideo').value = getVal(CONFIG, 'hero.video', '');

    // 3. Populate Footer & Socials Form
    document.getElementById('input-socialInstagram').value = getVal(CONFIG, 'socials.instagram', '');
    document.getElementById('input-socialTiktok').value = getVal(CONFIG, 'socials.tiktok', '');
    document.getElementById('input-socialYoutube').value = getVal(CONFIG, 'socials.youtube', '');
    document.getElementById('input-newsletterTitle').value = getVal(CONFIG, 'newsletter.title', '');
    document.getElementById('input-newsletterPlaceholder').value = getVal(CONFIG, 'newsletter.placeholder', '');
    document.getElementById('input-newsletterFormAction').value = getVal(CONFIG, 'newsletter.formAction', '');
    document.getElementById('input-footerCopyright').value = getVal(CONFIG, 'footer.copyright', '');
    document.getElementById('input-booking-bgImage').value = getVal(CONFIG, 'booking.bgImage', '');
    document.getElementById('input-booking-title').value = getVal(CONFIG, 'booking.title', '');
    document.getElementById('input-booking-subtitle').value = getVal(CONFIG, 'booking.subtitle', '');
    document.getElementById('input-booking-buttonText').value = getVal(CONFIG, 'booking.buttonText', '');
    document.getElementById('input-booking-locationTitle').value = getVal(CONFIG, 'booking.info.locationTitle', '');
    document.getElementById('input-booking-location').value = getVal(CONFIG, 'booking.info.location', '');
    document.getElementById('input-booking-phoneTitle').value = getVal(CONFIG, 'booking.info.phoneTitle', '');
    document.getElementById('input-booking-phone').value = getVal(CONFIG, 'booking.info.phone', '');
    document.getElementById('input-booking-hoursTitle').value = getVal(CONFIG, 'booking.info.hoursTitle', '');
    document.getElementById('input-booking-hours').value = getVal(CONFIG, 'booking.info.hours', '');

    // 4. Render Products List
    renderProductsList();

    // 5. Tab Switching Logic
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.form-section');
const pageTitle = document.getElementById('page-title');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        link.classList.add('active');
        const targetSection = link.getAttribute('data-section');
        const targetElement = document.getElementById(`section-${targetSection}`);
        if (targetElement) {
            targetElement.classList.add('active');
            pageTitle.innerText = link.innerText;
        }
        
        // Auto-close sidebar on mobile after clicking
        if (window.innerWidth <= 768) {
            toggleMobileSidebar();
        }
    });
});

    // 6. Save Button Logic (Defensive - Hindi na mag-eerror!)
    const saveBtn = document.getElementById('save-config-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            try {
                // I-save ang lahat gamit ang safe na setVal function
                setVal(CONFIG, 'shopName', document.getElementById('input-shopName').value);
                setVal(CONFIG, 'colors.primary', document.getElementById('input-primaryColor').value);

                setVal(CONFIG, 'hero.title', document.getElementById('input-heroTitle').value);
                setVal(CONFIG, 'hero.subtitle', document.getElementById('input-heroSubtitle').value);
                setVal(CONFIG, 'hero.button', document.getElementById('input-heroButton').value);
                setVal(CONFIG, 'hero.video', document.getElementById('input-heroVideo').value);
                // SAVE BOOKING SETTINGS
            setVal(CONFIG, 'booking.bgImage', document.getElementById('input-booking-bgImage').value);
            setVal(CONFIG, 'booking.title', document.getElementById('input-booking-title').value);
            setVal(CONFIG, 'booking.subtitle', document.getElementById('input-booking-subtitle').value);
            setVal(CONFIG, 'booking.buttonText', document.getElementById('input-booking-buttonText').value);
            
            setVal(CONFIG, 'booking.info.locationTitle', document.getElementById('input-booking-locationTitle').value);
            setVal(CONFIG, 'booking.info.location', document.getElementById('input-booking-location').value);
            setVal(CONFIG, 'booking.info.phoneTitle', document.getElementById('input-booking-phoneTitle').value);
            setVal(CONFIG, 'booking.info.phone', document.getElementById('input-booking-phone').value);
            setVal(CONFIG, 'booking.info.hoursTitle', document.getElementById('input-booking-hoursTitle').value);
            setVal(CONFIG, 'booking.info.hours', document.getElementById('input-booking-hours').value);

                setVal(CONFIG, 'socials.instagram', document.getElementById('input-socialInstagram').value);
                setVal(CONFIG, 'socials.tiktok', document.getElementById('input-socialTiktok').value);
                setVal(CONFIG, 'socials.youtube', document.getElementById('input-socialYoutube').value);
                setVal(CONFIG, 'newsletter.title', document.getElementById('input-newsletterTitle').value);
                setVal(CONFIG, 'newsletter.placeholder', document.getElementById('input-newsletterPlaceholder').value);
                setVal(CONFIG, 'newsletter.formAction', document.getElementById('input-newsletterFormAction').value);
                setVal(CONFIG, 'footer.copyright', document.getElementById('input-footerCopyright').value);

                // I-save sa LocalStorage
                localStorage.setItem('studioos_config', JSON.stringify(CONFIG));
                
                console.log('✅ Config saved to LocalStorage');
                alert('✅ Changes saved successfully! Refresh index.html to see updates.');
            } catch (error) {
                console.error('❌ Error saving config:', error);
                alert('❌ Error saving changes: ' + error.message);
            }
        });
    }

    // 7. Add Product Button
    const addProductBtn = document.getElementById('add-product-btn');
    if (addProductBtn) {
        addProductBtn.addEventListener('click', () => {
            addNewProduct();
        });
    }
});

/* RENDER PRODUCTS LIST */
function renderProductsList() {
    const container = document.getElementById('admin-product-list');
    if (!container || !CONFIG.products) return;
    container.innerHTML = '';
    CONFIG.products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.style.cssText = 'background: #fff; border: 1px solid #e4e4e7; border-radius: 8px; padding: 16px; margin-bottom: 16px;';
        productCard.innerHTML = `
            <div style="display: flex; gap: 16px; margin-bottom: 12px;">
                <img src="${product.image}" alt="${product.title}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px;">
                <div style="flex: 1;">
                    <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">${product.title}</h4>
                    <p style="font-size: 13px; color: #52525b;">${product.price}</p>
                </div>
                <button onclick="deleteProduct(${index})" style="background: #ef4444; color: #fff; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; font-size: 12px;">Delete</button>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <input type="text" value="${product.title}" onchange="updateProduct(${index}, 'title', this.value)" placeholder="Title" class="form-input" style="padding: 8px; font-size: 13px;">
                <input type="text" value="${product.price}" onchange="updateProduct(${index}, 'price', this.value)" placeholder="Price" class="form-input" style="padding: 8px; font-size: 13px;">
                <input type="text" value="${product.image}" onchange="updateProduct(${index}, 'image', this.value)" placeholder="Image Path" class="form-input" style="padding: 8px; font-size: 13px; grid-column: span 2;">
            </div>
        `;
        container.appendChild(productCard);
    });
}

function addNewProduct() {
    if (!CONFIG.products) CONFIG.products = [];
    CONFIG.products.push({
        title: "NEW PRODUCT", price: "0.00", image: "assets/products/default.png",
        alt: "New Product", meta: "New Product", badge: "", badgeClass: "", hasSizeChart: true
    });
    renderProductsList();
    localStorage.setItem('studioos_config', JSON.stringify(CONFIG));
}

function updateProduct(index, field, value) {
    CONFIG.products[index][field] = value;
    localStorage.setItem('studioos_config', JSON.stringify(CONFIG));
}

function deleteProduct(index) {
    if (confirm('Delete this product?')) {
        CONFIG.products.splice(index, 1);
        renderProductsList();
        localStorage.setItem('studioos_config', JSON.stringify(CONFIG));
    }
}

// Mobile Sidebar Toggle Function
function toggleMobileSidebar() {
    const sidebar = document.querySelector('.admin-sidebar');
    const overlay = document.querySelector('.admin-sidebar-overlay');
    const hamburger = document.querySelector('.admin-mobile-toggle');
    
    if (sidebar && overlay) {
      sidebar.classList.toggle('is-open');
      overlay.classList.toggle('is-open');
      
      // Hide hamburger button when sidebar is open
      if (hamburger) {
        if (sidebar.classList.contains('is-open')) {
          hamburger.classList.add('hide');
        } else {
          hamburger.classList.remove('hide');
        }
      }
    }
  }