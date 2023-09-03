const User = require("../models/Users.model");
const Like = require("../models/Likes.model");
const Post = require("../models/Posts.model");

const find = async (req, res) => {
  const likes = await Like.findAll({include: [{model: User}, {model: Post}]});

  res.json({likes});
};

const create = async (req, res) => {
  const {user_id, post_id} = req.body;

  (await Like.create({user_id, post_id})).save();

  res.json({message: "OK"});
};

module.exports = {
  find,
  create,
};
