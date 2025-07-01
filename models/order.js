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
        userId: {
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
    Order.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    Order.hasMany(models.OrderProduct, { foreignKey: "orderId", as: "orderProducts" });
  }
}

module.exports = Order;
