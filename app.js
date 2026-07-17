/* ==========================================================
   APP.JS
   Purpose:
   Ito ang nagbabasa ng CONFIG at naglalagay ng data sa website.
   Dito manggagaling ang branding ng buong template.
========================================================== */

/* ==========================================================
   CONFIG LOADER (Check LocalStorage first, fallback to config.js)
   ========================================================== */

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

try {
    const savedConfig = localStorage.getItem('studioos_config');
    if (savedConfig) {
        const parsedConfig = JSON.parse(savedConfig);
        deepMergeConfig(CONFIG, parsedConfig);
        console.log('✅ Loaded config from LocalStorage (Admin Dashboard changes)');
    }
} catch (e) {
    console.error('❌ Error loading saved config, falling back to default CONFIG:', e);
}

/* ==========================================================
   BRANDING
   Shop Name
   Logo
========================================================== */

function loadBranding() {

    const logo = document.getElementById("site-logo");
    const logoLink = document.getElementById("site-logo-link");

    logo.src = CONFIG.logo;
    logo.alt = CONFIG.shopName;

    if (logoLink) {
        logoLink.setAttribute(
            "aria-label",
            `${CONFIG.shopName} Home`
        );
    }

}


/* ==========================================================
   HERO SECTION (Smart: Video OR Image)
========================================================== */
function loadHero() {
    const mediaContainer = document.getElementById('hero-media-container');
    
    // Check kung may Video o Image sa CONFIG
    if (CONFIG.hero.video && CONFIG.hero.video !== "") {
        mediaContainer.innerHTML = `
            <video autoplay loop muted playsinline class="hero-media-bg">
                <source src="${CONFIG.hero.video}" type="video/mp4">
            </video>`;
    } else if (CONFIG.hero.image) {
        mediaContainer.innerHTML = `
            <img src="${CONFIG.hero.image}" alt="Hero Background" class="hero-media-bg hero-image-bg">`;
    }

    // I-load ang texts at button
    if (document.getElementById('hero-title')) {
        document.getElementById('hero-title').innerText = CONFIG.hero.title;
    }
    if (document.getElementById('hero-subtitle')) {
        document.getElementById('hero-subtitle').innerText = CONFIG.hero.subtitle;
    }
    
    // UPDATED: Handle button text AND link
    const heroBtn = document.getElementById('hero-btn');
    if (heroBtn) {
        heroBtn.innerText = CONFIG.hero.button;
        // Gamitin ang buttonLink mula sa config, o kaya default sa '#shop'
        heroBtn.href = CONFIG.hero.buttonLink || '#shop'; 
    }
}

