// let number = 567;
// console.log(
//   parseInt(number / 100) + parseInt((number / 10) % 10) + parseInt(number % 10)
// );
//duguin radius
// let radi = 4;
// console.log((4 / 3) * Math.PI * radi ** 3);
// console.log(2 * Math.PI * radi);
// if function
// let even = 58;

// if (even % 2 === 0 && even > 10) {
//   console.log("tegsh ba 10aas ih");
// } else if ((even % 2 === 1) * even > 10) {
//   console.log("tegsh ba 10aas oh");
// } else if (even % 2 === 0 && even < 10) {
//   console.log("tegsh ba 10aas baga");
// } else if ((even % 2 === 1) * even < 10) {
//   console.log("sondgoi ba 10aas baga");
// }
// dun
// let dun = 100;

// if (dun >= 90 && dun < 101) {
//   console.log("A");
// } else if (dun >= 80 && dun < 90) {
//   console.log("B");
// } else if (dun >= 70 && dun < 80) {
//   console.log("C");
// } else if (dun >= 60 && dun < 70) {
//   console.log("D");
// } else if (dun >= 0 && dun < 60) {
//   console.log("F");
// } else if (dun >= 101) {
//   console.log("tiim dun bhgui");
// }
// odor
// let odor = 3;

// if (odor == 1) {
//   console.log("davaa");
// } else if (odor == 2) {
//   console.log("myagmar");
// } else if (odor == 3) {
//   console.log("lhavga");
// } else if (odor == 4) {
//   console.log("purev");
// } else if (odor == 5) {
//   console.log("baasan");
// } else if (odor == 6) {
//   console.log("hagassain");
// } else if (odor == 7) {
//   console.log("butensain");
// } else if (odor > 7) {
//   console.log("bhguee");
// }
//switch
// let person = "dulmaa";
// let irsen;
// switch (person) {
//   case "naraa":
//     irsen = "naraa irlee";
//     break;
//   case "baldan":
//     irsen = "baldan irlee";
//     break;
//   case "dulmaa":
//     irsen = "dulmaa irlee";
//     break;
//   case "galt":
//     irsen = "galt irlee";
//     break;
//   case "goldon":
//     irsen = "goldon irlee";
//     break;
//   default:
//     person = "oroh bolomjgui";
// }
// console.log(person);

// discriminant
// let posit = -2;
// if (posit >= 0) {
//   console.log("eyreg too");
// } else posit < 0;
// console.log("sorog too");

// let n = 101;
// let n1 = 45;
// let n2 = 12;

// if (n < n2 && n1 < n2) {
//   console.log(n2);
// } else if (n2 < n1 && n < n1) {
//   console.log(n1);
// } else if (n1 < n && n2 < n) {
//   console.log(n);
// } else {
//   console.log("tentsuu");
// }
//BMI
// let biyiin;
// let weight = 63;
// let height = 173;
// biyiin = weight / (height / 100) ** 2;

// if (biyiin < 18.5) {
//   console.log("jingiin dutagdal");
// } else if (biyiin >= 18.5 && biyiin <= 24.9) {
//   console.log("eruul");
// } else if (biyiin > 24.9 && biyiin <= 30) {
//   console.log("iluudel jintei");
// } else if (biyiin > 30) {
//   console.log("het targalalt");
// }
// TERNARY
// let nas = 16;
// let message = nas >= 21 ? "uuj bolno" : "arilj uz";
// console.log(message);
//year

// let year = 2036;
// let ondorJil = year % 4 === 0 ? true : false;
// console.log(ondorJil);

// hamgiin baga too
// let a = 60;
// let b = 27;
// let c = 62;
// let d = 53;

