const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Cliente = sequelize.define(
  "Producto",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(1024),
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "productos",
    timestamps: false,
  }
);

module.exports = Producto;
