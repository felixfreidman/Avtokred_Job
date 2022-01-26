"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// /*
// @author: felixfreidman
// @mail: felixfreidmandev@gmail.com
// @note: ищу работу
// */
// // Временное решение деления на разряды, потом маска будет работать
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
} // // Работа меню и создания объекта для будущей передачи,
// // затем уже транпиляция на важные данные
// const allNextButtons = document.querySelectorAll(
//     ".form-navigation__button--next"
// );
// allNextButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//         let buttonId = button.id;
//         buttonId = buttonId.replace("Button", "");
//         let parentId = button.parentNode.parentNode.id;
//         document.getElementById(parentId).classList.toggle("screen--hide");
//         document.getElementById(parentId).classList.toggle("screen--show");
//         document.getElementById(buttonId).classList.toggle("screen--hide");
//         document.getElementById(buttonId).classList.toggle("screen--show");
//         const typesInputs = document.querySelectorAll("input[name='autoSelect']");
//         typesInputs.forEach((input) => {
//             if (input.checked) {
//                 let checkedOption = input.id;
//                 detailedFormObject.type = checkedOption.toString();
//             }
//         });
//         const creditSum = document.getElementById("debtInput").value;
//         console.log(creditSum);
//         detailedFormObject.credit = creditSum.toString();
//         const creditTime = document.getElementById("timeInput").value;
//         detailedFormObject.time = creditTime.toString();
//         // const userIncome = document.getElementById("incomeInput").value;
//         // detailedFormObject.income = userIncome.toString();
//         const creditInvest = document.getElementById("investInput").value;
//         detailedFormObject.invest = creditInvest.toString();
//         console.log(detailedFormObject);
//     });
// });
// const allPrevButtons = document.querySelectorAll(
//     ".form-navigation__button--prev"
// );
// allPrevButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//         let buttonId = button.id;
//         buttonId = buttonId.replace("Button", "");
//         let parentId = button.parentNode.parentNode.id;
//         document.getElementById(parentId).classList.toggle("screen--hide");
//         document.getElementById(parentId).classList.toggle("screen--show");
//         document.getElementById(buttonId).classList.toggle("screen--hide");
//         document.getElementById(buttonId).classList.toggle("screen--show");
//     });
// });
// const detailedFormObject = {
//     type: "",
//     credit: "",
//     time: "",
//     // income: "",
//     invest: "",
//     userName: "",
//     userPhone: "",
// };
// // Вариация формы для неопредленного пользователя
// const detailedButton = document.getElementById("detailedForm");
// detailedButton.addEventListener("click", () => {
//     document.getElementById("firstScreen").classList.toggle("screen--hide");
//     document.getElementById("firstScreen").classList.toggle("screen--show");
//     document.getElementById("secondScreen").classList.toggle("screen--hide");
//     document.getElementById("secondScreen").classList.toggle("screen--show");
// });
// // Верификация заполнения данных в форму
// const userNameInput = document.getElementById("userName");
// const userPhoneInput = document.getElementById("userPhone");
// $(document).ready(function() {
//     $(".submit-button").addClass("form-navigation__button--disabled");
//     $("#userName").keyup(function() {
//         console.log("yes");
//         if ($(this).val().length != 0 && $("#userPhone").val().length != 0) {
//             $(".submit-button").removeClass("form-navigation__button--disabled");
//         }
//     });
//     $("#userPhone").keyup(function() {
//         console.log("yes");
//         if ($(this).val().length != 0 && $("#userName").val().length != 0) {
//             $(".submit-button").removeClass("form-navigation__button--disabled");
//         }
//     });
// });
// // БОЛЬШАЯ СЕКЦИЯ МЕНЮ =========================================
// // Работа с динамиеческим меню
// const workProccessButtonOpen = document.getElementById(
//     "workProccessButtonOpen"
// );
// const workProccessButtonClose = document.getElementById(
//     "workProccessButtonClose"
// );
// const questionButtonOpen = document.getElementById("questionButtonOpen");
// const questionButtonClose = document.getElementById("questionButtonClose");
// const banksButtonOpen = document.getElementById("banksButtonOpen");
// const banksButtonClose = document.getElementById("banksButtonClose");
// const verticalSmallContainer = document.getElementById(
//     "verticalSmallContainer"
// );
// const verticalBigContainer = document.getElementById("verticalBigContainer");
// const basicMenuContainer = document.getElementById("basicMenuContainer");
// const aboutButtonClose = document.getElementById("aboutButtonClose");
// // Секция для запуска событий по нажатию кнопок
// workProccessButtonOpen.addEventListener("click", () => {
//     if (!workProccessButtonOpen.classList.contains("smallHorizontalExpanded"))
//         workProccessButtonOpen.classList.add("smallHorizontalExpanded");
// });
// questionButtonOpen.addEventListener("click", () => {
//     if (!questionButtonOpen.classList.contains("smallHorizontalExpanded")) {
//         questionButtonOpen.classList.add("smallHorizontalExpanded");
//         setTimeout(initQuestionSwiper, 300);
//     }
// });
// banksButtonOpen.addEventListener("click", () => {
//     if (!banksButtonOpen.classList.contains("buttonExpandBig"))
//         banksButtonOpen.classList.add("buttonExpandBig");
// });
// verticalSmallContainer.addEventListener("click", () => {
//     if (!verticalSmallContainer.classList.contains("containerSmallExpand")) {
//         verticalSmallContainer.classList.add("containerSmallExpand");
//         basicMenuContainer.classList.add("menuTransformed");
//         initAboutSwiper();
//     }
// });
// banksButtonClose.addEventListener("click", closeButton);
// function closeButton() {
//     setTimeout(closeButtonDelay, 100);
// }
// function closeButtonDelay() {
//     banksButtonOpen.classList.toggle("buttonExpandBig");
// }
// aboutButtonClose.addEventListener("click", closeButtonAbout);
// function closeButtonAbout() {
//     setTimeout(closeButtonAboutDelay, 100);
// }
// function closeButtonAboutDelay() {
//     verticalSmallContainer.classList.remove("containerSmallExpand");
//     basicMenuContainer.classList.remove("menuTransformed");
// }
// workProccessButtonClose.addEventListener("click", closeButtonProcess);
// function closeButtonProcess() {
//     setTimeout(closeButtonProcessDelay, 100);
// }
// function closeButtonProcessDelay() {
//     workProccessButtonOpen.classList.toggle("smallHorizontalExpanded");
// }
// questionButtonClose.addEventListener("click", closeButtonQuestion);
// function closeButtonQuestion() {
//     setTimeout(closeButtonQuestionDelay, 100);
// }
// function closeButtonQuestionDelay() {
//     questionButtonOpen.classList.toggle("smallHorizontalExpanded");
// }
// // Надо будет потом иницировать свайперы
// // по запуску кнопки, чтобы они нормально верстались
// function initAboutSwiper() {
//     let swiperAbout = new Swiper("#aboutSwiper", {
//         // navigation: {
//         //     nextEl: ".button-about--next",
//         //     prevEl: ".button-about--prev",
//         // },
//         pagination: {
//             el: ".about-pagination",
//             clickable: true,
//             renderBullet: function(index, className) {
//                 let readyElement = `
//             <div class = "${className} bullet-special">
//                 <div class ="bullet-header">${menuCompany[index]}</div>
//                 <div class = ""></div>
//             </div>
//             `;
//                 return readyElement;
//             },
//         },
//         loop: true,
//         effect: "cube",
//         speed: 800,
//     });
// }
// function initQuestionSwiper() {
//     let swiperQuestion = new Swiper("#questionSwiper", {
//         pagination: {
//             el: ".question-pagination",
//             clickable: true,
//             renderBullet: function(index) {
//                 let readyElement = `
//             <div class = "swiper-pagination-bullet">
//                 <div class = "question-image">
//                 <img src = "${questionImages[index]}"/>
//                 </div>
//                 <div class = "question-header">${questionHeaders[index]}</div>
//             </div>
//             `;
//                 return readyElement;
//             },
//         },
//         loop: true,
//         effect: "fade",
//         speed: 800,
//         direction: "vertical",
//     });
// }
// // Функция для получения данных от слайдов для рендера кнопок
// let questionHeaders = [];
// let questionHeaderArray = document.querySelectorAll(".question-slide");
// questionHeaderArray.forEach((element) => {
//     let SlideInfoHeader = element.getAttribute("data-question-header");
//     questionHeaders.push(SlideInfoHeader);
// });
// let questionImages = [];
// let questionImageArray = document.querySelectorAll(".question-slide");
// questionImageArray.forEach((element) => {
//     let SlideInfoImage = element.getAttribute("data-question-image");
//     questionImages.push(SlideInfoImage);
// });
// // ========================================= БОЛЬШАЯ СЕКЦИЯ МЕНЮ
// // МОБИЛЬНОЕ МЕНЮ =========================================
// const mobileHeaderBtn = document.getElementById("showMenu");
// const mobileHeaderLayer = document.getElementById("headerLayer");
// mobileHeaderBtn.addEventListener("click", toggleHeaderMenu);
// mobileHeaderLayer.addEventListener("click", toggleHeaderMenu);
// function toggleHeaderMenu() {
//     mobileHeaderLayer.classList.toggle("btn-clicked--show");
//     mobileHeaderBtn.classList.toggle("header-btn--clicked");
// }
// // ========================================= МОБИЛЬНОЕ МЕНЮ
// /*
// TODO: Документация к коду
// TODO: Дописать форму для определенного пользователя
// TODO: Инициализация яндекса
// */
// SmoothLinks
// const allSmoothLinks = document.querySelectorAll(".smooth-link");
// allSmoothLinks.forEach((link) => {
//     link.addEventListener("click", (event) => {
//         link.scrollIntoView({
//             behavior: "smooth",
//             block: "end",
//             inline: "nearest",
//         });
//     });
// });
// КОД ДЛЯ ФОРМЫ С ПУНКТОМ НЕ ОПРЕДЕЛИЛИСЬ С ВЫБОРОМ


