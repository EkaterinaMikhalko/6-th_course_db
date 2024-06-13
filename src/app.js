const express = require("express");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const loggerOne = require("./controllers/middlewares/loggerOne");
const cors = require("cors");
const mongoose = require("mongoose");
dotenv.config();

const app = express();

const {
  port,
  api_url,
  MONGO_URL = "mongodb://localhost:27017/mydb",
} = process.env;

mongoose.connect(MONGO_URL).catch((error) => console.log(error));

// mongoose
//   .connect(MONGO_URL)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Failed to connect to MongoDB", err));

// app.get("/", (request, response) => {
//   response.status(200);
//   response.send("Hello,world");
// });
// app.post("/", (request, response) => {
//   response.status(200);
//   response.send("");
// });

app.listen(port, () => {
  console.log(`Сервер запущен по адресу ${api_url}:${port}`);
});

app.use(bodyparser.json());

app.use(cors());
app.use(loggerOne);
app.use(userRouter);
app.use(bookRouter);


