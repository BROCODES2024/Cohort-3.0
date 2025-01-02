const express = require("express");
const Router = express.Router;
const { z } = require("zod");

//combining abovve two lines
//const {Router} = require("express");

const userrouter = Router();

userrouter.post("/signup", async (req, res) => {
  const reqbody1 = z.object({
    email: z.string().email(),
    password: z.string().min(3).max(30),
    firstname: z.string().min(3).max(30),
    lastname: z.string().min(3).max(30),
  });
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
