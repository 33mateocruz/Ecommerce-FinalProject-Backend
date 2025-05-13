const { Model, DataTypes } = require("sequelize");

class Category extends Model {
  static initModel(sequelize) {
    Category.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        category: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            min: 1,
          },
        },
      },
      {
        sequelize,
        modelName: "category",
        tableName: "categories",
        timestamps: true,
      },
    );

    return Category;
  }
}

module.exports = Category;
