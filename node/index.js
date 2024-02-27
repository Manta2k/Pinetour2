import express from "express";
const port = 8080;
const app = express();
const arr = [
  { name: "NAMEaaaaaa", age: 20, id: 1 },
  {
    name: "EMAN",
    age: 22,
    id: 2,
  },
  {
    name: "EMANamooao",
    age: 27,
    id: 3,
  },
];

app.get(`/`, (request, response) => {
  response.json(arr);
});
app.post("/", (request, response) => {
  arr.push({ name: "bill", age: 101 });
  response.json(arr);
});
app.delete("/", (request, response) => {
  const result = arr.filter((item) => item.id !== 1);
  result.splice(1, arr);
  response.json(result);
});
app.listen(port, () => {
  console.log(`ene port  deer server aslaa http://localhost:${port}`);
});
