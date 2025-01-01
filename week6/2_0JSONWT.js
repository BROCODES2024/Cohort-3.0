const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
require("dotenv").config();
const users = [];
const JWT_SECRET = process.env.jwtsecret;

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    const token = jwt.sign({ username: user.username }, JWT_SECRET);
    res.json({ token });
  } else {
    res.status(403).send({ message: "Invalid username or password" });
  }
});

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  users.push({ username, password });
  res.send({ message: "You have signed up" });
});

app.get("/me", (req, res) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(400).send({ message: "Token is required" });
  }

  try {
    const userDetails = jwt.verify(token, JWT_SECRET);
    res.send({ username: userDetails.username });
  } catch (err) {
    res.status(401).send({ message: "Unauthorized", error: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
