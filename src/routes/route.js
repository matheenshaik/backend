const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")

// const UserController= require("../controllers/userController")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
const BookControl= require('../controllers/books.js')
const Book= require("../models/bookModel.js")
//const mongoose = require('mongoose')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post('/createBook', BookControl.info)

router.get('/getBooks', BookControl.getBook)

router.get('/getYear', BookControl.BookYear)

router.get('/getprice', BookControl.ParticularBook )

router.get('/getprice', BookControl.price)

router.get('/getRandomBooks', BookControl.RandomBooks)





// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

module.exports = router;