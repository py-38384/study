const start_btn = document.querySelector('.start');
const end_btn = document.querySelector('.end');
const title = document.querySelector('h2');
let interval = null;
const body = document.querySelector('body');
function GetRandomNumber(min,max){
    let random = Math.random();
    let randomNumber = Math.floor(random*((max+1)-min)+min);
    return randomNumber
}
function GetRandomColor(){
    let red = GetRandomNumber(0,255);
    let green = GetRandomNumber(0,255);
    let blue = GetRandomNumber(0,255);
    let color = `rgb(${red},${green},${blue})`
    return color;
}
function ChangeColor(){
    body.style.backgroundColor = GetRandomColor();
}
function StartColorChanging(){
    if(interval){}else{
        interval = setInterval(ChangeColor,1000);
        title.classList.add('background-color');
        start_btn.classList.add('active-button');
        end_btn.classList.remove('active-button');
    }
}
function StopColorChanging(){
    clearInterval(interval);
    interval = null;
    start_btn.classList.remove('active-button');
    end_btn.classList.add('active-button');
    title.classList.remove('background-color');
}
start_btn.addEventListener('click',StartColorChanging);
end_btn.addEventListener('click',StopColorChanging);