// if (a < b && a < c && a < d) {
//   console.log(a);
// } else if (b < a && b < c && b < d) {
//   console.log(b);
// } else if (c < a && c < b && c < d) {
//   console.log(c);
// } else if (d < a && d < b && d < c) {
//   console.log(d);
// }
// baguud dundaj
// let teamA1 = 300;
// let teamA2 = 100;
// let teamA3 = 200;
// let teamB1 = 300;
// let teamB2 = 100;
// let teamB3 = 200;
// averageA = (teamA1 += teamA2 += teamA3) / 3;
// averageB = (teamB1 += teamB2 += teamB3) / 3;
// let winA = averageA > averageB && averageA > 100 ? "a yllaa" : "aaaa";
// console.log(winA);
// let winB = averageB > averageA && averageB > 100 ? "b yllaa" : "bbbb";
// console.log(winB);
// let draw = (averageA += averageB) / 2 > 100 ? "tsentslee" : "ttttt";
// let noWin =
//   (averageA > averageB || averageB > averageA) < 100 ? "no winer" : "noononon";
// console.log(noWin);

// if (averageA > averageB && averageA > 100) {
//   console.log("team A yllaa");
// } else if (averageB > averageA && averageB > 100) {
//   console.log("team B yllaa");
// } else if ((averageA += averageB) / 2 > 100) {
//   console.log("tentslee");
// } else if ((averageA > averageB || averageB > averageA) < 100) {
//   console.log("ylagch bhgui");
// }

// CURRENCY
// alert("ONLY usd,cny,rub,mnt 4 iin hoorond");
// let too = parseInt(window.prompt("Mungunii TOO oruul nuu?"));
// let temdeg = window.prompt("temdegt !!!usd,cny,rub,mnt!!! oruulna uu?");
// let antemdeg = window.prompt(
//   "ali temdegtruu !!!usd,cny,rub,mnt!!! horvuuleh ve?"
// );
// if (too == [0 - 9]) {
//   console.log("pass");
// } else {
//   console.log("fail");
// }
// if (!/^[a-zA-Z]+$/.test(temdeg) || !temdeg) {
//   alert("You did not enter a string");
// }
// if (!/^[a-zA-Z]+$/.test(antemdeg) || !antemdeg) {
//   alert("You did not enter a string");
// }
// if (temdeg == "usd" && antemdeg == "cny") {
//   console.log(too * (3450 / 380) + "\n iim cny bolno");
// } else if (temdeg == "usd" && antemdeg == "rub") {
//   console.log(too * (3450 / 38) + "\n iim rub bolno");
// } else if (temdeg == "usd" && antemdeg == "mnt") {
//   console.log(too * 3450 + "\n iim mnt bolno");
// }
// if (temdeg == "cny" && antemdeg == "usd") {
//   console.log(too * (380 / 3450) + "\n iim usd bolno");
// } else if (temdeg == "cny" && antemdeg == "rub") {
//   console.log(too * (38 / 3450) + "\n iim rub bolno");
// } else if (temdeg == "cny" && antemdeg == "rub") {
//   console.log(too / 380 + "\n iim mnt bolno");
// }
// if (temdeg == "rub" && antemdeg == "usd") {
//   console.log(too * (38 / 3450) + "\n iim usd bolno");
// } else if (temdeg == "rub" && antemdeg == "cny") {
//   console.log(too * (38 / 380) + "\n iim cny bolno");
// } else if (temdeg == "rub" && antemdeg == "mnt") {
//   console.log(too / 38 + "\n iim mnt bolno");
// }
// if (temdeg == "mnt" && antemdeg == "usd") {
//   console.log(too / 3450 + "\n iim usd bolno");
// } else if (temdeg == "mnt" && antemdeg == "rub") {
//   console.log(too / 38 + "\n iim cny bolno");
// } else if (temdeg == "mnt" && antemdeg == "cny") {
//   console.log(too / 380 + "\n iim mnt bolno");
// }
// if (temdeg == "" && antemdeg == "") {
//   console.log(alert("SANUULAAD BHAD L TENEGT HIIN MAA"));
// } else if ((temdeg == "usd", "rub", "cny" && antemdeg == "")) {
//   console.log(alert("SANUULAAD BHAD L TENEGT HIIN MAA"));
// }
//VENDING MACHINE

