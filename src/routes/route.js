const express = require('express');
const router = express.Router();
const mongoose  = require('mongoose')

// // router.get("/test-me", function (req, res) {
// //     res.send("My first ever api!")
// // })


const userController= require("../controllers/userController")

const userMW = require("../middleware/userMiddleware")


 router.post("/users", userController.userIs) 

 router.post("/login", userController.login)

// //The userId is sent by front end
 router.get("/users/:userId",userMW.tokenMid, userController.UserData)

 router.put("/users/:userId", userMW.tokenMid,userController.updateData)

 router.delete("/users/:userId", userMW.tokenMid,userController.deleteData)

module.exports = router;