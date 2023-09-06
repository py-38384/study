const resetBtn = document.getElementById('resetBtn');
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const submitBtn = document.getElementById('submitBtn');
const alertdiv = document.getElementById('alert');
let nameValidation = false;
let emailValidation = false;
let phoneValidation = false;
let rapidClick = 0;
resetBtn.addEventListener('click', () => {
  form.reset();
  name.classList.remove('is-invalid');
  email.classList.remove('is-invalid');
  phone.classList.remove('is-invalid');
  nameValidation = false;
  emailValidation = false;
  phoneValidation = false;
  alertdiv.innerHTML = '';
  rapidClick = 0;
})
name.addEventListener('blur', (e) => {
  console.log('name blurred');
  let regex = /^[a-zA-z]/;
  let str = name.value;
  console.log(str, regex);
  if (str !== '') {
    if (regex.test(str)) {
      console.log('It Matched');
      name.classList.remove('is-invalid');
      nameValidation = true;
    } else {
      console.log('Not Matched');
      name.classList.add('is-invalid');
      nameValidation = false;
    }
  } else {
    nameValidation = false;
  }
  rapidClick = 0;
})
email.addEventListener('blur', () => {
  console.log('email blurred');
  let regex = /^([\.\-_a-zA-Z0-9]){3,20}@([a-z]){3,8}\.([a-z]){1,7}$/;
  let str = email.value;
  console.log(str, regex);
  if (str !== '') {
    if (regex.test(str)) {
      console.log('It Matched');
      email.classList.remove('is-invalid');
      emailValidation = true;
    } else {
      console.log('Not Matched');
      email.classList.add('is-invalid');
      emailValidation = false;
    }
  } else {
    emailValidation = false;
  }
  rapidClick = 0;
})
phone.addEventListener('blur', () => {
  console.log('phone blurred');
  let regex = /^[0-9]{11}/;
  let str = phone.value;
  console.log(str, regex);
  if (str !== '') {
    if (regex.test(str)) {
      console.log('It Matched');
      phone.classList.remove('is-invalid');
      phoneValidation = true;
    } else {
      console.log('Not Matched');
      phone.classList.add('is-invalid');
      phoneValidation = false;
    }
  } else {
    phoneValidation = false;
  }
  rapidClick = 0;
})
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('You clicked submitBtn');
  if (rapidClick > 10) {
    alertdiv.innerHTML = `
                  <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Still Success!</strong> Your food order has been placed Successfully so stop making yourself annoying.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                       </button>
                      </div>`;
    rapidClick++;
  } else {
    if (nameValidation === true && emailValidation === true && phoneValidation === true) {
      alertdiv.innerHTML = `
              <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> Your food order has been placed.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                   </button>
                  </div>
    `;
      rapidClick++;
      form.reset();
    } else {
      alertdiv.innerHTML = `
              <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error!</strong> Check the information below and try again.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                   </button>
                  </div>
    `;
    }
  }
})
