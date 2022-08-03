"use strict";
burgerMenu();
function burgerMenu() {
  let burgerBtn = document.querySelector(".header__burger-icon");
  let burgerUl = document.querySelector(".header__burger-ul");
  burgerBtn.addEventListener("click", () => {
    burgerUl.classList.toggle("active-burger");
    document.style.overflow = "hidden";
  });
}
