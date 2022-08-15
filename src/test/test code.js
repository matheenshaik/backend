const test = function(req, res){
    let data = req.query
    let saveData = data
    console.log(saveData)
    res.send({result : saveData})
}
const testOn = function(req, res){
let element = req.body
// let allElement = element
console.log(element)
res.send({data : element})
}

const chemicals = function(req,res){
    let data = req.query
    let store = data
    console.log(store)
    res.send({result : store})
}

module.exports.sets = chemicals
 module.exports.urs = testOn
module.exports.testCode = test