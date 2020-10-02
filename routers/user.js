const express = require("express");
const User = require("../models/User");
const Favorite = require("../models/Favorite");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/users/signup", async (req, res) => {
  // Create a new user
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/users/login", async (req, res) => {
  //Login a registered user
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res
        .status(401)
        .send({ error: "Login failed! Check authentication credentials" });
    }
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/users/me", auth, async (req, res) => {
  // View logged in users
  res.send(req.user);
});
router.get("/users", auth, async (req, res) => {
  // View logged in users
  res.send(req.user);
});

router.get("/users/all", async (req, res) => {
  User.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/users/favorite/", auth, ({ user, body }, res) => {
  // console.log(body)
  //  console.log("Hello World")
  //joining two collection in a database
  // res.send("hellow")
  // console.log(user)
  Favorite.create(body)
    .then(({ _id }) =>
      User.findOneAndUpdate(
        { _id: user._id },
        { $push: { favImageURL: _id } },
        { new: true }
      )
    )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(422).json(err));
});
// retrieving data from other Users
router.get("/users/favorite/", auth, (req, res) => {
  console.log("test GET");
  User.findOne({ _id: req.user._id })
    .populate("favImageURL")
    .then((data) => {
      console.log(data);
      res.json(data.favImageURL);
    })
    .catch((err) => {
      res.json(err);
    });
});
// var mongoose = require('mongoose');
// var id = new mongoose.Types.ObjectId(stringId);
router.get("/others/:id", (req, res) => {
//  const id = req.params.id
  console.log("test GET");
  User.findOne({_id : req.params.id})
    .populate("favImageURL")
    .then((data) => {
      console.log(data);
      res.json(data.favImageURL);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/users/me/logout", auth, async (req, res) => {
  // Log user out of the application
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token != req.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/users/me/logoutall", auth, async (req, res) => {
  // Log user out of all devices
  try {
    req.user.tokens.splice(0, req.user.tokens.length);
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

const checkToken = (req, res, next) => {
  const header = req.headers["authorization"];

  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];

    req.token = token;
    next();
  } else {
    //If header is undefined return Forbidden (403)
    res.sendStatus(403);
  }
};

module.exports = router;
