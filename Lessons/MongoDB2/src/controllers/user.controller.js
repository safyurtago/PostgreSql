const Users = require("../models/User.model");

const find = async (req, res) => {
  try {
    console.log(1);
    const usersCount = await Users.find().countDocuments();

    res.status(200).json({data: usersCount});
  } catch (error) {
    res.status(500).json({message: "Internal Server Error"});
  }
};

module.exports = {
  find,
};
