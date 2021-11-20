const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
console.log('user router loded');
router.get('/login',userController.login);


module.exports = router;