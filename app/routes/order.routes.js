const order = require("../controllers/order.controller");
let router = require("express").Router();
const auth = require('../middleware/auth')
module.exports = app => {
    
    router.post("/orderProducts",auth,order.buyProducts);
    app.use("/api/orders", router);
}