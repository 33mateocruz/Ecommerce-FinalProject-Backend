"use strict";

// Esto es con datos default que le pedi al chat q me diera desp lo hacemos con los datos posta
// esto es para tener ya la estructura mas o menos echa
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: 'Smart TV 55"',
          description: "Ultra HD 4K Smart TV with HDR support.",
          image: "https://example.com/images/tv55.jpg",
          price: 499.99,
          stock: 15,
          category: "Image",
          featured: true,
        },
        {
          name: "Bluetooth Speaker",
          description: "Portable speaker with deep bass and 12h battery.",
          image: "https://example.com/images/speaker.jpg",
          price: 89.99,
          stock: 30,
          category: "Sound",
          featured: false,
        },
        {
          name: "Air Conditioner 3000W",
          description: "Energy-efficient air conditioner for medium rooms.",
          image: "https://example.com/images/ac3000.jpg",
          price: 329.99,
          stock: 10,
          category: "Climate",
          featured: true,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
