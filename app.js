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

    document.getElementById("shop-eyebrow").textContent =
        CONFIG.shop.eyebrow;

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

    loadTheme();

    loadFooter();

    loadNewsletter();

    loadNavigation();

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
}   

/* ==========================================================
   NEWSLETTER
========================================================== */

function loadNewsletter() {

    // Newsletter title
    document.getElementById("newsletter-title").textContent =
        CONFIG.newsletter.title;

    // Newsletter Form Action
    document.getElementById("newsletter-form").action =
        CONFIG.newsletter.formAction;

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


