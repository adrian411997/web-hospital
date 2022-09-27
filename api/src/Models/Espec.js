const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "espec",
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
    },
    { timestamps: false }
  );
};
