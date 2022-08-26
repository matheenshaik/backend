const mongoose = require('mongoose')

const productSchema = new mongoose.Schema( {
    name: String,
	category: String,
	price:{
        type: Number,
        requried:true
    } 
})
module.exports = mongoose.model("AppProduct", productSchema)
