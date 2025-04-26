"use strict";

const { Order } = require("../models");

module.exports = async () => {
  const orders = [
    {
      compradorId: 1,
      nombreProducto: "Producto A",
      cantidad: 2,
      precio: 100,
      estado: "pago pendiente",
    },
    {
      compradorId: 1,
      nombreProducto: "Producto B",
      cantidad: 1,
      precio: 200,
      estado: "pago pendiente",
    },
    {
      compradorId: 2,
      nombreProducto: "Producto C",
      cantidad: 3,
      precio: 150,
      estado: "en tránsito",
    },
    {
      compradorId: 2,
      nombreProducto: "Producto D",
      cantidad: 4,
      precio: 250,
      estado: "en tránsito",
    },
    {
      compradorId: 3,
      nombreProducto: "Producto E",
      cantidad: 1,
      precio: 300,
      estado: "entregado",
    },
    {
      compradorId: 3,
      nombreProducto: "Producto F",
      cantidad: 2,
      precio: 400,
      estado: "entregado",
    },
  ];

  await Order.bulkCreate(orders);
  console.log("[Database] Se corrió el seeder de Orders.");
};
