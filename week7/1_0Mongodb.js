const bcrypt = require("bcrypt");
const express = require("express");
const { UserModel, TodoModel } = require("./1_0db");
const { auth, JWT_SECRET } = require("./1_0auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { z } = require("zod");
require("dotenv").config();

mongoose.connect(process.env.db_url);

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  //here we are restricting the user to send only the date of the below kind
  const requirebody = z.object({
    email: z.string().min(3).max(30).email(),
    password: z.string().min(3).max(30),
    name: z.string().min(3).max(30),
  });
  // const parseddata = requirebody.parse(req.body);
  const parseddatawithsuccess = requirebody.safeParse(req.body);
  if (!parseddatawithsuccess.success) {
    res.json({
      message: "Incorrect format",
      error: parseddatawithsuccess.error,
    });
    return;
  }
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  //here password is our plain password and 5 is no of rounds we want to salt (more salting more protection)
  // we are using try and catch because when some one use the already present email entire server crashes
  // so to avoid that the error prone region is covered in try block
  let errorthrown = false;
  try {
    const hashedpassword = await bcrypt.hash(password, 5);
    console.log(hashedpassword);
    await UserModel.create({
      email: email,
      password: hashedpassword,
      name: name,
    });
  } catch (e) {
    res.json({
      message: "user already exists",
    });
    errorthrown = true;
  }
  if (!errorthrown) {
    res.json({
      message: "You are signed up",
    });
  }
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
  });

  if (!response) {
    res.status(403).json({
      message: "user doesnt exist",
    });
    return;
  }

  const passwordmatch = await bcrypt.compare(password, response.password);

  if (passwordmatch) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect creds",
    });
  }
});

app.post("/todo", auth, async function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    userId,
    title,
    done,
  });

  res.json({
    message: "Todo created",
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId,
  });

  res.json({
    todos,
  });
});

app.listen(3000);
