const express = require("express");
const notFoundMiddleware = require("./middleware/notFound");
const counterRouter = require("./routes/counter");

const app = express();

app.use("/counter", counterRouter);

app.use(notFoundMiddleware);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
