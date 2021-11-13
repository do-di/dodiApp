const product = require("../controllers/product.controller");
let router = require("express").Router();
module.exports = app => {
    
    router.get("/",product.getProduct);

    router.post("/create",product.create);

    router.get("/getProductWithCategory",product.getProductWithCategory)

    app.use("/api/products", router);
}