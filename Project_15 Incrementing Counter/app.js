const counters = document.querySelectorAll(".counter");

counters.forEach((count) => {
  count.innerText = "0";
  const target = +count.getAttribute("data-target");
  function updateCount() {
    const number = +count.innerText;
    const increment = target / 200;
    if (number < target) {
      count.innerText = `${Math.ceil(number + increment)}`;
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  }
  updateCount();
});
