const bcrypt = require("bcrypt");
const express = require("express");
const { usermodel } = require("../db");
const jwt = require("jsonwebtoken");
const Router = express.Router;
const { z } = require("zod");
const usersecret = process.env.jwtsecuser;
//combining abovve two lines
//const {Router} = require("express");
// userrouter.use(express.json());
const userrouter = Router();

userrouter.post("/signup", async (req, res) => {
  // this is zod schema
  const reqbody1 = z.object({
    email: z.string().email(),
    password: z.string().min(3).max(30),
    firstname: z.string().min(3).max(30),
    lastname: z.string().min(3).max(30),
  });
  const parseddatawithsuccess = reqbody1.safeParse(req.body);
  if (!parseddatawithsuccess.success) {
    res.json({
      msg: "Incorrect Format",
      //it gives zod error if there is wrong input
      error: parseddatawithsuccess.error,
    });
    return;
  }
  const email = req.body.email;
  const password = req.body.password;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  let errorthrown = false;
  try {
    const hashedpassword = await bcrypt.hash(password, 5);
    console.log(hashedpassword);
    await usermodel.create({
      email: email,
      password: hashedpassword,
      firstname: firstname,
      lastname: lastname,
    });
  } catch (e) {
    res.json({
      message: "user already exists",
    });
    errorthrown = true;
  }
  if (!errorthrown) {
    res.json({
      message: "you are signed up",
    });
  }
});
userrouter.post("/signin", async (req, res) => {
  // const email = req.body.email;
  // const password = req.body.password;
  // the above code is same as below one
  const { email, password } = req.body;
  const response = await usermodel.findOne({
    email: email,
  });
  if (!response) {
    res.status(403).json({
      msg: "user dosen't exist",
    });
    return;
  }
  const passwordmatch = await bcrypt.compare(password, response.password);
  if (passwordmatch) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      usersecret
    );
    res.json({
      token,
    });
  } else {
    res.status(403).json({
      msg: "incorrect creds",
    });
  }
});
userrouter.get("/purchases", async (req, res) => {
  res.json({
    msg: "hi",
  });
});

module.exports = {
  userrouter: userrouter,
};
