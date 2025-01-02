const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Venta = sequelize.define(
  "Venta",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    total: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
    },
    clientes_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    tableName: "ventas",
    timestamps: false,
  }
);

module.exports = Venta;
