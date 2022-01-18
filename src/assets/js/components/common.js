function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const allNextButtons = document.querySelectorAll(
    ".form-navigation__button--next"
);
let detailedFormObject = {
    type: "",
    credit: "",
    time: "",
    income: "",
    invest: "",
    userName: "",
    userPhone: "",
};
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
        const userIncome = document.getElementById("incomeInput").value;
        detailedFormObject.income = userIncome.toString();
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

const detailedButton = document.getElementById("detailedForm");
detailedButton.addEventListener("click", () => {
    document.getElementById("firstScreen").classList.toggle("screen--hide");
    document.getElementById("firstScreen").classList.toggle("screen--show");
    document.getElementById("secondScreen").classList.toggle("screen--hide");
    document.getElementById("secondScreen").classList.toggle("screen--show");
});

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
const workProccessButtonOpen = document.getElementById(
    "workProccessButtonOpen"
);
workProccessButtonOpen.addEventListener("click", () => {
    if (!workProccessButtonOpen.classList.contains("smallHorizontalExpanded"))
        workProccessButtonOpen.classList.add("smallHorizontalExpanded");
});
const banksButtonOpen = document.getElementById("banksButtonOpen");
banksButtonOpen.addEventListener("click", () => {
    if (!banksButtonOpen.classList.contains("buttonExpandBig"))
        banksButtonOpen.classList.add("buttonExpandBig");
});
const banksButtonClose = document.getElementById("banksButtonClose");
banksButtonClose.addEventListener("click", closeButton);

function closeButton() {
    setTimeout(closeButtonDelay, 100);
}

function closeButtonDelay() {
    banksButtonOpen.classList.toggle("buttonExpandBig");
}

const verticalSmallContainer = document.getElementById(
    "verticalSmallContainer"
);
const verticalBigContainer = document.getElementById("verticalBigContainer");
const basicMenuContainer = document.getElementById("basicMenuContainer");
verticalSmallContainer.addEventListener("click", () => {
    if (!verticalSmallContainer.classList.contains("containerSmallExpand")) {
        verticalSmallContainer.classList.add("containerSmallExpand");
        basicMenuContainer.classList.add("menuTransformed");
        initAboutSwiper();
    }
});
const aboutButtonClose = document.getElementById("aboutButtonClose");
aboutButtonClose.addEventListener("click", closeButtonAbout);

function closeButtonAbout() {
    setTimeout(closeButtonAboutDelay, 100);
}

function closeButtonAboutDelay() {
    verticalSmallContainer.classList.remove("containerSmallExpand");
    basicMenuContainer.classList.remove("menuTransformed");
}
const workProccessButtonClose = document.getElementById(
    "workProccessButtonClose"
);
workProccessButtonClose.addEventListener("click", closeButtonProcess);

function closeButtonProcess() {
    setTimeout(closeButtonProcessDelay, 100);
}

function closeButtonProcessDelay() {
    workProccessButtonOpen.classList.toggle("smallHorizontalExpanded");
}

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