"use strict";
burgerMenu();
function burgerMenu() {
  let burgerBtn = document.querySelector(".header__burger-icon");
  let burgerUl = document.querySelector(".header__burger-ul");
  let closeBtn = document.querySelector(".header__burger-close");
  burgerBtn.addEventListener("click", () => {
    burgerUl.classList.toggle("active-burger");
    document.style.overflow = "hidden";
  });
  closeBtn.addEventListener("click", () => {
    burgerUl.classList.toggle("active-burger");
    document.style.overflow = "hidden";
  });
}
