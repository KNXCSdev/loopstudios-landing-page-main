const navBtn = document.querySelector(".nav__btn");

const btnOpen = document.querySelector(".nav__mobile__open");
const btnClose = document.querySelector(".nav__mobile__close");
const navList = document.querySelector(".nav__list");

const bg = document.querySelector(".bg");

navBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const clicked = e.target;
  const data = clicked.getAttribute("data-btn");

  if (data === "open" || data === "close") {
    btnOpen.classList.toggle("nav__hidden");
    btnClose.classList.toggle("nav__hidden");
    navList.classList.toggle("nav__hidden");
    bg.classList.toggle("visible");
  }
});