/* ==========================================================
   ABOUT SECTION (UPDATED: Config-Driven Gallery Scroll)
========================================================== */
function loadAbout() {
    // About image
    document.getElementById("about-image").src = CONFIG.about.image;
    document.getElementById("about-image").alt = CONFIG.about.title;

    // About subtitle
    document.getElementById("about-subtitle").textContent = CONFIG.about.subtitle;

    // About title
    document.getElementById("about-title").textContent = CONFIG.about.title;

    // About description
    document.getElementById("about-description").textContent = CONFIG.about.description;

    // About button (UPDATED: Smooth Scroll to Gallery)
    const aboutButton = document.getElementById("about-button");
    if (aboutButton) {
        // 1. Palitan ang text base sa gallery config (fallback sa about.button kung wala)
        aboutButton.textContent = CONFIG.gallery?.buttonText || CONFIG.about.button || "VIEW GALLERY";
        
        // 2. Tanggalin ang default link behavior (para hindi biglang mag-jump)
        aboutButton.removeAttribute("href");
        aboutButton.style.cursor = "pointer";
        
        // 3. Add smooth scroll functionality
        aboutButton.addEventListener('click', (e) => {
            e.preventDefault();
            const gallerySection = document.getElementById('gallery-section');
            if (gallerySection) {
                const offset = 100; // Konting offset para hindi dikit sa top
                const topPosition = gallerySection.offsetTop - offset;
                window.scrollTo({
                    top: topPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
}

/* ==========================================================
   SHOP SECTION
========================================================== */

function loadShop() {

    // Eyebrow
    document.getElementById("shop-eyebrow").textContent =
        CONFIG.shop.eyebrow;

    // Title
    document.getElementById("shop-title").textContent =
        CONFIG.shop.title;

    // Description
    document.getElementById("shop-description").textContent =
        CONFIG.shop.description;

}

/* ==========================================================
   EVENT SECTION
========================================================== */

function loadEvent() {

    // Event eyebrow
    document.getElementById("event-eyebrow").textContent =
        CONFIG.event.eyebrow;

    // Event title
    document.getElementById("event-title").textContent =
        CONFIG.event.title;

    // Instagram Embed
    document.getElementById("instagram-embed")
        .setAttribute(
            "data-instgrm-permalink",
            CONFIG.event.instagramEmbed
        );

    // Refresh Instagram Embed
    if (window.instgrm) {
        window.instgrm.Embeds.process();
    }

}


/* ==========================================================
   INITIALIZE WEBSITE
   Tinatawag lahat ng functions dito kapag nag-load ang page.
========================================================== */

function init() {
    // 1. MODULE CHECK: Hide / Show sections based on CONFIG
    const isEcommerce = CONFIG.modules?.ecommerce !== false; 
    const isBookingEnabled = CONFIG.modules?.booking !== false;
    
    // Hide Shop + Cart if E-commerce is OFF
    if (!isEcommerce) {
        const shopSection = document.getElementById('shop');
        if (shopSection) shopSection.style.display = 'none';
        
        const cartIcon = document.querySelector('.site-header__cart, .cart-icon, #cart-link');
        if (cartIcon) cartIcon.style.display = 'none';
        
        console.log('🛒 E-commerce Mode: OFF');
    }

 /* ==========================================================
   ON AND OFF
========================================================== */
    // Hide Search if OFF
    if (CONFIG.modules?.showSearch === false) {
        const searchContainer = document.getElementById('header-search-container');
        if (searchContainer) searchContainer.style.display = 'none';
    }

        // Hide Account/Login if OFF (Desktop)
        if (CONFIG.modules?.showAccount === false) {
            const accountContainer = document.getElementById('header-account-container');
            if (accountContainer) accountContainer.style.display = 'none';
            
            // ALSO hide mobile login link
            const mobileLogin = document.getElementById('mobileAccountGuest');
            if (mobileLogin) mobileLogin.style.display = 'none';
        }
    
if (!isBookingEnabled) {
    const bookingSection = document.getElementById('contact');
    if (bookingSection) {
        bookingSection.style.display = 'none';
    }
    console.log('📅 Booking Module: OFF');
}

// Hide Event Section if Event/Instagram is OFF
const isEventEnabled = CONFIG.modules?.event !== false;
if (!isEventEnabled) {
    const eventSection = document.getElementById('event');
    if (eventSection) {
        eventSection.style.display = 'none';
    }
    console.log('📸 Event/Instagram Module: OFF');
}

// Hide Gallery Section if Gallery is OFF
const isGalleryEnabled = CONFIG.modules?.gallery !== false;
if (!isGalleryEnabled) {
    const gallerySection = document.getElementById('gallery-section');
    if (gallerySection) {
        gallerySection.style.display = 'none';
    }
    console.log('🖼️ Gallery Module: OFF');
}

// Hide Newsletter Section if Newsletter is OFF
const isNewsletterEnabled = CONFIG.modules?.newsletter !== false;
if (!isNewsletterEnabled) {
    const newsletterSection = document.querySelector('.newsletter-section, .site-footer__newsletter');
    if (newsletterSection) {
        newsletterSection.style.display = 'none';
    }
    console.log(' Newsletter Module: OFF');
}

    // 2. Run all load functions
    loadSEO();
    loadBranding();
    loadHero();
    loadAbout();
    loadEvent();
    loadGallery();
    loadLookbook();
    loadTheme();
    loadFooter();
    loadNewsletter();
    loadAuth();
    loadNavigation();
    loadSearch();
    loadUI();
    initLightbox();

    // Conditional Loads
    if (isEcommerce) {
        loadShop();
        loadCart();
        updateAccountMenu();
        updateCartBadgeUI();
        generateProductGrid();
    }

    if (isBookingEnabled) {
        loadBooking();
    }
}

// Run website
document.addEventListener("DOMContentLoaded", () => {
    init();
});

/* ==========================================================
   THEME
   Update CSS Variables from CONFIG (Includes Dark/Light Mode)
========================================================== */
function loadTheme() {
    // 1. Primary Brand Colors
    document.documentElement.style.setProperty("--color-primary", CONFIG.colors.primary);
    document.documentElement.style.setProperty("--color-primary-inverse", CONFIG.colors.secondary);

    // 2. THEME MODE LOGIC (Dark vs Light)
    const isDark = CONFIG.theme === "dark";
    
    if (isDark) {
        // DARK MODE SETTINGS (Premium Soft Dark - Like Gallery Section)
        document.documentElement.style.setProperty("--color-bg", "#111111");        // Soft black
        document.documentElement.style.setProperty("--color-bg-elevated", "#1a1a1a"); // Slightly lighter
        document.documentElement.style.setProperty("--color-surface", "#1f1f1f");     // Cards/Forms
        document.documentElement.style.setProperty("--color-text", "#ffffff");         // White text
        document.documentElement.style.setProperty("--color-text-muted", "#b0b0b0");   // Light gray text
        document.documentElement.style.setProperty("--color-border", "rgba(255, 255, 255, 0.08)");
        document.documentElement.style.setProperty("--color-header-scrolled-bg", "#111111");
    } else {
        // LIGHT MODE SETTINGS (Default Clean White)
        document.documentElement.style.setProperty("--color-bg", "#ffffff");
        document.documentElement.style.setProperty("--color-bg-elevated", "#f9f9f9");
        document.documentElement.style.setProperty("--color-surface", "#ffffff");
        document.documentElement.style.setProperty("--color-text", "#000000");
        document.documentElement.style.setProperty("--color-text-muted", "#666666");
        document.documentElement.style.setProperty("--color-border", "rgba(0, 0, 0, 0.1)");
        document.documentElement.style.setProperty("--color-header-scrolled-bg", "#ffffff");
    }
}

/* ==========================================================
   FOOTER
   Social Links
========================================================== */

function loadFooter() {

    // Instagram
    document.getElementById("social-instagram").href =
        CONFIG.socials.instagram;

    // TikTok
    document.getElementById("social-tiktok").href =
        CONFIG.socials.tiktok;

    // YouTube
    document.getElementById("social-youtube").href =
        CONFIG.socials.youtube;
        
    /* Mobile Social Links */

    // Instagram
    document.getElementById("mobile-social-instagram").href =
        CONFIG.socials.instagram;
        
    // TikTok
    document.getElementById("mobile-social-tiktok").href =
        CONFIG.socials.tiktok;
        
    // YouTube
    document.getElementById("mobile-social-youtube").href =
        CONFIG.socials.youtube;
 
    // Copyright Year
    document.getElementById("footer-year").textContent =
    new Date().getFullYear();

    // Shop Name
    document.getElementById("footer-shop-name").textContent =
    CONFIG.shopName;

    // Copyright
    document.getElementById("footer-copyright").textContent =
    CONFIG.footer.copyright;
}   

/* ==========================================================
   BOOKING APPOINTMENT
========================================================== */
function loadBooking() {

    // 1. Set Background Image
    const bgContainer = document.getElementById('booking-bg');
    if (bgContainer && CONFIG.booking.bgImage) {
        bgContainer.style.backgroundImage = `url('${CONFIG.booking.bgImage}')`;
    }

    // 2. Title & Subtitle
    if (document.getElementById("booking-title")) {
        document.getElementById("booking-title").textContent = CONFIG.booking.title;
    }
    if (document.getElementById("booking-subtitle")) {
        document.getElementById("booking-subtitle").textContent = CONFIG.booking.subtitle;
    }

    // 3. Labels
    if (document.getElementById("booking-name-label")) {
        document.getElementById("booking-name-label").textContent = CONFIG.booking.fields.name;
    }
    if (document.getElementById("booking-email-label")) {
        document.getElementById("booking-email-label").textContent = CONFIG.booking.fields.email;
    }
    if (document.getElementById("booking-phone-label")) {
        document.getElementById("booking-phone-label").textContent = CONFIG.booking.fields.phone;
    }
    if (document.getElementById("booking-date-label")) {
        document.getElementById("booking-date-label").textContent = CONFIG.booking.fields.date;
    }
    if (document.getElementById("booking-time-label")) {
        document.getElementById("booking-time-label").textContent = CONFIG.booking.fields.time;
    }
    if (document.getElementById("booking-message-label")) {
        document.getElementById("booking-message-label").textContent = CONFIG.booking.fields.message;
    }
    if (document.getElementById("booking-budget-label")) {
        document.getElementById("booking-budget-label").textContent = CONFIG.booking.fields.budget;
    }
    if (document.getElementById("booking-reference-label")) {
        document.getElementById("booking-reference-label").textContent = CONFIG.booking.fields.referenceImage;
    }

    // 4. Button Text
    if (document.getElementById("booking-submit-button")) {
        document.getElementById("booking-submit-button").textContent = CONFIG.booking.buttonText;
    }

    // 5. Contact Information
    if (document.getElementById("booking-location-title")) {
        document.getElementById("booking-location-title").textContent = CONFIG.booking.info.locationTitle;
    }
    if (document.getElementById("booking-location")) {
        document.getElementById("booking-location").textContent = CONFIG.booking.info.location;
    }
    if (document.getElementById("booking-phone-title")) {
        document.getElementById("booking-phone-title").textContent = CONFIG.booking.info.phoneTitle;
    }
    if (document.getElementById("booking-phone-info")) {
        document.getElementById("booking-phone-info").textContent = CONFIG.booking.info.phone;
    }
    if (document.getElementById("booking-hours-title")) {
        document.getElementById("booking-hours-title").textContent = CONFIG.booking.info.hoursTitle;
    }
    if (document.getElementById("booking-hours")) {
        document.getElementById("booking-hours").textContent = CONFIG.booking.info.hours;
    }

    // 6. Placeholders
    if (document.getElementById("booking-name")) {
        document.getElementById("booking-name").placeholder = CONFIG.booking.placeholders.name;
    }
    if (document.getElementById("booking-email")) {
        document.getElementById("booking-email").placeholder = CONFIG.booking.placeholders.email;
    }
    if (document.getElementById("booking-phone")) {
        document.getElementById("booking-phone").placeholder = CONFIG.booking.placeholders.phone;
    }
    if (document.getElementById("booking-budget")) {
        document.getElementById("booking-budget").placeholder = CONFIG.booking.placeholders.budget;
    }

    // ==========================================
    // 7. LOAD SUCCESS MESSAGE FROM CONFIG (DITO SIYA!)
    // ==========================================
    const successTitle = document.getElementById('booking-success-title');
    const successMessage = document.getElementById('booking-success-message');
    const successBtn = document.getElementById('booking-success-btn');

    if (successTitle) {
        successTitle.textContent = CONFIG.booking?.successMessage?.title || "Thank You!";
    }
    if (successMessage) {
        successMessage.textContent = CONFIG.booking?.successMessage?.message || "Your booking has been received.";
    }
    if (successBtn) {
        successBtn.textContent = CONFIG.booking?.successMessage?.buttonText || "CLOSE";
    }
    
    // ==========================================
    // 8. CUSTOM SCROLL BEHAVIOR
    // ==========================================
    const bookAppointmentBtns = document.querySelectorAll('a[href="#contact"], button[href="#contact"]');
    
    bookAppointmentBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const bookingSection = document.getElementById('contact');
            if (bookingSection) {
                const sectionTop = bookingSection.offsetTop;
                const offset = 0;
                
                window.scrollTo({
                    top: sectionTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // 9. SUCCESS MODAL LOGIC (Iwas 405 Error)
    // ==========================================
    const bookingForm = document.querySelector('.booking-card form');
    const successModal = document.getElementById('booking-success-modal');
    const closeModalBtn = document.getElementById('booking-success-btn');
    
    if (bookingForm && successModal) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault(); // ✅ Pigilan ang default submit
            
            // Ipakita ang modal
            successModal.classList.add('is-active');
            successModal.setAttribute('aria-hidden', 'false');
            
            // Linisin ang form pagkatapos
            bookingForm.reset();
        });
    }

    // Close modal kapag nag-click sa CLOSE button sa gitna
    if (closeModalBtn && successModal) {
        closeModalBtn.addEventListener('click', () => {
            successModal.classList.remove('is-active');
            successModal.setAttribute('aria-hidden', 'true');
        });
        
        // Close kapag nag-click sa labas ng modal (sa dark overlay)
        successModal.addEventListener('click', (e) => {
            if (e.target.classList.contains('booking-success-modal__overlay')) {
                successModal.classList.remove('is-active');
                successModal.setAttribute('aria-hidden', 'true');
            }
        });
    }
} 
/* ==========================================================
   NEWSLETTER
========================================================== */

function loadNewsletter() {

    // Newsletter Title
    document.getElementById("newsletter-title").textContent =
        CONFIG.newsletter.title;

    // Newsletter Placeholder
    document.getElementById("newsletter-email").placeholder =
        CONFIG.newsletter.placeholder;

    // Newsletter Form Action
    document.getElementById("newsletter-form").action =
        CONFIG.newsletter.formAction;

    // Newsletter Success Message
    document.getElementById("newsletter-success-text").textContent =
        CONFIG.newsletter.successMessage;

}

/* ==========================================================
   NAVIGATION (HOME & BOOK NOW WITH SMOOTH SCROLL)
========================================================== */
function loadNavigation() {
    // 1. Desktop Navigation
    const navHome = document.getElementById("nav-home");
    if (navHome) {
        navHome.textContent = CONFIG.navigation?.home?.label || "HOME";
        navHome.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const navBookNow = document.getElementById("nav-booknow");
    if (navBookNow) {
        navBookNow.textContent = CONFIG.navigation?.bookNow?.label || "BOOK NOW";
        navBookNow.addEventListener('click', (e) => {
            e.preventDefault();
            const bookingSection = document.getElementById('contact');
            if (bookingSection) {
                const offset = 250; // Para ma-center ang booking box sa view
                const sectionTop = bookingSection.offsetTop - offset;
                window.scrollTo({ top: sectionTop, behavior: 'smooth' });
            }
        });
    }

    // 2. Mobile Navigation
    const mobileNavHome = document.getElementById("mobile-nav-home");
    if (mobileNavHome) {
        mobileNavHome.addEventListener('click', (e) => {
            const navToggle = document.getElementById('nav-toggle');
            if (navToggle) navToggle.checked = false; // Close mobile menu
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const mobileNavBookNow = document.getElementById("mobile-nav-booknow");
    if (mobileNavBookNow) {
        mobileNavBookNow.addEventListener('click', (e) => {
            const navToggle = document.getElementById('nav-toggle');
            if (navToggle) navToggle.checked = false; // Close mobile menu

            const bookingSection = document.getElementById('contact');
            if (bookingSection) {
                const offset = 250; 
                const sectionTop = bookingSection.offsetTop - offset;
                window.scrollTo({ top: sectionTop, behavior: 'smooth' });
            }
        });
    }
        // 3. DYNAMIC CLEANUP (NO HARDCODING!)
        const mobileNavItems = document.querySelectorAll('.mobile-nav__list li');
        mobileNavItems.forEach(item => {
            const textContent = item.textContent.trim();
            if (textContent === '' || textContent === '→') {
                item.style.display = 'none';
            }
        });
    

}

function loadSEO() {

    // Browser Title
    document.getElementById("page-title").textContent =
        CONFIG.seo.title;

    // Meta Description
    document.getElementById("meta-description").content =
        CONFIG.seo.description;

    // Favicon
    document.getElementById("site-favicon").href =
        CONFIG.seo.favicon;

}

/* ==========================================================
   SEARCH
========================================================== */

function loadSearch() {

    document.getElementById("search-input").placeholder =
        CONFIG.navigation.searchPlaceholder;

    document.getElementById("searchNoResults").textContent =
        CONFIG.navigation.searchNoResults;

}

/* ==========================================================
   CART
========================================================== */

function loadCart() {

    document.getElementById("cart-title").textContent =
        CONFIG.cart.title;

    document.getElementById("cart-empty-message").textContent =
        CONFIG.cart.emptyMessage;

    document.getElementById("cart-total-label").textContent =
        CONFIG.cart.totalLabel;

}

/* ==========================================================
   UI TEXTS
========================================================== */
function loadUI() {
    const toastMsg = document.getElementById("toast-message");
    if (toastMsg) {
        toastMsg.textContent = CONFIG.ui.toastAddedToBag;
    }
}

/* ==========================================================
   LOOKBOOK
========================================================== */

function loadLookbook() {

    const track =
        document.getElementById("lookbook-track");

    // Clear existing images
    track.innerHTML = "";

    // Duplicate images for infinite marquee
    const images = [
        ...CONFIG.lookbook.images,
        ...CONFIG.lookbook.images
    ];

    images.forEach((imagePath) => {

        const img = document.createElement("img");

        img.src = imagePath;

        img.alt = `${CONFIG.shopName} Lookbook`;

        track.appendChild(img);

    });

}

/* ==========================================================
   GALLERY SECTION (CONFIG-DRIVEN GRID & LIGHTBOX)
========================================================== */
function loadGallery() {
    // 1. Populate Texts from Config
    const galleryTitle = document.getElementById('gallery-title');
    const gallerySubtitle = document.getElementById('gallery-subtitle');
    
    if (galleryTitle) galleryTitle.textContent = CONFIG.gallery?.title || "GALLERY";
    if (gallerySubtitle) gallerySubtitle.textContent = CONFIG.gallery?.subtitle || "MY WORK";

    // 2. Populate Grid Images Dynamically
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid && CONFIG.gallery?.images) {
        galleryGrid.innerHTML = ''; // Clear existing
        
        CONFIG.gallery.images.forEach((imgSrc, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `${CONFIG.gallery.title} Image ${index + 1}`;
            img.loading = "lazy"; // Performance boost
            
            item.appendChild(img);
            
            // Click to open lightbox
            item.addEventListener('click', () => openLightbox(imgSrc));
            
            galleryGrid.appendChild(item);
        });

        // 3. Initialize Scroll Fade-in Animation
        initGalleryScrollAnimation();
    }
}

function initGalleryScrollAnimation() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered delay for premium feel
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, index * 100); // 100ms delay per item
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    galleryItems.forEach(item => observer.observe(item));
}

/* LIGHTBOX FUNCTIONS */
let lightbox = null;
let lightboxImage = null;

function initLightbox() {
    lightbox = document.getElementById('gallery-lightbox');
    lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('lightbox-close');
    
    if (!lightbox || !closeBtn) return;

    // Close on X button click
    closeBtn.addEventListener('click', closeLightbox);
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
            closeLightbox();
        }
    });

    // Close on ESC key (Desktop)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('is-active')) {
            closeLightbox();
        }
    });
}

function openLightbox(imageSrc) {
    if (!lightbox || !lightboxImage) return;
    
    lightboxImage.src = imageSrc;
    lightbox.classList.add('is-active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeLightbox() {
    if (!lightbox) return;
    
    lightbox.classList.remove('is-active');
    lightbox.setAttribute('aria-hidden', 'true');
    
    // Clear src after animation to prevent flash on next open
    setTimeout(() => {
        lightboxImage.src = '';
        document.body.style.overflow = ''; // Restore scrolling
    }, 300);
}

/* ==========================================================
   ABOUT SECTION FADE-IN ANIMATION
   ========================================================== */
   
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about-section__inner");
  
    if (aboutSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              aboutSection.classList.add("is-visible");
              observer.unobserve(aboutSection); // stop observing after animation
            }
          });
        },
        { threshold: 0.2 } // trigger kapag 20% visible
      );
  
      observer.observe(aboutSection);
    }
  });
  
  /* ==========================================================
   AUTH
========================================================== */

