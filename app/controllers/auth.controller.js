const db = require("../models")
const User = db.users
// const Op = db.Sequelize.Op
const bcrypt = require("bcrypt")
const fs = require("fs");
const jwt = require("jsonwebtoken")

exports.attempt = async (req,res) => {
    const email = req.body.email
    const password = req.body.password
    if(!email || !password){
        res.status(400).send({
            message : "Content can be not empty"
        })
        return
    }
    const user = await User.findOne({ where: {email : email}});
    if(user){
        const validPassword = await bcrypt.compare(req.body.password,user.password)
        if(validPassword){
            token = createJWTToken(user)
            res.status(200).json({jwt : token})
            return;
        }
        res.status(400).json({error: "Password is not match"});
        return;
    } 
    res.status(401).json({error: "User does not exist"});
    return
};

function createJWTToken(user){
    var privatekey = fs.readFileSync('./Private.key')
    var payload = {
        iss : user.id,
        name : user.name,
        exp : Math.floor(Date.now() / 1000) + (60 * 60)
    }

    var token = jwt.sign(payload,privatekey,{algorithm: 'RS256'})
    return token;
}

