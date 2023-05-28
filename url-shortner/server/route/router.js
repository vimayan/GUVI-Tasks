const route = require("express").Router();
const {
  shorteningUrl,
  EditUrl,
  deleteUrl,
  redirectUrl,
  getUrl,
  getViewCount,
} = require("../controller/urlAction");
const {
  createUser,
  loginUser,
  requestPassword,
  enterPassword,
  resetPassword,
  auth,
  verifyUser,
} = require("../controller/userAction");

route.get("/", (req, res) => {
  res.end("hello there");
});
route.post("/create-user", createUser);
route.post("/login", loginUser);
route.get("/verify/:username", verifyUser);
route.post("/request-password", requestPassword);
route.get("/reset-password/:id/:token", enterPassword);
route.post("/reset-password/:id/:token", resetPassword);

route.get("/get_url", auth, getUrl);
route.post("/shorten_url", auth, shorteningUrl);
route.put("/edit_shortner", auth, EditUrl);
route.delete("/delete_shortner/:id", auth, deleteUrl);

route.get("/get_viewcount", getViewCount);

route.get("/:tiny_url", redirectUrl);
route.use("*", (req, res) => {
  res.status(404).end("Page Not Found");
});
module.exports = route;
