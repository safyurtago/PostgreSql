const Post = require("../models/Posts.model");
const User = require("../models/Users.model");

const find = async (req, res) => {
  const posts = await Post.findAll({
    include: [
      {model: User}
    ]
  });

  res.json({posts});
};

const create = async (req, res) => {
  const {photo, title, user_id} = req.body;

  (await Post.create({photo, title, user_id})).save();

  res.json({message: "OK"});
};

module.exports = {
  find,
  create,
};
