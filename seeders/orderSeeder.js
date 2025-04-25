"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "pedidos",
      [
        {
          compradorId: 1,
          items: JSON.stringify([
            { item: "Producto A", cantidad: 2, precio: 100 },
            { item: "Producto B", cantidad: 1, precio: 200 },
          ]),
          estado: "pago pendiente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          compradorId: 2,
          items: JSON.stringify([
            { item: "Producto C", cantidad: 3, precio: 150 },
            { item: "Producto D", cantidad: 4, precio: 250 },
          ]),
          estado: "en tránsito",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          compradorId: 3,
          items: JSON.stringify([
            { item: "Producto E", cantidad: 1, precio: 300 },
            { item: "Producto F", cantidad: 2, precio: 400 },
          ]),
          estado: "entregado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("pedidos", null, {});
  },
};
