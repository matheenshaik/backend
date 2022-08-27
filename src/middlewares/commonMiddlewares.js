const mid1= function ( req, res, next) {
    
    const freeapp = req.headers.isfreeapp
    // console.log(freeapp)

    if(!freeapp){
        return res.send({Alert:"Header not exist"})
    }
    next()
}
    

module.exports.mid1= mid1

