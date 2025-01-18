const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    // 設定點擊的瀏覽器高度
    const pageX = e.pageX;
    const pageY = e.pageY;
    // 設定 Button 在瀏覽器內的高度
    const buttonX = e.target.offsetLeft;
    const buttonY = e.target.offsetTop;
    // 瀏覽器的高度 - Button 在瀏覽器的高度 = 點選的位置
    const clickX = pageX - buttonX;
    const clickY = pageY - buttonY;

    // 創建 HTML span class="circle"
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = clickY + "px";
    circle.style.left = clickX + "px";

    button.appendChild(circle);

    setTimeout(() => circle.remove(), 1000);
  });
});
