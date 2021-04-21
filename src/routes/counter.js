const express = require("express");
const redis = require("redis");

const STORAGE_URL = process.env.STORAGE_URL;
const client = redis.createClient(`redis://${STORAGE_URL}`);

const router = express.Router();

// увеличить счётчик по id книги и вернуть значение
router.get("/:bookId", (req, res) => {
  const { bookId } = req.params;

  client.incr(bookId, (err, rep) => {
    if (err) {
      res.statusCode(500).json(err);
    } else {
      res.json(rep);
    }
  });
});

module.exports = router;
