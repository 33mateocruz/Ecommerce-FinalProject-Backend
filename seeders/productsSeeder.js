const { Products } = require("../models");

module.exports = async () => {
  const products = [
    {
      name: 'EQUILIBRIO Cachorro 15kg"',
      description:
        "alimento completo diseñado para perros en fase de crecimiento, desde los 2 meses hasta los 12, 18 o 24 meses, dependiendo de la raza",
      image:
        "https://purina.com.uy/sites/default/files/styles/webp/public/2022-09/ADULTOS%20PERROS%20MINIS%20Y%20PEQUEN%CC%83OS-dog-chow-frente.jpeg.webp?itok=UwtgKL2x",
      price: 3.783,
      stock: 15,
      category: "Secos",
      featured: true,
    },
    {
      name: "Collar perro 53cm",
      description:
        "El collar para perro es un accesorio diseñado para brindar comodidad y seguridad a tu mascota",
      image:
        "https://purina.com.uy/sites/default/files/styles/webp/public/2022-09/ADULTOS%20PERROS%20MINIS%20Y%20PEQUEN%CC%83OS-dog-chow-frente.jpeg.webp?itok=UwtgKL2x",
      price: 185.0,
      stock: 30,
      category: "Collares",
      featured: false,
    },
    {
      name: "Comedero mascotas acero inoxidable",
      description: "Fabricado con acero inoxidable diseñado para durar.",
      image:
        "https://purina.com.uy/sites/default/files/styles/webp/public/2022-09/ADULTOS%20PERROS%20MINIS%20Y%20PEQUEN%CC%83OS-dog-chow-frente.jpeg.webp?itok=UwtgKL2x",
      price: 350.0,
      stock: 10,
      category: "Comedores",
      featured: true,
    },
  ];
  console.log(Products);
  await Products.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
