module.exports = function (sequelize, DataTypes) {
    let Customer = sequelize.define("Customer", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        }
    });
    Customer.associate = function (models) {
        models.Customer.hasOne(models.Burger);
    };
    return Customer;
};