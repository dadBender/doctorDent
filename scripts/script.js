// const swiper = new Swiper(".card__swiper", {
//   // navigation: {
//   //   nextEl: '.reviews__button_next',
//   //   prevEl: '.reviews__button_prev'
//   // },
//   // loop: true,

//   breakpoints: {
//     690: {
//       centeredSlides: true,
//       spaceBetween: 20,
//       slidesPerView: "auto",
//       pagination: {
//         el: ".swiper-pagination",
//         type: "bullets",
//       },
//       loop: true,
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//       slidesPerGroup: 1,
//       // slidesPerView: 1,
//     },
//   },
// });

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

(function () {
  // 即時実行関数（グローバル汚染対策）
  let i = 0; // for文用変数の定義
  let j = 0; // 上記内処理でfor文を使用している箇所のfor文用変数定義
  let el = {}; // 配列・変数用（巻き上げ防止の為、冒頭にて宣言）

  document.addEventListener(
    "DOMContentLoaded",
    function () {
      // 各種セレクタ・値の設定 ※アニメーションの速度などはCSS側で指定
      el.bottomSlider = document.querySelectorAll(".js-bottom-slider"); // スライダーのセレクタを取得
      el.slideItemElement = ".js-slide-item"; // スライドアイテムのセレクタを指定
      el.buttonPrevElement = ".js-button-prev"; // 前へボタンのセレクタを指定
      el.buttonNextElement = ".js-button-next"; // 次へボタンのセレクタを指定
      el.slideAnimationClass = "is-bottom-slide"; // スライドアニメーション用のclass名を指定（下にスライドさせている箇所で使用）
      el.xSetValue = -50; // x軸の基礎値を設定（x軸のスライド毎のずらし値）
      el.ySetValue = 50; // y軸の基礎値を設定（y軸のスライド毎のずらし値）
      el.unitSetValue = "px"; // x・y軸の基礎値の単位の設定（例：px、%、vw、vhなど）
      el.arrowDisplayHideFlag = true; // 次へ・前へボタンの前と次のスライドがない場合、スライドボタンの表示・非表示をするかを指定（true：表示・非表示切り替えする、false：表示・非表示切り替えしない）

      // スライダー要素があるか判定
      if (
        el.bottomSlider.length &&
        document.querySelectorAll(el.slideItemElement).length &&
        document.querySelectorAll(el.buttonPrevElement).length &&
        document.querySelectorAll(el.buttonNextElement).length
      ) {
        // スライダーを初期化
        el.bottomSlideInitializationFnc(); // スライド初期化用関数の実行

        // 前へボタンのイベント処理
        for (
          i = 0;
          i < document.querySelectorAll(el.buttonPrevElement).length;
          ++i
        ) {
          document.querySelectorAll(el.buttonPrevElement)[i].addEventListener(
            "click",
            {
              // 引数と関数をオブジェクトにして渡す
              targetIndex: i, // 現在の該当要素が何番目かの情報を指定
              handleEvent: el.bottomSliderPrevFnc, // 実行する関数を指定
            },
            false
          );
        }

        // 次へボタンのイベント処理
        for (
          i = 0;
          i < document.querySelectorAll(el.buttonNextElement).length;
          ++i
        ) {
          document.querySelectorAll(el.buttonNextElement)[i].addEventListener(
            "click",
            {
              // 引数と関数をオブジェクトにして渡す
              targetIndex: i, // 現在の該当要素が何番目かの情報を指定
              handleEvent: el.bottomSliderNextFnc, // 実行する関数を指定
            },
            false
          );
        }
      } else {
        return; // 現在このreturnが存在している関数の処理を値を返しつつ止める。
      }
    },
    false
  );

  // スライド初期化用関数
  el.bottomSlideInitializationFnc = function () {
    for (i = 0; i < el.bottomSlider.length; ++i) {
      el.initialSlideItem = el.bottomSlider[i].querySelectorAll(
        el.slideItemElement
      ); // 各スライダーの初期スライド要素を取得

      el.bottomSlider[i].querySelector(
        el.buttonPrevElement
      ).dataset.slideCurrent = 0; // 指定したデータ属性値を設定
      el.bottomSlider[i].querySelector(
        el.buttonNextElement
      ).dataset.slideCurrent = 0; // 指定したデータ属性値を設定

      // 次へ・前へボタンの前と次のスライドがない場合、表示・非表示をするかの判定フラグが「true」か判定
      if (el.arrowDisplayHideFlag) {
        el.bottomSlider[i].querySelector(el.buttonPrevElement).style.display =
          "none"; // 前へボタン非表示
      }

      // 該当要素数分処理
      for (j = 0; j < el.initialSlideItem.length; ++j) {
        // 条件を満たしているか判定
        if (j === 0) {
          el.xValue = 0; // x軸の初期位置の座標を指定
          el.yValue = 0; // y軸の初期位置の座標を指定
        } else {
          el.xValue = el.xSetValue * j; // x軸の基礎値を調整し設定
          el.yValue = el.ySetValue * j; // y軸の基礎値を調整し設定
        }

        el.zIndexValue = el.initialSlideItem.length - j; // z-index値の調整
        el.cssStyles =
          "transform: translate(" +
          el.xValue +
          el.unitSetValue +
          ", " +
          el.yValue +
          el.unitSetValue +
          ");" +
          " z-index: " +
          el.zIndexValue +
          ";"; // style値を設定
        el.initialSlideItem[j].style.cssText = el.cssStyles; // 指定要素にstyleを設定
      }
    }
  };

  // 「前へ」スライド実行用関数
  el.bottomSliderPrevFnc = function () {
    el.targetIndex = this.targetIndex; // 現在の該当要素が何番目かの情報を変数に格納
    el.slideCurrent = el.bottomSlider[el.targetIndex].querySelector(
      el.buttonPrevElement
    ).dataset.slideCurrent; // 現在index番号を取得
    el.slideCurrentAfter = parseInt(el.slideCurrent, 10); // 文字列を整数に変換（小数点以下を切り捨てる）

    // 条件を満たしているか判定
    if (el.slideCurrentAfter === 0) {
      return; // 現在このreturnが存在している関数の処理を値を返しつつ止める。
    } else {
      el.bottomSlider[el.targetIndex].querySelector(
        el.buttonPrevElement
      ).dataset.slideCurrent = el.slideCurrentAfter - 1; // 指定したデータ属性値を設定
      el.bottomSlider[el.targetIndex].querySelector(
        el.buttonNextElement
      ).dataset.slideCurrent = el.slideCurrentAfter - 1; // 指定したデータ属性値を設定
      el.bottomSlider[el.targetIndex]
        .querySelectorAll(el.slideItemElement)
        [el.slideCurrent - 1].classList.remove(el.slideAnimationClass); // 指定要素にclassを付与
    }

    el.slideItemActive = el.bottomSlider[el.targetIndex].querySelectorAll(
      el.slideItemElement + ":not(." + el.slideAnimationClass + ")"
    ); // 現在表示中のセレクタを取得

    el.bottomSlideFnc(el.slideItemActive, el.targetIndex); // スライド実行用関数の実行
  };

  // 「次へ」スライド実行用関数
  el.bottomSliderNextFnc = function () {
    el.targetIndex = this.targetIndex; // 現在の該当要素が何番目かの情報を変数に格納
    el.slideCurrent = el.bottomSlider[el.targetIndex].querySelector(
      el.buttonNextElement
    ).dataset.slideCurrent; // 現在index番号を取得
    el.slideCurrentAfter = parseInt(el.slideCurrent, 10); // 文字列を整数に変換（小数点以下を切り捨てる）

    // 条件を満たしているか判定
    if (
      el.bottomSlider[el.targetIndex].querySelectorAll(el.slideItemElement)
        .length ===
      el.slideCurrentAfter + 1
    ) {
      return; // 現在このreturnが存在している関数の処理を値を返しつつ止める。
    } else {
      el.bottomSlider[el.targetIndex].querySelector(
        el.buttonPrevElement
      ).dataset.slideCurrent = el.slideCurrentAfter + 1; // 指定したデータ属性値を設定
      el.bottomSlider[el.targetIndex].querySelector(
        el.buttonNextElement
      ).dataset.slideCurrent = el.slideCurrentAfter + 1; // 指定したデータ属性値を設定
      el.bottomSlider[el.targetIndex]
        .querySelectorAll(el.slideItemElement)
        [el.slideCurrent].classList.add(el.slideAnimationClass); // 指定要素にclassを付与
    }

    el.slideItemActive = el.bottomSlider[el.targetIndex].querySelectorAll(
      el.slideItemElement + ":not(." + el.slideAnimationClass + ")"
    ); // 現在表示中のセレクタを取得

    el.bottomSlideFnc(el.slideItemActive, el.targetIndex); // スライド実行用関数の実行
  };

  // スライド実行用関数
  el.bottomSlideFnc = function (slideItem, targetIndex) {
    // 次へ・前へボタンの前と次のスライドがない場合、表示・非表示をするかの判定フラグが「true」か判定
    if (el.arrowDisplayHideFlag) {
      // 1番目のスライダーかを判定
      if (
        el.bottomSlider[targetIndex].querySelectorAll(el.slideItemElement)
          .length -
          slideItem.length ===
        0
      ) {
        el.bottomSlider[targetIndex].querySelector(
          el.buttonPrevElement
        ).style.display = "none"; // 前へボタン非表示
      } else {
        el.bottomSlider[targetIndex].querySelector(
          el.buttonPrevElement
        ).style.display = "block"; // 前へボタン表示
      }

      // 最後から2番目のスライダーかを判定
      if (slideItem.length - 1 === 0) {
        el.bottomSlider[targetIndex].querySelector(
          el.buttonNextElement
        ).style.display = "none"; // 次へボタン非表示
      } else {
        el.bottomSlider[targetIndex].querySelector(
          el.buttonNextElement
        ).style.display = "block"; // 次へボタン表示
      }
    }

    // 該当要素数分処理
    for (i = 0; i < slideItem.length; ++i) {
      // 条件を満たしているか判定
      if (i === 0) {
        el.xValue = 0; // x軸の初期位置の座標を指定
        el.yValue = 0; // y軸の初期位置の座標を指定
      } else {
        el.xValue = el.xSetValue * i; // x軸の基礎値を調整し設定
        el.yValue = el.ySetValue * i; // y軸の基礎値を調整し設定
      }

      el.zIndexValue = slideItem.length - i; // z-index値の調整
      el.cssStyles =
        "transform: translate(" +
        el.xValue +
        el.unitSetValue +
        ", " +
        el.yValue +
        el.unitSetValue +
        ");" +
        " z-index: " +
        el.zIndexValue +
        ";"; // style値を設定
      slideItem[i].style.cssText = el.cssStyles; // 指定要素にstyleを設定
    }
  };
})();

