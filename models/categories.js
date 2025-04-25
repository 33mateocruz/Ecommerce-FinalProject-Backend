const { Model, DataTypes } = require("sequelize");

class categories extends Model {
  static initModel(sequelize) {
    categories.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        category: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "category",
        tableName: "categories",
        timestamps: true,
      },
    );

    return categories;
  }
}

module.exports = categories;
