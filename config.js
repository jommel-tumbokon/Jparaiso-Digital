const CONFIG = {

/* ==========================================
       MODULES / FEATURES TOGGLE
========================================== */
    modules: {
        ecommerce: false,    // false = Itago ang Products at Cart
        appointment: true    // true = Ipakita ang Booking/Contact focus
    },

/* ==========================================
       BRANDING
========================================== */
    shopName: "INK MASTERS TATTOO", // Pinalitan ko na rin
    tagline: "PREMIUM CUSTOM TATTOOS",
    logo: "assets/products/dsrlogo1.png",

/* ==========================================
       HERO SECTION (Isa lang dapat 'to!)
========================================== */
    hero: {
        title: "INK MASTERS TATTOO",
        subtitle: "Premium Custom Tattoos & Piercings",
        button: "BOOK APPOINTMENT", 
        buttonLink: "#contact",     
        video: "", 
        image: "assets/products/dsr.png", 
    },

/* ==========================================
       COLORS
========================================== */
    colors: {
        primary: "#ff0000",
        secondary: "#ffffff"
    },

/* ==========================================
   PRODUCTS
========================================== */

products: [
    {
        title: "SAMPLE1",
        price: "₱999.00",
        image: "assets/products/products (9).png",
        alt: "Test",
        meta: "Test Product",
        badge: "NEW",
        badgeClass: "",
        hasSizeChart: true
    },
    {
        title: "SAMPLE2",
        price: "₱799.00",
        image: "assets/products/products (2).png",
        alt: "Rhinestone Tee",
        meta: "Test Product",
        badge: "New Arrival",
        badgeClass: "",
        hasSizeChart: true
    },
    {
        title: "SAMPLE3",
        price: "₱799.00",
        image: "assets/products/products (3).png",
        alt: "Test",
        meta: "Test Product",
        badge: "",
        badgeClass: "",
        hasSizeChart: true
    },
    {
        title: "SAMPLE4",
        price: "₱350.00",
        image: "assets/products/products (4).png",
        alt: "Test",
        meta: "Test Product",
        badge: "",
        badgeClass: "",
        hasSizeChart: true
    },
    {
        title: "SAMPLE5",
        price: "₱350.00",
        image: "assets/products/products (5).png",
        alt: "Test",
        meta: "Test Product",
        badge: "",
        badgeClass: "",
        hasSizeChart: true
    },
    {
        title: "SAMPLE6",
        price: "₱350.00",
        image: "assets/products/products (6).png",
        alt: "Test",
        meta: "Test Product",
        badge: "",
        badgeClass: "",
        hasSizeChart: true
    },
    {
        title: "SAMPLE7",
        price: "₱599.00",
        image: "assets/products/products (10).png",
        alt: "Test",
        meta: "Test Product",
        badge: "",
        badgeClass: "",
        hasSizeChart: true
    },
    {
        title: "SAMPLE8",
        price: "₱699.00",
        image: "assets/products/products (11).png",
        alt: "Test",
        meta: "Test Product",
        badge: "",
        badgeClass: "",
        hasSizeChart: true
    }
],

/* ==========================================
   PRODUCT MODAL
========================================== */

productModal: {

    stockStatus: "In stock · Ready to Ship",

    sizeChartTitle: "Size Chart (Adult Fit)",

    sizeLabel: "Size",

    addToCartButton: "ADD TO MY BAG",

    sizeChartHeaders: {

        size: "SIZE",
    
        chest: "CHEST (INCHES)",
    
        length: "LENGTH (INCHES)"
    
    },
    
    sizeChartRows: [
    
        {
    
            size: "S",
    
            chest: '36" - 38"',
    
            length: '27"'
    
        },
    
        {
    
            size: "M",
    
            chest: '39" - 41"',
    
            length: '28"'
    
        },
    
        {
    
            size: "L",
    
            chest: '42" - 44"',
    
            length: '29"'
    
        },
    
        {
    
            size: "XL",
    
            chest: '45" - 47"',
    
            length: '30"'
    
        }
    
    ],

},

/* ==========================================
   SOCIAL LINKS
========================================== */

socials: {

    instagram: "https://www.instagram.com/world.ph.3000.dsr.c/",

    tiktok: "https://www.tiktok.com/@world.ph.3000.dsr",

    youtube: "https://www.youtube.com/@DSR.WORLDWIDE"

},

/* ==========================================
   NEWSLETTER
========================================== */

newsletter: {

    title: "SUBSCRIBE",

    placeholder: "Enter your email",

    formAction: "https://formspree.io/f/mvzjgrqz",

    successMessage: "✓ SUBSCRIBED!"

},

/* ==========================================
   FOOTER
========================================== */

footer: {

    copyright:
        "All rights reserved."

},

/* ==========================================
   NAVIGATION
========================================== */
navigation: {

    shop: {
        label: "SHOP",
        href: "#shop"
    },

    event: {
        label: "EVENTS",
        href: "#event"
    },

    searchPlaceholder: "SEARCH PRODUCTS...",

    searchNoResults: "NO PRODUCTS MATCH.",

},

/* ==========================================
   SEO
========================================== */

seo: {

    title: "DSR",

    description: "Premium streetwear inspired by modern culture.",

    favicon: "assets/images/favicon.png"

},

/* ==========================================
   CONTACT
========================================== */

contact: {

    email: "hello@testbrand.com",

    phone: "+63 912 345 6789",

    address: "Taguig City"

},

/* ==========================================
   ABOUT SECTION
========================================== */

about: {

    title: "ABOUT DSR",

    subtitle: "Designed for modern street culture.",

    description:
        "DSR creates premium apparel inspired by skateboarding, art, and everyday life. Every collection focuses on quality, comfort, and timeless design.",

    image: "assets/products/dsr.png",

    button: "LEARN MORE"

},


/* ==========================================
   SHOP SECTION
========================================== */

shop: {

    eyebrow: "2026 Collection",

    title: "Premium Streetwear",

    description:
        "Designed for modern activities."

},

/* ==========================================
   EVENT SECTION
========================================== */

event: {

    eyebrow: "LATEST POST",

    title: "SKATE CLIPS",

    instagramEmbed:
        "https://www.instagram.com/p/DaI_kreiIGt/"

},

/* ==========================================
   LOOKBOOK
========================================== */

lookbook: {

    images: [

        "assets/products/slidingpic (1).png",

        "assets/products/slidingpic (2).png",

        "assets/products/slidingpic (3).png",

        "assets/products/slidingpic (4).png"

    ]

},

/* ==========================================
   AUTH
========================================== */

auth: {

    loginTitle: "Welcome Back",

    loginSubtitle:
        "Enter your credentials to access your account",

    registerTitle:
        "Create Account",

    registerSubtitle:
        "Join RIPARADISE for exclusive access",

    signInButton:
        "Sign In",

    createAccountButton:
        "Create Account",

    rememberMe:
        "Remember me",

    forgotPassword:
        "Forgot password?",

    noAccount:
        "Don't have an account?",

    alreadyHave:
        "Already have an account?",

    createOne:
        "Create one",

    signInLink:
        "Sign in",

    loginEmailLabel:
        "Email Address",
    
    loginPasswordLabel:
        "Password",
    
    registerNameLabel:
        "Full Name",
    
    registerEmailLabel:
        "Email Address",
    
    registerPasswordLabel:
        "Password",
    
    registerPasswordHint:
        "Minimum 6 characters",
    
    menuLogin: "Log In",

    menuRegister: "Create Account",
        
    menuMyAccount: "My Account",
        
    menuOrderHistory: "Order History",
        
    menuLogout: "Log Out",

},

/* ==========================================
   UI & TEXTS
========================================== */
ui: {
    toastAddedToBag: "ADDED TO BAG",
    searchPlaceholder: "SEARCH PRODUCTS...",
    searchNoResults: "NO PRODUCTS MATCH."
},

/* ==========================================
   CART
========================================== */

cart: {

    title: "YOUR BAG",

    emptyMessage: "YOUR BAG IS CURRENTLY EMPTY.",

    totalLabel: "Total:"

},

/* ==========================================
   BOOKING APPOINTMENT
========================================== */

booking: {

    bgImage: "assets/products/dsr.png",

    title: "Book Your Session",

    subtitle:
        "Ready to get inked? Appointments are highly recommended.",

    buttonText:
        "Book Now",

    info: {

        locationTitle: "Location",

        location:
            "123 Main Street, Manila",

        phoneTitle:
            "Call / Text",

        phone:
            "+63 912 345 6789",

        hoursTitle:
            "Hours",

        hours:
            "Tue — Sun: 10AM — 8PM"

    },

    fields: {

        name:
            "Your Name",

        email:
            "Your Email",

        phone:
            "Phone Number",

        date:
            "Preferred Date",

        time:
            "Preferred Time",

        message:
            "Tell us about your tattoo idea",

        budget:
            "Budget",

        referenceImage:
            "Reference Image"

    },

    placeholders: {

        name:
            "Juan Dela Cruz",

        email:
            "you@example.com",

        phone:
            "+63 912 345 6789",

        budget:
            "e.g. ₱3,000 - ₱5,000",

        message:
            "Tell us about your tattoo idea..."

    },

    optionalText:
        "(optional)",

    referenceAccept:
        "image/*"

},

};

