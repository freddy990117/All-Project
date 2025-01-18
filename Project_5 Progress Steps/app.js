const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

// 設定初始值
let currectActive = 1;

// 設定新增與減少
next.addEventListener("click", () => {
  currectActive++;

  if (currectActive > circles.length) {
    currectActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currectActive--;

  if (currectActive < 1) {
    currectActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currectActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  let actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 98 + "%";

  if (currectActive === 1) {
    prev.disabled = true;
  } else if (currectActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

console.log(currectActive);
