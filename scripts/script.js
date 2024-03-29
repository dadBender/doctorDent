// Получаем элементы слайдера
const slider = document.querySelector(".health__slider");
const prevButton = document.querySelector(".health__prev-button");
const nextButton = document.querySelector(".health__next-button");
const slides = Array.from(slider.querySelectorAll(".health__slider-item"));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

// Инициализация слайдера
updateSlider();







const ButtonPrev = document.querySelector('.js-button-prev');
const ButtonNext = document.querySelector('.js-button-next');

let notHiddenCard = 1;
let VisualCard = document.querySelectorAll('.doctors__card');
let maxLenthCards = VisualCard.length;
let VisualHiddenCard = document.querySelectorAll(`.doctors__card:not(:nth-child(${notHiddenCard}))`);
let lengthKillCard = maxLenthCards -1;
let lengthRecoveryCards = maxLenthCards ;
function KillCard(VisualHiddenCard) {
  for (let i = 0; i < lengthKillCard; i++) {
    VisualHiddenCard[i].className += ' visually-hidden';
  }
}

function RecoveryCard(VisualCard) {
  for (let i = 0; i < lengthRecoveryCards; i++) {
    if (VisualCard[i].classList.contains('visually-hidden')) {
      VisualCard[i].classList.remove('visually-hidden');
    };
  }
}

KillCard(VisualHiddenCard);
// console.log(VisualHiddenCard);
// KillCard();

ButtonPrev.addEventListener('click', function(){
  console.log("prev");
  notHiddenCard -= 1;
  if (notHiddenCard < 1) {
    notHiddenCard = maxLenthCards;
  }
  RecoveryCard(VisualCard)
  let VisualHiddenCard = document.querySelectorAll(`.doctors__card:not(:nth-child(${notHiddenCard}))`);
  KillCard(VisualHiddenCard);
  const currentElement = $(".bottom-slider__wrapper").find(
    ".js-slide-item:first-child"
  );
  const parentElement = $(".bottom-slider__wrapper");
  parentElement.append(currentElement);
  $(".primavera__team-description").animate({ opacity: 0 }, 100);
  $(".primavera__team-description").animate({ opacity: 1 }, 1000);
  $(".primavera_team-description .primaverateam-caption").html(
    $(".primaverateam-images")
      .find(".primaverateam-item:last-child")
      .find(".primavera_team-caption")
      .html()
      );
})

ButtonNext.addEventListener('click', function(){
  console.log("next");
  notHiddenCard += 1;
  if (notHiddenCard > maxLenthCards) {
    notHiddenCard = 1;
  }
  RecoveryCard(VisualCard);
  let VisualHiddenCard = document.querySelectorAll(`.doctors__card:not(:nth-child(${notHiddenCard}))`);
  KillCard(VisualHiddenCard);

    const currentElement = $(".bottom-slider__wrapper").find(
      ".js-slide-item:last-child"
    );
    const parentElement = $(".bottom-slider__wrapper");
    parentElement.prepend(currentElement);
    $(".primavera__team-description").animate({ opacity: 0 }, 100);
  $(".primavera__team-description").animate({ opacity: 1 }, 1000);
  $(".primavera_team-description .primaverateam-caption").html(
    $(".primaverateam-images")
      .find(".primaverateam-item:last-child")
      .find(".primavera_team-caption")
      .html()
      );
})






/* Обработчик для слайдера команды */
$(".js-bottom-slider").on("click", function () {
  if ($(this).hasClass(".js-button-prev")) {
    console.log("prev");
    const currentElement = $(".bottom-slider__wrapper").find(
      ".js-slide-item:first-child"
    );
    const parentElement = $(".bottom-slider__wrapper");
    parentElement.append(currentElement);
  }
  if ($(this).hasClass(".js-button-next")) {
    console.log("next");
    const currentElement = $(".bottom-slider__wrapper").find(
      ".js-slide-item:last-child"
    );
    const parentElement = $(".bottom-slider__wrapper");
    parentElement.prepend(currentElement);
  }
  $(".primavera__team-description").animate({ opacity: 0 }, 100);
  $(".primavera__team-description").animate({ opacity: 1 }, 1000);
  $(".primavera_team-description .primaverateam-caption").html(
    $(".primaverateam-images")
      .find(".primaverateam-item:last-child")
      .find(".primavera_team-caption")
      .html()
  );
});

