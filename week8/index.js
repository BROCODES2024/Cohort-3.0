const express = require("express");
const { userrouter } = require("./routes/user");
const { courserouter } = require("./routes/course");
const { adminrouter } = require("./routes/admin");

const app = express();
//so here we are actually structured the code properly
//ie all the user endpoints in one file and course end points in other and we are importing them
//for example /api/v1/user is same for all routes so we kept it in index file and then kept the routes in user.js file
//at the the end it is still /api/v1/user/signup
// to do this we use Router library

app.use("/api/v1/user", userrouter);
app.use("/api/v1/admin", adminrouter);
app.use("/api/v1/course", courserouter);

app.listen(3000);

// app.post("/alogin", async (req, res) => {});
// app.post("/asignup", async (req, res) => {});
// app.post("/create-course", async (req, res) => {});
// app.delete("/delete-course", async (req, res) => {});
// app.put("/add-course", async (req, res) => {});