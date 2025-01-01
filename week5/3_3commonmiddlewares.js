const express = require("express");
const app = express();

// Use express.json() middleware to parse JSON bodies
app.use(express.json());

// Define a POST route to handle JSON data
//for post use post man as it wont work in chrome
//we use express.json() because when we use post we send a body which should be parsed
//try by commenting out the middleware ie app.use()
app.post("/sum", (req, res) => {
  // Access the parsed JSON data from req.body
  const data = req.body;
  console.log("Received data:", data);
  const a = req.body.a;
  const b = req.body.b;
  res.json({
    ans: a + b,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
