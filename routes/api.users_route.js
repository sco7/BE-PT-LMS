const express = require('express');
const router = express.Router();
const userControl = require('../controllers/api.user_controller');

router.get('/', userControl.getAllUsers);

router.get('/:id', userControl.getUserById);

module.exports = router;