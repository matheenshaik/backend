const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    
    BookName :{
        type: String,
        requried: true
    },
    price:{
        IndianPrice: String,
        EuropePrice: String
    },
   
    authorName: String,
    totalPage: String,
    stockAvailable: Boolean,
        
    year:{type: Number, default:2021}

}, {timeStamps: true})

module.exports = mongoose.model('Book', bookSchema) //books













// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [String],
    
//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10}
// }, { timestamps: true });


// module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
