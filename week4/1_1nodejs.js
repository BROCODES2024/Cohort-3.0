const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "./0.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
