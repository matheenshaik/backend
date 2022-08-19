const BookModel= require("../models/bookModel.js")

const info = async function(req, res){
    let data = req.body
    let savedOn= await BookModel.create(data)
    res.send({info: savedOn})
}

const getBook = async function(req, res){
    let list= await BookModel.find() 
    res.send({note: list})
}

const getParticularBook = async function(req, res){
    let books= await BookModel.find({}) 
    res.send({note: books})
}

const BookYear = async function(req, res){
    let bookYear = req.query.Year
    let years= await BookModel.find({year:{ $eq: bookYear }})
    res.send({note: years})
}

 const getXINRBooks = async function(req, res){
    let price  = await BookModel.find({"price.IndianPrice":{$in: ["rs 100","rs 200"]}})
    res.send({Books: price})
 }

 const getRandomBooks = async function(req, res){
    let books  = await BookModel.find({$or:[{ stockAvailable: true}, {totalPage:{$gt: 500}}]})
    res.send({Books: books})
 }

module.exports.info= info
module.exports.getBook = getBook
module.exports.BookYear = BookYear
module.exports.ParticularBook = getParticularBook
module.exports.price = getXINRBooks
module.exports.RandomBooks = getRandomBooks 