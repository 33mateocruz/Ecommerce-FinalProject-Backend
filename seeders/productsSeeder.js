const { Product, sequelize } = require("../models");

module.exports = async () => {
  await Product.destroy({ where: {} });

  await sequelize.query("ALTER TABLE products AUTO_INCREMENT = 1");

  const products = [
    {
      id: 1,
      name: "EQUILIBRIO Cachorro 15kg",
      description: "Alimento completo diseñado para perros en fase de crecimiento...",
      image:
        "https://purina.com.uy/sites/default/files/styles/webp/public/2022-09/ADULTOS%20PERROS%20MINIS%20Y%20PEQUEN%CC%83OS-dog-chow-frente.jpeg.webp?itok=UwtgKL2x",
      price: 3783,
      stock: 15,
      category: "Secos",
      featured: true,
    },
    {
      id: 2,
      name: "Collar perro 53cm",
      description: "El collar para perro es un accesorio diseñado para brindar comodidad...",
      image:
        "https://www.doggysmarket.com.co/wp-content/uploads/2025/02/Kong-Collar-Perro-Rojo.png",
      price: 185,
      stock: 30,
      category: "Collares",
      featured: false,
    },
    {
      id: 3,
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
      id: 4,
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

  console.log("[Database] Seeder de Products ejecutado: productos eliminados y IDs reiniciados.");
};
