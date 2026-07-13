/* ==========================================================
   MOBILE NAVIGATION
   ========================================================== */

/**
 * Mobile Navigation Elements
 */
const navToggle = document.getElementById("nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");

/**
 * Stop if mobile navigation does not exist.
 */
if (!navToggle || !mobileNav) {
  console.warn("Mobile navigation not found.");
} else {

  /**
   * Open / Close Mobile Menu
   */
  navToggle.addEventListener("change", () => {
    const isOpen = navToggle.checked;

    mobileNav.style.transform = isOpen
      ? "translateX(0)"
      : "translateX(-100%)";

    mobileNav.setAttribute(
      "aria-hidden",
      isOpen ? "false" : "true"
    );

    document.body.style.overflow = isOpen
      ? "hidden"
      : "";
  });

  /**
   * Close Mobile Menu
   * kapag nag-click ng kahit anong navigation link.
   */
  mobileNav.querySelectorAll(".mobile-nav__link").forEach(link => {
    link.addEventListener("click", () => {
      navToggle.checked = false;
      mobileNav.style.transform = "translateX(-100%)";
      mobileNav.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    });
  });

}