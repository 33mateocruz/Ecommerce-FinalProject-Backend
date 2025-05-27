const { User } = require("../models");

module.exports = async () => {
  const users = [
    {
      name: "Lucía",
      surname: "Martínez",
      email: "lucia.martinez@example.com",
      address: "Av. Libertador 1234, Buenos Aires",
      phone: "+54 11 2345 6789",
      orders: `['EQUILIBRIO Cachorro 15kg"]`,
      password: "lucia1234",
    },
    {
      name: "Mateo",
      surname: "Fernández",
      email: "mateo.fernandez@example.com",
      address: "Calle 9 de Julio 456, Córdoba",
      phone: "+54 351 456 7890",
      orders: `["collar perro 53cm", "Comedero mascotas acero inoxidable"]`,
      password: "mateo1234",
    },
    {
      name: "Camila",
      surname: "Gómez",
      email: "camila.gomez@example.com",
      address: "San Martín 789, Rosario",
      phone: "+54 341 987 6543",
      orders: `["Comedero mascotas acero inoxidable"]`,
      password: "camila1234",
    },
    {
      name: "Juan",
      surname: "Pérez",
      email: "juan.perez@example.com",
      address: "Mitre 123, Mendoza",
      phone: "+54 261 123 4567",
      orders: `["nada"]`,
      password: "juan1234",
    },
  ];

  for (const userData of users) {
    await User.findOrCreate({
      where: { email: userData.email },
      defaults: userData,
    });
  }

  console.log("[Database] Seeder de User ejecutado sin duplicar registros.");
};
