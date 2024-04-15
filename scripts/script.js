const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 2000,
  },
  spaceBetween: 40,

  breakpoints: {
    600: {
      centeredSlides: true,
      slidesPerView: "auto",
     
      // slidesPerGroup: 1
      // slidesPerView: 1,
    },
  },
});