// let baraa = window.prompt(
//   "Baraagaa songono uu? \n 1.Cola-1200 \n 2.Sprite-1500 \n 3.Alpen gold-2000 \n 4.Suu-2200 \n 5.Talh-1000 \n 6. Zairmag-500 \n 7.Bohi-150 \n 8.Arhi-15000"
// );
// switch (baraa) {
//   case "1":
//     baraa = 1200;
//     break;
//   case "2":
//     baraa = 1500;
//     break;
//   case "3":
//     baraa = 2000;
//     break;
//   case "4":
//     baraa = 2200;
//     break;
//   case "5":
//     baraa = 1000;
//     break;
//   case "6":
//     baraa = 500;
//     break;
//   case "7":
//     baraa = 150;
//     break;
//   case "8":
//     baraa = 15000;
//     break;

//   default:
//     console.log("baihgui baraa bn !!!");
//     break;
// }
// let mungu = window.prompt(
//   "Ali mungun devsgert ashiglah ve?\n 1.5000\n2.10000\n3.20000"
// );
// switch (mungu) {
//   case "1":
//     mungu = 5000;
//     break;
//   case "2":
//     mungu = 10000;
//     break;
//   case "3":
//     mungu = 20000;
//     break;
//   default:
//     console.log("buruu mungun temdegt bn !!!");
//     break;
// }
// let hariult = mungu - baraa;
// window.alert(hariult);

// let Q = parseInt(hariult / 10000);
// let W = parseInt((hariult - 10000) / 5000);
// let E = parseInt((hariult - 15000) / 1000);
// let R = parseInt((hariult - 15000 - E * 1000) / 500);
// let T = parseInt((hariult - 15000 - E * 1000 - 500) / 100);
// let Y = parseInt((hariult - 15000 - E * 1000 - 500 - T * 100) / 50);

// if (Q && W && E && R && T && Y) {
//   console.log(Q * 10000 + W * 5000 + E * 1000 + R * 500 + T * 100 + Y * 50);
// } else if (W && E && R && T && Y) {
//   console.log(W * 5000 + E * 1000 + R * 500 + T * 100 + Y * 50);
// } else if (E && R && T && Y) {
//   console.log(E * 1000 + R * 500 + T * 100 + Y * 50);
// } else if (R && T && Y) {
//   console.log(R * 500 + T * 100 + Y * 50);
// } else if (T && Y) {
//   console.log(T * 100 + Y * 50);
// }

//FUNCTION
// let input = prompt("ner?");
// presentName(input);
// function presentName(name) {
//   console.log(name);
// }

// let too = prompt(" ehnii too");
// let too2 = prompt("2 doh too");
// calculator(too, too2);
// function calculator(a, b) {
//   let select = prompt("1.*\n2./\n3.+\n4.-\n5.^2");
//   switch (select) {
//     case "1":
//       select = a * b;
//       break;
//     case "2":
//       select = a / b;
//       break;
//     case "3":
//       select = a += b;
//       break;
//     case "4":
//       select = a - b;
//       break;
//     case "5":
//       let T = a ** 2;
//       let Y = b ** 2;
//       console.log(T, Y);
//       break;
//     default:
//       console.log("buruu orolt");
//       break;
//   }
//   console.log(select);
// }

//GURVALJIN

// function calculateTriangleArea(a, b, c) {
//   const s = (a + b + c) / 2;
//   const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   return area;
// }
// const sideA = 5;
// const sideB = 6;
// const sideC = 7;
// const triangleArea = calculateTriangleArea(sideA, sideB, sideC);
// console.log(triangleArea);

//      X
// let x = prompt("too");
// function fff(x) {
//   return x ** 2 + 5 * x + 6;
// }
// console.log(fff(x));

// ARRAY
// LOOP
// let names = ["Bat", "Baldan", "Dulmaa", "Gonchig", "Luubat", "Manjin"];
// let i = 0;
// while (i <= names.length - 1) {
//   console.log(names[i]);
//   i++;
// }

// let a = 3,
//   b = 0;
// let hurd;
// while (b < 4) {
//   hurd = a * b;
//   b++;
// }
// console.log(hurd);

// TOONII NIILBER
// let too = prompt("too");
// let sum = 0;
// let i = 1;
// while (too >= i) {
//   sum += i;
//   i++;
// }
// console.log(sum);

