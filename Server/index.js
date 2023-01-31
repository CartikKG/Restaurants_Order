const express = require("express");
const config = require("./config/config");
const connect = require("./db/db");
const routes = require("./route/allRoutes");
const app = express();
app.use(routes);
connect()
  .then((res) => {
    app.listen(config.PORT);
    console.log(`Server is Listing on Port ${config.PORT}`);
  })
  .catch((err) => {
    console.log(err);
});
