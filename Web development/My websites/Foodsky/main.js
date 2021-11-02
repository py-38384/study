function change() {
  let element = document.getElementById("Navi");
  let eleback = element.style.display;
  if (eleback == "flex") {
    element.style.display = "none";
  }
  else {
    element.style.display = "flex";
  }
}