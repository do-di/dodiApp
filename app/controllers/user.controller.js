const db = require("../models");
const User = db.users;
// const Op = db.Sequelize.Op;
const bcrypt = require("bcrypt");
// Create and Save a user

exports.create = async (req, res) =>{
    if(!req.body.email || !req.body.password || !req.body.name){
        res.status(400).send({
            message: "Content can not be empty"
        });
        return;
    }
    var password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    

    const user = {
        email: req.body.email,
        password: password,
        name: req.body.name,
    };

    User.create(user)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while creating the user."
        });
    })
}

exports.getUser = (req, res) => {
    res.send(req.user)
}