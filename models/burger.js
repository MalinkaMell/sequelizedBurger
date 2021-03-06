module.exports = function (sequelize, DataTypes) {
  let Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    } 
  });
  Burger.associate = function (models) {
    models.Burger.belongsTo(models.Customer);
};
  return Burger;
};