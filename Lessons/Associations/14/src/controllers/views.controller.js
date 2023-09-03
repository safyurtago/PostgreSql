const Post = require("../models/Posts.model");
const View = require("../models/Views.model");
const User = require("../models/Users.model");


const find = async (req, res) => {
  const views = await View.findAll({include: [{model: User}, {model: Post}]});

  res.json({views});
};

const create = async (req, res) => {
  const {post_id} = req.body;

  (await View.create({post_id})).save();

  res.json({message: "OK"});
};

module.exports = {
  find,
  create,
};
