let body = document.querySelector('body');
let breadcrumb = document.querySelector('.breadcrumb');
let nav_window = document.querySelector('.nav-window');
let nav_window_container = document.querySelector('.nav-window-wrapper');
let hero_button = document.querySelector('.hero-button a')
let breadcrumb_bars = breadcrumb.children;
breadcrumb.onclick = function(){
    if(nav_window.classList.contains('nav-window-fill')){
        nav_window.style.borderRadius = "50%";
        nav_window.style.height = "100vw";
        breadcrumb_bars[1].style.opacity = "1";
        breadcrumb_bars[0].style.transform = "rotate(0)";
        breadcrumb_bars[2].style.transform = "rotate(0)";
        body.style.overflow = "auto";
        setTimeout(()=>{
            nav_window.classList.remove('nav-window-fill');
        },150)
        setTimeout(()=>{
            nav_window_container.style.display = "none";
        },350)
    }else{
        nav_window_container.style.display = "block";
        breadcrumb_bars[1].style.opacity = "0";
        breadcrumb_bars[0].style.transform = "rotate(-45deg)";
        breadcrumb_bars[2].style.transform = "rotate(45deg)";
        body.style.overflow = "hidden";
        setTimeout(()=>{
            nav_window.classList.add('nav-window-fill');
        },50)
        setTimeout(()=>{
            nav_window.style.borderRadius = "0";
            nav_window.style.height = "100vh";
        },150)
    }
}
if(hero_button){
    hero_button.addEventListener('click',(e)=>{
        e.preventDefault();
        hero_button.style.boxShadow = "0 0 20px #b9ad00";
        setTimeout(()=>{
            hero_button.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.5)";
        },180)
        // send the user somewhere in the internet
    })
}