// active animation burger and show menu

document.querySelector(".header_burger").addEventListener("click", function() {
  this.classList.toggle("active");
  document.querySelector(".header_nav").classList.toggle("active");

  [...document.querySelectorAll(".header_nav-ul-li")].forEach((li, id) => {
    if (li.style.animation) {
      li.style.animation = "";
    } else {
      li.style.animation = `menu-links-fade .5s ease forwards ${id / 8}s`;
    }
  });
});
