// constantes
const MAX_STICKERS = 10;

let docker = 0;
let git = 0;
let aws = 0;

let inDocker = document.getElementById("in-docker");
let inGit = document.getElementById("in-git");
let inAWS = document.getElementById("in-aws");

logic();

inDocker.addEventListener("change", () => {
  docker = parseInt(inDocker.value) || 0;
  logic();
});

inGit.addEventListener("change", () => {
  git = parseInt(inGit.value) || 0;
  logic();
});

inAWS.addEventListener("change", () => {
  aws = parseInt(inAWS.value) || 0;
  logic();
});

function logic() {
  let totalStickers = docker + git + aws;
  let progress = totalStickers * MAX_STICKERS;

  if (totalStickers == MAX_STICKERS) {
    document.querySelector(".progress-bar").style.backgroundColor = "#198754";
  } else if (totalStickers > MAX_STICKERS) {
    //alert("Has excedido el número máximo de stickers permitidos.");
    document.getElementById("stickers-limit").style.display = "inline";
    document.querySelector(".progress-bar").style.backgroundColor =
      "rgba(255, 0, 0, 1)";
  } else {
    document.getElementById("stickers-limit").style.display = "none";
    document.querySelector(".progress-bar").style.backgroundColor = "#0d6efd";
  }

  document.getElementById("total-stickers").innerHTML = totalStickers;
  document.querySelector(".progress-bar").style.width = progress + "%";
}
