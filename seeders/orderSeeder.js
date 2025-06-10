const { Order } = require("../models");

module.exports = async () => {
  const orders = [
    {
      compradorId: 1,
      nombreProducto: "EQUILIBRIO Cachorro 15kg",
      cantidad: 1,
      precio: 3783,
      estado: "pago pendiente",
    },
    {
      compradorId: 1,
      nombreProducto: "Collar perro 53cm",
      cantidad: 1,
      precio: 185,
      estado: "rechazado",
    },
    {
      compradorId: 2,
      nombreProducto: "Comedero mascotas acero inoxidable",
      cantidad: 1,
      precio: 350,
      estado: "en tránsito",
    },
  ];

  await Order.bulkCreate(orders);
  console.log("[Database] Se corrió el seeder de Orders.");
};
