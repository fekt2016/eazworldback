
const express = require('express');
const buyController = require('../controller/buyController');






const router = express.Router();

router.route('/').get(buyController.getAllBuycurrencies).post(buyController.createBuycurrency);
router.route('/:id').get(buyController.getBuycurrency).patch(buyController.updateBuycurrency).delete(buyController.deleteBuycurrency);

module.exports = router;