const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
  },
  {
    createdAt: "created_at",
    updatedAt: "updated_at",
    sequelize,
    tableName: "comments",
  }
);

module.exports = Comment;
