// valores iniciales
let borderStatus = false;

let imgJS = document.getElementById("img-js");

imgJS.addEventListener("click", () => {
  borderStatus = !borderStatus;

  if (borderStatus) {
    imgJS.style.border = "2px solid rgba(255, 0, 0, 1)";
  } else {
    imgJS.style.border = "none";
  }
});
