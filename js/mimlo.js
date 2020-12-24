let navMenu = document.getElementById("nav-menu");

function openMenu() {
  if (navMenu.style.display == "flex") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "flex";
  }
}
