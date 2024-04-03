function BreakWindow() {
    const SamplesSlider = document.querySelector(".samples__container");
    console.log(".samples__container");
    const SamplesPrevButton = document.querySelector(".works__prev-button");
    const SamplesNextButton = document.querySelector(".works__next-button");
    const SamplesSlides = Array.from(
      SamplesSlider.querySelectorAll(".samples__card__container")
    );
    const SamplesSlideCount = SamplesSlides.length;
    let SamplesSlideIndex = 0;
  
    // Устанавливаем обработчики событий для кнопок
    SamplesPrevButton.addEventListener("click", SampleshowPreviousSlide);
    SamplesNextButton.addEventListener("click", SampleshowNextSlide);
  
    // Функция для показа предыдущего слайда
    function SampleshowPreviousSlide() {
      console.log("prev");
      SamplesSlideIndex =
        (SamplesSlideIndex - 1 + SamplesSlideCount) % SamplesSlideCount;
      SampleupdateSlider();
    }
  
    // Функция для показа следующего слайда
    function SampleshowNextSlide() {
      console.log("next");
      SamplesSlideIndex = (SamplesSlideIndex + 1) % SamplesSlideCount;
      SampleupdateSlider();
    }
  
    // Функция для обновления отображения слайдера
    function SampleupdateSlider() {
      SamplesSlides.forEach((slide, index) => {
        if (index === SamplesSlideIndex) {
          slide.style.display = "block";
        } else {
          slide.style.display = "none";
        }
      });
    }
  
    // Инициализация слайдера
    SampleupdateSlider();
  }
  
  // Инициализация слайдера
  updateSlider();
  if (window.matchMedia("(max-width: 1100px)").matches) {
    BreakWindow();
    console.log("bugaga");
  }
  
const mobileWidthMediaQuery = window.matchMedia('(max-width: 1100px)')

function printLog(isMobileSize) {
  const size = isMobileSize ? 'уже или равен' : 'шире'

  console.log(`Размер экрана ${size} 1100px`)
}

printLog(mobileWidthMediaQuery.matches)

mobileWidthMediaQuery.addEventListener('change', function (event) {
  printLog(event.matches);
  BreakWindow();
})