var allUncertainSlides = document.querySelectorAll(".uncertain-form__slide");
var allUncertainSlidesHeaders = document.querySelectorAll(".slide__header--uncertain");
var allDataHeader = []; // СОБИРАЕМ ПУНКТЫ ДЛЯ МЕНЮ НАВИГАЦИИ

allUncertainSlidesHeaders.forEach(function (header) {
  var slideHeader = header.getAttribute("data-slide-header-uncertain");
  allDataHeader.push(slideHeader);
});
var uncertainFormNavigation = document.getElementById("uncertainNavigation");
var listItemUncertainCounter = 1; // СОЗДАЕМ ПУНКТЫ МЕНЮ НАВИГАЦИИ

allDataHeader.forEach(function (header) {
  var newListItem = document.createElement("li");
  newListItem.classList.add("list-navigation__bullet");
  var newListItemHeader = document.createElement("span");
  newListItemHeader.classList.add("bullet-title");
  newListItemHeader.textContent = header;
  newListItem.append(newListItemHeader);
  var letteredCounter = "";

  switch (listItemUncertainCounter) {
    case 1:
      letteredCounter = "First";
      break;

    case 2:
      letteredCounter = "Second";
      break;

    case 3:
      letteredCounter = "Third";
      break;

    case 4:
      letteredCounter = "Fourth";
      break;

    case 5:
      letteredCounter = "Fifth";
      break;
  }

  newListItem.id = "Uncertain".concat(letteredCounter, "SlideItem");
  listItemUncertainCounter++;
  uncertainFormNavigation.append(newListItem);
}); // ФУНКЦИЯ ДЛЯ ОПРЕДЕЛЕНИЯ АКТИВНОГО СЛАЙДА
// ВАЛИДНА ТОЛЬКО NEXT КНОПОК

