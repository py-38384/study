let button = document.querySelector('button');
let nav_window = document.querySelector('.nav-window');
button.onclick = function(){
    if(nav_window.classList.contains('nav-window-fill')){
        nav_window.style.borderRadius = "50%";
        nav_window.style.height = "100vw";
        setTimeout(()=>{
            nav_window.classList.remove('nav-window-fill');
        },150)
    }else{
        nav_window.classList.add('nav-window-fill');
        setTimeout(()=>{
            nav_window.style.borderRadius = "0";
            nav_window.style.height = "100vh";
        },150)
    }
}