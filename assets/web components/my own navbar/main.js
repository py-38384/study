let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let line4 = document.getElementById("line4");
let fram = document.getElementById("fram");
let navlist = document.getElementById("navlist");
let body = document.querySelector("body")
var duration = 300;
var num = true;
var position = window.scrollY+"px";
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
})