function checkWhatSlideIsShowedInUncertainForm() {
  allUncertainSlides.forEach(function (slide) {
    var slideID = slide.getAttribute("id");

    if (slideID.includes("First") && slide.classList.contains("slide--show")) {
      if (!document.getElementById("UncertainFirstSlideItem").classList.contains("list-navigation__bullet--active")) {
        document.getElementById("UncertainFirstSlideItem").classList.toggle("list-navigation__bullet--active");
      }

      if (!document.getElementById("UncertainSecondSlideItem").classList.contains("list-navigation__bullet--disabled")) {
        document.getElementById("UncertainSecondSlideItem").classList.toggle("list-navigation__bullet--disabled");
      }

      if (!document.getElementById("UncertainThirdSlideItem").classList.contains("list-navigation__bullet--disabled")) {
        document.getElementById("UncertainThirdSlideItem").classList.toggle("list-navigation__bullet--disabled");
      }
    } else if (slideID.includes("Second") && slide.classList.contains("slide--show")) {
      if (!document.getElementById("UncertainFirstSlideItem").classList.contains("list-navigation__bullet--completed")) {
        document.getElementById("UncertainFirstSlideItem").classList.toggle("list-navigation__bullet--completed");
      }

      if (document.getElementById("UncertainFirstSlideItem").classList.contains("list-navigation__bullet--active")) {
        document.getElementById("UncertainFirstSlideItem").classList.toggle("list-navigation__bullet--active");
      }

      if (document.getElementById("UncertainSecondSlideItem").classList.contains("list-navigation__bullet--disabled")) {
        document.getElementById("UncertainSecondSlideItem").classList.toggle("list-navigation__bullet--disabled");
      }

      if (!document.getElementById("UncertainSecondSlideItem").classList.contains("list-navigation__bullet--active")) {
        document.getElementById("UncertainSecondSlideItem").classList.toggle("list-navigation__bullet--active");
      }

      if (!document.getElementById("uncertainStatusBar").classList.contains("progress-navigation-bar--33p")) {
        document.getElementById("uncertainStatusBar").classList.remove("progress-navigation-bar--0p");
        document.getElementById("uncertainStatusBar").classList.add("progress-navigation-bar--33p");
      }
    } else if (slideID.includes("Third") && slide.classList.contains("slide--show")) {
      if (!document.getElementById("UncertainSecondSlideItem").classList.contains("list-navigation__bullet--completed")) {
        document.getElementById("UncertainSecondSlideItem").classList.toggle("list-navigation__bullet--completed");
      }

      if (document.getElementById("UncertainSecondSlideItem").classList.contains("list-navigation__bullet--active")) {
        document.getElementById("UncertainSecondSlideItem").classList.toggle("list-navigation__bullet--active");
      }

      if (document.getElementById("UncertainThirdSlideItem").classList.contains("list-navigation__bullet--disabled")) {
        document.getElementById("UncertainThirdSlideItem").classList.toggle("list-navigation__bullet--disabled");
      }

      if (!document.getElementById("UncertainThirdSlideItem").classList.contains("list-navigation__bullet--active")) {
        document.getElementById("UncertainThirdSlideItem").classList.toggle("list-navigation__bullet--active");
      }

      if (document.getElementById("uncertainStatusBar").classList.contains("progress-navigation-bar--33p")) {
        document.getElementById("uncertainStatusBar").classList.remove("progress-navigation-bar--33p");
        document.getElementById("uncertainStatusBar").classList.add("progress-navigation-bar--95p");
      }
    }
  });
} // ПРИ НАЖАТИИ НА СЛЕДУЮЩУЮ КНОПКУ ЭТОЙ ФОРМЫ МЕНЯЕТСЯ СЛАЙД И ПУНКТ НАВИГАЦИИ


