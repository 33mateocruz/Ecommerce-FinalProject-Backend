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
        items: {
          type: DataTypes.JSON,
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
}

module.exports = Order;
