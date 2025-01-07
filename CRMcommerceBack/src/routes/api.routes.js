const router = require("express").Router();

router.use("/clientes", require("./api/clientes.routes"));
router.use("/productos", require("./api/productos.routes"));

module.exports = router;
