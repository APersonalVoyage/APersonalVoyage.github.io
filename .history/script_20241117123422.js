// Select the hamburger menu and the menu links container
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuLinks = document.querySelector(".menu-links");

// Function to toggle the menu visibility
function toggleMenu() {
  if (menuLinks) {
    menuLinks.classList.toggle("open");
  }
  const icon = document.querySelector(".hamburger-icon");
  if (icon) {
    icon.classList.toggle("open");
  }
}

// Add event listener to the hamburger menu for toggling
if (hamburgerMenu) {
  hamburgerMenu.addEventListener("click", toggleMenu);
}

// Optional: Close the menu when clicking outside
document.addEventListener("click", (event) => {
  const isClickInsideMenu = menuLinks?.contains(event.target);
  const isClickOnHamburger = hamburgerMenu?.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    if (menuLinks?.classList.contains("open")) {
      menuLinks.classList.remove("open");
    }
    const icon = document.querySelector(".hamburger-icon");
    if (icon?.classList.contains("open")) {
      icon.classList.remove("open");
    }
  }
});
