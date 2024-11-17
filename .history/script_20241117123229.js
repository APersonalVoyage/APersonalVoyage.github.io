// Select the hamburger menu and its related elements
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuLinks = document.querySelector(".menu-links");

// Function to toggle the menu visibility
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Toggle the "open" class for both menu and icon
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Attach the event listener to the hamburger menu
if (hamburgerMenu) {
  hamburgerMenu.addEventListener("click", toggleMenu);
}

// Close the menu when clicking anywhere outside of it
document.addEventListener("click", (event) => {
  if (
    menuLinks &&
    !menuLinks.contains(event.target) &&
    !hamburgerMenu.contains(event.target)
  ) {
    menuLinks.classList.remove("open");
    const icon = document.querySelector(".hamburger-icon");
    if (icon) {
      icon.classList.remove("open");
    }
  }
});
