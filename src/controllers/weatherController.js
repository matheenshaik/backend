let axios = require("axios")


//appid:- 8942c9e953468fd10efb94a07106babb

let getWeather = async function (req, res){
    try {
        let weather = req.query.q
        let id = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${id}`
            
        }
        let result = await axios(options)
        console.log(result)
        let data = result.data
        res.status(200).send({ Details:data, country:"London"})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



let getTemp = async function(req, res){
    try{
        let weather = req.query.q
        let id = req.query.appid
        let options = {
            method:"get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${id}`
           
        }
        let result = await axios(options)
         console.log(result)
        let data =  result.data.main.temp
        res.status(200).send({Temperature:data, country:"London"})              
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg: err.message})
    }
   
}



let sortCities = async function(req, res){
    try{let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] 
    let id = req.query.appid
    let arrCities = [ ]
     for (let i=0; i< cities.length; i++){
    // for (let arrCities of cities){
        let places = { city:cities[i]}
        let options = {
            method:"get",
             url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${id}`
        }
        let result = await axios( options)
        places.temp = result.data.main.temp
        arrCities.push(places)
        }
    //res.status(200).send({msg:arrCities, status:true})

        let sorted = arrCities.sort(function(a,b) {return a.temp-b.temp})
        console.log(sorted)
        
        res.status(200).send({Temperature:sorted, status:true})
    }
     catch(err){
        console.log(err)
        res.status(500).send({msg: err.message})
    }
} 


module.exports.getWeather = getWeather
module.exports.getTemp = getTemp
module.exports.sortCities = sortCities