var allNextUncertainBtns = document.querySelectorAll(".btn-uncertain--next");
allNextUncertainBtns.forEach(function (button) {
  button.addEventListener("click", function () {
    var nextSlideID = button.getAttribute("id");
    nextSlideID = nextSlideID.replace("Next", "");
    var slideID = "";

    switch (nextSlideID) {
      case "SecondSlide":
        slideID = "FirstSlide";
        break;

      case "ThirdSlide":
        slideID = "SecondSlide";
    }

    var slideActive = document.getElementById(slideID);
    var slideNext = document.getElementById(nextSlideID);
    slideActive.classList.toggle("slide--show");
    slideActive.classList.toggle("slide--hidden");
    slideNext.classList.toggle("slide--show");
    slideNext.classList.toggle("slide--hidden");
    checkWhatSlideIsShowedInUncertainForm();
  });
});
var allPreviousUncertainBtns = document.querySelectorAll(".btn-uncertain--previous");
allPreviousUncertainBtns.forEach(function (button) {
  button.addEventListener("click", function () {
    var nextSlideID = button.getAttribute("id");
    nextSlideID = nextSlideID.replace("Previous", "");
    var slideID = "";

    switch (nextSlideID) {
      case "FirstSlide":
        slideID = "SecondSlide";
        break;

      case "SecondSlide":
        slideID = "ThirdSlide";
    }

    var slideActive = document.getElementById(slideID);
    var slideNext = document.getElementById(nextSlideID);
    slideActive.classList.toggle("slide--show");
    slideActive.classList.toggle("slide--hidden");
    slideNext.classList.toggle("slide--show");
    slideNext.classList.toggle("slide--hidden"); // checkWhatSlideIsShowedInUncertainForm();
  });
});
checkWhatSlideIsShowedInUncertainForm();
var userNameInput = document.getElementById("userName");
var userPhoneInput = document.getElementById("userPhone");
$(document).ready(function () {
  $(".submit-button").addClass("submit-button--disabled");
  $("#userName").keyup(function () {
    console.log("yes");

    if ($(this).val().length != 0 && $("#userPhone").val().length != 0) {
      $(".submit-button").removeClass("submit-button--disabled");
    }
  });
  $("#userPhone").keyup(function () {
    console.log("yes");

    if ($(this).val().length != 0 && $("#userName").val().length != 0) {
      $(".submit-button").removeClass("submit-button--disabled");
    }
  });
});
$("#userPhone").inputmask(); // // Хранилища дата-данных,
// //для удобного заполнения данных в свайперах

