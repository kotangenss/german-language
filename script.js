
window.onload = function () {
   let preloader = document.getElementById('preloader');
   preloader.classList.add('hide-preloader');

   // setInterval(function () {
   preloader.classList.add('preloader-hidden');
   // }, 990);
}

new Swiper('.swiper-container', {
   navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev'
   },

   pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      width: 10,
   },

   grabCursor: true,

   keyboard: {
      enabled: true,
      onlyViewport: true,
      pageUpDown: true,
   },

   // mouseWheel: {
   //    sensitivity: 1,
   //    eventsTarget: '.swiper-slide',
   // },
   autoHeight: true,

   slidesPerView: 3,
   slidesPerGroup: 1,
   watchOverflow: true,
   spaceBetween: 30,
   // loopedSlides: 3,
   // loop: true,

   breakpoints: {
      200: {
         slidesPerView: 1,
      },
      801: {
         slidesPerView: 2,
      },
      1251: {
         slidesPerView: 3,
      },
   }
});

// let pageSlider = new Swiper('.page', {
//    wrapperClass: 'page__wrapper',
//    slideClass: 'page__screen',
//    direction: 'vertical',
//    slidesPerView: 'auto',
//    parallax: true,

//    mouseWheel: {
//       sensitivity: 1,
//       // eventsTarget: '.swiper-slide',
//    },

//    observer: true,
//    observeParents: true,
//    observeSlideChildren: true,

//    scrollbar: {
//       el: 'page__scroll',
//       dragClass: 'page__drag-scroll',
//    },
// });


// Переключение программ 

const levels = [...document.querySelectorAll('.level')];
const tableBodies = [...document.querySelectorAll('.table__body')];
const levelContent = [...document.querySelectorAll('.level__content')];
// let isActiveLevel = false;

if (window.matchMedia("(max-width: 900px)").matches) {
   levels.forEach(e => {
      e.classList.remove('active-level');
   })
}

levels.forEach(el => {
   el.addEventListener("click", function (e) {
      if (window.matchMedia("(max-width: 900px)").matches) {

         if (!el.classList.contains('active-level')) {
            levels.forEach(e => {
               e.classList.remove('active-level');
            })

            levelContent.forEach(e => {
               e.classList.remove('level__content-active');
            })

            el.classList.toggle('active-level');
            // console.log(el.firstElementChild.lastElementChild)
            el.lastElementChild.classList.toggle('level__content-active');
            // el.firstElementChild.lastElementChild.style.rotate = '-45deg';
         } else {
            levels.forEach(e => {
               e.classList.remove('active-level');
            })

            levelContent.forEach(e => {
               e.classList.remove('level__content-active');
            })

            // el.firstElementChild.lastElementChild.style.rotate = '180deg';
         }


      } else {
         if (!el.classList.contains('active-level')) {
            levels.forEach(e => {
               e.classList.remove('active-level');
            })
            el.classList.toggle('active-level');
         }

         tableBodies.forEach(e => {
            e.style.display = 'none';
         })

         document.getElementById(el.dataset.index).style.display = 'flex';
      }
   });

});

// Отправка формы
const popUpTrialLesson = document.getElementById('pop-up-trial-lesson');
const buttonPopUpTrialLesson = document.getElementById('pop-up-trial-lesson-button');
const popUpRegistration = document.getElementById('pop-up-registration');
const buttonPopUpRegistration = document.getElementById('pop-up-registration-button');
let valueNumberTrial;
let valueNumberRegistration;
const warningTrialLesson = document.getElementById('warning-trial');
const warningRegistration = document.getElementById('warning-registration');

function showPopUpTrialLesson() {
   let valueNameTrial = document.getElementById('name-trial').value;
   if (valueNumberTrial === undefined || valueNumberTrial.length < 1 || valueNameTrial === '') {
      warningTrialLesson.style.marginTop = '-28px';
   } else {
      warningTrialLesson.style.marginTop = '40px';
      if (validatePhone(valueNumberTrial)) {
         popUpTrialLesson.style.zIndex = 10;
      } else {
         popUpTrialLesson.style.zIndex = -1;
      }
   }
}

function changeInputTrialLesson() {
   const inputTrial = document.getElementById('number-trial');
   const textErrorTrial = document.getElementById('number-trial-text-error');
   valueNumberTrial = inputTrial.value;

   if (valueNumberTrial.length == 0 || validatePhone(valueNumberTrial)) {
      inputTrial.classList.remove('error-input');
      inputTrial.classList.add('valide-input');
      textErrorTrial.classList.remove('text-error');
      textErrorTrial.classList.add('text-valide');
      textErrorTrial.style.marginTop = '-65px';
   } else {
      inputTrial.classList.remove('valide-input');
      inputTrial.classList.add('error-input');
      textErrorTrial.classList.remove('text-valide');
      textErrorTrial.classList.add('text-error');
      textErrorTrial.style.marginTop = '-25px';
   }
};

buttonPopUpTrialLesson.addEventListener("click", function (e) {
   popUpTrialLesson.style.zIndex = -1;
   document.getElementById("name-trial").value = "";
   document.getElementById("number-trial").value = "";
})



function showPopUpRegistration() {
   let valueNameRegistration = document.getElementById('name-registration').value;

   if (valueNameRegistration === undefined || valueNameRegistration.length < 1 || valueNameRegistration === '') {
      warningRegistration.style.zIndex = '1';
      warningRegistration.style.marginTop = '-28px';
   } else {
      warningRegistration.style.marginTop = '40px';
      warningRegistration.style.zIndex = '-1';
      if (validatePhone(valueNumberRegistration)) {
         popUpRegistration.style.zIndex = 10;
      } else {
         popUpRegistration.style.zIndex = -1;
      }
   }
}

buttonPopUpRegistration.addEventListener("click", function (e) {
   popUpRegistration.style.zIndex = -1;
   document.getElementById("name-registration").value = "";
   document.getElementById("number-registration").value = "";
})

function changeInputRegistrationName() {
   const inputRegistrationName = document.getElementById('name-registration');
   const inputRegistrationNameValue = document.getElementById('name-registration').value;

   if (inputRegistrationNameValue !== undefined || inputRegistrationNameValue.length > 0 || inputRegistrationNameValue !== '') {
      inputRegistrationName.classList.add('valide-input');
   } else {
      console.log(inputRegistrationNameValue.length)
      inputRegistrationName.classList.remove('valide-input');
   }
}

function changeInputRegistration() {
   const inputRegistration = document.getElementById('number-registration');
   const textErrorRegistration = document.getElementById('number-registration-text-error');
   valueNumberRegistration = inputRegistration.value;

   if (valueNumberRegistration.length == 0 || validatePhone(valueNumberRegistration)) {
      inputRegistration.classList.remove('error-input');
      inputRegistration.classList.add('valide-input');
      textErrorRegistration.classList.remove('text-error');
      textErrorRegistration.classList.add('text-valide');
      textErrorRegistration.style.marginTop = '-65px';
      textErrorRegistration.style.zIndex = '-10';
   } else {
      inputRegistration.classList.remove('valide-input');
      inputRegistration.classList.add('error-input');
      textErrorRegistration.classList.remove('text-valide');
      textErrorRegistration.classList.add('text-error');
      textErrorRegistration.style.marginTop = '-25px';
      textErrorRegistration.style.zIndex = '1';
   }
};


function validatePhone(numberPhone) {
   let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
   return regex.test(numberPhone);
}

