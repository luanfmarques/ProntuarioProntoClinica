var resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener("click", function () {
  document.getElementById("myform").reset();
});
function mascara(i, t) {
  var v = i.value;

  if (isNaN(v[v.length - 1])) {
    i.value = v.substring(0, v.length - 1);
    return;
  }

  if (t == "n") {
    i.setAttribute("maxlength", "15");
  }

  if (t == "data") {
    i.setAttribute("maxlength", "10");
    if (v.length == 2 || v.length == 5) i.value += "/";
  }

  if (t == "cpf") {
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
  }

  if (t == "cnpj") {
    i.setAttribute("maxlength", "18");
    if (v.length == 2 || v.length == 6) i.value += ".";
    if (v.length == 10) i.value += "/";
    if (v.length == 15) i.value += "-";
  }

  if (t == "cep") {
    i.setAttribute("maxlength", "9");
    if (v.length == 5) i.value += "-";
  }

  if (t === "tel") {
    if (v.length === 1) i.value = "(" + i.value;
    if (v.length === 3) i.value += ") ";
    if (v[5] == 9) {
      i.setAttribute("maxlength", "15");
      if (v.length === 10) i.value += "-";
    } else {
      i.setAttribute("maxlength", "14");
      if (v.length === 9) i.value += "-";
    }
  }
}
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute(
    "style",
    "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
  );
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}
