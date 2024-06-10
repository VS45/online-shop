const express=require('express');
const { getHomePage, getLogin, postSignIn, getSignup, postSignup } = require('../controller/homeController');
const { getAbout } = require('../controller/aboutController');
const { getServices } = require('../controller/servicesController');
const router=express.Router();

router.get('/home',getHomePage);
router.get('/about',getAbout)
router.get('/services',getServices)
router.get('/login',getLogin)
router.post('/login',postSignIn)
router.get('/signup',getSignup)
router.post('/signup',postSignup)

module.exports=router;