function loadAuth() {

    /* Login */

    document.getElementById("login-title").textContent =
        CONFIG.auth.loginTitle;

    document.getElementById("login-subtitle").textContent =
        CONFIG.auth.loginSubtitle;

    document.getElementById("login-email-label").textContent =
        CONFIG.auth.loginEmailLabel;
    
    document.getElementById("login-password-label").textContent =
        CONFIG.auth.loginPasswordLabel;    

    document.getElementById("remember-me-text").textContent =
        CONFIG.auth.rememberMe;

    document.getElementById("forgot-password-text").textContent =
        CONFIG.auth.forgotPassword;

    document.getElementById("login-button").textContent =
        CONFIG.auth.signInButton;

    document.getElementById("no-account-text").textContent =
        CONFIG.auth.noAccount;

    document.getElementById("create-account-link").textContent =
        CONFIG.auth.createOne;

    /* Register */

    document.getElementById("register-title").textContent =
        CONFIG.auth.registerTitle;

    document.getElementById("register-subtitle").textContent =
        CONFIG.auth.registerSubtitle;
    
    document.getElementById("register-name-label").textContent =
        CONFIG.auth.registerNameLabel;
    
    document.getElementById("register-email-label").textContent =
        CONFIG.auth.registerEmailLabel;
    
    document.getElementById("register-password-label").textContent =
        CONFIG.auth.registerPasswordLabel;
    
    document.getElementById("register-password-hint").textContent =
        CONFIG.auth.registerPasswordHint;    
        
    document.getElementById("register-button").textContent =
        CONFIG.auth.createAccountButton;

    document.getElementById("already-have-text").textContent =
        CONFIG.auth.alreadyHave;

    document.getElementById("sign-in-link").textContent =
        CONFIG.auth.signInLink;

        /* Account Dropdown */

    document.getElementById("login-link").textContent =
        CONFIG.auth.menuLogin;

    document.getElementById("register-link").textContent =
        CONFIG.auth.menuRegister;

    document.getElementById("my-account-link").textContent =
        CONFIG.auth.menuMyAccount;

    document.getElementById("order-history-link").textContent =
        CONFIG.auth.menuOrderHistory;

    document.getElementById("logout-link").textContent =
        CONFIG.auth.menuLogout;

}

