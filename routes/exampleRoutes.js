const express = require("express");
const router = express.Router();
const exampleController = require("../controllers/exampleController");

/*
 * En general, para cada recurso (o entidad) de la API REST se tienen estos
 * 5 endpoints, que corresponden al CRUD estándar (Create-Read-Update-Delete).
 *
 * Notar que todos los endpoints de este archivo tienen como prefijo el string
 * defindo en el archivo `routes/index.js`. Es decir, en este ejemplo, todos
 * los endpoints de este archivo tienen como prefijo el string "/examples".
 *
 * En caso de necesitarlo, se pueden agregar, modificar o eliminar endpoints,
 * pero es importante tener mucho cuidado con no inventar URLs raras
 * como "/agregar-usuario" o "/delete-article". En lo posible, se deben
 * respetar las convenciones REST.
 */

router.get("/", exampleController.index);
router.post("/", exampleController.store);
router.get("/:id", exampleController.show);
router.patch("/:id", exampleController.update);
router.delete("/:id", exampleController.destroy);

module.exports = router;
