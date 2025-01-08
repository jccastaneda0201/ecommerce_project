const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const FotoProducto = require("./fotos_productos.model");
const ProductoVendido = require("./productos_vendidos.model");

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

ProductoVendido.belongsTo(Producto, {
  as: "productos",
  foreignKey: "productos_id",
});

Producto.hasMany(ProductoVendido, {
  as: "productos_vendidos",
  foreignKey: "productos_id",
});

Producto.hasMany(FotoProducto, {
  as: "fotos_productos",
  foreignKey: "productos_id",
});

module.exports = Producto;
