const {
  createVenta,
  updateVenta,
  getVentasById,
  getVentaByIdCliente,
  getVentas,
} = require("../../controllers/ventas.controller");

const router = require("express").Router();

router.get("/", getVentas);

router.get("/misventas/:idCliente", getVentaByIdCliente);

router.get("/:idVenta", getVentasById);

router.post("/", createVenta);

router.put("/:idVenta", updateVenta);

module.exports = router;
