const { Model, DataTypes } = require("sequelize");

class Pedido extends Model {
  static initModel(sequelize) {
    Pedido.init(
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
        modelName: "pedido", // Nombre del modelo en singular y en minúscula.
      },
    );

    return Pedido;
  }
}

module.exports = Pedido;
