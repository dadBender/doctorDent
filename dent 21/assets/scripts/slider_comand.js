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
  $(".primavera_team-description .primaverateam-caption").html(
    $(".primaverateam-images")
      .find(".primaverateam-item:last-child")
      .find(".primavera_team-caption")
      .html()
      );
  
  console.log(VisualTextCard);
  DoctorsInfo ();


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

  DoctorsInfo ();
   
})
