"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hash = await bcrypt.hash("admin123", 10);
    return queryInterface.bulkInsert("admin_users", [
      {
        nombre: "Admin",
        apellido: "Principal",
        email: "admin@admin.com",
        contraseña: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("admin_users", { email: "admin@admin.com" }, {});
  },
};
