const category = require("../controllers/category.controller");
let router = require("express").Router();
module.exports = app => {
    
    router.get("/",category.getCategory);

    router.post("/create",category.create);


    app.use("/api/categories", router);
}