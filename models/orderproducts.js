const { Model, DataTypes } = require("sequelize");

class OrderProducts extends Model {
  static initModel(sequelize) {
    OrderProducts.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        orderId: {
          type: DataTypes.BIGINT.UNSIGNED,
          allowNull: false,
        },
        productId: {
          type: DataTypes.BIGINT.UNSIGNED,
          allowNull: false,
        },
        productName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        productPrice: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            min: 1,
          },
        },
      },
      {
        sequelize,
        modelName: "OrderProducts",
        tableName: "order_products",
        timestamps: false, // Usualmente no hace falta timestamps aquí, pero se puede habilitar si quieres
      },
    );

    return OrderProducts;
  }

  static associate(models) {
    OrderProducts.belongsTo(models.Order, {
      foreignKey: "orderId",
      as: "order",
    });

    OrderProducts.belongsTo(models.Product, {
      foreignKey: "productId",
      as: "product",
    });
  }
}

module.exports = OrderProducts;
