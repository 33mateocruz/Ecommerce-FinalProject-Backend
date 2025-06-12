const { Category } = require("../models");

module.exports = async () => {
  const categories = [
    // Alimentos (id: 1)
    { name: "Húmedos", category: 1 },
    { name: "Secos", category: 1 },

    // Casillas / Camas (id: 2)
    { name: "Casillas de exterior", category: 2 },
    { name: "Casillas de interior", category: 2 },
    { name: "Camas", category: 2 },

    // Arnés / Collares / Correas (id: 3)
    { name: "Arneses, antitirones", category: 3 },
    { name: "Bozales", category: 3 },
    { name: "Collares", category: 3 },
    { name: "Correas", category: 3 },
    { name: "Chapitas identificatorias", category: 3 },
    { name: "Dispensador de bolsas", category: 3 },

    // Comederos / Bebederos (id: 5)
    { name: "Comederos", category: 5 },
    { name: "Comedero bebedero", category: 5 },
    { name: "Bebederos", category: 5 },
    { name: "Dispensadores automáticos", category: 5 },
    { name: "Fuentes de agua / Filtros", category: 5 },
    { name: "Contenedores de alimentos", category: 5 },

    // Educadores (id: 6)
    { name: "Educadores", category: 6 },
    { name: "Feromonas", category: 6 },

    // Higiene / Limpieza (id: 7)
    { name: "Bandejas sanitarias", category: 7 },
    { name: "Bolsas desechables", category: 7 },
    { name: "Higiene dental, oral", category: 7 },
    { name: "Toallitas húmedas", category: 7 },

    // Juguetes (id: 8)
    { name: "Cuerdas", category: 8 },
    { name: "Interactivos", category: 8 },
    { name: "Mordedores", category: 8 },
    { name: "Pelotas", category: 8 },
    { name: "Peluches", category: 8 },
    { name: "Otros", category: 8 },

    // Peluquería / Cosméticos (id: 9)
    { name: "Perfumes, talcos", category: 9 },
    { name: "Shampoo, acondicionador", category: 9 },
    { name: "Cepillos, peines", category: 9 },
    { name: "Manoplas", category: 9 },

    // Puertas / Caniles / Corrales (id: 10)
    { name: "Puertas", category: 10 },
    { name: "Corrales", category: 10 },

    // Ropa (id: 11)
    { name: "Botas", category: 11 },
    { name: "Capitas", category: 11 },
    { name: "Cuellitos", category: 11 },
    { name: "Salidas de baño", category: 11 },

    // Salud (id: 12)
    { name: "Desparasitantes", category: 12 },
    { name: "Pulgas, garrapatas (Collar, pipetas, pastilla)", category: 12 },
  ];

  await Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de Categories.");
};
