const { User } = require("../models");
const bcrypt = require("bcryptjs");

module.exports = async () => {
  await User.destroy({ where: {}, truncate: true });

  const users = [
    {
      name: "Lucía",
      surname: "Martínez",
      email: "lucia.martinez@example.com",
      address: "Av. Libertador 1234, Buenos Aires",
      phone: "+54 11 2345 6789",
      password: "1234",
    },
    {
      name: "Mateo",
      surname: "Fernández",
      email: "mateo.fernandez@example.com",
      address: "Calle 9 de Julio 456, Córdoba",
      phone: "+54 351 456 7890",
      password: "mateo1234",
    },
    {
      name: "Camila",
      surname: "Gómez",
      email: "camila.gomez@example.com",
      address: "San Martín 789, Rosario",
      phone: "+54 341 987 6543",
      password: "camila1234",
    },
    {
      name: "Juan",
      surname: "Pérez",
      email: "juan.perez@example.com",
      address: "Mitre 123, Mendoza",
      phone: "+54 261 123 4567",
      password: "juan1234",
    },
  ];

  for (const userData of users) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    await User.create({ ...userData, password: hashedPassword });
  }

  console.log("[Database] Seeder de User ejecutado: usuarios eliminados y recreados.");
};
