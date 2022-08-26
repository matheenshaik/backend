const productModel = require('../Models/productModel')

const productDetails = async function(req,res){
    let data = req.body
    let details = await productModel.create(data)
    res.send({msg:details})
    console.log(details)
}

module.exports.productDetails = productDetails