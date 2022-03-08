const express = require("express");
const path = require("path");
const Fingerprint = require('express-fingerprint')
const { sequelize } = require("./models");
const { rootRouter } = require("./routers");

const app = express();
const port = 3000;

// cài đặt fingerprint
app.use(Fingerprint());

// cài đặt ứng dụng sử dụng kiểu json
app.use(express.json());

// cài đặt static file
const publicPathDirectory = path.join(__dirname, "./public"); // __dirname là lấy đường dẫn hiện tại
app.use("/public", express.static(publicPathDirectory));

// dùng routers
app.use("/api/v1", rootRouter);

// lắng nghe sự kiện kết nối
app.listen(port, async () => {
  console.log(`App listening on http://localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log("Connected to the database");
  } catch (error) {
    console.log("Unable to connect to the database: ", error);
  }
});
