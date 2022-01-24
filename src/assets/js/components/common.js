// /*
// @author: felixfreidman
// @mail: felixfreidmandev@gmail.com
// @note: ищу работу
// */
// // Временное решение деления на разряды, потом маска будет работать
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
// // Работа меню и создания объекта для будущей передачи,
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
const allUncertainSlides = document.querySelectorAll(".uncertain-form__slide");
const allUncertainSlidesHeaders = document.querySelectorAll(
    ".slide__header--uncertain"
);
let allDataHeader = [];
// СОБИРАЕМ ПУНКТЫ ДЛЯ МЕНЮ НАВИГАЦИИ
allUncertainSlidesHeaders.forEach((header) => {
    let slideHeader = header.getAttribute("data-slide-header-uncertain");
    allDataHeader.push(slideHeader);
});

const uncertainFormNavigation = document.getElementById("uncertainNavigation");
let listItemUncertainCounter = 1;
// СОЗДАЕМ ПУНКТЫ МЕНЮ НАВИГАЦИИ
allDataHeader.forEach((header) => {
    let newListItem = document.createElement("li");
    newListItem.classList.add("list-navigation__bullet");
    let newListItemHeader = document.createElement("span");
    newListItemHeader.classList.add("bullet-title");
    newListItemHeader.textContent = header;
    newListItem.append(newListItemHeader);
    let letteredCounter = "";
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
    newListItem.id = `Uncertain${letteredCounter}SlideItem`;
    listItemUncertainCounter++;
    uncertainFormNavigation.append(newListItem);
});
// ФУНКЦИЯ ДЛЯ ОПРЕДЕЛЕНИЯ АКТИВНОГО СЛАЙДА
// ВАЛИДНА ТОЛЬКО NEXT КНОПОК
function checkWhatSlideIsShowedInUncertainForm() {
    allUncertainSlides.forEach((slide) => {
        let slideID = slide.getAttribute("id");
        if (slideID.includes("First") && slide.classList.contains("slide--show")) {
            if (!document
                .getElementById("UncertainFirstSlideItem")
                .classList.contains("list-navigation__bullet--active")
            ) {
                document
                    .getElementById("UncertainFirstSlideItem")
                    .classList.toggle("list-navigation__bullet--active");
            }
            if (!document
                .getElementById("UncertainSecondSlideItem")
                .classList.contains("list-navigation__bullet--disabled")
            ) {
                document
                    .getElementById("UncertainSecondSlideItem")
                    .classList.toggle("list-navigation__bullet--disabled");
            }
            if (!document
                .getElementById("UncertainThirdSlideItem")
                .classList.contains("list-navigation__bullet--disabled")
            ) {
                document
                    .getElementById("UncertainThirdSlideItem")
                    .classList.toggle("list-navigation__bullet--disabled");
            }
        } else if (
            slideID.includes("Second") &&
            slide.classList.contains("slide--show")
        ) {
            if (!document
                .getElementById("UncertainFirstSlideItem")
                .classList.contains("list-navigation__bullet--completed")
            ) {
                document
                    .getElementById("UncertainFirstSlideItem")
                    .classList.toggle("list-navigation__bullet--completed");
            }
            if (
                document
                .getElementById("UncertainFirstSlideItem")
                .classList.contains("list-navigation__bullet--active")
            ) {
                document
                    .getElementById("UncertainFirstSlideItem")
                    .classList.toggle("list-navigation__bullet--active");
            }
            if (
                document
                .getElementById("UncertainSecondSlideItem")
                .classList.contains("list-navigation__bullet--disabled")
            ) {
                document
                    .getElementById("UncertainSecondSlideItem")
                    .classList.toggle("list-navigation__bullet--disabled");
            }
            if (!document
                .getElementById("UncertainSecondSlideItem")
                .classList.contains("list-navigation__bullet--active")
            ) {
                document
                    .getElementById("UncertainSecondSlideItem")
                    .classList.toggle("list-navigation__bullet--active");
            }
            if (!document
                .getElementById("uncertainStatusBar")
                .classList.contains("progress-navigation-bar--33p")
            ) {
                document
                    .getElementById("uncertainStatusBar")
                    .classList.remove("progress-navigation-bar--0p");
                document
                    .getElementById("uncertainStatusBar")
                    .classList.add("progress-navigation-bar--33p");
            }
        } else if (
            slideID.includes("Third") &&
            slide.classList.contains("slide--show")
        ) {
            if (!document
                .getElementById("UncertainSecondSlideItem")
                .classList.contains("list-navigation__bullet--completed")
            ) {
                document
                    .getElementById("UncertainSecondSlideItem")
                    .classList.toggle("list-navigation__bullet--completed");
            }
            if (
                document
                .getElementById("UncertainSecondSlideItem")
                .classList.contains("list-navigation__bullet--active")
            ) {
                document
                    .getElementById("UncertainSecondSlideItem")
                    .classList.toggle("list-navigation__bullet--active");
            }
            if (
                document
                .getElementById("UncertainThirdSlideItem")
                .classList.contains("list-navigation__bullet--disabled")
            ) {
                document
                    .getElementById("UncertainThirdSlideItem")
                    .classList.toggle("list-navigation__bullet--disabled");
            }
            if (!document
                .getElementById("UncertainThirdSlideItem")
                .classList.contains("list-navigation__bullet--active")
            ) {
                document
                    .getElementById("UncertainThirdSlideItem")
                    .classList.toggle("list-navigation__bullet--active");
            }
            if (
                document
                .getElementById("uncertainStatusBar")
                .classList.contains("progress-navigation-bar--33p")
            ) {
                document
                    .getElementById("uncertainStatusBar")
                    .classList.remove("progress-navigation-bar--33p");

                document
                    .getElementById("uncertainStatusBar")
                    .classList.add("progress-navigation-bar--95p");
            }
        }
    });
}
// ПРИ НАЖАТИИ НА СЛЕДУЮЩУЮ КНОПКУ ЭТОЙ ФОРМЫ МЕНЯЕТСЯ СЛАЙД И ПУНКТ НАВИГАЦИИ
const allNextUncertainBtns = document.querySelectorAll(".btn-uncertain--next");
allNextUncertainBtns.forEach((button) => {
    button.addEventListener("click", () => {
        let nextSlideID = button.getAttribute("id");
        nextSlideID = nextSlideID.replace("Next", "");
        let slideID = "";
        switch (nextSlideID) {
            case "SecondSlide":
                slideID = "FirstSlide";
                break;
            case "ThirdSlide":
                slideID = "SecondSlide";
        }

        let slideActive = document.getElementById(slideID);
        let slideNext = document.getElementById(nextSlideID);
        slideActive.classList.toggle("slide--show");
        slideActive.classList.toggle("slide--hidden");
        slideNext.classList.toggle("slide--show");
        slideNext.classList.toggle("slide--hidden");
        checkWhatSlideIsShowedInUncertainForm();
    });
});

