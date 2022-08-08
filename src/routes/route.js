const express = require('express');
// const abc = require('../introduction/intro')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     logger.welcome()

//     res.send('My second ever api!')
// });

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    // res.send('Dummy response')
})

router.get('/movies', function (req, res){
    console.log(['RRR','KGF','Vikram','Krup'])
    let  movies = ['RRR','KGF','Vikram','Krup']    
    res.send(movies)
    
})

router.get('/movies/:indexNumber', function (req, res){
    let requestParams = req.params
    let index = requestParams.indexNumber

    for (let i=0; i < moives.length; i++){
        let arr = movies.length[i]
        if ( index == i){
            return res.send(arr[i])
        }
    }

    return res.send('valid index')
})

router.get('/films', function(req, res){
    
    const list = [{
        'id': 1,
        'name': 'the shining'
    } , {
        'id': 2,
        'name': 'Incendies'
    } , {
        'id': 3,
        'name':'Rang de Basanti'
    } ,{
        'id': 4,
        'name': 'Finding Nemo'
    }]
    console.log (list)
       res.send(list)
})


router.get('/films/:filmId', function(req, res){
    
    const filmslist = [{
        'id': 1,
        'name': 'the shining'
    } , {
        'id': 2,
        'name': 'Incendies'
    } , {
        'id': 3,
        'name':'Rang de Basanti'
    } ,{
        'id': 4,
        'name': 'Finding Nemo'
    }]

let index = req.Params.index
if(index < filmslist.length){
    return res.send("movies list")
} 
res.send('No movie exists with this id')

})


module.exports = router;