const btnElement = document.querySelector("#play");
const videoElement = document.querySelector("#mayte");
const btnTextElement = document.querySelector("#btnText");
const iconElement = document.querySelector("#icon-video");

const playVideo = () => {
  if (videoElement.paused) {
    videoElement.play();

    btnTextElement.innerHTML = "PAUSAR";
    iconElement.classList = "fa-solid fa-stop";
  } else {
    videoElement.pause();

    btnTextElement.innerHTML = "REPRODUCIR";
    iconElement.classList = "fa-solid fa-play";
  }
};

btnElement.addEventListener("click", playVideo);
