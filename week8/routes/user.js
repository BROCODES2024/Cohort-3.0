const express = require("express");
const Router = express.Router;

//combining abovve two lines
//const {Router} = require("express");

const userrouter = Router();

userrouter.post("/signup", async (req, res) => {
  res.json({
    msg: "hi",
  });
});
userrouter.post("/signin", async (req, res) => {
  res.json({
    msg: "hi",
  });
});
userrouter.get("/purchases", async (req, res) => {
  res.json({
    msg: "hi",
  });
});

module.exports = {
  userrouter: userrouter,
};
