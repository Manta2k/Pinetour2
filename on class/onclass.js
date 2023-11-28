let number = 567;
console.log(
  parseInt(number / 100) + parseInt((number / 10) % 10) + parseInt(number % 10)
);
//duguin radius
let radi = 4;
console.log((4 / 3) * Math.PI * radi ** 3);
console.log(2 * Math.PI * radi);
// if function
let even = 58;

if (even % 2 === 0 && even > 10) {
  console.log("tegsh ba 10aas ih");
} else if ((even % 2 === 1) * even > 10) {
  console.log("tegsh ba 10aas oh");
} else if (even % 2 === 0 && even < 10) {
  console.log("tegsh ba 10aas baga");
} else if ((even % 2 === 1) * even < 10) {
  console.log("sondgoi ba 10aas baga");
}
// dun
let dun = 100;

if (dun >= 90 && dun < 101) {
  console.log("A");
} else if (dun >= 80 && dun < 90) {
  console.log("B");
} else if (dun >= 70 && dun < 80) {
  console.log("C");
} else if (dun >= 60 && dun < 70) {
  console.log("D");
} else if (dun >= 0 && dun < 60) {
  console.log("F");
} else if (dun >= 101) {
  console.log("tiim dun bhgui");
}
// odor
let odor = 7;

if (odor == 1) {
  console.log("davaa");
} else if (odor == 2) {
  console.log("myagmar");
} else if (odor == 3) {
  console.log("lhavga");
} else if (odor == 4) {
  console.log("purev");
} else if (odor == 5) {
  console.log("baasan");
} else if (odor == 6) {
  console.log("hagassain");
} else if (odor == 7) {
  console.log("butensain");
} else if (odor > 7) {
  console.log("bhguee");
}
