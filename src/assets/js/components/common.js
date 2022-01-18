/*
@author: felixfreidman 
@mail: felixfreidmandev@gmail.com
@note: ищу работу
*/
// Временное решение деления на разряды, потом маска будет работать
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
// Работа меню и создания объекта для будущей передачи,
// затем уже транпиляция на важные данные
const allNextButtons = document.querySelectorAll(
    ".form-navigation__button--next"
);
allNextButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonId = button.id;
        buttonId = buttonId.replace("Button", "");
        let parentId = button.parentNode.parentNode.id;
        document.getElementById(parentId).classList.toggle("screen--hide");
        document.getElementById(parentId).classList.toggle("screen--show");
        document.getElementById(buttonId).classList.toggle("screen--hide");
        document.getElementById(buttonId).classList.toggle("screen--show");
        const typesInputs = document.querySelectorAll("input[name='autoSelect']");
        typesInputs.forEach((input) => {
            if (input.checked) {
                let checkedOption = input.id;
                detailedFormObject.type = checkedOption.toString();
            }
        });
        const creditSum = document.getElementById("debtInput").value;
        console.log(creditSum);
        detailedFormObject.credit = creditSum.toString();
        const creditTime = document.getElementById("timeInput").value;
        detailedFormObject.time = creditTime.toString();
        // const userIncome = document.getElementById("incomeInput").value;
        // detailedFormObject.income = userIncome.toString();
        const creditInvest = document.getElementById("investInput").value;
        detailedFormObject.invest = creditInvest.toString();
        console.log(detailedFormObject);
    });
});
const allPrevButtons = document.querySelectorAll(
    ".form-navigation__button--prev"
);
allPrevButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonId = button.id;
        buttonId = buttonId.replace("Button", "");
        let parentId = button.parentNode.parentNode.id;
        document.getElementById(parentId).classList.toggle("screen--hide");
        document.getElementById(parentId).classList.toggle("screen--show");
        document.getElementById(buttonId).classList.toggle("screen--hide");
        document.getElementById(buttonId).classList.toggle("screen--show");
    });
});
const detailedFormObject = {
    type: "",
    credit: "",
    time: "",
    // income: "",
    invest: "",
    userName: "",
    userPhone: "",
};
// Вариация формы для неопредленного пользователя
const detailedButton = document.getElementById("detailedForm");
detailedButton.addEventListener("click", () => {
    document.getElementById("firstScreen").classList.toggle("screen--hide");
    document.getElementById("firstScreen").classList.toggle("screen--show");
    document.getElementById("secondScreen").classList.toggle("screen--hide");
    document.getElementById("secondScreen").classList.toggle("screen--show");
});
// Верификация заполнения данных в форму
const userNameInput = document.getElementById("userName");
const userPhoneInput = document.getElementById("userPhone");
$(document).ready(function() {
    $(".submit-button").addClass("form-navigation__button--disabled");
    $("#userName").keyup(function() {
        console.log("yes");
        if ($(this).val().length != 0 && $("#userPhone").val().length != 0) {
            $(".submit-button").removeClass("form-navigation__button--disabled");
        }
    });
    $("#userPhone").keyup(function() {
        console.log("yes");
        if ($(this).val().length != 0 && $("#userName").val().length != 0) {
            $(".submit-button").removeClass("form-navigation__button--disabled");
        }
    });
});
// БОЛЬШАЯ СЕКЦИЯ МЕНЮ =========================================
// Работа с динамиеческим меню
const workProccessButtonOpen = document.getElementById(
    "workProccessButtonOpen"
);
const workProccessButtonClose = document.getElementById(
    "workProccessButtonClose"
);
const banksButtonOpen = document.getElementById("banksButtonOpen");
const banksButtonClose = document.getElementById("banksButtonClose");
const verticalSmallContainer = document.getElementById(
    "verticalSmallContainer"
);
const verticalBigContainer = document.getElementById("verticalBigContainer");
const basicMenuContainer = document.getElementById("basicMenuContainer");
const aboutButtonClose = document.getElementById("aboutButtonClose");
// Секция для запуска событий по нажатию кнопок
workProccessButtonOpen.addEventListener("click", () => {
    if (!workProccessButtonOpen.classList.contains("smallHorizontalExpanded"))
        workProccessButtonOpen.classList.add("smallHorizontalExpanded");
});

banksButtonOpen.addEventListener("click", () => {
    if (!banksButtonOpen.classList.contains("buttonExpandBig"))
        banksButtonOpen.classList.add("buttonExpandBig");
});
verticalSmallContainer.addEventListener("click", () => {
    if (!verticalSmallContainer.classList.contains("containerSmallExpand")) {
        verticalSmallContainer.classList.add("containerSmallExpand");
        basicMenuContainer.classList.add("menuTransformed");
        initAboutSwiper();
    }
});

banksButtonClose.addEventListener("click", closeButton);

function closeButton() {
    setTimeout(closeButtonDelay, 100);
}

function closeButtonDelay() {
    banksButtonOpen.classList.toggle("buttonExpandBig");
}

aboutButtonClose.addEventListener("click", closeButtonAbout);

function closeButtonAbout() {
    setTimeout(closeButtonAboutDelay, 100);
}

function closeButtonAboutDelay() {
    verticalSmallContainer.classList.remove("containerSmallExpand");
    basicMenuContainer.classList.remove("menuTransformed");
}

workProccessButtonClose.addEventListener("click", closeButtonProcess);

function closeButtonProcess() {
    setTimeout(closeButtonProcessDelay, 100);
}

function closeButtonProcessDelay() {
    workProccessButtonOpen.classList.toggle("smallHorizontalExpanded");
}
// Надо будет потом иницировать свайперы
// по запуску кнопки, чтобы они нормально верстались
function initAboutSwiper() {
    let swiperAbout = new Swiper("#aboutSwiper", {
        // navigation: {
        //     nextEl: ".button-about--next",
        //     prevEl: ".button-about--prev",
        // },
        pagination: {
            el: ".about-pagination",
            clickable: true,
            renderBullet: function(index, className) {
                let readyElement = `
            <div class = "${className} bullet-special">
                <div class ="bullet-header">${menuCompany[index]}</div>
                <div class = ""></div>
            </div>
            `;
                return readyElement;
            },
        },
        loop: true,
        effect: "cube",
        speed: 800,
    });
}

// ========================================= БОЛЬШАЯ СЕКЦИЯ МЕНЮ

/* 
TODO: Документация к коду
TODO: Дописать форму для определенного пользователя
TODO: Инициализация яндекса
*/