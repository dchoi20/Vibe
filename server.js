const express = require("express");
const Axios = require("axios");
const userRouter = require("./routers/user");
const path = require("path");

const PORT = process.env.PORT || 3001;

// const routes = require("./routes");
require("dotenv").config();
require("./db/db");

const { REACT_APP_API_KEY } = process.env;
// Define middleware here
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRouter);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
// app.use(routes);

app.get("/images", (req, res) => {
  Axios.get(
    `https://api.unsplash.com/photos/?client_id=${REACT_APP_API_KEY}`
  ).then(({ data }) => {
    res.send(data);
  });
});

app.get("/searchimages/:query", (req, res) => {
  Axios.get(
    `https://api.unsplash.com/search/collections?per_page=30?page=3&query=${req.params.query}&client_id=${REACT_APP_API_KEY}`
  ).then(({ data }) => {
    res.send(data);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

// Start the API server

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
