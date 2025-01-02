const { Router } = require("express");
const { z } = require("zod");
const adminrouter = Router();
const { adminmodel } = require("../db");

adminrouter.post("/signup", async (req, res) => {
  res.json({
    msg: "hi",
  });
});
adminrouter.post("/signin", async (req, res) => {
  res.json({
    msg: "hi",
  });
});

//look at harkirat code and make changes
adminrouter.post("/create-course", async (req, res) => {
  res.json({
    msg: "hi",
  });
});
adminrouter.put("/add-course", async (req, res) => {
  res.json({
    msg: "hi",
  });
});
adminrouter.get("/course/bulk", async (req, res) => {
  res.json({
    msg: "hi",
  });
});
module.exports = {
  adminrouter: adminrouter,
};
