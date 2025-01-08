const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "public/images" });

const {
  getAllProductos,
  getProductosById,
  createProducto,
  updateProducto,
  destroyProducto,
  createImagen,
  destroyImagen,
} = require("../../controllers/productos.model");

router.get("/", getAllProductos);
router.get("/:productoId", getProductosById);

router.post("/", createProducto);
router.post("/imagenes/:productoId", upload.single("imagen"), createImagen);
router.delete("/imagenes/:imagenId", destroyImagen);

router.put("/:productoId", updateProducto);

router.delete("/:productoId", destroyProducto);

module.exports = router;
