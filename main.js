$(document).ready(function () {
  $.Scrollax();
});

function next() {
  const swiperEl = document.querySelector(".mySwiper");

  document.getElementById("custom-next").addEventListener("click", () => {
    swiperEl.swiper.slideNext();
  });
}

function prev() {
  const swiperEl = document.querySelector(".mySwiper");

  document.getElementById("custom-prev").addEventListener("click", () => {
    swiperEl.swiper.slidePrev();
  });
}

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  
  if (window.scrollY > 100) {
    header.classList.add("scroll__sticky");
  } else {
    header.classList.remove("scroll__sticky");
  }
});