let box_login = document.querySelector('.box-container .box .box-login')
let box_register = document.querySelector('.box-container .box .box-register')
let active_btn = document.querySelector('.box-container .box .switch #btn')

function login(){
    box_login.style.left = "27px";
    box_register.style.left = "350px";
    active_btn.style.left = "0px";
}
function register(k){
    box_login.style.left = "-350px";
    box_register.style.left = "25px";
    active_btn.style.left = "150px";
}

function myLogPassword(){
    let password_input_field = document.querySelector('.box-container .box .box-login .input-group .input-field #logPassword');
    let password_input_field_eye = document.querySelector('.box-container .box .box-login .input-group .input-field .eye-area .eye-box img:nth-child(1)');
    let password_input_field_eye_slash = document.querySelector('.box-container .box .box-login .input-group .input-field .eye-area .eye-box img:nth-child(2)');

    if(password_input_field.type === "password"){
        password_input_field.type = "text";
        password_input_field_eye.style.opacity = "0";
        password_input_field_eye_slash.style.opacity = "1";
    }else{
        password_input_field.type = "password";
        password_input_field_eye.style.opacity = "1";
        password_input_field_eye_slash.style.opacity = "0";
    }
}