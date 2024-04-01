const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".reviews__button_next",
    prevEl: ".reviews__button_prev",
  },
  loop: true,
  autoplay: {
    delay: 2000,
  },

  breakpoints: {
    900: {
      centeredSlides: true,
      spaceBetween: 20,
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerGroup: 1
      // slidesPerView: 1,
    },
  },
});
