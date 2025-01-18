const key = document.querySelector(".key");
const Code = document.querySelector(".Code");
const keyCode = document.querySelector(".keyCode");

addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key == " ") {
    key.innerHTML = "space";
  } else {
    key.innerHTML = e.key;
    Code.innerHTML = e.code;
    keyCode.innerHTML = e.keyCode;
  }
});
