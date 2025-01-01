const express = require("express");
const app = express();
app.use(function (req, res, next) {
  console.log("request received");
  next();
});

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a, 10); // Explicit base 10 for parseInt
  const b = parseInt(req.query.b, 10);

  // Check if a or b is NaN
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({
      error: "Invalid input. Please provide numbers for 'a' and 'b'.",
    });
  }

  res.json({
    ans: a + b, // Proper numeric addition
  });
});

app.listen(3000);
//app.use() can be used to use middleware in all the route(/sum or /multiply etc)
