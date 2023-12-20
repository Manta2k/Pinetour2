//Elementudig select hiij avna
const inputOne = document.getElementsByTagName("input")[0];
const inputTwo = document.getElementsByTagName("input")[1];
const buttons = document.getElementsByTagName("button");
//bodlgo hariu shalgah function
let check = () => {
  //hariultig input-s avj baina
  const answer = document.getElementsByTagName("input")[2];
  //hariult taarj bnu shalgah
  if (
    Number(inputOne.value) + Number(inputTwo.value) ===
    Number(answer.value)
  ) {
    //zuv baival asuultig shinechled hariultin input-g tseverlene
    alert("Zuv baina");
    renew();
    answer.value = "";
  } else {
    alert("buruu hariult");
  }
};
// asuult shinechleh function
const renew = () => {
  const min = 100;
  const max = 999;
  //2 input deer buhel too ugnu
  inputOne.value = Math.floor(Math.random() * (max - min) + min);
  inputTwo.value = Math.floor(Math.random() * (max - min) + min);
};
//Web ehelhed renew function shuud ajillna
renew();
//2 tovch deer eventlistener ajilluuna
buttons[0].addEventListener("click", check);
buttons[1].addEventListener("click", renew);
