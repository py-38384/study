let search_on_btn = document.querySelector('#search-on-btn');
let line3 = document.querySelector('#line3');
let line4 = document.querySelector('#line4');
let line5 = document.querySelector('#line5');
let line6 = document.querySelector('#line6');
let Title = document.querySelector('#Title');
let search = document.querySelector('#search');
let add_btn = document.querySelector('#add-btn');
let cover = document.querySelector('#cover');
let post_btn = document.querySelector('#post-btn');
let post_menu = document.querySelector('#post-menu');
let post_input = document.querySelector('#post-input');
let search_field = document.querySelector('#search-field');
let pre = "";
post_input.value = "";
let toggle1 = true;
showNotes();
let duration = '300ms';
search_on_btn.addEventListener('click', (event) => {

  if (toggle1) {
    search_on_btn.style.backgroundColor = 'red';
    line5.style.display = 'block';
    line6.style.display = 'block';
    line3.style.display = 'none';
    line4.style.display = 'none';
    search.style.display = 'flex';
    Title.style.display = 'none';
    setTimeout(function() {
      line5.style.position = 'absolute';
      line6.style.position = 'absolute';
      line5.style.width = '80%';
      line6.style.width = '80%';
      line5.style.height = '0.3em';
      line6.style.height = '0.3em';
      line5.style.transform = 'rotate(45deg)';
      line6.style.transform = 'rotate(-45deg)';
    }, duration);
    toggle1 = false;
  }
  else {
    search_on_btn.style.backgroundColor = '#47DCFF';
    line5.style.transform = 'rotate(0deg)';
    line6.style.transform = 'rotate(0deg)';
    line3.style.display = 'block';
    line4.style.display = 'block';
    search.style.display = 'none';
    Title.style.display = 'flex';
    setTimeout(function() {
      line5.style.display = 'none';
      line6.style.display = 'none';
    }, duration);
    toggle1 = true;
  }
});
let toggle2 = true;
add_btn.addEventListener('click', add_btn_toggle);

function add_btn_toggle() {
  if (toggle2) {
    cover.style.display = 'block';
    post_menu.style.display = 'flex';
    line1.style.transform = 'rotate(-45deg)';
    line2.style.transform = 'rotate(45deg)';
    add_btn.style.backgroundColor = 'red';
    toggle2 = false;
  }
  else {
    cover.style.display = 'none';
    post_menu.style.display = 'none';
    line1.style.transform = 'rotate(90deg)';
    line2.style.transform = 'rotate(0deg)';
    add_btn.style.backgroundColor = '#188E43';
    toggle2 = true;
  }
}

function showNotes() {
  let notes = localStorage.getItem('notes');
  let notesObj;
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  let html = '';
  notesObj.forEach(function(element, index) {
    html += `
          <div class='content'>
                <p onclick="editNote(this,this.className)" class="${index}" id="${index}" style="padding:0px;">
                  ${element}
                </p>
                <hr>
                <div class='delete-div'>
                  <button id="${index}" onclick="deleteNote(this.id)" >Delete Note</button>
                </div>
              </div>
    `;
  });
  let contener = document.querySelector('#contener');
  if (notesObj.length != 0) {
    contener.innerHTML = html;
  } else {
    contener.innerHTML = `Nothing to show! Add a Note to see here.`;
  }
}
post_btn.addEventListener('click', (event) => {
  let post_input = document.querySelector('#post-input');
  if (post_input.value === "") {
    add_btn_toggle();
    return;
  }
  let note = localStorage.getItem('notes');
  if (note == null) {
    noteObj = [];
  }
  else {
    noteObj = JSON.parse(note);
  }
  noteObj.push(post_input.value);
  post_input.value = "";
  //document.querySelector('body').innerHTML = noteObj;
  localStorage.setItem("notes", JSON.stringify(noteObj));
  add_btn_toggle();
  showNotes();
});

function deleteNote(index) {
  let notes = localStorage.getItem('notes');
  let notesObj = JSON.parse(notes);
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
search_field.addEventListener('input', (event) => {
  let inputVal = search_field.value;
  //document.querySelector('body').innerHTML = inputVal;
  let notes = document.getElementsByClassName('content');
  Array.from(notes).forEach(function(element) {
    let cardTxt = element.children[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
  })
});

function editNote(element, className) {
  let noTextArea = document.getElementsByClassName('textarea').length;
  if (noTextArea <= 0) {
    let text = element.innerText;
    let height = (text.length / 1.55) + "px";
    element.innerHTML = `<textarea class="textarea" style='width:98%;height:${height};min-height:25px;font-size:18px;' id="edit-content" rows="3"> ${text}</textarea>`;
  }
  textarea = element.children[0];
  textarea.focus();
  textarea.addEventListener('blur', () => {
    let html = textarea.value;
    element.innerHTML = html;
    let notes = localStorage.getItem('notes');
    let notesObj = JSON.parse(notes);
    notesObj[className] = html;
    localStorage.setItem('notes', JSON.stringify(notesObj));
    console.log(className);
  });
}