const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.jwtsecret3;

function auth(req, res, next) {
  const token = req.headers.authorization;

  const response = jwt.verify(token, JWT_SECRET);

  if (response) {
    req.userId = response.id;
    next();
  } else {
    res.status(403).json({
      message: "Incorrect creds",
    });
  }
}

module.exports = {
  auth,
  JWT_SECRET,
};
