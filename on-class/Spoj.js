// 1.  Gurvaljin
// function trianglePerimeter(a, b, c) {
//   return a + b + c;
// }
// let side1 = prompt("a");
// let side2 = prompt("b");
// let side3 = prompt("c");
// let perimeter = trianglePerimeter(side1, side2, side3);
// console.log(perimeter);

// 2.  CUBE and Gadarguu square

// let d = prompt("tal?");
// let Volume = d ** 3;
// let sursq = d ** 2 * 6;
// console.log(Volume, sursq);

// 3.  Rectangle square,perimeter

// let e = prompt("tal?");
// let f = prompt("nogoo tal?");
// let square = e * f;
// let perimeter = (e + f) * 2;
// console.log(square, perimeter);

// 4.  y=3x-5

// let x = prompt("x too?");
// y = 3 * x - 5;
// console.log(y);

// 5.  y=4x2-3x+5

// let x = prompt("x too?");
// y = 4 * x ** 2 - 3 * x + 5;
// console.log(y);

// 6.  Suuliin cypher

// let p = prompt("3 orontoi too?");
// o = (p % 100) % 10;
// console.log(o);

// 7.  10-tiin cypher

// let p = prompt("3 orontoi too?");
// o = parseInt((p % 100) / 10);
// console.log(o);

// 8.  Negj * 10 tiin oron

// let p = prompt("2 orontoi too?");
// o = ((p % 100) % 10) * parseInt((p % 100) / 10);
// console.log(o);

// 9.  SUM OF CYPHER

// let p = prompt("3 orontoi too?");
// o = parseInt(p / 100) + parseInt((p % 100) / 10) + ((p % 100) % 10);
// console.log(o);

// 10. MINUT,SECOND

// let t = prompt("SECOND ?");
// let m = parseInt(t / 60);
// let s = t % 60;
// console.log(m, s);

// 11.  TSAG,MINUT,SECOND

// let t = prompt("SECOND ?");
// let h = parseInt(t / 3600);
// let m = parseInt((t - 3600) / 60);
// let s = parseInt((t - 3600) % 60);
// console.log(h, m, s);

// 12.  Минут секунд -> секунд

// let m = prompt("MINUTE ?");
// let s = prompt("SECOND ?");
// k = m * 60 + s;
// console.log(k);

// 13.  Цаг, минут, секунд -> секунд

// let h = prompt("HOURS ?");
// let m = prompt("MINUTE ?");
// let s = prompt("SECOND ?");
// k = h * 3600 + m * 60 + s;
// console.log(k);

// 14.  Хоног цаг

// let h = prompt("Heden tsag?");
// d = parseInt(h / 24);
// l = h % 24;
// console.log(d, l);

// 15.  Хоног цаг -> цаг                          !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let d = Number(prompt("heden honog ?"));
// let h = Number(prompt("heden tsag ?"));
// let k = d * 24 + h;
// console.log(k);

// 16.  Жил сар

// let m = Number(prompt("heden sar ?"));
// let y = parseInt(m / 12);
// let mon = m % 12;
// console.log(y, mon);

// 17.  Жил сар -> сар

// let d = Number(prompt("heden jil ?"));
// let h = Number(prompt("heden sar ?"));
// let k = d * 12 + h;
// console.log(k);

// 18.  Хоёр тооны их

// let too1 = Number(prompt("too ?"));
// let too2 = Number(prompt("nogoo too ?"));
// if (too1 > too2) {
//   console.log(too1);
// } else too2 > too1;
// console.log(too2);

// 19.  Хоёр тооны бага

// let too1 = Number(prompt("too ?"));
// let too2 = Number(prompt("nogoo too ?"));
// if (too1 > too2) {
//   console.log(too2);
// } else too2 > too1;
// console.log(too1);

// 20.  3 тооны их

// let too1 = Number(prompt("too ?"));
// let too2 = Number(prompt("nogoo too ?"));
// let too3 = Number(prompt("bas nogoo too ?"));
// if (too1 > too2 && too1 > too3) {
//   console.log(too1);
// } else if (too2 > too1 && too2 > too3) {
//   console.log(too2);
// } else if (too3 > too1 && too3 > too2) {
//   console.log(too3);
// }

// 21.  4 тооны бага

// let too1 = Number(prompt("1 too ?"));
// let too2 = Number(prompt("2 too ?"));
// let too3 = Number(prompt("3 too ?"));
// let too4 = Number(prompt("4 too ?"));
// if (too1 < too2 && too1 < too3 && too1<too4) {
//   console.log(too1);
// } else if (too2 < too1 && too2 < too3 && too2 < too4) {
//   console.log(too2);
// } else if (too3 < too1 && too3 < too2 && too3 < too2) {
//   console.log(too3);
// }else if (too4 < too1 && too4 < too2 && too4 < too2) {
//   console.log(too4);
// }

// 22.  Нийлбэр >80

