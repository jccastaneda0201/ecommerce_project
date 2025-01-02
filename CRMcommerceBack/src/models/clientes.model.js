const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Cliente = sequelize.define(
  "Cliente",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    nombre: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    direccion: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "clientes",
    timestamps: false,
  }
);

module.exports = Cliente;
