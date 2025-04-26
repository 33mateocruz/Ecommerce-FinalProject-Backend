"use strict";

const { Order } = require("../models");

module.exports = async () => {
  const orders = [
    {
      compradorId: 1,
      nombreProducto: "Smart TV 55",
      cantidad: 2,
      precio: 499.99,
      estado: "pago pendiente",
    },
    {
      compradorId: 1,
      nombreProducto: "Bluetooth Speaker",
      cantidad: 1,
      precio: 89.99,
      estado: "pago pendiente",
    },
    {
      compradorId: 2,
      nombreProducto: "Air Conditioner 3000W",
      cantidad: 3,
      precio: 329.99,
      estado: "en tránsito",
    },
  ];

  await Order.bulkCreate(orders);
  console.log("[Database] Se corrió el seeder de Orders.");
};
