const express = require("express");
const app = express();
const server = require("http").createServer(app);
// const Io = require('socket.io')(server,{cors:{origin:'*'}});
const { initialize } = require("./socket");
const cors = require("cors");
const morgan = require("morgan");
const route = require("./route/router");
const mongoose = require("mongoose");

initialize(server);

//cors origin issue
app.use(cors({ origin: "*" }));

//env eniviroment variable path
require("dotenv").config({ path: "./config/.env" });

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view engine setup
app.use(express.static("./views"));
app.set("view engine", "ejs");

app.use("/", route);

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const PORT = process.env.PORT || 1500;

server.listen(PORT, () => {
  console.log(`server listening on PORT ${PORT}`);
});

