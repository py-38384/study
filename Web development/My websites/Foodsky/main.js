function change() {
  let element = document.getElementById("Navi");
  let eleback = element.style.display;
  let body = document.querySelector('body');
  if (eleback == "flex") {
    element.style.display = "none";
	body.style.overflow = "scroll";
  }
  else {
    element.style.display = "flex";
	body.style.overflow = "hidden";
  }
}