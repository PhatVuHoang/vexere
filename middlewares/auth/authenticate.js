const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, "private-key");
    //   console.log("decode: ", decode);
    if (decode) {
      req.user = decode;
      return next();
    } else {
      res.status(401).send("Please login first");
    }
  } catch (error) {
    res.status(401).send("Please login first");
  }
};

module.exports = {
  authenticate,
};
