import express, { response } from "express";
import cors from "cors";
import fs from "fs";

const port = 3001;
const app = express();

app.use(cors());
app.use(express.json());

let arr = [];
const data = fs.readFileSync("db.json");
arr = JSON.parse(data);
app.get("/data", (request, response) => {
  response.send(arr);
});

app.post("/data", (request, response) => {
  arr.push(request.body);
  fs.writeFileSync("db.json", JSON.stringify(arr));
  response.send(arr);
});

app.delete("/:id", (request, response) => {
  const id = request.params.id;
  arr = arr.filter((el) => el.id !== id);
  fs.writeFileSync("db.json", JSON.stringify(arr));
  response.json(arr);
});

app.put("/:id", (request, response) => {
  const id = request.params.id;
  const newData = request.body;
  arr = arr.map((el) => (el.id === id ? newData : el));
  fs.writeFileSync("db.json", JSON.stringify(arr));
  response.json(arr);
});

app.listen(port, () => {
  console.log(`Server ajillaj bnaa http://localhost:${port}`);
});
