// // Хранилища дата-данных,
// //для удобного заполнения данных в свайперах
let menu = [];
let HeadersArray = document.querySelectorAll(".attention-container__header");
HeadersArray.forEach((element) => {
    let HeaderValue = element.getAttribute("data-info");
    menu.push(HeaderValue);
});
// let menuCompany = [];
// let companyPagesArray = document.querySelectorAll(".about-info");
// companyPagesArray.forEach((element) => {
//     let HeaderValue = element.getAttribute("data-info");
//     menuCompany.push(HeaderValue);
// });
// Свайперы, которые запускаются сразу
let swiperGreet = new Swiper("#greetingSwipper", {
    // navigation: {
    //     nextEl: ".greeting-next",
    //     prevEl: ".greeting-prev",
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function(index, className) {
            let readyElement = `
            <div class = "${className} bullet-special">
                <div class ="bullet-header">${menu[index]}</div>
                <div class = ""></div>
            </div>
            `;
            return readyElement;
        },
    },
    loop: true,
    effect: "fade",
    speed: 800,
    watchSlidesProgress: true,
    watchVisibility: true,
    disableOnInteraction: true,
});
let swiperBanks = new Swiper("#banksSwiper", {
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
        delay: 1,
    },
    spaceBetween: 50,
    disableOnInteraction: false,
    breakpoints: {
        920: {
            slidesPerView: 4,
        },
        600: {
            slidesPerView: 2,
        },
        450: {
            slidesPerView: 1,
        },
    },
});

// // Автопечатание текста в главном свайпере
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
$(document).ready(function() {
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
        slide: function(event, ui) {
            let debtMoney = $("#sliderDebt").slider("value");
            let debtDeposit = $("#sliderDeposit").slider("value");
            const debtTimeRadios = document.querySelectorAll(".controller-input");
            let objectDebtTime = [...debtTimeRadios].filter((radio) => {
                if (radio.checked) {
                    return radio;
                }
            });
            let debtTime = objectDebtTime[0].id;
            let updatedDebtTime = debtTime.replace("month", "");
            switch (updatedDebtTime) {
                case "05":
                    updatedDebtTime = 0.5;
                    break;
            }
            let coeficient = 3.9 / 1200.0;
            updatedDebtTime = parseInt(updatedDebtTime);
            debtMoney = parseInt(debtMoney);
            debtDeposit = parseInt(debtDeposit);
            debtMoney -= debtDeposit;
            let monthPayment =
                debtMoney *
                coeficient *
                Math.floor(
                    Math.pow(1 + coeficient, updatedDebtTime) /
                    (Math.pow(1 + coeficient, updatedDebtTime) - 1)
                );
            $;
            $("#depositHalf").text(Math.floor((debtMoney * 0.8) / 2));
            $("#depositMax").text(Math.floor(debtMoney * 0.8));
            let updatedMaxValue = parseInt($("#depositMax").text());
            $("#sliderDeposit").slider("option", "max", updatedMaxValue);
            $("#interestResult").text(Math.floor(monthPayment) + " ₽");
        },
    });
    $("#sliderDeposit").slider({
        range: "min",
        animate: true,
        value: 40000,
        min: 0,
        max: 80000,
        slide: function(event, ui) {
            let debtMoney = $("#sliderDebt").slider("value");
            let debtDeposit = $("#sliderDeposit").slider("value");
            const debtTimeRadios = document.querySelectorAll(".controller-input");
            let objectDebtTime = [...debtTimeRadios].filter((radio) => {
                if (radio.checked) {
                    return radio;
                }
            });
            let debtTime = objectDebtTime[0].id;
            let updatedDebtTime = debtTime.replace("month", "");
            switch (updatedDebtTime) {
                case "05":
                    updatedDebtTime = 0.5;
                    break;
            }
            let coeficient = 3.9 / 1200.0;
            updatedDebtTime = parseInt(updatedDebtTime);
            debtMoney = parseInt(debtMoney);
            debtDeposit = parseInt(debtDeposit);
            debtMoney -= debtDeposit;
            let monthPayment = Math.floor(
                debtMoney *
                coeficient *
                (Math.pow(1 + coeficient, updatedDebtTime) /
                    (Math.pow(1 + coeficient, updatedDebtTime) - 1))
            );

            $("#interestResult").text(Math.floor(monthPayment) + " ₽");
            // var k = 3.9 / 1200.0;
            // sum = price * k * (Math.pow(1 + k, srok) / (Math.pow(1 + k, srok) - 1));
        },
    });
    // $("#debtInput").val($("#sliderDebt").slider("option", "value"));
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