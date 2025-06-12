const { Product } = require("../models");

module.exports = async () => {
  await Product.destroy({ where: {} });

  const products = [
    {
      name: "EQUILIBRIO Cachorro 15kg",
      description:
        "Alimento completo diseñado para perros en fase de crecimiento, desde los 2 meses hasta los 12, 18 o 24 meses, dependiendo de la raza.",
      image:
        "https://purina.com.uy/sites/default/files/styles/webp/public/2022-09/ADULTOS%20PERROS%20MINIS%20Y%20PEQUEN%CC%83OS-dog-chow-frente.jpeg.webp?itok=UwtgKL2x",
      price: 3783,
      stock: 15,
      category: "Secos",
      featured: true,
    },
    {
      name: "Collar perro 53cm",
      description:
        "El collar para perro es un accesorio diseñado para brindar comodidad y seguridad a tu mascota.",
      image:
        "https://www.doggysmarket.com.co/wp-content/uploads/2025/02/Kong-Collar-Perro-Rojo.png",
      price: 185,
      stock: 30,
      category: "Collares",
      featured: false,
    },
    {
      name: "Comedero mascotas acero inoxidable",
      description: "Fabricado con acero inoxidable diseñado para durar.",
      image:
        "https://cdn11.bigcommerce.com/s-i8rmeakles/images/stencil/1280x1280/products/466/832/7404_Bella_Bowl_Classic_Espresso_D__86899.1654113396.jpg?c=1",
      price: 350,
      stock: 10,
      category: "Comedores",
      featured: true,
    },
    {
      name: "Juguete para perros de cuerda",
      description:
        "Un juguete resistente y duradero, ideal para jugar a tirar y aflojar con tu perro.",
      image:
        "https://mundomascota.uy/wp-content/uploads/2024/10/D_889841-MLU79747923601_102024-F.jpg",
      price: 150,
      stock: 25,
      category: "Juguetes",
      featured: false,
    },
  ];

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products con 3 productos únicos.");
};
