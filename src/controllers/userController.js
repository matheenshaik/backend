const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")


const userIs = async function(req, res){
  let data  = req.body 
  let userData = await userModel.create(data)
  res.send({User:userData})
}

const login = async function(req,res){
  let loginOn = req.body
  let emailId = loginOn.emailId
  let password = loginOn.password
  
  let userLogin = await userModel.findOne({emailId:emailId, password:password})
  if(!userLogin){
    return res.send({status:false, alert:"data not recived"})
  }
  
  let token = jwt.sign(
    //claims
    {
      userId: userLogin._id.toString(),
      name:"Shaik.Matheen Ahamad",
      branch: "Mechanical",
      organization:"Function_up",
      cohort:"Back-End Development",
      batch: "plutonium",
       
    },"secure Secret_code" )
  res.setHeader['x-auth-token',token]
  res.send({status:true, jwt:token });
}

const UserData = async function(req,res){
  let userData = req.params.userId
  let UserDetails = await userModel.findById(userData)
  if(!UserDetails){
    return res.send({status:false, details:"no exist data"})
  }
  res.send({msg:UserDetails})
}

const updateData = async function(req,res){
  let user = req.body
  let data = req.params.userId
  let userUp = await userModel.findById(data).select({_id:1})
  if(!userUp){
    return res.send({status:false,data:"user does't exists"})
  }

   let update = await userModel.findOneAndUpdate({_id:userUp._id},{$set:user}, {new:true})
   if(!update){
    return res,send({status:false, update:"data not updated"})
   }
   res.send({status:true, msg:update})
} 

const deleteData = async function(req,res){
  let data = req.params.userId
  if(!data){
    return res.send({status:false,data:"user not existed"})
  }
  let deleted = await userModel.findByIdAndUpdate({_id:data}, {$set:{isDeleted:true}}, {new:true})
  res.send({status:true, msg:deleted})
}




module.exports.userIs = userIs
module.exports.login = login
module.exports.UserData = UserData
module.exports.updateData = updateData
module.exports.deleteData = deleteData