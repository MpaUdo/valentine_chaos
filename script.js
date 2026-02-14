const intro = document.getElementById("introScreen");
const love = document.getElementById("loveScreen");
const loading = document.getElementById("loadingScreen");
const chaos = document.getElementById("chaosScreen");
const progress = document.getElementById("progress");
const title = document.getElementById("title");
const music = document.getElementById("bgMusic");
const video = document.getElementById("chaosVideo");

function startExperience() {
  const name = document.getElementById("nameInput").value;
  if (!name) return;

  intro.style.display = "none";
  love.style.display = "flex";
  title.innerText = `Happy Valentine's Day, ${name} ❤️`;

  music.volume = 0.4;
  music.play();
}

document.getElementById("confessionBtn").addEventListener("click", () => {
  love.style.display = "none";
  loading.style.display = "flex";

  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);

      loading.style.display = "none";
      document.body.classList.add("shake");
      chaos.style.display = "flex";

      music.pause();
      video.play();
    } else {
      width++;
      progress.style.width = width + "%";
    }
  }, 30);
});


// Floating hearts generator
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 300);

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
});

yesBtn.addEventListener("click", () => {
  alert("I knew it 😌❤️");
});

function showCredits() {
  chaos.style.display = "none";
  document.getElementById("credits").style.display = "block";
}

video.onended = function() {
  chaos.classList.add("fadeBlack");
  setTimeout(showCredits, 1000);
};

video.onended = function() {
  showCredits();
};
