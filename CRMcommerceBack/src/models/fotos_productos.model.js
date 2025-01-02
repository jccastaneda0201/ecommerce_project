const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Cliente = sequelize.define(
  "fotoProducto",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    foto: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    productos_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    tableName: "fotos_productos",
    timestamps: false,
  }
);

module.exports = fotoProducto;