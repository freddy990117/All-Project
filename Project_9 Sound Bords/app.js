const sounds = ["do", "re", "mi", "fa", "sol", "la", "si"];
sounds.forEach((sound) => {
  const button = document.createElement("button");
  button.classList.add("btn");

  button.innerText = sound;

  document.getElementById("button").appendChild(button);

  button.addEventListener("click", () => {
    stopSound();
    document.getElementById(sound).play();
  });
});

function stopSound() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.setCurrentTime = 0;
  });
}
