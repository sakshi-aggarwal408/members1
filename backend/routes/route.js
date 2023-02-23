const express = require('express');
const router = express.Router();
const Signup=require("../controller/userController")
const Login=require('../controller/userController')



router.post('/Signup',Signup)
router.post('/Login',Login)

module.exports=router
