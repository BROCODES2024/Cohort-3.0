const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json()); //if we dont use it req.body will be undefined
//if we want to allow all domains just keep app.use(cors()) else enter domain names like {domains:["https://google.com","xxxxxxxx"]}
// we dont need cors if both frontend and backend are hosted on same url say 3000 see 4_1cors.js
app.use(cors());

app.post("/sum", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  res.json({
    ans: a + b,
  });
});
app.listen(3000);
