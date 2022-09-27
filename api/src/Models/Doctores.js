const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "doctores",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      genero: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
