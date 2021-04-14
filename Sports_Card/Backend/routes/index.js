const express = require('express'); //Creating my express router 
const router = express.Router();

router.get('/', (req, res) => res.render('welcome')); //Whenver i want to create a router, using a request and response object 

module.exports=router;