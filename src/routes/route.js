const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const publisherController= require("../controllers/publisherController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//author
router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthors", authorController.getAuthorsData)

//publisher
router.post("/createPublisher", publisherController.createPublisher)

router.get("/getPublisher", publisherController.getPublisher)

//book
router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithData", bookController.getBooksWithAuthorDetails)

router.put('/updateBook', bookController.updateBook)

router.get('/getrating', bookController.price)

module.exports = router;