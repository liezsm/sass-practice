console.log("hello");
// hamburger menu

const menuBtn = document.querySelector("[data-menu]");
const hamburger = document.querySelector("[data-burger]");
const nav = document.querySelector("[data-nav]");
let showMenu = false;

function toggleMenu() {
  hamburger.classList.toggle("open");
  //   if (!showMenu) {
  //     hamburger.classList.add("open");
  //     showMenu = true;
  //   } else {
  //     hamburger.classList.remove("open");
  //     showMenu = false;
  //   }

  //   add/remove navlinks
  if (hamburger.classList.contains("open")) {
    nav.classList.add("open");
  } else {
    nav.classList.remove("open");
  }
}

menuBtn.addEventListener("click", toggleMenu);
