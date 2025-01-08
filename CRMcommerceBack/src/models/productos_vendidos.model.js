const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ProductoVendido = sequelize.define(
  "productos_vendidos",
  {
    productos_id: {
      primaryKey: true,
      autoIncrement: false,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    ventas_id: {
      primaryKey: true,
      autoIncrement: false,
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

module.exports = ProductoVendido;
