const userRoutes = require("./userRoutes");
const exampleRoutes = require("./exampleRoutes");
const productRoutes = require("./productsRoutes");
const orderRoutes = require("./orderRoutes");
const authRoutes = require("./authRoutes");
const categoriesRoutes = require("./categoriesRoutes");

module.exports = (app) => {
  app.use("/users", userRoutes);
  app.use("/examples", exampleRoutes);
  app.use("/products", productRoutes);
  app.use("/orders", orderRoutes);
  app.use("/tokens", authRoutes);
  app.use("/categories", categoriesRoutes);
};
