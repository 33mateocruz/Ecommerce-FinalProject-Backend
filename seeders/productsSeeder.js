const { Product, sequelize } = require("../models");

module.exports = async () => {
  await Product.destroy({ where: {} });
  await sequelize.query("ALTER TABLE products AUTO_INCREMENT = 1");

  const products = [
    {
      name: "Camperita Impermeable Azul",
      description: "Con capucha y cierre. Repele el agua.",
      image: "https://mascotasmimadas.com.uy/wp-content/uploads/2024/06/IM-ROPA-4104-portada.png",
      price: 950,
      stock: 25,
      category: 7, // Ropa (antes 26)
      featured: true,
    },
    {
      name: "Sweater de Lana Rojo",
      description: "Calentito y hecho a mano.",
      image: "https://www.tusmascotas.cl/wp-content/uploads/2022/04/chaleco-rojo-.png",
      price: 1100,
      stock: 25,
      category: 7, // Ropa
      featured: true,
    },
    {
      name: "Remera Veraniega Rayada",
      description: "Tela liviana, fresca para verano.",
      image: "https://freeimghost.net/images/2025/06/25/images-removebg-preview.png",
      price: 750,
      stock: 25,
      category: 7, // Ropa
      featured: true,
    },
    {
      name: "Disfraz de Abejita",
      description: "Con alas y antenas, adorable para fotos.",
      image:
        "https://png.pngtree.com/png-clipart/20231122/original/pngtree-dog-wearing-bee-costume-black-picture-image_13275958.png",
      price: 1200,
      stock: 25,
      category: 7, // Ropa
      featured: true,
    },
    {
      name: "Botitas Antideslizantes",
      description: "Para el pavimento caliente o húmedo.",
      image: "https://per-ros.com/productos/botitas%20(1)-27.png",
      price: 890,
      stock: 25,
      category: 3, // Accesorios (antes 25)
      featured: true,
    },
    {
      name: "Capa Batman para Perros",
      description: "Disfraz con velcro, súper héroe peludo.",
      image: "https://img.chilango.com/2019/10/Captura-de-Pantalla-2019-10-29-a-las-18.34.26.png",
      price: 1300,
      stock: 25,
      category: 7, // Ropa
      featured: true,
    },
    {
      name: "Pañuelo Estilo Cowboy",
      description: "Accesorio cómodo y estiloso.",
      image:
        "https://png.pngtree.com/png-clipart/20250109/original/pngtree-cowboy-bandana-isolated-white-backdrop-png-image_18970791.png",
      price: 390,
      stock: 25,
      category: 3, // Accesorios (antes 27)
      featured: true,
    },
    {
      name: "Chaleco de Polar Gris",
      description: "Abriga sin molestar el movimiento.",
      image:
        "https://freeimghost.net/images/2025/06/25/il_300x300.6490680454_s82u-removebg-preview.png",
      price: 980,
      stock: 25,
      category: 7, // Ropa
      featured: true,
    },
    {
      name: "Camiseta Messi para Mascotas",
      description: "¡Para los fanas del fútbol!",
      image:
        "https://freeimghost.net/images/2025/06/25/remera-argentina1-04b04f33c2f1fb6e6816691505601044-640-0-removebg-preview.png",
      price: 1400,
      stock: 25,
      category: 7, // Ropa
      featured: true,
    },
    {
      name: "Capa de Lluvia Transparente",
      description: "Se ajusta fácil, protege del agua.",
      image: "https://http2.mlstatic.com/D_NQ_NP_648127-MLU84103751139_042025-O.webp",
      price: 890,
      stock: 25,
      category: 7, // Ropa
      featured: true,
    },
    {
      name: "Jardinerito de Jean",
      description: "Ropa de paseo con estilo canchero.",
      image: "https://http2.mlstatic.com/D_NQ_NP_692935-MLU73066826549_112023-O.webp",
      price: 1250,
      stock: 25,
      category: 7, // Ropa
      featured: true,
    },
    {
      name: "Bufanda de Tejido Suave",
      description: "Complemento ideal para invierno.",
      image: "https://m.media-amazon.com/images/I/61PZblIY9xL._AC_UF894,1000_QL80_.jpg",
      price: 520,
      stock: 25,
      category: 3, // Accesorios
      featured: true,
    },
    {
      name: "Vestido Floral",
      description: "Para perritas con onda veraniega.",
      image: "https://m.media-amazon.com/images/I/71HSgl9eZlL.jpg",
      price: 970,
      stock: 25,
      category: 7, // Ropa
      featured: true,
    },
    {
      name: "Pijama para Mascotas",
      description: "Suave, ideal para dormir calentitos.",
      image: "https://http2.mlstatic.com/D_NQ_NP_941420-MLU51024289085_082022-O.webp",
      price: 1140,
      stock: 25,
      category: 7, // Ropa
      featured: true,
    },
    {
      name: "Buzo de Unicornio",
      description: "Con capucha con cuernito incluido.",
      image: "https://m.media-amazon.com/images/I/61XhSQaLV2L.jpg",
      price: 1320,
      stock: 25,
      category: 7, // Ropa
      featured: true,
    },
    {
      name: "Conjunto Deportivo Mini",
      description: "Para look casual y cómodo.",
      image:
        "https://freeimghost.net/images/2025/06/25/bdd8cd9a868f5b6aba8f319d9bacc92d-removebg-preview.png",
      price: 990,
      stock: 25,
      category: 7, // Ropa
      featured: true,
    },
    {
      name: "Gorro de Lluvia",
      description: "Protege la cabecita del agua.",
      image:
        "https://frenchiemania.com/wp-content/uploads/2022/04/como-proteger-perro-lluvia-gorros-impermeables-para-perros-2.jpg",
      price: 430,
      stock: 25,
      category: 3, // Accesorios
      featured: true,
    },
    {
      name: "Kimono para Mascotas",
      description: "Estilo oriental con tela liviana.",
      image: "https://m.media-amazon.com/images/I/71nOKambE3L._AC_UF894,1000_QL80_.jpg",
      price: 1500,
      stock: 25,
      category: 7, // Ropa
      featured: true,
    },
    {
      name: "Disfraz de Dinosaurio",
      description: "Con cresta y cola, ¡súper divertido!",
      image: "https://m.media-amazon.com/images/I/71SrAD1aCYL._AC_UF1000,1000_QL80_.jpg",
      price: 1380,
      stock: 25,
      category: 7, // Ropa
      featured: true,
    },
    {
      name: "Parka Reversible",
      description: "Dos estilos en uno, resistente y abrigada.",
      image:
        "https://cdnx.jumpseller.com/alo-mascotas/image/25122293/e2176496840fb9f9071cc08f1c119315.jpg?1658115894",
      price: 1650,
      stock: 25,
      category: 7, // Ropa
      featured: true,
    },
    {
      name: "Pelota de Goma con Sonido",
      description: "Mordible y sonora, ideal para jugar.",
      image:
        "https://png.pngtree.com/png-vector/20230915/ourmid/pngtree-red-inflatable-rubber-ball-inflatable-png-image_9244542.png",
      price: 430,
      stock: 25,
      category: 8, // Juguetes (antes 20)
      featured: true,
    },
    {
      name: "Cuerda con Nudos",
      description: "Fuerte, perfecta para tirar y morder.",
      image:
        "https://www.americanpet.com.uy/images/virtuemart/product/resized/IMG_0679_640x640.png",
      price: 390,
      stock: 25,
      category: 8, // Juguetes (antes 17)
      featured: true,
    },
    {
      name: "Huesito de Plástico Duro",
      description: "Duradero y alivia el estrés.",
      image:
        "https://pet-health-content-media.chewy.com/wp-content/uploads/2025/04/16213146/202504bec-Orbbe-tuff-dog-toy.png",
      price: 460,
      stock: 25,
      category: 8, // Juguetes (antes 19)
      featured: true,
    },
    {
      name: "Peluchito con Chillido",
      description: "Suave y chillón, ideal para cachorros.",
      image:
        "https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-squeaky-toys-isolated-on-a-transparent-background-png-image_15807162.png",
      price: 510,
      stock: 25,
      category: 8, // Juguetes (antes 21)
      featured: true,
    },
    {
      name: "Disco Volador para Perros",
      description: "Flexible, divertido para correr.",
      image: "https://pngimg.com/d/frisbee_PNG6.png",
      price: 580,
      stock: 25,
      category: 8, // Juguetes (antes 22)
      featured: true,
    },
    {
      name: "Kong Clásico Rojo",
      description: "Rellenable con premios, súper resistente.",
      image:
        "https://www.petland.ca/cdn/shop/files/kong-kong-classic-dog-toy-29509678170214.png?v=1691378832",
      price: 1650,
      stock: 25,
      category: 8, // Juguetes
      featured: true,
    },
    {
      name: "Pelota Dental",
      description: "Con textura que limpia los dientes.",
      image:
        "https://www.woowguau.mx/cdn/shop/products/4680_Imagen1__52967_zoom_512x512.png?v=1602537723",
      price: 690,
      stock: 25,
      category: 8, // Juguetes
      featured: true,
    },
    {
      name: "Ratita de Tela",
      description: "Para perros pequeños o Gatitos, liviana y chillona.",
      image:
        "https://png.pngtree.com/png-vector/20240807/ourmid/pngtree-more-less-or-equal-with-cute-pet-toys-png-image_13149917.png",
      price: 350,
      stock: 25,
      category: 8, // Juguetes
      featured: true,
    },
    {
      name: "Túnel de Juego Plegable",
      description: "Para perros pequeños y medianos.",
      image:
        "https://png.pngtree.com/png-clipart/20250424/original/pngtree-a-pet-toy-tunnel-with-fabric-design-care-product-png-image_20779555.png",
      price: 1950,
      stock: 25,
      category: 8, // Juguetes
      featured: true,
    },
    {
      name: "Mordillo Helado",
      description: "Ideal para aliviar encías en cachorros.",
      image:
        "https://s3-sa-east-1.amazonaws.com/mispichos.com.ar/mp_images/desktop_can-cat-paleta-mordillo-ice_935",
      price: 720,
      stock: 25,
      category: 8, // Juguetes
      featured: true,
    },
    {
      name: "Zanahoria de Felpa",
      description: "Diseño simpático con sonido interno.",
      image:
        "https://png.pngtree.com/png-clipart/20220927/original/pngtree-3dc4d-three-dimensional-plush-fruits-and-vegetables-carrots-png-image_8637568.png",
      price: 540,
      stock: 25,
      category: 8, // Juguetes
      featured: true,
    },
    {
      name: "Anillo de Goma Fuerte",
      description: "Para juegos de tracción con humanos.",
      image: "https://petslovers.es/1114-thickbox_default/barry-king-anillo-de-goma-macizo.jpg",
      price: 630,
      stock: 25,
      category: 8, // Juguetes
      featured: true,
    },
    {
      name: "Set de Pelotas Pequeñas",
      description: "Paquete con 3 mini pelotas resistentes.",
      image:
        "https://png.pngtree.com/png-vector/20240317/ourmid/pngtree-colorful-toy-balls-png-image_11989170.png",
      price: 870,
      stock: 25,
      category: 8, // Juguetes
      featured: true,
    },
    {
      name: "Juguete Interactivo Dispensador",
      description: "Suelta premios al girar.",
      image:
        "https://inventario-petuniverse.s3.amazonaws.com/product_pics/numbell_dispensador_bolsa_celeste_sin_fondo.png",
      price: 480,
      stock: 25,
      category: 8, // Juguetes (antes 18)
      featured: true,
    },
    {
      name: "Conejito de Cuerda",
      description: "Textura y forma divertida para jugar.",
      image:
        "https://png.pngtree.com/png-clipart/20240227/original/pngtree-wind-up-vintage-toy-rabbit-material-photo-png-image_14427971.png",
      price: 430,
      stock: 25,
      category: 8, // Juguetes
      featured: true,
    },
    {
      name: "Juguete en Forma de Donut",
      description: "Mordible y con aroma a vainilla.",
      image:
        "https://static.vecteezy.com/system/resources/previews/015/310/780/non_2x/donut-stacking-toy-with-transparent-background-png.png",
      price: 500,
      stock: 25,
      category: 8, // Juguetes
      featured: true,
    },
    {
      name: "Pez Mordedor",
      description: "Juguete con aletas móviles y chillón.",
      image:
        "https://png.pngtree.com/png-clipart/20231213/original/pngtree-fish-toy-character-of-finding-nemo-black-photo-png-image_13833691.png",
      price: 580,
      stock: 25,
      category: 8, // Juguetes
      featured: true,
    },
    {
      name: "Pulpo de Tela con Patitas",
      description: "Con múltiples texturas y sonido.",
      image:
        "https://www.castaburdeos.com.mx/cdn/shop/files/juguete_forma_de_pulpo_para_mascota_3475.png?v=1699466811",
      price: 670,
      stock: 25,
      category: 8, // Juguetes
      featured: true,
    },
    {
      name: "Lanzador de Pelotas",
      description: "Incluye pelota. Perfecto para exteriores.",
      image: "https://fancypets.mx/IMAGENES/FANCY%20PETS/1000x1000_72_png/FL9422/FL9422_E.png",
      price: 880,
      stock: 25,
      category: 8, // Juguetes
      featured: true,
    },
    {
      name: "Pelota LED con Movimiento",
      description: "Se mueve sola e ilumina. Estimula el juego.",
      image:
        "https://www.somoswapp.com.ar/media/catalog/product/cache/4e187a3216125186f353d1ef896e6af4/p/e/pelota_huella_led_combinada.png",
      price: 2100,
      stock: 25,
      category: 8, // Juguetes
      featured: true,
    },
    // Alimentos (todos category: 1)
    {
      name: "DogChow Adulto Razas Medianas",
      description: "Con proteínas de alta calidad y antioxidantes naturales.",
      image: "",
      price: 1450,
      stock: 25,
      category: 1, // Alimentos
      featured: true,
    },
    {
      name: "Purina Pro Plan Cordero y Arroz",
      description: "Con proteína de cordero y arroz para una mejor digestión.",
      image: "https://static.wixstatic.com/media/2c05ab_fcea9b9c10754e3e9e3fd2eeb1df425f~mv2.jpg",
      price: 1747,
      stock: 25,
      category: 1,
      featured: true,
    },
    {
      name: "Royal Canin Maxi Adult",
      description: "Formulado para perros grandes con alta energía.",
      image:
        "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/2022-04/pp-promo-maxi-adult.jpg",
      price: 1557,
      stock: 25,
      category: 1,
      featured: true,
    },
    {
      name: "Eukanuba Cachorro Razas Pequeñas",
      description: "Nutrición completa para el desarrollo del cachorro.",
      image:
        "https://www.eukanuba.com/sites/g/files/qyyrlu426/files/styles/product_image/public/media/images/product-images/puppy_small_breed.jpg",
      price: 1505,
      stock: 25,
      category: 1,
      featured: true,
    },
    {
      name: "Dog Selection Premium Adulto",
      description: "Contiene Omega 3 y 6 para un pelaje brillante.",
      image: "https://www.agrosuni.com/wp-content/uploads/2021/09/dog-selection-premium-adulto.jpg",
      price: 1520,
      stock: 25,
      category: 1,
      featured: true,
    },
    {
      name: "Pedigree Adulto Carne y Vegetales",
      description: "Sabores naturales que encantan a tu mascota.",
      image:
        "https://jumbo.vtexassets.com/arquivos/ids/677812-800-auto?v=638206330145030000&width=800&height=auto&aspect=true",
      price: 1511,
      stock: 25,
      category: 1,
      featured: true,
    },
    {
      name: "Nutribon Alimento Balanceado",
      description: "Balanceado con vitaminas y minerales esenciales.",
      image: "https://nutribon.com.ar/wp-content/uploads/2021/07/Nutribon-Premium-Adulto-Carne.jpg",
      price: 1389,
      stock: 25,
      category: 1,
      featured: true,
    },
    {
      name: "Excellent Pollo y Arroz",
      description: "Con prebióticos para salud digestiva.",
      image:
        "https://www.excellentpet.com.ar/sites/default/files/styles/product/public/2020-11/EXC-ADULTO.png",
      price: 1595,
      stock: 25,
      category: 1,
      featured: true,
    },
    {
      name: "Old Prince Natural Gourmet",
      description: "Alimento gourmet sin colorantes artificiales.",
      image:
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/365/001/products/old-prince-gourmet-natural1-b99973fd06f1bafad816287144118916-640-0.jpg",
      price: 1678,
      stock: 25,
      category: 1,
      featured: true,
    },
    {
      name: "Raza Perros Medianos",
      description: "Fácil de masticar y alto en nutrientes.",
      image:
        "https://cdn.ferrini.com.uy/media/catalog/product/cache/09e6b8491d7f3f3b6a7d7a012d04ffeb/8/4/8410650296505_1.jpg",
      price: 1643,
      stock: 25,
      category: 1,
      featured: true,
    },
    {
      name: "Whiskas Adulto Carne",
      description: "Para gatos exigentes, sabor carne irresistible.",
      image: "https://whiskas.cl/sites/g/files/fnmzdf211/files/2022-03/7702026173657.png",
      price: 1777,
      stock: 25,
      category: 1,
      featured: true,
    },
  ];

  await Product.bulkCreate(products);
  console.log("[Database] Seeder ejecutado: productos insertados.");
};
