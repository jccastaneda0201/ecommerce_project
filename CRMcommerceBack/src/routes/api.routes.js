const router = require("express").Router();

router.use("/clientes", require("./api/clientes.routes"));

module.exports = router;
