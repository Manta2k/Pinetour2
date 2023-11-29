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
let person = "dulmaa";
let irsen;
switch (person) {
  case "naraa":
    irsen = "naraa irlee";
    break;
  case "baldan":
    irsen = "baldan irlee";
    break;
  case "dulmaa":
    irsen = "dulmaa irlee";
    break;
  case "galt":
    irsen = "galt irlee";
    break;
  case "goldon":
    irsen = "goldon irlee";
    break;
  default:
    person = "oroh bolomjgui";
}
console.log(person);

// discriminant
let posit = -2;
if (posit >= 0) {
  console.log("eyreg too");
} else posit < 0;
console.log("sorog too");

let n = 101;
let n1 = 45;
let n2 = 12;

if (n < n2 && n1 < n2) {
  console.log(n2);
} else if (n2 < n1 && n < n1) {
  console.log(n1);
} else if (n1 < n && n2 < n) {
  console.log(n);
} else {
  console.log("tentsuu");
}
//BMI
let biyiin;
let weight = 63;
let height = 173;
biyiin = weight / (height / 100) ** 2;

if (biyiin < 18.5) {
  console.log("jingiin dutagdal");
} else if (biyiin >= 18.5 && biyiin <= 24.9) {
  console.log("eruul");
} else if (biyiin > 24.9 && biyiin <= 30) {
  console.log("iluudel jintei");
} else if (biyiin > 30) {
  console.log("het targalalt");
}
// TERNARY
let nas = 16;
let message = nas >= 21 ? "uuj bolno" : "arilj uz";
console.log(message);
//year

let year = 2036;
let ondorJil = year % 4 === 0 ? true : false;
console.log(ondorJil);

// hamgiin baga too
let a = 60;
let b = 27;
let c = 62;
let d = 53;

if (a < b && a < c && a < d) {
  console.log(a);
} else if (b < a && b < c && b < d) {
  console.log(b);
} else if (c < a && c < b && c < d) {
  console.log(c);
} else if (d < a && d < b && d < c) {
  console.log(d);
}
// baguud dundaj
let teamA1 = 33213123;
let teamA2 = 9;
let teamA3 = 53;
let teamB1 = 53;
let teamB2 = 12;
let teamB3 = 13;
averageA = (teamA1 += teamA2 += teamA3) / 3;
averageB = (teamB1 += teamB2 += teamB3) / 3;
// let winA = averageA > averageB && averageA > 100 ? "a yllaa" : "aaaa";
// console.log(winA);
// let winB = averageB > averageA && averageB > 100 ? "b yllaa" : "bbbb";
// console.log(winB);
// let noWin =
//   (averageA > averageB || averageB > averageA) < 100 ? "no winer" : "noononon";
// console.log(noWin);

if (averageA > averageB && averageA > 100) {
  console.log("team A yllaa");
} else if (averageB > averageA && averageB > 100) {
  console.log("team B yllaa");
} else if ((averageA > averageB || averageB > averageA) < 100) {
  console.log("ylagch bhgui");
}
