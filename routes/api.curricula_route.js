const express = require('express');
const router = express.Router();
const curriculaControl = require('../controllers/api.curricula_controller');

router.get('/', curriculaControl.getAllCurricula);

router.get('/:id', curriculaControl.getCurriculaById);

router.get('/user/:id', curriculaControl.getCurriculaByUserId);

router.post('/', curriculaControl.postCurricula);

router.delete('/:id', curriculaControl.deleteCurriculaById )

module.exports = router;