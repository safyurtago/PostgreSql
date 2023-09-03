const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database");

class View extends Model {}

View.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }
  },
  {
    createdAt: "created_at",
    updatedAt: "updated_at",
    sequelize,
    tableName: "views",
  }
);

module.exports = View;
