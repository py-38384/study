let typed = new Typed(".multiple-text",{
    strings: ["Programmer","Youtuber","Web developer", "Game developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
let hamburger = document.querySelector(".hamburger");
let header = document.querySelector("header");
let line1 = document.querySelector("#line1");
let line2 = document.querySelector("#line2");
let line3 = document.querySelector("#line3");
let line4 = document.querySelector("#line4");
let responsiveNavBar = document.querySelector(".responsive-navber");
let cover = document.querySelector(".cover");
isNavClose = true;
hamburger.addEventListener("click",(e)=>{
    console.log("Clicked");
    if(isNavClose){
        line1.style.opacity = "0%";
        line4.style.opacity = "0%";
        line3.style.transform = "rotate(45deg)";
        line2.style.transform = "rotate(-45deg)";
        header.style.backgroundColor = "#fff";

        header.style.boxShadow = "3px 3px 5px gray";
        responsiveNavBar.style.display = "flex";
        setTimeout(()=>{
            responsiveNavBar.style.top = "70px";
            cover.style.display = "block";
        },100)
        isNavClose = false;
    }
    else{
        line1.style.opacity = "100%";
        line4.style.opacity = "100%";
        line3.style.transform = "rotate(0deg)";
        line2.style.transform = "rotate(0deg)";

        responsiveNavBar.style.top = "-300px";
        setTimeout(()=>{
            header.style.backgroundColor = "#ffffff00";
            header.style.boxShadow = "none";
            responsiveNavBar.style.display = "none";
            cover.style.display = "none";
        },400)
        isNavClose = true;
    }
})