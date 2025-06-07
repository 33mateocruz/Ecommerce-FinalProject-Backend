const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        compradorId: {
          type: DataTypes.BIGINT.UNSIGNED,
          allowNull: false,
        },
        estado: {
          type: DataTypes.ENUM("pago pendiente", "rechazado", "pago", "en tránsito", "entregado"),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "order",
        tableName: "orders",
        timestamps: true,
      },
    );

    return Order;
  }

  static associate(models) {
    // Relación con User
    Order.belongsTo(models.User, {
      foreignKey: "compradorId",
      as: "buyer",
    });

    // Relación con productos (muchos a muchos)
    Order.belongsToMany(models.Product, {
      through: "OrderProducts",
      foreignKey: "orderId",
      otherKey: "productId",
      as: "products",
    });
  }
}

module.exports = Order;
