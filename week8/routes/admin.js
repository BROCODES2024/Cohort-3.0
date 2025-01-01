const { Router } = require("express");
const adminrouter = Router();
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
