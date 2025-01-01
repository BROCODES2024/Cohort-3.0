//Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
const express = require("express");
const app = express();

function middleware(req, res, next) {
  console.log(req.method);
  console.log(req.hostname);
  console.log(req.url);
  console.log(new Date());
  next();
}
app.use(middleware);
app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    ans: a + b,
  });
});
app.listen(3000);
