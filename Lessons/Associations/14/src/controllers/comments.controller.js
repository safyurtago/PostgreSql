const Post = require("../models/Posts.model");
const User = require("../models/Users.model");
const Comment = require("../models/Comments.model");

const find = async (req, res) => {
  const comment = await Comment.findAll({include: [{model: User}, {model: Post}]});

  res.json({comment});
};

const create = async (req, res) => {
  const {message, user_id, post_id} = req.body;

  const comment = await Comment.findAll({include: [{model: User, where: {id: user_id}}, {model: Post, where: {id: post_id}}]});
  if (comment.length) { return res.json({message: "You have already commented"}); }

  (await Comment.create({message, user_id, post_id})).save();

  res.json({message: "OK"});
};

module.exports = {
  find,
  create,
};
