let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let line4 = document.getElementById("line4");
let fram = document.getElementById("fram");
let navlist = document.getElementById("navlist");
let body = document.querySelector("body");
let root = document.querySelector(":root");
let search = document.getElementById("search");
let closeicon = document.getElementById("closeicon");
let searchicon = document.getElementById("searchicon");
let searchbar = document.getElementById("searchbar");
let searchbutton = document.getElementById("searchbutton");
let sologun = document.getElementById("sologun");
let cover = document.getElementById("cover");
var duration = 300;
var num = true;
var position = window.scrollY + "px";
fram.addEventListener("click", (event) => {
  if (num) {
    line2.style.transform = "rotate(45deg)";
    line3.style.transform = "rotate(-45deg)";

    line1.style.opacity = 0;
    setTimeout(function() {
      line1.style.display = "none";
    }, duration);

    line4.style.opacity = 0;
    setTimeout(function() {
      line4.style.display = "none";
    }, duration);

    navlist.style.display = "block";
    navlist.style.position = "fixed";

    navlist.style.top = position;
    setTimeout(function() {
      navlist.style.left = "0px";
    }, 200);

    setTimeout(function() {
      line2.style.background = "white";
      line3.style.background = "white";
    }, 600)

    body.style.overflow = "hidden";

    num = false;
  } else {
    line1.style.display = "block";
    setTimeout(function() {
      line1.style.opacity = 1;
    }, duration);

    line4.style.display = "block";
    setTimeout(function() {
      line4.style.opacity = 1;
    }, duration);

    navlist.style.left = "-105%";
    line2.style.background = "black";
    line3.style.background = "black";
    setTimeout(function() {
      navlist.style.display = "none";
    }, 500);

    line2.style.transform = "rotate(0deg)";
    line3.style.transform = "rotate(0deg)";

    body.style.overflow = "scroll";

    num = true;
  }
});
let istrue = true;
search.addEventListener("click", (event) => {
  if (istrue) {

    body.style.overflow = "hidden";

    searchicon.style.display = "none";
    closeicon.style.display = "block";

    searchbar.style.display = "block";
    searchbutton.style.display = "block";

    closeicon.style.zIndex = "4";
    searchicon.style.zIndex = "4";
    search.style.zIndex = "4"
    searchbar.style.zIndex = "4";
    searchbutton.style.zIndex = "4";

    cover.style.display = "block"

    istrue = false;
  } else {

    body.style.overflow = "scroll";

    searchicon.style.display = "block";
    closeicon.style.display = "none";

    searchbar.style.display = "none";
    searchbutton.style.display = "none";

    closeicon.style.zIndex = "2";
    searchicon.style.zIndex = "2";
    search.style.zIndex = "2"
    searchbar.style.zIndex = "2";
    searchbutton.style.display = "2";

    cover.style.display = "none"

    istrue = true;
  }
});

function hide() {
  sologun.style.top = '5';
}

function show() {
  sologun.style.top = '8';
}
let nav = document.querySelector("nav");
window.addEventListener("scroll", (event) => {
  var scroll = window.scrollY;
  scroll = Math.round(scroll);
  if (scroll > 70) {
    nav.style.background = "rgb(255,255,255)";
  }
  else if (scroll < 70) {
    nav.style.background = "none";
  }
})
let i = 100;
let color;
let myinterval = setInterval(() => {
  color = "grayscale(" + i + "%)";
  root.style.setProperty("--imgGray", color);
  console.log("working");
  i--;
  if(i<=0){
    clearInterval(myinterval);
    console.log("stoped");
  }
}, 200);