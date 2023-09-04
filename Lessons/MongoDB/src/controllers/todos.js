const Todos = require("../models/todos");

const create = async (req, res) => {
  try {
    const {title, description, status} = req.body;

    const newTodo = new Todos({title, description, status});
    await newTodo.save();
    res.status(201).json({message: "Success", newTodo});
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "INTERNAL SERVER ERROR"});
  }
};
const find = async (req, res) => {
  try {
    const {title} = req.query;
    const filter = {};

    if (title) {
      filter.title = title;
    }

    const data = await Todos.find();
    console.log(data);
    res.render('index',{data: data});
    // res.json({message: "Success", data});
  } catch (error) {
    res.status(500).json({message: "INTERNAL SERVER ERROR"});
  }
};
const findOne = async (req, res) => {
  try {
    const {id} = req.params;

    const data = await Todos.findById(id);

    res.json({message: "Success", data});
  } catch (error) {
    res.status(500).json({message: "INTERNAL SERVER ERROR"});
  }
};
const update = async (req, res) => {
  try {
    const {id} = req.params;
    const {title, description} = req.body;

    const data = await Todos.findByIdAndUpdate(id, {
      title,
      description,
    });

    res.json({message: "Success", data});
  } catch (error) {
    res.status(500).json({message: "INTERNAL SERVER ERROR"});
  }
};
const remove = async (req, res) => {
  try {
    const {id} = req.params;

    await Todos.findByIdAndDelete(id);

    res.json({message: "OK"});
  } catch (error) {
    res.status(500).json({message: "INTERNAL SERVER ERROR"});
  }
};

module.exports = {
  create,
  find,
  findOne,
  update,
  remove,
};
