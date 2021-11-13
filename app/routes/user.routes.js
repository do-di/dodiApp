module.exports = app => {
    const users = require("../controllers/user.controller.js");
    const auth = require('../middleware/auth')

    var router = require("express").Router();

    // Create a new user
    router.post("/create",users.create);
    router.get("/",auth,users.getUser);
    app.use('/api/users',router);
}