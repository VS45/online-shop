const express=require('express');
const { getHomePage, getLogin, postSignIn, getSignup, postSignup, getUsers } = require('../controller/homeController');
const { getAbout } = require('../controller/aboutController');
const { getServices } = require('../controller/servicesController');
const { getTransactionPage } = require('../controller/transactionController');
const router=express.Router();

router.get('/home',getHomePage);
router.get('/about',getAbout)
router.get('/services',getServices)
router.get('/login',getLogin)
router.post('/login',postSignIn)
router.get('/signup',getSignup)
router.post('/signup',postSignup)
router.get('/users',getUsers)
router.get('/transaction',getTransactionPage)
router.post('/transaction',getTransactionPage)

module.exports=router;