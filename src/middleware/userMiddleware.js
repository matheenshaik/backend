const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")

const tokenMid = async function (req, res, next) {

    let token = req.headers["x-auth-token"]
    if (!token) {
        return res.send({ status: false, alert: "token invalied" })

    }


    let userToken = jwt.verify(token, "secure Secret_code") 
    if(!userToken){
        return res.send({status:false, token:"Invalidtoken"})
    }


let userId = userToken.userId
   let user = req.params.userId
   if(user!= userId){
    return res.send({status:false, user:"user not valied"})
   } 
    next()
}


module.exports.tokenMid = tokenMid