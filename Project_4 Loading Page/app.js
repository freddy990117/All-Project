let progress = document.querySelector(".progress");
let background = document.querySelector(".background");

let init = 0;
let running = setInterval(loading, 30);

function loading() {
  init++;

  if (init > 99) {
    clearInterval(running);
  }
  progress.innerText = `${init}%`;
  progress.style.opacity = scale(init, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(init, 0, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
