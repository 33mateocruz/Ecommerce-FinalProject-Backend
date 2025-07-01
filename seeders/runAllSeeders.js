/*
 * Este archivo se encarga de importar todos los seeders que se hayan definido
 * en el sistema y ejectuarlos.
 *
 * Para ejecutar este archivo se debe correr el comando:
 *
 * 👉 node seeders/runAllSeeders.js
 *
 *
 * Como alternativa, en el artchivo package.json se creó un comando "alias"
 * para que la ejecución sea un poco más corta:
 *
 * 👉 npm run seeders
 */

require("dotenv").config();
const { sequelize, OrderProduct, Order, Product, User, Category } = require("../models");

async function runAllSeeders() {
  // Limpieza de la base de datos antes de ejecutar los seeders
  await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
  await OrderProduct.destroy({ where: {}, force: true });
  await Order.destroy({ where: {}, force: true });
  await Product.destroy({ where: {}, force: true });
  await User.destroy({ where: {}, force: true });
  await Category.destroy({ where: {}, force: true });
  await sequelize.query("SET FOREIGN_KEY_CHECKS = 1");

  await require("./userSeeder")();
  await require("./productsSeeder")();
  await require("./orderSeeder")();
  await require("./adminUserSeeder")();
  await require("./categoriesSeeder")();

  /*
   * Aquí se pueden ejectuar otros seeders que hayan en el sistema.
   * Por ejemplo, si se tuviesen seeders para los estudiantes
   * habría que ejectuar:
   *
   * await require("./studentSeeder")();
   *
   * IMPORTANTE: tener en cuenta que el orden en que se ejecutan los seeders
   * suele ser clave. Por ejemplo, antes de crear artículos habría que
   * crear los usuarios, ya que cada artículo debe tener un autor.
   */

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
  process.exit();
}

runAllSeeders();
