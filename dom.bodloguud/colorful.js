const numberofCircleInput = document.getElementsByClassName("input")[0];
const talbai = document.getElementsByClassName("innerCircle")[0];
const button = document.getElementsByTagName("button")[0];

const addCircle = () => {
  const numberofCircle = numberofCircleInput.value;
  for (let i = 0; i < numberofCircle; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.backgroundColor = `rgb(100,${3 * i},50)`;
    talbai.appendChild(circle);
  }
};

button.addEventListener("click", addCircle);
