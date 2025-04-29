const { Model, DataTypes } = require("sequelize");

class AdminUser extends Model {
  static initModel(sequelize) {
    AdminUser.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        apellido: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
        contraseña: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "admin_user",
        tableName: "admin_users",
        timestamps: true,
      },
    );

    return AdminUser;
  }
}

module.exports = AdminUser;
