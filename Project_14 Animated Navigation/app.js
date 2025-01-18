const toggle = document.getElementById("icon");
const nav = document.getElementById("nav");
console.log(nav);

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
