const passwordField = document.querySelector(".form input[type='password']");
const toggleButton = document.querySelector(".eye");

toggleButton.addEventListener("click",(e)=>{
    if(passwordField.type === "password"){
        passwordField.type = "text";
        passwordField.focus();
        toggleButton.style.color = "#ccc";
        toggleButton.innerHTML = `<i class="fas fa-eye"></i>`;
    }else{
        passwordField.type = "password";
        passwordField.focus();
        toggleButton.style.color = "#333";
        toggleButton.innerHTML = `<i class="fa fa-eye-slash"></i>`;
    }
});