const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const productController = require("../controllers/productController")

const UserController= require("../controllers/userController")

const orderController= require("../controllers/orderController")

const commonMW = require ("../middlewares/commonMiddlewares")


router.post("/product", productController.product)

router.post("/users", commonMW.mid1,UserController.getUsersData)

router.post("/order", commonMW.mid1,orderController.order)

module.exports = router;