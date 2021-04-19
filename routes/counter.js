const express = require("express");
const router = express.Router();

const counter = {};

// увеличить счётчик
router.post("/:bookId/incr", (req, res) => {
  const { bookId } = req.params;
  if (!(bookId in counter)) {
    counter[bookId] = 1;
  } else {
    counter[bookId] = ++counter[bookId];
  }
  res.json("Ok");
});

// получить значение счётчика
router.get("/:bookId", (req, res) => {
  const { bookId } = req.params;

  if (!(bookId in counter)) {
    res.status(404).json("Not found");
  } else {
    res.json({ counter: counter[bookId] });
  }
});

module.exports = router;
