"use strict";

require("dotenv").config();

// Start up DB Server
const mongoose = require("mongoose");
const server = require("./auth-server/src/server.js");

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, options).then(() => {
  server.start(process.env.PORT);
});

// Start the web server

/*mongoose.connect("mongodb://localhost:27017/food", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useUnifiedTopology: true,
});*/

//server.start(3000);
