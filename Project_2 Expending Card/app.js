let panels = document.querySelectorAll(".panel");
console.log(panels);

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    RemoveAllActive();
    panel.classList.add("active");
    console.log("執行完成 add");
  });
});

function RemoveAllActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
    console.log("執行完成 REMOVE");
  });
}
