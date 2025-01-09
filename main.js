let menuIcon = document.querySelector("#menu-icon"),
  navbar = document.querySelector(".navlist");

menuIcon.onclick = function () {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};
// <i class='bx bx-x'></i>

/*
let menuIcon = document.querySelector("#menu-icon");
let menu = document.querySelector(".menu");
let header = document.querySelector('header');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    menu.classList.toggle('open');
    header.classList.toggle('bground');
};
*/
