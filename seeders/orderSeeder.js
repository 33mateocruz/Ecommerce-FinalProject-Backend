"use strict";

const { Order, OrderProduct, Product, sequelize } = require("../models");

module.exports = async () => {
  await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");

  const orden1 = await Order.create({ userId: 1, estado: "pago pendiente" });
  const orden2 = await Order.create({ userId: 2, estado: "en tránsito" });

  const camperita = await Product.findOne({ where: { name: "Camperita Impermeable Azul" } });
  const botitas = await Product.findOne({ where: { name: "Botitas Antideslizantes" } });
  const pelota = await Product.findOne({ where: { name: "Pelota de Goma con Sonido" } });

  await OrderProduct.create({
    orderId: orden1.id,
    productId: camperita.id,
    productName: camperita.name,
    productPrice: camperita.price,
    quantity: 2,
  });
  await OrderProduct.create({
    orderId: orden1.id,
    productId: botitas.id,
    productName: botitas.name,
    productPrice: botitas.price,
    quantity: 1,
  });

  await OrderProduct.create({
    orderId: orden2.id,
    productId: pelota.id,
    productName: pelota.name,
    productPrice: pelota.price,
    quantity: 3,
  });

  await sequelize.query("SET FOREIGN_KEY_CHECKS = 1");

  console.log("[Database] Se corrió el seeder de Orders y OrderProducts (versión simple).");
};
