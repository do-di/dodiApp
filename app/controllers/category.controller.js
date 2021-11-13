const db = require("../models");
const Category = db.categories;

exports.getCategory = (req, res) => {
    Category.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message : "something wrong"
        });
    })
}

exports.create = (req, res) => {
    if(!req.body.name){
        return res.send({
            message : "Content not be empty"
        });
    }
    
    const category = {
        name: req.body.name
    }
    Category.create(category)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Can not create user"
        });
    })
}