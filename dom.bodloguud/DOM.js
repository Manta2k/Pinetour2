const switchButton = document.getElementsByTagName("button")[0];
switchButton.addEventListener("click", () => {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

let newColor;

const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  newColor = r * 0.299 + g * 0.587 + b * 0.114;
  if (newColor > 186) {
    newColor = "black";
  } else {
    newColor = "white";
  }
  return `rgb(${r}, ${g}, ${b})`;
};
