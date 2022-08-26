const mid1= function ( req, res, next) {
    
    const freeapp = req.headers.isfreeapp
    // console.log(freeapp)

    if(!freeapp){
        return res.send({msg:"not received"})
    }
    next()
}
    

module.exports.mid1= mid1

