const { AdminUser } = require("../models");
require("dotenv").config();
const bcrypt = require("bcryptjs");

module.exports = async () => {
  const admins = [
    {
      nombre: "Admin",
      apellido: "Principal",
      email: "admin@admin.com",
      contraseña: await bcrypt.hash("admin123", 10),
    },
    {
      nombre: "Soporte",
      apellido: "Secundario",
      email: "soporte@admin.com",
      contraseña: await bcrypt.hash("soporte123", 10),
    },
  ];

  for (const adminData of admins) {
    await AdminUser.findOrCreate({
      where: { email: adminData.email },
      defaults: adminData,
    });
  }

  console.log("[Database] Seeder de AdminUser ejecutado sin duplicar registros.");
};
