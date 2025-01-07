const sequelize = require("../config/db");
const { QueryTypes } = require("sequelize");

// Traer el modelo creado
const Cliente = require("../models/clientes.model");

const getAll = async (req, res, next) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const { clienteId } = req.params;
  try {
    const cliente = await Cliente.findByPk(clienteId);
    if (!cliente) {
      return res.status(404).json({ message: "El cliente no existe" });
    }
    res.json(cliente);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const clientes = await Cliente.create(req.body);
    res.json(clientes);
  } catch (error) {
    next(error);
  }
};

const updateCliente = async (req, res, next) => {
  const { clienteId } = req.params;
  try {
    const cliente = await Cliente.findByPk(clienteId);
    await cliente.update(req.body);
    res.json(cliente);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  const { clienteId } = req.params;
  try {
    const cliente = await Cliente.findByPk(clienteId);
    await cliente.destroy();
    res.json(cliente);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  updateCliente,
  destroy,
};
