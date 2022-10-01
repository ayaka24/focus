$(".menu").on("click", function () {
  $(".menu__line").toggleClass("active");
  $(".gnav").fadeToggle();
});
$(".gnav__wrap").on("click", function () {
  $(".menu__line").toggleClass("active");
  $(".gnav").fadeToggle();
});

// function load_effect() {
//   var element = document.getElementsByClassName("fp-completely");
//   if (!element) return; // 要素がない場合は終了

//   for (var i = 0; i < element.length; i++) {
//     element[i].classList.add("is-show");
//   }
// }
// setTimeout(load_effect, 600); // 600ミリ秒経過後に実行

jQuery(function () {
  jQuery("#fullpage").fullpage({
    scrollOverflow: true,
  });
});

// if (window.matchMedia("(min-width: 561px)").matches) {
//   //画面幅561px以上の場合
//   document.write(
//     '<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.5/jquery.fullpage.js"></script>'
//   );
// }

const mySwiper = new Swiper(".swiper", {
  loop: true,
  // allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  speed: 500,
});

let iframe1 = document.getElementById("iframe1");
let iframe2 = document.getElementById("iframe2");
let iframe3 = document.getElementById("iframe3");
let iframe4 = document.getElementById("iframe4");
let player1 = new Vimeo.Player(iframe1);
let player2 = new Vimeo.Player(iframe2);
let player3 = new Vimeo.Player(iframe3);
let player4 = new Vimeo.Player(iframe4);
let modal1 = document.getElementById("modal1");
let modal2 = document.getElementById("modal2");
let modal3 = document.getElementById("modal3");
let modal4 = document.getElementById("modal4");

$("#btnPlay").click(function () {
  modal1.classList.add("on");
  player1.play();
});

$("#btnPlay2").click(function () {
  modal2.classList.add("on");
  player2.play();
});

$("#btnPlay3").click(function () {
  modal3.classList.add("on");
  player3.play();
});

$("#btnPlay4").click(function () {
  modal4.classList.add("on");
  player4.play();
});

$("#btnPause1").click(function () {
  modal1.classList.remove("on");
  player1.pause();
});

$("#btnPause2").click(function () {
  modal2.classList.remove("on");
  player2.pause();
});

$("#btnPause3").click(function () {
  modal3.classList.remove("on");
  player3.pause();
});

$("#btnPause4").click(function () {
  modal4.classList.remove("on");
  player4.pause();
});
