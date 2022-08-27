const { count } = require("console")
const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")

const order= async function (req, res) {
    let order = req.body
    let user = order.user
    let product = order.product

    let userId=await userModel.findById(user)
    let productId=await productModel.findById(product)
    let header=req.headers.isfreeapp

    if(!user){
        return res.send({Alert:"User required"})
    }else if(!product){
        return res.send({Alert:"Product required"})
    }else if(!userId){
        return res.send({Alert:"UserId invalid"})
    }else if(!productId){
        return res.send({Alert:"ProductId invalid "})
    }

    if(header=='false'){
        let productP=await productModel.findById({_id:product}).select({_id:1,price:1})
        let proP=productP.price
        order.amount=proP

        let userA=userId.balance
        if(userA>proP){
          let  balanceOf=await userModel.findByIdAndUpdate({_id:user},{$inc:{balance:-proP}},{new:true}) 
          let userF=await userModel.findByIdAndUpdate({_id:user},{$set:{isFreeAppUser:false}},{new:true})         
          order.isFreeAppUser==false
          
            let orderIs=await orderModel.create(order)
            res.send(orderIs)

        }else{
            return req.send({Alert:"User balance insufficient"})
        }


    }else if(header=='true'){
        order.amount=0
        // order.isFreeAppUser==true
        let userT=await userModel.findByIdAndUpdate({_id:user},{$set:{isFreeAppUser:true}},{new:true})
        // console.log(userT)
        let orderIs=await orderModel.create(order)
            res.send(orderIs)
    }
  
}



module.exports.order = order












// const getBooksData = async function (req, res) {
//     let allBooks = await BookModel.find({ authorName: "HO" })
//     console.log(allBooks)
//     if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
//     else res.send({ msg: "No books found", condition: false })
// }

// const updateBooks = async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks = await BookModel.findOneAndUpdate(
//         { authorName: "ABC" }, //condition
//         { $set: data }, //update in data
//         { new: true, upsert: true } ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
//     )

//     res.send({ msg: allBooks })
// }

// const deleteBooks = async function (req, res) {
//     // let data = req.body 
//     let allBooks = await BookModel.updateMany(
//         { authorName: "FI" }, //condition
//         { $set: { isDeleted: true } }, //update in data
//         { new: true } ,
//     )

//     res.send({ msg: allBooks })
// }

// const totalSalesPerAuthor = async function (req, res) {
//     // let data = req.body 
//     let allAuthorSales = await BookModel.aggregate(
//         [
//             { $group: { _id: "$authorName", totalNumberOfSales: { $sum: "$sales" } } },
//             { $sort: { totalNumberOfSales: -1 } }
//         ]
//     )

//     res.send({ msg: allAuthorSales })
// }

// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE
// module.exports.createBook = createBook
// module.exports.getBooksData = getBooksData
// module.exports.updateBooks = updateBooks
// module.exports.deleteBooks = deleteBooks
// module.exports.totalSalesPerAuthor = totalSalesPerAuthor
