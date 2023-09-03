const sequelize = require("../database");
const TaskManager = require("../models/task-manager");

const find = async (req, res) => {
  const data = await TaskManager.findAll();

  res.json({data});
};

const create = async (req, res) => {
  const {title, description} = req.body;
  const trx = await sequelize.transaction();
  try {
    const data = await TaskManager.create({title, description}, {transaction: trx});
  
    await data.save();
    await trx.commit();
    res.json({message: "Success", data});
  } catch (error) {
    await trx.rollback();
    res.status(500).json({message: "Error"});
  }
};

const findOne = async (req, res) => {
  const {id} = req.params;

  const data = await TaskManager.findByPk(id);

  res.json({data});
};

const update = async (req, res) => {
  const {id} = req.params;
  const {title, description} = req.body;

  const [, [data]] = await TaskManager.update(
    {title, description},
    {where: {id}, returning: "*"}
  );

  res.json({data, message: "Success"});
};

const remove = async (req, res) => {
  const {id} = req.params;
  await TaskManager.destroy({where: {id}});

  res.json({message: "Success"});
};

module.exports = {find, create, findOne, update, remove};