var menu = [];
var HeadersArray = document.querySelectorAll(".attention-container__header");
HeadersArray.forEach(function (element) {
  var HeaderValue = element.getAttribute("data-info");
  menu.push(HeaderValue);
}); // let menuCompany = [];
// let companyPagesArray = document.querySelectorAll(".about-info");
// companyPagesArray.forEach((element) => {
//     let HeaderValue = element.getAttribute("data-info");
//     menuCompany.push(HeaderValue);
// });
// Свайперы, которые запускаются сразу

var swiperGreet = new Swiper("#greetingSwipper", {
  // navigation: {
  //     nextEl: ".greeting-next",
  //     prevEl: ".greeting-prev",
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      var readyElement = "\n            <div class = \"".concat(className, " bullet-special\">\n                <div class =\"bullet-header\">").concat(menu[index], "</div>\n                <div class = \"\"></div>\n            </div>\n            ");
      return readyElement;
    }
  },
  loop: true,
  effect: "fade",
  speed: 800,
  watchSlidesProgress: true,
  watchVisibility: true,
  disableOnInteraction: true
});
var swiperBanks = new Swiper("#banksSwiper", {
  // navigation: {
  //     nextEl: ".button-bank--next",
  //     prevEl: ".button-bank--prev",
  // },
  // pagination: {
  //     el: ".banks-pagination",
  //     clickable: true,
  // },
  loop: true,
  effect: "cards",
  speed: 800,
  slidesPerView: 4,
  autoplay: {
    delay: 1
  },
  spaceBetween: 50,
  disableOnInteraction: false,
  breakpoints: {
    920: {
      slidesPerView: 4
    },
    600: {
      slidesPerView: 3
    },
    450: {
      slidesPerView: 2
    }
  }
}); // // Автопечатание текста в главном свайпере
// var TxtType = function(el, toRotate, period) {
//     this.toRotate = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.txt = "";
//     this.tick();
//     this.isDeleting = false;
// };
// TxtType.prototype.tick = function() {
//     var i = this.loopNum % this.toRotate.length;
//     var fullTxt = this.toRotate[i];
//     if (this.isDeleting) {
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }
//     this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
//     var that = this;
//     var delta = 200 - Math.random() * 100;
//     if (this.isDeleting) {
//         delta /= 2;
//     }
//     if (!this.isDeleting && this.txt === fullTxt) {
//         delta = this.period;
//         this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === "") {
//         this.isDeleting = false;
//         this.loopNum++;
//         delta = 500;
//     }
//     setTimeout(function() {
//         that.tick();
//     }, delta);
// };
// window.onload = function() {
//     var elements = document.getElementsByClassName("typewrite");
//     for (var i = 0; i < elements.length; i++) {
//         var toRotate = elements[i].getAttribute("data-type");
//         var period = elements[i].getAttribute("data-period");
//         if (toRotate) {
//             new TxtType(elements[i], JSON.parse(toRotate), period);
//         }
//     }
//     // INJECT CSS
//     var css = document.createElement("style");
//     css.type = "text/css";
//     css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//     document.body.appendChild(css);
// };
// // Инициация АОСА для двигающего текста
// AOS.init({
//     startEvent: "DOMContentLoaded",
// });
// Работаем со слайдерами в форме

