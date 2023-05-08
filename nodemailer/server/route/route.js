const route = require("express").Router();
const {createUser,loginUser,requestPassword,enterPassword,resetPassword}=require("../controller/userAction")

route.get("/", (req, res) => {
  res.end("hello there");
});
route.post("/create-user", createUser);
route.post("/login", loginUser);
route.post("/request-password", requestPassword);
route.get("/reset-password/:id/:token", enterPassword);
route.post("/reset-password/:id/:token", resetPassword);
route.use("*",(req,res) => {
  res.status(404).end("Page Not Found");
});
module.exports = route;
