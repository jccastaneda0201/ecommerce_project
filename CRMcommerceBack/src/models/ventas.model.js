const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Cliente = require("./clientes.model");
const productos_vendidos = require("./productos_vendidos.model");

const Venta = sequelize.define(
  "ventas",
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

Cliente.hasMany(Venta, {
  as: "ventas",
  foreignKey: "clientes_id",
});

Venta.belongsTo(Cliente, {
  as: "clientes",
  foreignKey: "clientes_id",
});

productos_vendidos.belongsTo(Venta, {
  as: "ventas",
  foreignKey: "ventas_id",
});

Venta.hasMany(productos_vendidos, {
  as: "productos_vendidos",
  foreignKey: "ventas_id",
});

module.exports = Venta;
