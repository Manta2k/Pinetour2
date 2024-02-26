import fs from "fs";
// fs.mkdir("test", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("amjilttai");
//   }
// });
// fs.writeFileSync("text.txt", "Bayaraa coder");
// fs.writeFile("writeFile.txt", "vs code", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("amjilttai");
//   }
// });
// console.log(fs.readFileSync("text.txt").toString());
// fs.readFile("text.txt", (err, data) => console.log(data.toString()));
const data = { name: "Bayraa0314", age: 18 };
fs.writeFileSync("db.json", JSON.stringify(data));
const stringify = JSON.stringify(data);
const parse = JSON.parse(stringify);
console.log(stringify, "===", parse);
