let btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", () => {
  let select1 = document.getElementById("select-password-1");
  let select2 = document.getElementById("select-password-2");
  let select3 = document.getElementById("select-password-3");

  if (select1.value === "9" && select2.value === "1" && select3.value === "1") {
    document.getElementById("result").innerHTML = "Password 1 Correcta";
  } else if (
    select1.value === "7" &&
    select2.value === "1" &&
    select3.value === "4"
  ) {
    document.getElementById("result").innerHTML = "Password 2 Correcta";
  } else {
    document.getElementById("result").innerHTML = "Password Incorrecta";
  }
});
