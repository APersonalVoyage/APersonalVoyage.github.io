// Cache DOM elements for better performance
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuLinks = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");

// Function to toggle the menu visibility
function toggleMenu() {
  if (menuLinks) {
    menuLinks.classList.toggle("open");
  }
  if (icon) {
    icon.classList.toggle("open");
  }
}

// Function to close the menu
function closeMenu() {
  if (menuLinks?.classList.contains("open")) {
    menuLinks.classList.remove("open");
  }
  if (icon?.classList.contains("open")) {
    icon.classList.remove("open");
  }
}

// Add event listener to the hamburger menu for toggling
hamburgerMenu?.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent triggering the document click event
  toggleMenu();
});

// Close the menu when clicking outside
document.addEventListener("click", (event) => {
  const isClickInsideMenu = menuLinks?.contains(event.target);
  const isClickOnHamburger = hamburgerMenu?.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    closeMenu();
  }
});

// Optional: Close the menu on window resize for better responsiveness
window.addEventListener("resize", () => {
  closeMenu();
});
