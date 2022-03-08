const e = require("express");

const authorize = (arrType) => {
  return (req, res, next) => {
    const { user } = req;
    if (arrType.findIndex((ele) => ele === user.type) > -1) {
      next();
    } else {
      res.status(403).send("Not allow!");
    }
  };
};

module.exports = {
  authorize,
};
