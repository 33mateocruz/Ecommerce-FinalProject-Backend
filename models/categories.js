const { Model, DataTypes } = require("sequelize");

class Categories extends Model {
  static initModel(sequelize) {
    Categories.init(
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

    return Categories;
  }
}

module.exports = Categories;
