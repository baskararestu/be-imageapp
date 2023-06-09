const express = require("express");
const { authRouter, contentRouter } = require("./router");
require("dotenv").config();
const cors = require("cors");
const env = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/auth", authRouter);
app.use("/content", contentRouter);

app.listen(env.APP_PORT, () => {
  console.log(`Server is running on port ${env.APP_PORT}`);
});
