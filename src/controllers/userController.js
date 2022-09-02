const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")


const userIs = async function (req, res) {
  try {
    let data = req.body
    if (Object.keys(data) != 0) {
      let userData = await userModel.create(data)
      res.status(200).send({ User: userData })      //successfull(200)
    }

    else res.status(400).send({msg:"Bad Request"})  //client error(400)
  }

  catch (error) {
    console.log("This is Error:-", error.message)
    res.status(500).send({ msg:"Error", error:error.message })   //server error(500)
  }
}


const login = async function (req, res){
 try{ 
  let loginOn = req.body
  let emailId = loginOn.emailId
  let password = loginOn.password

  let userLogin = await userModel.findOne({ emailId: emailId, password: password })
  if (!userLogin) {
    return res.status(401).send({ status: false, alert: "data not recived" })  //client error(401)
  }

  let token = jwt.sign(
    //claims 
    {
      userId: userLogin._id.toString(),
      name: "Shaik.Matheen Ahamad",
      branch: "Mechanical",
      organization: "Function_up",
      cohort: "Back-End Development",
      batch: "plutonium",

    }, "secure Secret_code")
  res.setHeader['x-auth-token', token]
  res.status(200).send({ status: true, jwt: token }) //successfull(200)
  
} 

catch (error) {
  res.status(500).send({msg:error.message}) //server error(500)
}
}


const UserData = async function (req, res) {
  try{
let userData = req.params.userId
  let UserDetails = await userModel.findById(userData)
  if (!UserDetails) {
    return res.status(404).send({ status: false, details: "no exist data" }) //client error(404) 
  }
  res.status(200).send({ msg: UserDetails })
  }
  catch(error){
    res.status(500).send({msg:error.message})
  }
  
  
}

const updateData = async function (req, res) {
 try{ let user = req.body
  let data = req.params.userId
  let userUp = await userModel.findById(data).select({ _id: 1 })
  if (!userUp) {
    return res.status(404).send({ status: false, data: "user does't exists" })
  }

  let update = await userModel.findOneAndUpdate({ _id: userUp._id }, { $set: user }, { new: true })
  if (!update) {
    return res.status(401).send({ status: false, update: "data not updated" })
  }
  res.status(200).send({ status: true, msg: update })
}
catch(error){
  res.status(500).send({msg:error.message})
}
}

const deleteData = async function (req, res) {
 try{ let data = req.params.userId
  if (!data) {
    return res.status(404).send({ status: false, data: "user not existed" })
  }
  let deleted = await userModel.findByIdAndUpdate({ _id: data }, { $set: { isDeleted: true } }, { new: true })
  res.status(200).send({ status: true, msg: deleted })
}
catch(error){
  res.status(500).send({msg:error.message})
}
}



module.exports.userIs = userIs
module.exports.login = login
module.exports.UserData = UserData
module.exports.updateData = updateData
module.exports.deleteData = deleteData