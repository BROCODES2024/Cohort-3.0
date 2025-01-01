const express = require("express");
const app = express();
function isoldenoughmw(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "not enough age",
    });
  }
}
// app.use(isoldenoughmw); is used for all the requests below it ie no need to keep it everytime in the request individually
app.get("/ride1", isoldenoughmw, function (req, res) {
  res.json({
    msg: "welcome to ride 1",
  });
});
app.get("/ride2", isoldenoughmw, function (req, res) {
  res.json({
    msg: "welcome to ride 1",
  });
});
app.listen(3000);