// let too1 = Number(prompt("1 too ?"));
// let too2 = Number(prompt("2 too ?"));
// let too3 = Number(prompt("3 too ?"));
// let too4 = Number(prompt("4 too ?"));
// if (too1 < 80 && too2 > 80 && too3 > 80 && too4 > 80) {
//   console.log(too2 + too3 + too4);
// } else if (too2 < 80) {
//   console.log();
// }

// Average of element

// const arr = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// function x() {
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// console.log(x());

// Maximum

// const arr = [32, 45, 100, 16];
// let max = arr[0];
// function a() {
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(a());

// Reverse

// const arr = [32, 45, 100, 16];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// Square

// const square = [5, 3, 6, 7, 2, 4];
// let sqr = [];
// for (let i = 0; i < square.length; i++) {
//   sqr += square[i] ** 2;
// }
// console.log(sqr);

// remove duplicate

// 12.15

// const mockObject = {
//   key1: "value1",
//   key2: 42,
//   key3: ["item1", "item2"],
//   key4: { nestedKey: "nestedValue" },
//   key5: true,
//   key6: null,
// };
// const changeValue = (obj) => {
//   for (let i = 0; i < obj.length; i++) {}
// };

// 12.11

// const fullName = "Dulam Jantsan";
// const firstName = fullName.split(" ")[0];
// const lastName = fullName.split(" ")[1];
// const firstLetterToUpperCase = (str) => {
//   return str.slice(0, 1).toUpperCase();
// };
// const firstNameToUpperCase = (str) => {
//   const firstStr = firstLetterToUpperCase(str);
//   const lastStr = str.slice(1, str.length);
//   return firstStr + lastStr;
// };
// const lastNameStr = firstLetterToUpperCase(lastName);
// console.log(
//   lastNameStr + "." + " " + firstNameToUpperCase(firstName, lastName)
// );

// let person1 = {
//   firstname: "narabayar",
// };
// let person2 = person1;
// person2.firstname = "erdene";
// console.log(person1.firstname);
// console.log(person2.firstname);

// const fruits1 = ["Banana", "Apple", "Orange", "Mango"];
// console.log(fruits1.toString()); //string bolgoj butsaana
// console.log(fruits1.join(" and ")); // and or oor ugsuug holbono
// console.log(fruits1.includes("Pineapple")); // boolean utga butsaana buyu bnuu bhgui yug
// console.log(fruits1.indexOf("Banana")); // heddeh indexiig zaaj ogno

// const fruits1 = ["Banana", "Apple", "Orange", "Mango"];
// const findIndex = (fruit) => {
//   for (let i = 0; i <= fruits1.length; i++) {
//     if (fruits1[i] == fruit) {
//       console.log(i);
//     }
//     return 0;
//   }
// };
// findIndex("Mango");

// toString davtalt
// const fruits1 = ["Banana", "Apple", "Orange", "Mango"];
// function Tostring(fruits1) {
//   let sum = "";
//   let taslal = ",";
//   for (let i = 0; i < fruits1.length; i++) {
//     sum += fruits1[i];
//     if (i < fruits1.length - 1) {
//       sum += taslal;
//     }
//   }
//   console.log(sum);
// }
// Tostring(fruits1);

// join nemeh
// const fruits1 = ["Banana", "Apple", "Orange", "Mango"];
// function Tostring(fruits1) {
//   let sum = "";
//   let taslal = " and ";
//   for (let i = 0; i < fruits1.length; i++) {
//     sum += fruits1[i];
//     if (i < fruits1.length - 1) {
//       sum += taslal;
//     }
//   }
//   console.log(sum);
// }
// Tostring(fruits1);

// davtalt includes
// const fruits1 = ["Banana", "Apple", "Orange", "Mango"];

// const findIndex = (fruit) => {
//   for (let i = 0; i < fruits1.length; i++) {
//     if (fruits1[i] === fruit) {
//       console.log("true");
//       return;
//     }
//   }
//   console.log("false");
// };

// findIndex("Mango");

// 12.13
// targettai tentsuu index oloh

// const arr = [2, 3, 5, 10, 7];
// const target = 9;
// let sum;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j >= 0; j--) {
//     sum = arr[i] + arr[j];
//     if (sum == 9) {
//       console.log(i, j);
//     }
//   }
// }

// reverse an array

// const arr = [2, 3, 5, 10, 7];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

//Find Maximum element

// const arr = [2, 3, 5, 10, 7];
// let max;
// for (let i = 0; i < arr.length; i++) {
//   max = arr[i];
//   if (max > arr[i]) {
//     console.log(i);
//   }
// }

// Remove Duplicates :

// const ars = [1, 1, 2, 2, 3, 3, 3, 3, 4, 5, 6, 6];
// const space = [];
// for (let i = 0; i < ars.length; i++) {
//   let isDuplicate = false;
//   for (let j = 0; j < i; j++) {
//     if (ars[j] === ars[i]) {
//       isDuplicate = true;
//       break;
//     }
//   }
//   if (!isDuplicate) {
//     space.push(ars[i]);
//   }
// }
// console.log(space);

// 12.14
