
<body style="font-family: Arial, sans-serif; line-height: 1.6; background: #fff; color: #333; padding: 20px; max-width: 800px; margin: auto;">
  <h1>🐾 Maison Pet - Backend (Ecommerce-FinalProject-Backend)</h1>

  <p>Este repositorio contiene el backend de <strong>Maison Pet</strong>, una tienda en línea especializada en productos y servicios para mascotas. Desarrollado con Node.js y Express, este sistema se encarga de gestionar todos los recursos necesarios para el funcionamiento del ecommerce, incluyendo productos, categorías, usuarios y autenticación.</p>

  <h2>🚀 Tecnologías utilizadas</h2>
  <ul>
    <li><strong>Node.js</strong> – entorno de ejecución para JavaScript.</li>
    <li><strong>Express.js</strong> – framework minimalista para construcción de APIs REST.</li>
    <li><strong>Sequelize</strong> – ORM para interacción con bases de datos SQL.</li>
    <li><strong>PostgreSQL</strong> – base de datos relacional.</li>
    <li><strong>CORS / Dotenv / Morgan</strong> – middlewares para seguridad, entorno y logs.</li>
  </ul>

  <h2>🗂️ Estructura del proyecto</h2>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 4px solid #ccc;">
📁 src
├── controllers        # Lógica de manejo de peticiones
├── models             # Modelos de base de datos (Sequelize)
├── routes             # Rutas de la API REST
├── database           # Conexión y configuración de Sequelize
├── middlewares        # Middlewares personalizados
└── app.js             # Configuración principal del servidor
  </pre>

  <h2>🔧 Funcionalidades principales</h2>
  <ul>
    <li>📦 <strong>Gestión de productos</strong>: listado, creación, actualización y eliminación.</li>
    <li>🏷️ <strong>Categorías</strong>: clasificación de productos por tipo (alimentos, ropa, juguetes, etc).</li>
    <li>👤 <strong>Usuarios</strong>: creación de cuentas, login y manejo básico.</li>
    <li>🛒 <strong>Lógica preparada para integración con frontend</strong>.</li>
  </ul>

  <p>👉 Para ver el frontend del proyecto, podés visitar el repositorio hermano: <a href="https://github.com/33mateocruz/Ecommerce-Frontend-part" target="_blank">Maison Pet - Frontend</a></p>
</body>
</html>
