document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");

  dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const dropdown = this.parentElement;
      dropdown.classList.toggle("active");
    });
  });

  const menuBtn = document.querySelector(".menu-btn");
  const navbarMenu = document.querySelector(".navbar-menu");

  menuBtn.addEventListener("click", function () {
    navbarMenu.classList.toggle("active");
  });
});
