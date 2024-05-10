const express = require('express');
const userController = require("../controllers/users"); 

const router = express.Router();

// Define route for user authentication (login)
router.post('/login', userController.login);

// Define route for user registration
router.post('/register', userController.register);


// Define route for appointment booking


module.exports = router;
