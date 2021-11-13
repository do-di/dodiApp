const jwt = require('jsonwebtoken')
const db = require("../models");
const User = db.users;
const fs = require('fs')
const auth = async(req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ','');
    var publickey = fs.readFileSync('./Public.key');
    try{
        var decoded = jwt.verify(token,publickey);
        const user = await User.findByPk(decoded.iss)
        if(!user){
            throw new Error()
        }
        req.user = user
    }catch(err){
        res.send({
            message:"authentication failed"
        })
    }
    next();
}

module.exports = auth