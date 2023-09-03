const Post = require("../models/Posts.model");
const User = require("../models/Users.model");

const find = async (req, res) => {
  const users = await User.findAll({include: Post});

  res.json({users});
};

const create = async (req, res) => {
  const {username, fullName} = req.body;

  (await User.create({username, fullName})).save();

  res.json({message: "OK"});
};

module.exports = {
  find,
  create,
};
