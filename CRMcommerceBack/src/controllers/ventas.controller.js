const sequelize = require("../config/db");
const { QueryTypes } = require("sequelize");

// Traer el modelo creado
const Venta = require("../models/ventas.model");
const ProductoVendido = require("../models/productos_vendidos.model");
const Cliente = require("../models/clientes.model");

const getVentas = async (req, res, next) => {
  try {
    const ventas = await Venta.findAll({
      include: ["clientes"],
    });
    res.json(ventas);
  } catch (error) {
    next(error);
  }
};

const getVentasById = async (req, res, next) => {
  const { idVenta } = req.params;
  try {
    const venta = await Venta.findByPk(idVenta);
    if (!venta) {
      return res.status(404).json({ message: "Esta venta no existe" });
    }
    res.json(venta);
  } catch (error) {
    next(error);
  }
};

const getVentaByIdCliente = async (req, res, next) => {
  const { idCliente } = req.params;
  try {
    const ventas = await Venta.findAll({
      where: {
        clientes_id: idCliente,
      },
    });
    if (!ventas || ventas.length === 0) {
      return res
        .status(404)
        .json({ message: "No tienes ninguna venta registrada." });
    }
    res.json(ventas);
  } catch (error) {
    next(error);
  }
};

const createVenta = async (req, res, next) => {
  try {
    const venta = await Venta.create(req.body);
    res.json(venta);
  } catch (error) {
    next(error);
  }
};

const updateVenta = async (req, res, next) => {
  const { idVenta } = req.params;
  try {
    const venta = await Venta.findByPk(idVenta);
    await venta.update(req.body);
    res.json(venta);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getVentas,
  getVentasById,
  getVentaByIdCliente,
  createVenta,
  updateVenta,
};
