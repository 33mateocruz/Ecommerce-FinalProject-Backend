const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

// Requerir todos los modelos:
const User = require("./User");
const Products = require("./products");
const Order = require("./Order");
const Categories = require("./Categories");
const AdminUser = require("./adminUser");
// Inicializar todos los modelos:
AdminUser.initModel(sequelize);
User.initModel(sequelize);
Products.initModel(sequelize);
Order.initModel(sequelize);
Categories.initModel(sequelize);

// Establecer relaciones
Order.belongsTo(User, { foreignKey: "compradorId", as: "comprador" });
User.hasMany(Order, { foreignKey: "compradorId", as: "pedidos" });

/*
 * Luego de definir los modelos, se pueden establecer relaciones entre los
 * mismos (usando métodos como belongsTo, hasMany y belongsToMany)...
 *
 * Por ejemplo, si un User está relacionado con un Article, establecerlo
 * aquí abajo.
 */

module.exports = {
  sequelize,
  AdminUser,
  User,

  Products,
  Order,
  Categories,
};
