const publisherModel = require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherData = await publisherModel.create(publisher)
    res.send({data: publisherData})
}

const getPublisher= async function (req, res) {
    let publishers = await publisherModel.find()
    res.send({data: publishers})
}

module.exports.createPublisher= createPublisher
module.exports.getPublisher= getPublisher