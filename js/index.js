/* Mobile Nav-bar manu*/
const mobileNav = document.querySelector(".mobile-navbar-btn");
const navHeader = document.querySelector(".header");
const toggleNavbar = () => {
  // alert("Cheak!");
  navHeader.classList.toggle("active");
};

mobileNav.addEventListener("click", () => toggleNavbar());
