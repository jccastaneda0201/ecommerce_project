const sequelize = require("../config/db");
const { QueryTypes } = require("sequelize");

// Traer el modelo creado
const Producto = require("../models/productos.model");
const ProductoVendido = require("../models/productos_vendidos.model");
const FotoProducto = require("../models/fotos_productos.model");
const Venta = require("../models/ventas.model");
const fs = require("fs");

const getAllProductos = async (req, res, next) => {
  try {
    const productos = await Producto.findAll({
      include: ["fotos_productos"],
    });
    res.json(productos);
  } catch (error) {
    next(error);
  }
};

const getProductosById = async (req, res, next) => {
  const { productoId } = req.params;
  try {
    const producto = await Producto.findByPk(productoId, {
      include: ["fotos_productos", "productos_vendidos"],
    });
    for (prodVendido of producto.productos_vendidos) {
      console.log(prodVendido.ventas_id);
      const ventaProd = await Venta.findByPk(prodVendido.ventas_id);
      console.log(ventaProd);
    }
    if (!producto) {
      return res.status(404).json({ message: "El producto no existe" });
    }
    console.log(producto);
    res.json(producto);
  } catch (error) {
    next(error);
  }
};

const createImagen = async (req, res, next) => {
  const { productoId } = req.params;
  try {
    // - Renombrar la imagen -> REPO
    // - Guardar la ruta de la imagen en la BD
    // Antes de guardar el producto en la base de datos, modificamos la imagen para situarla donde nos interesa
    const extension = "." + req.file.mimetype.split("/")[1];

    // Obtengo el nombre de la nueva imagen
    const newName = req.file.filename + extension;

    // Obtengo la ruta donde estará, adjuntándole la extensión
    const newPath = req.file.path + extension;
    console.log(newPath);
    // Muevo la imagen para que reciba la extensión
    fs.renameSync(req.file.path, newPath);

    const imagenCreada = await FotoProducto.create({
      productos_id: productoId,
      ruta: `images/${newName}`,
    });

    res.json(imagenCreada);
  } catch (error) {
    next(error);
  }
};

const destroyImagen = async (req, res, next) => {
  const { imagenId } = req.params;
  try {
    const imagen = await FotoProducto.findByPk(imagenId);
    await imagen.destroy();
    res.json(imagen);
  } catch (error) {
    next(error);
  }
};

const createProducto = async (req, res, next) => {
  try {
    const productos = await Producto.create(req.body);
    res.json(productos);
  } catch (error) {
    next(error);
  }
};

const updateProducto = async (req, res, next) => {
  const { productoId } = req.params;
  try {
    const producto = await Producto.findByPk(productoId);
    await producto.update(req.body);
    res.json(producto);
  } catch (error) {
    next(error);
  }
};

const destroyProducto = async (req, res, next) => {
  const { productoId } = req.params;
  try {
    const producto = await Producto.findByPk(productoId);
    await producto.destroy();
    res.json(producto);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProductos,
  getProductosById,
  createImagen,
  createProducto,
  updateProducto,
  destroyProducto,
  destroyImagen,
};
