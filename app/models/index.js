const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.categories = require("./category.model")(sequelize, Sequelize);
db.products = require("./product.model")(sequelize, Sequelize);

db.orders = require("./order.model")(sequelize,Sequelize)
db.orderDetails = require("./orderDetails.model")(sequelize, Sequelize)


db.orderDetails.belongsTo(db.products, {
    foreignKey: 'productId',
    as: 'product'
})

db.orderDetails.belongsTo(db.orders, {
    foreignKey: 'orderId',
    as: 'order'
})

db.products.hasMany(db.orderDetails, {as : "order_product"})
db.orders.hasMany(db.orderDetails, {as : "order_product"})

db.categories.hasMany(db.products, {as : "products"});
db.products.belongsTo(db.categories, {
    foreignKey: "categoryId",
    as: "category",
});
db.users.hasMany(db.orders, {as : "orders"});
db.orders.belongsTo(db.users, {
    foreignKey: "userId",
    as: "User"
})


module.exports = db;