// TOONII GUESS
// let randomNumber = 36;
// let guess = prompt("guess too?");
// while (!randomNumber) {
//   if (guess < randomNumber) {
//     guess = prompt("baga bn too chin");
//   } else if (guess > randomNumber) {
//     guess = prompt("ih bn too chin");
//   } else console.log("ta taalaa");
//   guess === randomNumber;
// }

// 1000-AAS BAGA BH

// let gar = prompt("too?");
// let i = 1;
// let hariu = 1;
// while (hariu < 1000) {
//   hariu = gar ** i;
//   if (hariu > 1000) {
//     console.log(
//       "1000 aas ih " + gar + " ^ " + i + " nii zereg iim bn " + hariu
//     );
//   } else if (hariu == 1000) {
//     console.log(
//       "1000 tai tentsuu " + gar + " ^ " + i + " nii zereg iim bn " + hariu
//     );
//   }
//   i++;
// }
// TEGSH TOONUUDIIN NIILBER

// let a = prompt("toogoo?");
// let sum = 0;
// for (let index = 0; index <= a; index++) {
//   if (index % 2 == 0) {
//     sum = sum + index;
//   }
// }
// console.log(sum);

//PYRAMID

// let N = prompt("N too?");
// for (let i = 0; i <= N; i++) {
//   let line = "";
//   for (let k = 0; k < i; k++) {
//     line += "*";
//   }
//   console.log(line);
// }

// const second = document.getElementsByClassName("second")[0];
// const start = document.getElementsByClassName("start")[0];
// const pause = document.getElementsByClassName("pause")[0];
// const reset = document.getElementsByClassName("reset")[0];

// let timerInterval;
// const startFunction = () => {
//   let seconds = 0;
//   second.innerText = seconds;
//   timerInterval = setInterval(() => {
//     seconds++;
//     second.innerText = seconds;
//   }, 1000);
// };
// start.addEventListener("click", startFunction);

// const pauseFunction = () => {
//   clearInterval(timerInterval);
// };
// pause.addEventListener("click", pauseFunction);

// const array = [1, 2, 3, 4, 5, 6];
// const newArr = [];
// const multiply = () => {
//   for (let i = 0; i < array.length; i++) {
//     newArr.push(array[i] * 2);
//   }
// };
// multiply();
// console.log(newArr);

// const renew = [];
// const divide = () => {
//   for (let i = 0; i < array.length; i++) {
//     const hariu = array[i] % 2 == 0;
//     if (hariu) {
//       renew.push(hariu);
//     }
//   }
//   return renew;
// };
// divide();
// console.log(renew);

//MAP AND FILTER

// const array = [1, 2, 3, 4, 5, 6];
// const odd = array.filter((a) => {
//   if (a % 2 == 1) {
//     return a;
//   }
// });
// console.log(odd);

// const arr = [1, 2, 3, 4, 5];
// const sqr = arr.map((s) => {
//   s ** 2;
//   return s ** 2;
// });
// console.log(sqr);

// const arr = ["apple", "banana", "cherry"];
// const tomUseg = arr.map((t) => {
//   return t.toLocaleUpperCase();
// });
// console.log(tomUseg);

// const arr = ["cat", "dog", "elephant", "lion"];
// const zaanLion = arr.filter((ami) => {
//   return ami.length >= 4;
// });
// console.log(zaanLion);

// const arr = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
// const takeValue = arr.map((a) => {
//   return a.name;
// });
// console.log(takeValue);

// const arr = [1, "apple", true, 42, "banana"];
// const takeString = arr.filter((t) => {
//   return t.charAt;
// });
// console.log(takeString);

const input = [1, 2, 2, 3, 4, 4, 5];
const space = [];
let hos;
const pair = input.map((a, i) => {
  if (!hos) {
    space.push(a[i]);
  }
  map((b, k) => {
    if (a[i] === b[k]) {
      hos = true;
    }
  });
});
console.log(pair);

// const array1 = ["a", "b", "c"];
// const array2 = [1, 2, 3];
// const combine = array1.map((a, i) => {
//   return `${a}-${array2[i]}`;
// });
// console.log(combine);
