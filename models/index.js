const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    logging: false,
  },
);

const AdminUser = require("./adminUser");
const User = require("./User");
const Product = require("./products");
const Order = require("./order");
const Category = require("./categories");
const OrderProduct = require("./OrderProducts");

const models = {
  AdminUser: AdminUser.initModel(sequelize),
  User: User.initModel(sequelize),
  Product: Product.initModel(sequelize),
  Order: Order.initModel(sequelize),
  Category: Category.initModel(sequelize),
  OrderProduct: OrderProduct.initModel(sequelize),
};

Object.values(models).forEach((model) => {
  if (typeof model.associate === "function") {
    model.associate(models);
  }
});

module.exports = { ...models, sequelize };
