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
        nombreProducto: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cantidad: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            min: 1,
          },
        },
        precio: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          validate: {
            min: 0,
          },
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
