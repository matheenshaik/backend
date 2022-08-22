const authorModel = require("../models/authorModel")
const publisherModel = require("../models/publisherModel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().count()
    res.send({allBooksList: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author',).populate('publisher')
    res.send({data: specificBook})

}
const updateBook = async function (req, res){ 
   let book = await publisherModel.find( {name: {$in :["penguin Publishers","Haper Collin Publishers"]}})
    let updateBook = await bookModel.find({$set:{isHardCover:true}} )
    res.send({data: book,updateBook})
}

const price = async function (req,res){
    let rating = await bookModel.find({ratings:{$gt:3.5}}).select({ratings:1,_id:0,name:1,price:1})
    res.send({data: rating})
}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateBook = updateBook 
module.exports.price = price