const doctorsQualif = document.querySelector(".doctors__qualification");
const doctorsEducation = doctorsQualif.querySelector(
  ".doctors__button__education"
);
const doctorsSpecification = doctorsQualif.querySelector(
  ".doctors__button__specification"
);
const doctorsEducationText = doctorsQualif.querySelector(".education__text");
const doctorsSpecificationText = doctorsQualif.querySelector(
  ".specification__text"
);

function doctorsHiddenText() {
  if (doctorsEducation.value === "1") {
    doctorsSpecificationText.classList.add("visually-hidden");
    console.log("first");
  }

  if (doctorsEducation.value === "0") {
    doctorsSpecificationText.classList.remove("visually-hidden");
    console.log("first");
  }
  if (doctorsQualif.value === "1") {
    doctorsEducationText.classList.add("visually-hidden");
    console.log("first");
  }

  if (doctorsQualif.value === "0") {
    doctorsEducationText.classList.remove("visually-hidden");
    console.log("first");
  }
}
doctorsHiddenText();

doctorsSpecification.addEventListener("click", function (event) {
  doctorsSpecification.value = "1";
  doctorsEducation.value = "0";
  doctorsEducation.classList.add("doctors__button-none");
  doctorsSpecification.classList.remove("doctors__button-none");
  doctorsSpecificationText.classList.remove("visually-hidden");
  doctorsEducationText.classList.add("visually-hidden");
  doctorsHiddenText();
});

doctorsEducation.addEventListener("click", function (event) {
  doctorsEducation.value = "1";
  doctorsSpecification.value = "0";
  doctorsSpecification.classList.add("doctors__button-none");
  doctorsEducation.classList.remove("doctors__button-none");
  doctorsEducationText.classList.remove("visually-hidden");
  doctorsSpecificationText.classList.add("visually-hidden");
  doctorsHiddenText();
});

function initComparisons() {
  var x, i;
  /*найти все элементы с классом "overlay":*/
  x = document.getElementsByClassName("samples__above");
  for (i = 0; i < x.length; i++) {
    /*один раз для каждого элемента "overlay":
передайте элемент "overlay" в качестве параметра при выполнении функции сравнения изображений:*/
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider,
      img,
      clicked = 0,
      w,
      h;
    /*получить ширину и высоту элемента img*/
    w = img.offsetWidth;
    h = img.offsetHeight;
    /*установите ширину элемента img на 50%:*/
    img.style.width = w / 2 + "px";
    /*создать слайдер:*/
    slider = document.createElement("DIV");
    slider.setAttribute("class", "samples__comparison");
    /*вставить ползунок*/
    img.parentElement.insertBefore(slider, img);
    /*расположите ползунок посередине:*/
    slider.style.top = h / 2 - slider.offsetHeight / 2 + "px";
    slider.style.left = w / 2 - slider.offsetWidth / 2 + "px";
    /*выполнение функции при нажатии кнопки мыши:*/
    slider.addEventListener("mousedown", slideReady);
    /*и еще одна функция при отпускании кнопки мыши:*/
    window.addEventListener("mouseup", slideFinish);
    /*или прикоснулся (для сенсорных экранов:*/
    slider.addEventListener("touchstart", slideReady);
    /*и выпущенный (для сенсорных экранов:*/
    window.addEventListener("touchstop", slideFinish);
    function slideReady(e) {
      /*предотвратите любые другие действия, которые могут произойти при перемещении по изображению:*/
      e.preventDefault();
      /*теперь ползунок нажат и готов к перемещению:*/
      clicked = 1;
      /*выполнение функции при перемещении ползунка:*/
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /*ползунок больше не нажимается:*/
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /*если ползунок больше не нажат, выйдите из этой функции:*/
      if (clicked == 0) return false;
      /*получить х положения курсора :*/
      pos = getCursorPos(e);
      /*не допускайте расположения ползунка вне изображения:*/
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /*выполните функцию, которая изменит размер наложенного изображения в соответствии с курсором:*/
      slide(pos);
    }
    function getCursorPos(e) {
      var a,
        x = 0;
      e = e || window.event;
      /*получить x позиции изображения:*/
      a = img.getBoundingClientRect();
      /*вычислите координату х курсора относительно изображения:*/
      x = e.pageX - a.left;
      /*рассмотрим любую прокрутку страницы:*/
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /*изменение размера изображения:*/
      img.style.width = x + "px";
      /*расположите ползунок:*/
      slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + "px";
    }
  }
}
initComparisons();

const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".reviews__button_next",
    prevEl: ".reviews__button_prev",
  },
  loop: true,

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
      slidesPerGroup: 1,
      // slidesPerView: 1,
    },
  },
});
