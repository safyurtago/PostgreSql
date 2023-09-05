const {verify} = require("../utils/jwt");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers?.token;

    if (!token) return res.status(401).json({message: "Invalid Token"});

    verify(token, async (err, data) => {
      if (err) return res.status(401).json({message: "Invalid Token"});

      req.verify = data;
      next();
    });
  } catch (error) {console.log(error);}
};

module.exports = isAuth;
