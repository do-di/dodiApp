module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order_product", {
        quantity : {
            type : Sequelize.INTEGER
        },
    });
    Order.removeAttribute('id')
    
    return Order;
}