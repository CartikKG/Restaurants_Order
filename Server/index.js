const express = require("express");
const config = require("./config/config");
const connect = require("./db/db");
const app = express();

connect()
  .then((res) => {
    app.listen(config.PORT)
    console.log(`Server is Listing on Port ${config.PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });
