const CONFIG = {

/* ==========================================
   MODULES / FEATURES TOGGLE
========================================== */
modules: {
    ecommerce: false,      // false = Hide Shop & Cart
    appointment: true,     // true = Show Booking Section
    event: false,           // true = Show Instagram/Event Section
    gallery: true,         // true = Show Gallery Section
    newsletter: true,      // true = Show Newsletter Section
    showSearch: false,     // false = Hide Search Icon
    showAccount: false     // false = Hide Account/Login Icon
},

/* ==========================================
   GLOBAL SETTINGS
========================================== */

     currency: "₱", // <--- (Pwede palitan ng $, €, etc.)

/* ==========================================
       BRANDING
========================================== */

     shopName: "", 

     tagline: "",

     logo: "assets/products/LOGO.png",

/* ==========================================
       HERO SECTION
========================================== */
    hero: {
        title: "",
        subtitle: "",
        button: "BOOK APPOINTMENT", 
        buttonLink: "#contact",     
        video: "", 
        image: "assets/products/collage.png",
    },

    /* ==========================================
THEME MODE
========================================== */

        theme: "light",  

/* ==========================================
       COLORS
========================================== */
    colors: {
        primary: "#000000",
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

    instagram: "https://www.instagram.com/jovit_tattoo/",

    tiktok: "",

    youtube: ""

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

    title: "TATTOO STUDIO",

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

    title: "JOVIT TATTOO STUDIO",

    subtitle: "Designed for modern street culture.",

    description:
        "Every line I draw tells a story — not just on skin, but in the confidence and identity of the person wearing it. My craft is precision, my art is emotion, and every tattoo is a mark of trust.",

    image: "assets/products/jovit.png",

    button: "VIEW GALLERY"

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

    loginTitle: "Welcome Back to Ink MASTERS TATTOO",

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

    bgImage: "assets/products/collage.png",

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
            "",

        email:
            "",

        phone:
            "",

        budget:
            "e.g. ₱3,000 - ₱5,000",

        message:
            "Tell us about your tattoo idea..."

    },

    optionalText:
        "(optional)",

    referenceAccept:
        "image/*",

    successMessage: {
            title: "Thank You!",
            message: "Your booking has been received. We'll contact you soon to confirm your appointment.",
            buttonText: "CLOSE"
        }

},

/* ==========================================
   GALLERY SECTION
========================================== */
gallery: {
    title: "Gallery",
    subtitle: "MY ARTWORK",
    buttonText: "VIEW GALLERY",  // Para sa About section button
    images: [
        "assets/products/slidingpic (1).png",
        "assets/products/slidingpic (2).png",
        "assets/products/slidingpic (3).png",
        "assets/products/slidingpic (4).png",
        "assets/products/jovit (2).png",
        "assets/products/jovit (3).png"
        
    ]
},

};

