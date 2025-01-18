const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeNum = 0;
// Initial States
setBgToBody();
setActiveNum();

leftBtn.addEventListener("click", () => {
  activeNum--;

  if (activeNum <= 0) {
    activeNum = slides.length - 1;
  }

  setBgToBody();
  setActiveNum();
});

rightBtn.addEventListener("click", () => {
  activeNum++;

  if (activeNum > slides.length - 1) {
    activeNum = 0;
  }

  setBgToBody();
  setActiveNum();
});

function setBgToBody() {
  body.style.backgroundImage = slides[activeNum].style.backgroundImage;
}

function setActiveNum() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[activeNum].classList.add("active");
}
