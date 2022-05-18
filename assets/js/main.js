// ========================Menu Show/Hidden==========================
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// ===Show Menu===
navToggle.addEventListener("click", () => navMenu.classList.add("show-menu"));

//===Hide Menu===
navClose.addEventListener("click", () => navMenu.classList.remove("show-menu"));

//================ Remove Menu Mobile When Click on Nav Links=================================
const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLinks.forEach((navLink) => navLink.addEventListener("click", linkAction));

// ============================ ACCORDION SKILLS =========================================
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
// ========================QUALIFICATION===============================================
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
// ======================== Services ===============================================
const modals = document.querySelectorAll(".services__modal"),
  openModalButton = document.querySelectorAll(".services__button"),
  closeModalButton = document.querySelectorAll(".close-modal");

//open modal function
let openModal = (modalIndex) => {
  modals[modalIndex].classList.add("active-modal");
};

//close modal function
let closeModal = (modalIndex) => {
  modals[modalIndex].classList.remove("active-modal");
};

//open modal apply event
openModalButton.forEach((modalBtn, modalIndex) => {
  modalBtn.addEventListener("click", () => openModal(modalIndex));
});

//close modal apply event
closeModalButton.forEach((modalBtn, modalIndex) => {
  modalBtn.addEventListener("click", () => closeModal(modalIndex));
});

//close modal through click on overlay
window.addEventListener("click", (e) => {
  if (e.target.className === "services__modal active-modal") {
    e.target.classList.remove("active-modal");
  }
});
// ======================== PORTFOLIO ===============================================
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// ====================================== TESTIMONIALS ==========================================
let swiperTestimonials = new Swiper(".testimonials__container", {
  loop: true,
  grapCursor: true,
  spaceBetween: 48,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});
// ========================= SCROLL SECTION ACTIVE LINK ===========================
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  //get scroll postion
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    //get section height
    const sectionHeight = section.offsetHeight;
    //get section top
    const sectionTop = section.offsetTop - 50;
    //get section id
    let sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
// ==============================Change header style on scroll===================================
function scrollHeader() {
  const navBar = document.getElementById("header");
  //if the scroll greater than 80 vh segt scroll-header class
  if (this.scrollY >= 80) {
    navBar.classList.add("scroll-header");
  } else {
    navBar.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
const scrollUpButton = document.getElementById("scroll-up");

function scrollUp() {
  if (this.scrollY >= 560) {
    scrollUpButton.classList.add("show-scroll");
  } else {
    scrollUpButton.classList.remove("show-scroll");
  }
}
/* When scrolling reach on footer scrollUp button change color*/
const footerSection = document.getElementById("footer");

const options = {
  rootMargin: "-12%",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      scrollUpButton.classList.add("changeScroll-bg");
    } else {
      scrollUpButton.classList.remove("changeScroll-bg");
    }
  });
}, options);

observer.observe(footerSection);

window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
