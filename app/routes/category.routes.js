const category = require("../controllers/category.controller");
let router = require("express").Router();
const auth = require('../middleware/auth')

module.exports = app => {
    
    router.get("/",category.getCategory);

    router.post("/create",auth,category.create);

    app.use("/api/categories", router);
}