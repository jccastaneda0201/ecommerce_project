const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Cliente = sequelize.define(
  "productoVendido",
  {
    productos_id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    ventas_id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    tableName: "productos_vendidos",
    timestamps: false,
  }
);

module.exports = productoVendido;