const allPreviousUncertainBtns = document.querySelectorAll(
    ".btn-uncertain--previous"
);

allPreviousUncertainBtns.forEach((button) => {
    button.addEventListener("click", () => {
        let nextSlideID = button.getAttribute("id");
        nextSlideID = nextSlideID.replace("Previous", "");
        let slideID = "";
        switch (nextSlideID) {
            case "FirstSlide":
                slideID = "SecondSlide";
                break;
            case "SecondSlide":
                slideID = "ThirdSlide";
        }

        let slideActive = document.getElementById(slideID);
        let slideNext = document.getElementById(nextSlideID);
        slideActive.classList.toggle("slide--show");
        slideActive.classList.toggle("slide--hidden");
        slideNext.classList.toggle("slide--show");
        slideNext.classList.toggle("slide--hidden");
        // checkWhatSlideIsShowedInUncertainForm();
    });
});

checkWhatSlideIsShowedInUncertainForm();

const userNameInput = document.getElementById("userName");
const userPhoneInput = document.getElementById("userPhone");
$(document).ready(function() {
    $(".submit-button").addClass("submit-button--disabled");
    $("#userName").keyup(function() {
        console.log("yes");
        if ($(this).val().length != 0 && $("#userPhone").val().length != 0) {
            $(".submit-button").removeClass("submit-button--disabled");
        }
    });
    $("#userPhone").keyup(function() {
        console.log("yes");
        if ($(this).val().length != 0 && $("#userName").val().length != 0) {
            $(".submit-button").removeClass("submit-button--disabled");
        }
    });
});