const btns = document.querySelectorAll(".btn");
const letters = document.getElementsByTagName("h1");
const allLetters = [];
let focusedBtn = null;

for (let letter of letters) {
  allLetters.push(letter.textContent);
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => playSound(btn));
});

document.addEventListener("keydown", (btn) => {
  let letter = btn.key.toUpperCase();
  const letterIndex = allLetters.indexOf(letter);
  if (letterIndex > -1) playSound(btns[letterIndex]);
  console.log("нажата кнопка", letter);
});

function playSound(btn) {
  const sounds = document.getElementsByTagName("audio");
  for(sound of sounds){
    if (btn.dataset.key === sound.id) {
      sound.play();
      sound.currentTime = 0;
    } else {
      sound.pause();
      sound.currentTime = 0;
    }
  }
  focusedBtn?.classList.remove("active");
  btn.classList.add("active");
  focusedBtn = btn;
//   sound.addEventListener("ended", () => {
//     btn.classList.remove("active");
//   });
}
