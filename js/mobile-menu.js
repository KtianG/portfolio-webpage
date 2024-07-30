(() => {
  // Select the mobile menu container
  const mobileMenu = document.querySelector(".js-menu-container");
  // Select the button to open the mobile menu
  const openMenuBtn = document.querySelector(".js-open-menu");
  // Select the button to close the mobile menu
  const closeMenuBtn = document.querySelector(".js-close-menu");

  // Function to toggle the mobile menu visibility
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };

  // Add click event listener to open menu button
  openMenuBtn.addEventListener("click", toggleMenu);
  // Add click event listener to close menu button
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Event listener to close the mobile menu on wider screens when orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    // If the screen width is now 768px or wider, close the menu
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
