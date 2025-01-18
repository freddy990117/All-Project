let search = document.querySelector(".search");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let title = document.querySelector(".title");

btn.addEventListener("click", () => {
  title.classList.toggle("active");
  search.classList.toggle("active");
  btn.classList.toggle("active");
});
