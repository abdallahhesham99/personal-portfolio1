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

// ============================ ACCORDION SKILLS ================================
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

for (let i = 0; i < skillsHeader.length; i++) {
  //apply event on each skillsHeader
  skillsHeader[i].addEventListener("click", () => {
    //if className of skillsContent of i === close make it = open
    // else make it close
    if (skillsContent[i].className === "skills__content skills__close") {
      skillsContent[i].className = "skills__content skills__open";
    } else {
      skillsContent[i].className = "skills__content skills__close";
    }
  });
}
// ========================QUALIFICATION==================================
const qualificationButton = document.querySelectorAll(".qualification__button"),
  qualificationContent = document.querySelectorAll(".qualification__content");

qualificationButton.forEach((element, tabIndex) => {
  element.addEventListener("click", function (e) {
    //to remove all active class from tabs buttons
    qualificationButton.forEach((element) => {
      element.classList.remove("qualification__active");
    });
    //hide all qualification content
    qualificationContent.forEach((element) => {
      element.style.display = "none";
    });
    //add active class for current clicked button
    e.currentTarget.classList.add("qualification__active");
    //make qualification content of tabINDEX display block
    qualificationContent[tabIndex].style.display = "block";
  });
});
