const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const objetivoController = require('../controllers/objetivoController');

router.get('/', auth, objetivoController.getObjetivos);
router.post('/', auth, objetivoController.createObjetivo);

module.exports = router;
