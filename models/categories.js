const { Model, DataTypes } = require("sequelize");

class categories extends Model {
  static initModel(sequelize) {
    categories.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        category: {
          type: DataTypes.STRING,
          allowNull: false,
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
