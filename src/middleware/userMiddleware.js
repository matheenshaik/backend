const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")

const token = async function(req,res,next){

    let jwt = req.headers["x-auth-token"]
if(!jwt){
    return res.send({status:false, alert:"token invalied"})
    
}

let userId = req.params.userId

let validate = jwt.verify(jwt,"secure Secret_code")
if(validate.userId != userId){
    return res.send({status:false, alert:"token invalied"})
}
next()
}


module.exports.token = token