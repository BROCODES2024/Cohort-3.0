const express = require("express");
const app = express();

// Middleware function
function logRequest(req, res, next) {
  console.log(`Request made to: ${req.url}`);
  next();
}

// Apply middleware to a specific route
app.get("/special", logRequest, (req, res) => {
  res.send("This route uses route-specific middleware!");
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

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
