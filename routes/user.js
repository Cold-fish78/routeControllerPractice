const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
console.log('user router loded');
router.get('/profile',userController.profile);
router.get('/signin',userController.signIn);
router.get('/signUP',userController.signUP);
router.post('/create',userController.create);


module.exports = router;