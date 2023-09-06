let typed = new Typed(".multiple-text", {
    strings: ["Programmer", "Youtuber", "Web developer", "Game developer"],
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
let responsiveNevElement = document.querySelectorAll(".responsive-navber a");
let cover = document.querySelector(".cover");
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
isNavClose = true;
hamburger.addEventListener("click", NevControler);
function NevControler() {
    if (isNavClose) {
        line1.style.opacity = "0%";
        line4.style.opacity = "0%";
        line3.style.transform = "rotate(45deg)";
        line2.style.transform = "rotate(-45deg)";
        header.style.background = "white";
        header.style.boxShadow = "3px 3px 5px gray";
        header.style.border = "none";
        responsiveNavBar.style.display = "flex";
        setTimeout(() => {
            responsiveNavBar.style.top = "70px";
            cover.style.display = "block";
        }, 100);
        isNavClose = false;
    }
    else {
        line1.style.opacity = "100%";
        line4.style.opacity = "100%";
        line3.style.transform = "rotate(0deg)";
        line2.style.transform = "rotate(0deg)";

        responsiveNavBar.style.top = "-300px";
        setTimeout(() => {
            header.style.boxShadow = "none";
            responsiveNavBar.style.display = "none";
            cover.style.display = "none";
        }, 400)
        isNavClose = true;
    }
}

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ']').classList.add("active");
            })
            if(id==="home"){}else{
                sec.classList.add("show-animation");
            }
        }
        if (window.scrollY > 0 && isNavClose) {
            header.style.borderBottom = "3px solid var(--main-color)";
        } else {
            header.style.border = "none";
        }
    });
    header.classList.toggle('fixed', window.scrollY > 50);
}
responsiveNevElement.forEach((e) => {
    e.addEventListener("click", () => {
        if (!isNavClose) {
            line1.style.opacity = "100%";
            line4.style.opacity = "100%";
            line3.style.transform = "rotate(0deg)";
            line2.style.transform = "rotate(0deg)";

            responsiveNavBar.style.top = "-300px";
            setTimeout(() => {
                header.style.boxShadow = "none";
                responsiveNavBar.style.display = "none";
                cover.style.display = "none";
            }, 400)
            isNavClose = true;
        }
    })
})