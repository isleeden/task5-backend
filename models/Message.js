const sequelize = require("../db");
const DataTypes = require("sequelize");

const Message = sequelize.define("Message", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  replyId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  recipient: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
});


module.exports = Message;
