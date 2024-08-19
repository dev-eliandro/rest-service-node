import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

const sayHi = (req, res) => {
  res.send("Hi!");
};

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Adiciona dois números
app.post("/soma", (req, res) => {
  const { a, b } = req.body;
  res.send({
    result: parseInt(a) + parseInt(b)
  });
});

// Subtrai dois números
app.post("/subtrai", (req, res) => {
  const { a, b } = req.body;
  res.send({
    result: parseInt(a) - parseInt(b)
  });
});

// Multiplica dois números
app.post("/multiplica", (req, res) => {
  const { a, b } = req.body;
  res.send({
    result: parseInt(a) * parseInt(b)
  });
});

// Divide dois números
app.post("/divide", (req, res) => {
  const { a, b } = req.body;
  if (b === 0) {
    return res.status(400).send({
      error: "Cannot divide by zero"
    });
  }
  res.send({
    result: parseInt(a) / parseInt(b)
  });
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});
