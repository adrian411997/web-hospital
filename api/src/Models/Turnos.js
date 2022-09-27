const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "turnos",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
