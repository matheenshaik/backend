const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")


const userIs = async function(req, res){
  let data  = req.body 
  let userData = await UserModel.create(data)
  res.send({User:userData})
}

const login = async function(req,res){
  let loginOn = req.body
  let email = loginOn.emailId
  let password = loginOn.password
  
  let userLogin = await userModel.findOne({emailId:email, password:password})
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
      
    },
    "secure Secret_code"
  )
  res.send({status:true, jwt:token });
}

const UserData = async function(req,res){
  let userData = req.params.userId
  let UserDetails = await userModel.findById(userData)
  res.send({msg:UserDetails})
}

const updateData = async function(req,res){
  let user = req.body
  let data = req.params.userId
   let update = await userModel.findByIdAndUpdate({_id:data},{$set:user}, {new:true})
   res.send({status:true, msg:update})
}

const deleteData = async function(req,res){
  let data = req.params.userId
  let deleted = await userModel.findByIdAndUpdate({_id:data}, {$set:{isDeleted:true}}, {new:true})
  res.send({status:true, msg:deleted})
}




module.exports.userIs = userIs
module.exports.login = login
module.exports.UserData = UserData
module.exports.updateData = updateData
module.exports.deleteData = deleteData