$(document).ready(function () {
  // $("#sliderDebt").slider({
  //     range: "min",
  //     animate: true,
  //     value: 500000,
  //     min: 100000,
  //     max: 4350000,
  //     step: 1000,
  //     slide: function(event, ui) {
  //         let debtValue = ui.value;
  //         debtValue = numberWithCommas(debtValue);
  //         $("#debtInput").val(debtValue);
  //     },
  // });
  $("#sliderDebt").slider({
    range: "min",
    animate: true,
    value: 400000,
    min: 100000,
    max: 5000000,
    slide: function slide(event, ui) {
      var debtMoney = $("#sliderDebt").slider("value");
      var debtDeposit = $("#sliderDeposit").slider("value");
      var debtTimeRadios = document.querySelectorAll(".controller-input");

      var objectDebtTime = _toConsumableArray(debtTimeRadios).filter(function (radio) {
        if (radio.checked) {
          return radio;
        }
      });

      var debtTime = objectDebtTime[0].id;
      var updatedDebtTime = debtTime.replace("month", "");

      switch (updatedDebtTime) {
        case "05":
          updatedDebtTime = 0.5;
          break;
      }

      var coeficient = 3.9 / 1200.0;
      updatedDebtTime = parseInt(updatedDebtTime);
      debtMoney = parseInt(debtMoney);
      debtDeposit = parseInt(debtDeposit);
      debtMoney -= debtDeposit;
      var monthPayment = debtMoney * coeficient * Math.floor(Math.pow(1 + coeficient, updatedDebtTime) / (Math.pow(1 + coeficient, updatedDebtTime) - 1));
      $;
      $("#depositHalf").text(Math.floor(debtMoney * 0.8 / 2));
      $("#depositMax").text(Math.floor(debtMoney * 0.8));
      var updatedMaxValue = parseInt($("#depositMax").text());
      $("#sliderDeposit").slider("option", "max", updatedMaxValue);
      $("#interestResult").text(Math.floor(monthPayment) + " ₽");
    }
  });
  $("#sliderDeposit").slider({
    range: "min",
    animate: true,
    value: 40000,
    min: 0,
    max: 80000,
    slide: function slide(event, ui) {
      var debtMoney = $("#sliderDebt").slider("value");
      var debtDeposit = $("#sliderDeposit").slider("value");
      var debtTimeRadios = document.querySelectorAll(".controller-input");

      var objectDebtTime = _toConsumableArray(debtTimeRadios).filter(function (radio) {
        if (radio.checked) {
          return radio;
        }
      });

      var debtTime = objectDebtTime[0].id;
      var updatedDebtTime = debtTime.replace("month", "");

      switch (updatedDebtTime) {
        case "05":
          updatedDebtTime = 0.5;
          break;
      }

      var coeficient = 3.9 / 1200.0;
      updatedDebtTime = parseInt(updatedDebtTime);
      debtMoney = parseInt(debtMoney);
      debtDeposit = parseInt(debtDeposit);
      debtMoney -= debtDeposit;
      var monthPayment = Math.floor(debtMoney * coeficient * (Math.pow(1 + coeficient, updatedDebtTime) / (Math.pow(1 + coeficient, updatedDebtTime) - 1)));
      $("#interestResult").text(Math.floor(monthPayment) + " ₽"); // var k = 3.9 / 1200.0;
      // sum = price * k * (Math.pow(1 + k, srok) / (Math.pow(1 + k, srok) - 1));
    }
  }); // $("#debtInput").val($("#sliderDebt").slider("option", "value"));
  // $("#debtInput").change(function() {
  //     $("#sliderDebt").slider("value", $(this).val());
  // });
  // $("#sliderTime").slider({
  //     range: "min",
  //     animate: true,
  //     value: 3,
  //     min: 1,
  //     max: 8,
  //     step: 1,
  //     slide: function(event, ui) {
  //         let timeValue = ui.value;
  //         switch (timeValue) {
  //             case 1:
  //                 timeValue = `${timeValue} год`;
  //                 break;
  //             case 2:
  //                 timeValue = `${timeValue} года`;
  //                 break;
  //             case 3:
  //                 timeValue = `${timeValue} года`;
  //                 break;
  //             case 4:
  //                 timeValue = `${timeValue} года`;
  //                 break;
  //             default:
  //                 timeValue = `${timeValue} лет`;
  //         }
  //         $("#timeInput").val(timeValue);
  //     },
  // });
  // $("#timeInput").val($("#sliderTime").slider("option", "value"));
  // let timeValue = $("#timeInput").val();
  // switch (timeValue) {
  //     default: timeValue = `${timeValue} года`;
  // }
  // $("#timeInput").val(timeValue);
  // $("#timeInput").change(function() {
  //     $("#sliderTime").slider("value", $(this).val());
  // });
  // $("#sliderIncome").slider({
  //     range: "min",
  //     animate: true,
  //     value: 30000,
  //     min: 10000,
  //     max: 500000,
  //     step: 5000,
  //     slide: function(event, ui) {
  //         let debtValue = ui.value;
  //         debtValue = numberWithCommas(debtValue);
  //         $("#incomeInput").val(debtValue);
  //     },
  // });
  // $("#incomeInput").val($("#sliderIncome").slider("option", "value"));
  // $("#incomeInput").change(function() {
  //     $("#sliderIncome").slider("value", $(this).val());
  // });
  // $("#sliderInvest").slider({
  //     range: "min",
  //     animate: true,
  //     value: 100000,
  //     min: 0,
  //     max: 400000,
  //     step: 1000,
  //     slide: function(event, ui) {
  //         let debtValue = ui.value;
  //         debtValue = numberWithCommas(debtValue);
  //         $("#investInput").val(debtValue);
  //     },
  // });
  // $("#investInput").val($("#sliderInvest").slider("option", "value"));
  // $("#investInput").change(function() {
  //     $("#sliderInvest").slider("value", $(this).val());
  // });
});