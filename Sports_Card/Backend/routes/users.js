const express = require('express'); //Creating my express router 
const router = express.Router();
//My Login Page
router.get('/Login', (req, res) => res.render('login')); //Whenver i want to create a router, using a request and response object 

//My Register Page
router.get('/Register', (req, res) => res.render('register'));

//Reg Handel
router.post('register', (req, res) => {

    console.log(req.body) //Test
    res.send('test');

});

module.exports=router;