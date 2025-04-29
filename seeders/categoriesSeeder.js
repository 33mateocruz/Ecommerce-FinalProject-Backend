const { Categories } = require("../models");

module.exports = async () => {
  const categories = [
    {
      name: "Top-half",
      category: 1,
    },
    {
      name: "Bottom-half",
      category: 2,
    },
    {
      name: "footwear",
      category: 3,
    },
    {
      name: "Accesories",
      category: 4,
    },
  ];
  console.log(Categories);
  await Categories.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de Categories.");
};
