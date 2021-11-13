const db = require("../models");
const Prodcut = db.products;

exports.getProduct = (req, res) => {
    Prodcut.findAll()
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
    
    const product = {
        name: req.body.name,
        price: req.body.price,
        categoryId: req.body.categoryId,
    }
    Prodcut.create(product)
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

exports.getProductWithCategory = (req, res) => {

    Prodcut.findAll({include : ["category"]})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "something wrong"
        })
    });
}