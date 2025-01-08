const router = require("express").Router();

router.use("/clientes", require("./api/clientes.routes"));
router.use("/productos", require("./api/productos.routes"));
router.use("/ventas", require("./api/ventas.routes"));

module.exports = router;
