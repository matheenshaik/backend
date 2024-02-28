const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")

const createOne = async function (req, res){
    let data = req.body
    let create = await userModel.create(data)
    res.send({created:create, status:true})
}
const loginBro = async function(req,res){
    let id = req.body.emailId
    let password = req.body.password
    let login = await userModel.findOne({emailId:id,password:password})
    if(!login) res.send({alert:"login denied"})
    res.send({login:login, status:true})

    let auth = jwt.sign(
    {
        tokenId: login._id.toString(),
        name:'Hello world!'         
    },"secureOne code" )
      req.setHeader['x-auth-token',auth]
    res.send({status:true, Token:auth });

}

module.exports.createOne = createOne
module.exports.loginBro = loginBro