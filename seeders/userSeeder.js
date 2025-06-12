const { User } = require("../models");

module.exports = async () => {
  const users = [
    {
      name: "Lucía",
      surname: "Martínez",
      email: "lucia.martinez@example.com",
      address: "Av. Libertador 1234, Buenos Aires",
      phone: "+54 11 2345 6789",
      password: "lucia1234",
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
    // Crea una copia sin 'orders'
    const { orders, ...userWithoutOrders } = userData;

    await User.findOrCreate({
      where: { email: userWithoutOrders.email },
      defaults: userWithoutOrders,
    });
  }

  console.log("[Database] Seeder de User ejecutado sin duplicar registros.");
};
