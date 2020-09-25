const express = require("express");
const Axios = require("axios");
const userRouter = require("./routers/user");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

// SOCKET.IO
const chatRouter = require("./routers/chat");

const socketio = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("new connection");

  socket.on("disconnect", () => {
    console.log("user left");
  });
});

// const routes = require("./routes");
require("dotenv").config();
require("./db/db");

const { REACT_APP_API_KEY } = process.env;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRouter);
// middleware for socketio.io
app.use(chatRouter);
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
server.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