const doctorsQualif = document.querySelector(".doctors__qualification");
const doctorsEducation = doctorsQualif.querySelector(".doctors__button__education");
const doctorsSpecification = doctorsQualif.querySelector(".doctors__button__specification");
const doctorsEducationText = doctorsQualif.querySelector(".education__text");
const doctorsSpecificationText = doctorsQualif.querySelector(".specification__text");

function doctorsHiddenText () {
if (doctorsEducation.value === "1") {
  doctorsSpecificationText.classList.add('visually-hidden');
  console.log("first");
}

if (doctorsEducation.value === "0") {
  doctorsSpecificationText.classList.remove('visually-hidden');
  console.log("first");

}
if (doctorsQualif.value === "1") {
  doctorsEducationText.classList.add('visually-hidden');
  console.log("first");

}

if (doctorsQualif.value === "0") {
  doctorsEducationText.classList.remove('visually-hidden');
  console.log("first");

}
}
doctorsHiddenText ();

doctorsSpecification.addEventListener('click', function (event) {
  doctorsSpecification.value ="1";
  doctorsEducation.value = "0";
  doctorsEducation.classList.add('doctors__button-none');
  doctorsSpecification.classList.remove('doctors__button-none');
  doctorsSpecificationText.classList.remove('visually-hidden');
  doctorsEducationText.classList.add('visually-hidden');
  doctorsHiddenText ();
})

doctorsEducation.addEventListener('click', function (event) {
  doctorsEducation.value ="1";
  doctorsSpecification.value = "0";
  doctorsSpecification.classList.add('doctors__button-none');
  doctorsEducation.classList.remove('doctors__button-none');
  doctorsEducationText.classList.remove('visually-hidden');
  doctorsSpecificationText.classList.add('visually-hidden');
  doctorsHiddenText ();
})