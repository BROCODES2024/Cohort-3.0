// const express = require("express");
// const Router = express.Router;
//the below line is same as cobining above two lines
const { Router } = require("express");
const { z } = require("zod");
const courserouter = Router();

courserouter.post("/purchase", async (req, res) => {
  res.json({
    msg: "hi",
  });
});
courserouter.get("/preview", async (req, res) => {
  res.json({
    msg: "hi",
  });
});
module.exports = {
  courserouter: courserouter,
};
