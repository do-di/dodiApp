
module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
        amount : {
            type: Sequelize.INTEGER
        },
    });

    return Order;
}