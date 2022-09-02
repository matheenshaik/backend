const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")

const tokenMid = async function (req, res, next) {
try{
    let token = req.headers["x-auth-token"]
    if (!token) {
        return res.status(401).send({ status: false, alert: "token invalied" })

    }


    let userToken = jwt.verify(token, "secure Secret_code") 
    if(!userToken){
        return res.status(404).send({status:false, token:"Invalid token"})
    }


// let userId = userToken.userId
//    let user = req.params.userId
//    if(user!= userId){
//     return res.send({status:false, user:"user not valied"})
//    } 
    next()
} catch(error){
    res.status(500).send({msg:error.message})
}
}


module.exports.tokenMid = tokenMid