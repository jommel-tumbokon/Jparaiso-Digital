/* ==========================================================
   APP.JS
   Purpose:
   Ito ang nagbabasa ng CONFIG at naglalagay ng data sa website.
   Dito manggagaling ang branding ng buong template.
========================================================== */


/* ==========================================================
   BRANDING
   Shop Name
   Logo
========================================================== */

function loadBranding() {

    const logo = document.getElementById("site-logo");

    logo.src = CONFIG.logo;
    logo.alt = CONFIG.shopName;

}


/* ==========================================================
   HERO SECTION
   Video
   Title
   Subtitle
   Button
========================================================== */

function loadHero() {

    // Hero background video (Updated per Grok's instruction)
    const heroSource = document.getElementById("hero-video");
    const heroVideo = document.getElementById("hero-video-player");

    heroSource.src = CONFIG.hero.video;
    
    // Sabihan ang browser na i-reload ang video
    if (heroVideo) {
        heroVideo.load();
    }

    // Hero heading
    document.getElementById("hero-title").textContent = CONFIG.hero.title;

    // Hero subtitle
    document.getElementById("hero-subtitle").textContent = CONFIG.hero.subtitle;

    // Hero button
    document.getElementById("hero-btn").textContent = CONFIG.hero.button;
    

}

/* ==========================================================
   ABOUT SECTION
========================================================== */

function loadAbout() {

    // About image
    document.getElementById("about-image").src =
        CONFIG.about.image;

    document.getElementById("about-image").alt =
        CONFIG.about.title;

    // About subtitle
    document.getElementById("about-subtitle").textContent =
        CONFIG.about.subtitle;

    // About title
    document.getElementById("about-title").textContent =
        CONFIG.about.title;

    // About description
    document.getElementById("about-description").textContent =
        CONFIG.about.description;

    // About button
    document.getElementById("about-button").textContent =
        CONFIG.about.button;

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

function init(){

    loadSEO();

    loadBranding();

    loadHero();

    loadAbout();

    loadShop();

    loadEvent();

    loadLookbook();

    loadTheme();

    loadFooter();

    loadNewsletter();

    loadAuth();

    loadNavigation();

    loadSearch();

    loadCart();

    loadUI();

    updateAccountMenu();

    updateCartBadgeUI();

    generateProductGrid();

}


// Run website (Updated to use DOMContentLoaded per Grok's suggestion)
document.addEventListener("DOMContentLoaded", () => {
    init();
});

/* ==========================================================
   THEME
   Update CSS Variables from CONFIG
========================================================== */

function loadTheme() {

    // Primary Brand Color
    document.documentElement.style.setProperty(
        "--color-primary",
        CONFIG.colors.primary
    );

    // Text color ng primary buttons
    document.documentElement.style.setProperty(
        "--color-primary-inverse",
        CONFIG.colors.secondary
    );

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
   NAVIGATION
========================================================== */

function loadNavigation() {

    // Desktop - Shop
    document.getElementById("nav-shop").textContent =
        CONFIG.navigation.shop.label;

    document.getElementById("nav-shop").href =
        CONFIG.navigation.shop.href;

    // Desktop - Event
    document.getElementById("nav-event").textContent =
        CONFIG.navigation.event.label;

    document.getElementById("nav-event").href =
        CONFIG.navigation.event.href;

    /* Mobile Navigation */

    // Shop
    document.getElementById("mobile-nav-shop-text").textContent =
        CONFIG.navigation.shop.label;

    document.getElementById("mobile-nav-shop").href =
        CONFIG.navigation.shop.href;

    // Event
    document.getElementById("mobile-nav-event-text").textContent =
        CONFIG.navigation.event.label;

    document.getElementById("mobile-nav-event").href =
        CONFIG.navigation.event.href;

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

