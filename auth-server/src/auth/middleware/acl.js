"use strict";

const Users = require("../models/users.js");
module.exports = (capability) => {
  return (req, res, next) => {
    try {
      console.log(user);
      if (req.user.capabilities.includes(capability)) {
        next();
      } else {
        next("Access Denied");
      }
    } catch (e) {
      next("Invalid Login");
    }
  };
};
