const jwt = require('../utils/jwt')

const isAuth = async (req, res, next) => {
  try {
      const token = req.headers?.token
      if (!token) { return res.status(401).json({message: "Unauthorized"}) }
      jwt.verifyToken(token, async (err, data) => {
          if (err) { return res.status(401).json({message: "Unauthorized"}) }
          req.verify = data
          next();
      });
  } catch (error) {
    next(error);
  }
};

module.exports = isAuth;