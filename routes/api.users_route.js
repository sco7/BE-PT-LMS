const express = require('express');
const router = express.Router();
const userControl = require('../controllers/api.user_controller');

router.get('/', userControl.getAllUsers);

router.get('/:id', userControl.getUserById);

router.get('/username/:username', userControl.getUserByUsername);

router.post('/', userControl.postUser);

router.delete('/:id', userControl.deleteUserById)


module.exports = router;