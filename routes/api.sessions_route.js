const express = require('express');
const router = express.Router();
const sessionControl = require('../controllers/api.session_controller');

router.get('/', sessionControl.getAllSessions);

router.get('/:id', sessionControl.getSessionsById);

router.get('/user/:id', sessionControl.getSessionsByUserId);

router.get('/user/:id/:status', sessionControl.getSessionsByUserIdAndStatus);

module.exports = router;