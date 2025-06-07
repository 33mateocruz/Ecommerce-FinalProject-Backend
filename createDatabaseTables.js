/*
 * Este archivo se encarga de crear todas las tablas del sistema.
 *
 * En caso de que las tablas ya existían, se eliminan y se crean
 * nuevamente.
 *
 * Para ejecutar este archivo se debe correr el comando:
 * node createDatabaseTables.js
 *
 * Como alternativa, en el archivo package.json se creó un comando "alias"
 * para que la ejecución sea un poco más corta:
 *
 * 👉 npm run tables
 */

require("dotenv").config();
const db = require("./models");

async function createDatabaseTables() {
  try {
    const sequelize = db.sequelize;

    await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");

    await sequelize.sync({ force: true });

    await sequelize.query("SET FOREIGN_KEY_CHECKS = 1");

    console.log("[Database] ¡Las tablas fueron creadas correctamente!");
  } catch (error) {
    console.error("❌ Error al crear las tablas:", error);
  } finally {
    process.exit();
  }
}

createDatabaseTables();
