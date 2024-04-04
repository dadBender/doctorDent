
function DoctorsInfo () {
let Doctors = document.querySelectorAll('.doctors__card');
let ShownDoctor;
    
for (let i = 0; i < Doctors.length; i++) {
    if (Doctors[i].classList.contains('visually-hidden')) {
    }
    else {
        ShownDoctor = Doctors[i]; 
    }
}
let doctorsEducationText = ShownDoctor.querySelectorAll(".doctors__card__text-item");



let DoctorsQualificationButtons = ShownDoctor.querySelectorAll('.doctors__button');

let DoctorsQualificationShown;
let ShownText;

function NotUseButton() {
    for (let i = 0; i < DoctorsQualificationButtons.length; i++) {
        DoctorsQualificationButtons[i].classList.add("doctors__button-none");
    }
}

for (let i = 0; i < DoctorsQualificationButtons.length; i++) {
    DoctorsQualificationButtons[i].addEventListener("click", function (event) {
       

        if (event.target.classList.contains("doctors__button__education")) {
            NotUseButton();
            event.target.classList.remove("doctors__button-none");

            for (let i = 0; i < doctorsEducationText.length; i++){
               if (doctorsEducationText[i].classList.contains("education__text") ) {
                doctorsEducationText[i].classList.remove("visually-hidden");
               }
               else {
                doctorsEducationText[i].classList.add("visually-hidden")
               }
            }
        }
        if (event.target.classList.contains("doctors__button__specification")) {
            NotUseButton();
            event.target.classList.remove("doctors__button-none");

            for (let i = 0; i < doctorsEducationText.length; i++){
                if (doctorsEducationText[i].classList.contains("specification__text") ) {
                doctorsEducationText[i].classList.remove("visually-hidden");
                 
                }
                else {
                 doctorsEducationText[i].classList.add("visually-hidden")
                }
             }
        }
        if (event.target.classList.contains("doctors__button__seminars")) {
            NotUseButton();
            event.target.classList.remove("doctors__button-none");
            for (let i = 0; i < doctorsEducationText.length; i++){
                if (doctorsEducationText[i].classList.contains("seminars__text") ) {
                doctorsEducationText[i].classList.remove("visually-hidden");
                 
                }
                else {
                 doctorsEducationText[i].classList.add("visually-hidden")
                }
             }
        }
        
        
    })
}

}
DoctorsInfo();

function DoctorsInfoStart() {
    let StartText = document.querySelectorAll(".doctors__card__text-item");
    for (let i = 0; i < StartText.length; i++){
        if (StartText[i].classList.contains("education__text") ) {
            StartText[i].classList.remove("visually-hidden");
         
        }
        else {
            StartText[i].classList.add("visually-hidden")
        }
     }
}

DoctorsInfoStart();