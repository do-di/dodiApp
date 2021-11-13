module.exports = app => {
    const auth = require("../controllers/auth.controller.js");
    var router = require("express").Router();

    router.post("/login",auth.attempt);

    app.use("/api/auth", router);
}