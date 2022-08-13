const UserModel= require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }



const createBook = async function (req, res) {
    let book= req.body
    let info= await UserModel.create(book)
    res.send({note: info})
}
const getBookInfo = async function (req, res) {
    let list= await UserModel.find()
    res.send({note: list})
}

module.exports.createBook= createBook
module.exports.getBookInfo = getBookInfo 