const { count } = require("console")
const productModel= require("../models/productModel")

const product= async function (req, res) {
    let data = req.body
    let savedData= await productModel.create(data)
    res.send({data: savedData})
}

module.exports.product= product
