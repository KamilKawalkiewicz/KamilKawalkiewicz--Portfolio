
// Text animation

const h1Text = document.querySelector('.header_text-h1');
const spnCursor = document.querySelector('.header_text-cursor');
const txt = ['Kamil Kawałkiewicz Frontend Developer']

let activeLetter = -10;
let activeText = 0;

const addLetter = () => {
    if (activeLetter >= 0) {
        h1Text.textContent += txt[activeText][activeLetter];
    }
    activeLetter++;
    if (activeLetter === txt[activeText].length) {
        activeText++;
        if (activeText === txt.length) return;
        return setTimeout(() => {
            activeLetter = -15;
            h1Text.textContent = '';
            addLetter();
        }, 2000)
    }
    setTimeout(addLetter, 100)
}
addLetter();

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);



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

  // scroll button
// $(".arrow").click(function () {
//   $("body,html").animate({
//       scrollTop: $(".wrapper").offset().top
//   }, 500)
// });

$("#logo").click(function () {
  $("body,html").animate({
      scrollTop: $(".header").offset().top
  }, 800)
});
$("#skills, #skills").click(function () {
  $("body,html").animate({
      scrollTop: $(".skills").offset().top
  }, 800)
});
$("#projects,#projects").click(function () {
  $("body,html").animate({
      scrollTop: $(".projects").offset().top
  }, 800)
});
$("#aboutMe,#aboutMe").click(function () {
  $("body,html").animate({
      scrollTop: $(".aboutMe").offset().top
  }, 800)
});
$("#contact,#contact").click(function () {
  $("body,html").animate({
      scrollTop: $(".footer").offset().top
  }, 800)
});
$("#header_btn").click(function () {
  $("body,html").animate({
      scrollTop: $(".projects").offset().top
  }, 800)
});
