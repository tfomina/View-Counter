const express = require("express");
const cors = require("cors");
const notFoundMiddleware = require("./src/middleware/notFound");
const counterRouter = require("./src/routes/counter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/counter", counterRouter);

app.use(notFoundMiddleware);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
