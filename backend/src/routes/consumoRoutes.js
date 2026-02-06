const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const consumoController = require('../controllers/consumoController');

router.get('/', auth, consumoController.getConsumo);
router.post('/', auth, consumoController.createConsumo);

module.exports = router;
