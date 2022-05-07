// ========================Menu Show/Hidden==========================
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// ===Show Menu===
navToggle.addEventListener("click", () => navMenu.classList.add("show-menu"));

//===Hide Menu===
navClose.addEventListener("click", () => navMenu.classList.remove("show-menu"));

//================ Remove Menu Mobile When Click on Nav Links==================
const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLinks.forEach((navLink) => navLink.addEventListener("click", linkAction));
