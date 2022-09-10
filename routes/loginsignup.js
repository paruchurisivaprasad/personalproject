const express=require('express');
const router=express.Router();
const usercontrollers=require('../controllers/userlogin');


router.post('/register',usercontrollers.userregister);
router.post('/login',usercontrollers.postlogin);
router.get('/home',usercontrollers.homepage);


module.exports=router;

//http://localhost:3000/register
