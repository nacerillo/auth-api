"use strict";

module.exports = (capability) => {
  return (req, res, next) => {
    try {
      console.log("CAPS", req.user);
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
