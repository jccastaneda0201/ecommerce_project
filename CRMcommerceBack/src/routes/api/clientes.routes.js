const router = require("express").Router();

const {
  getAll,
  create,
  getById,
  updateCliente,
  destroy,
} = require("../../controllers/clientes.controller");

router.get("/", getAll);
router.get("/:clienteId", getById);

router.post("/", create);

router.put("/:clienteId", updateCliente);

router.delete("/:clienteId", destroy);

module.exports = router;
