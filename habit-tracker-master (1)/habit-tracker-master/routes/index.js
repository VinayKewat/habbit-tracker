// import express 
const express = require('express');

// inport router 
const router = express.Router();

// connect home page 
const homeController = require('../controllers/home_controller');
router.get('/',homeController.home);

// make route for habit 
router.post('/create-habit',homeController.createHabit);

// delete habit route
router.get('/delete-habit/',homeController.deleteHabit);

// use details routes
router.use('/details',require('./details'))

// export router 
module.exports=router;