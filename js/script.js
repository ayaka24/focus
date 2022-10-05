$(".menu").on("click", function () {
  $(".menu__line").toggleClass("active");
  $(".gnav").fadeToggle();
});
$(".gnav__wrap").on("click", function () {
  $(".menu__line").toggleClass("active");
  $(".gnav").fadeToggle();
});

jQuery(function () {
  jQuery("#fullpage").fullpage({
    scrollOverflow: true,
  });
});

let iframe1 = document.getElementById("iframe1");
let iframe2 = document.getElementById("iframe2");
let iframe3 = document.getElementById("iframe3");
let iframe4 = document.getElementById("iframe4");
let iframe5 = document.getElementById("iframe5");
let player1 = new Vimeo.Player(iframe1);
let player2 = new Vimeo.Player(iframe2);
let player3 = new Vimeo.Player(iframe3);
let player4 = new Vimeo.Player(iframe4);
let player5 = new Vimeo.Player(iframe5);
let modal1 = document.getElementById("modal1");
let modal2 = document.getElementById("modal2");
let modal3 = document.getElementById("modal3");
let modal4 = document.getElementById("modal4");
let modal5 = document.getElementById("modal5");

$("#btnPlay1").click(function () {
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

$("#btnPlay5").click(function () {
  modal5.classList.add("on");
  player5.play();
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

$("#btnPause5").click(function () {
  modal5.classList.remove("on");
  player5.pause();
});
