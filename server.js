const express = require("express");
const Axios = require("axios");
const userRouter = require("./routers/user");

const mongoose = require("mongoose");
// const routes = require("./routes");
require("dotenv").config();
require("./db/db");
const app = express();
const PORT = process.env.PORT || 3001;

const { REACT_APP_API_KEY } = process.env;
// Define middleware here
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




// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
