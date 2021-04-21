const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const folder = "C:/counter-storage";
const filePath = `${folder}/counter.json`;

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "{}", "utf8");
}

// увеличить счётчик по id книги
router.post("/:bookId/incr", (req, res) => {
  const { bookId } = req.params;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw err;

    const counter = JSON.parse(data);

    if (!(bookId in counter)) counter[bookId] = 0;
    counter[bookId] += 1;

    fs.writeFileSync(filePath, JSON.stringify(counter), "utf8", (err) => {
      if (err) throw err;
    });

    res.json("Ok");
  });
});

// получить значение счётчика по id книги
router.get("/:bookId", (req, res) => {
  const { bookId } = req.params;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw err;

    const counter = JSON.parse(data);

    if (!(bookId in counter)) {
      res.status(404).json("Not found");
    } else {
      res.json(counter[bookId]);
    }
  });
});

module.exports = router;
