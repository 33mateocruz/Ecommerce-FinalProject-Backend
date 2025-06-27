const { Category } = require("../models");

module.exports = async () => {
  const categories = [
    { name: "Alimentos", category: 1 },
    { name: "Descanso", category: 2 },
    { name: "Accesorios", category: 3 },
    { name: "Comederos y Bebederos", category: 4 },
    { name: "Higiene", category: 5 },
    { name: "Educación y Salud", category: 6 },
    { name: "Ropa", category: 7 },
    { name: "Juguetes", category: 8 },
    { name: "Peluquería", category: 9 },
    { name: "Espacios y Transporte", category: 10 },
  ];

  await Category.destroy({ where: {} });
  await Category.bulkCreate(categories);
  console.log("[Database] Seeder simplificado: Categories insertadas.");
};
