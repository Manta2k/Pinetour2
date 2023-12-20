const wrapper = document.getElementsByClassName("wrapper")[0];
const question = document.getElementsByClassName("question")[0];
const gif = document.getElementsByClassName("gif")[0];
const yesBtn = document.getElementsByClassName("yes-btn")[0];
const noBtn = document.getElementsByClassName("no-btn")[0];

yesBtn.addEventListener("click", () => {
  question.innerHTML = "LOL";
  gif.src =
    "https://gayety.co/wp-content/uploads/2022/04/why-are-you-gay-meme.png";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
