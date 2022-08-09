const express = require('express');
const lodash = require('lodash');
// const abc = require('../introduction/intro')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     res.send('My second ever api!')
// });
router.get('/test-me', function (req, res) {
    let months = [ 'jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
    let arr = lodash.chunk(months, 4)
    console.log(arr)    

    let array = [1,3,5,7,9,11,13,15,17,19]
    //odd numbers
    let num = lodash.tail(array)
    console.log(num)

    let numbers = [4,6,3,9,7,7,3,]
    //same numbers to combined
    let same = lodash.union(numbers)
    console.log(same)

    let adv = [['horror','the shining'],['drama','Titanic'],['thiller','shutter'],['fantasy','pans Labyrinth']]
    let list = lodash.fromPairs(adv)
    //use to set an aarray into object
    console.log(list)

   
    res.send('responce active')
});


// router.get('/test-you', function(req, res){
//     res.send('This is the second routes implementation')
// })

// router.get('/give-me-students-data',function(req, res){

// })
module.exports = router;
// adding this comment for no reason