"use strict";
burgerMenu();
menu();
animElement();
readMoreButton();
teamHover();
let body = document.querySelector("body");
function burgerMenu() {
  let burgerBtn = document.querySelector(".header__burger-icon");
  let burgerUl = document.querySelector(".header__burger-ul");
  let closeBtn = document.querySelector(".header__burger-close");
  burgerBtn.addEventListener("click", () => {
    burgerUl.classList.toggle("active-burger");
  });
  closeBtn.addEventListener("click", () => {
    burgerUl.classList.toggle("active-burger");
  });
}
function menu() {
  let menuLi = document.querySelectorAll(".header__li");
  let burgerUl = document.querySelector(".header__burger-ul");

  menuLi.forEach((e) => {
    e.addEventListener("click", () => {
      burgerUl.classList.toggle("active-burger");
      if (e.classList.contains("menu-home")) {
        document.querySelector(".main-block").scrollIntoView(true);
      }
      if (e.classList.contains("menu-about")) {
        document.querySelector(".date-block").scrollIntoView(true);
      }
      if (e.classList.contains("menu-team")) {
        document.querySelector(".team-block").scrollIntoView(true);
      }
      if (e.classList.contains("menu-service")) {
        document.querySelector(".provide-title").scrollIntoView(true);
      }
      if (e.classList.contains("menu-blog")) {
        document.querySelector(".contact-title").scrollIntoView(true);
      }
      if (e.classList.contains("menu-contact")) {
        document.querySelector(".contact-title").scrollIntoView(true);
      }
    });
  });

  document.querySelector(".up-btn").addEventListener("click", () => {
    document.querySelector(".header").scrollIntoView(true);
  });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
      document.querySelector(".up-btn").style.transform = "translateX(0px)";
    } else {
      document.querySelector(".up-btn").style.transform = "translateX(999px)";
    }
  });
}
function animElement() {
  let dateObj = document.querySelectorAll(".date-block__small");
  let teamObj = document.querySelectorAll(".team-block__persone");
  let contObj = document.querySelectorAll(".contact-block__img-small");
  let form = document.querySelector(".contact-block__form");
  let windowHeight = window.innerHeight;
  let showHeight = windowHeight - windowHeight / 5;
  window.addEventListener("scroll", () => {
    dateObj.forEach((e) => {
      if (e.getBoundingClientRect().y < showHeight) {
        e.style.transform = "translate(0)";
        e.style.opacity = "1";
      }
    });
    teamObj.forEach((e) => {
      if (e.getBoundingClientRect().y < showHeight) {
        e.style.transform = "translate(0)";
        e.style.opacity = "1";
      }
    });
    contObj.forEach((e) => {
      if (e.getBoundingClientRect().y < showHeight) {
        e.style.transform = "rotate(0)";
        e.style.opacity = "1";
      }
    });
    if (form.getBoundingClientRect().y < showHeight) {
      form.style.width = "770px";
      form.style.minWidth = "100%";
      form.style.opacity = "1";
    }
  });
}
function readMoreButton() {
  let moreBtn = document.querySelector(".main-block__button");
  let moreBlock = document.querySelector(".read-more-main");
  let closeBtn = document.querySelector(".read-more-main__close");
  let stepBtn = document.querySelectorAll(".steps-btn");
  moreBtn.addEventListener("click", () => {
    moreBlock.style.transform = "translate(0)";
    body.style.overflow = "hidden";
  });
  closeBtn.addEventListener("click", () => {
    moreBlock.style.transform = "translate(200%)";
    body.style.overflow = "visible";
  });
  stepBtn.forEach((e) => {
    e.addEventListener("click", () => {
      e.classList.toggle("active-step-arrow");
      e.parentElement.parentElement
        .querySelector(".read-more-main__inner")
        .classList.toggle("active-step");
    });
  });
}
function teamHover() {
  let persone = document.querySelectorAll(".team-block__persone");
  persone.forEach((e) => {
    e.addEventListener("mouseover", () => {
      e.classList.add("persone-hover");
    });
    e.addEventListener("mouseout", () => {
      e.classList.remove("persone-hover");
    });
  });
}
