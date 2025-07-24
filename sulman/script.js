const startBtn = document.getElementById("startBtn");
const song = document.getElementById("birthdaySong");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const finalMessage = document.getElementById("finalMessage");

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  song.play();
  step1.classList.remove("hidden");
});

// Step transitions
document.getElementById("toStep2").addEventListener("click", () => {
  step1.classList.add("hidden");
  step2.classList.remove("hidden");
});

document.getElementById("toStep3").addEventListener("click", () => {
  step2.classList.add("hidden");
  step3.classList.remove("hidden");
});

document.getElementById("showFinal").addEventListener("click", () => {
  step3.classList.add("hidden");
  finalMessage.classList.remove("hidden");
});

// 🎈 Balloon animation
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.querySelector(".balloons-container").appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 10000);
}

setInterval(createBalloon, 300);
const backgroundVideo = document.getElementById("backgroundVideo");
backgroundVideo.playbackRate = 0.25; // 0.25 = half speed
