const bookModel = require('../models/bookModel')
const authorModel = require('../models/authorsModel')

const Books  = async function(req, res){
    let detail = req.body
    let saveOn = await bookModel.create(detail)
    res.send({notes: saveOn })
}
const Author = async function (req, res){
    let name = req.body
    let data = await authorModel.create(name)
    res.send ({detali: data })
}

const update = async function(req, res){
   let authorName = await bookModel.find(  {author_name: "chetan Bhagat"} )
    let bookName = await bookModel.find(  {author_id: {$eq: authorName[0].author_id }} )  
    res.send({name: bookName})  
}

const price = async function (req,res){
   let bookPrice = await bookModel.findOneAndUpdate({ name: "Two states" }, {$set: { price:100 } }, {new: true})
    let authorBook = await authorModel.find({author_id: {$eq: bookPrice.author_id}}).select({_id:0,author_name:1})
    res.send({authorBook, bookPrice} )
}

const range = async function(req,res){
    let book = await bookModel.find({price: {$gte: 50,$lte:100}})
    let price = book.map(x=>x.author_id)
    let bookRange = await authorModel.find({author_id: price}).select({author_name:1, _id:0})
    res.send({bookRange})
}


module.exports.BookIn = Books

module.exports.Author = Author

module.exports.update = update

module.exports.price = price

module.exports.range = range


