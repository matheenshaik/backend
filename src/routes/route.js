const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
// const UserModel= require("../models/userModel.js")
// const productModel= require("../models/productModel.js")

const UserController= require("../controllers/userController")

const orderController= require("../controllers/orderController")

const productController= require("../controllers/productController")

const commonMW = require ("../middlewares/commonMiddlewares")


// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })


router.post("/product",productController.productDetails)

router.post("/users", commonMW.mid1,UserController.getUsersData)

router.post("/order", orderController.order)

router.get("/getOrder", orderController.getOrderDetails)

//router.post("/createBook", BookController.createBook  )




// router.post("/createUser", UserController.createUser)





// // e.g. restricted and open-to-all API's can be handled like below now:
// router.get('/homePage', mid1, UserController.feeds)
// router.get('/profileDetails', mid1, UserController.profileDetails)
// router.get('/friendList', mid1, UserController.friendList)
// router.get('/changePassword', mid1, UserController.changePassword)

// router.get('/termsAndConditions',  UserController.termsAndConditions)
// router.get('/register',  UserController.register)





//router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)



// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)




module.exports = router;