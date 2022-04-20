// import express
const express = require('express');

// imort router 
const router=express.Router();

// get controller and detail controller 
const detailsController = require('../controllers/details_controller');
router.get('/',detailsController.details);

// for make habit update 
router.post('/update-habit/',detailsController.updateHabit);
module.exports=router;