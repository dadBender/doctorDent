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

function TextContentCards (doctorsQualif) {

  let doctorsEducation = doctorsQualif.querySelector(
    ".doctors__button__education"
  );

  console.log(doctorsEducation);

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
  }

KillCard(VisualHiddenCard);
// console.log(VisualHiddenCard);
// KillCard();

ButtonPrev.addEventListener('click', function(){
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
  $(".js-slide-item").animate({ opacity: 0 }, 100);
  $(".js-slide-item").animate({ opacity: 1 }, 1000);
  // $(".primavera_team-description .primaverateam-caption").html(
  //   $(".primaverateam-images")
  //     .find(".primaverateam-item:last-child")
  //     .find(".primavera_team-caption")
  //     .html()
  //     );
  let VisualTextCard = document.querySelectorAll(`.doctors__card:nth-child(3)`);
  TextContentCards (VisualTextCard);
})

ButtonNext.addEventListener('click', function(){
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

   let VisualTextCard = document.querySelectorAll(`.doctors__card:nth-child(3)`);
   TextContentCards (VisualTextCard);
})
