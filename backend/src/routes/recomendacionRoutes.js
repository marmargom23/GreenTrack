const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const recomendacionController = require('../controllers/recomendacionController');

router.get('/', auth, recomendacionController.getRecomendaciones);
router.post('/', auth, recomendacionController.createRecomendacion);

module.exports = router;
