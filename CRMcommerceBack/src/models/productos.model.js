const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const FotoProducto = require("./fotos_productos.model");

const Producto = sequelize.define(
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

Producto.hasMany(FotoProducto, {
  foreignKey: "productos_id",
  as: "fotos_productos",
});

module.exports = Producto;
