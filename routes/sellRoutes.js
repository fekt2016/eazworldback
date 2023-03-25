const express = require('express');

const router = express.Router();
const sellController = require('../controller/sellController');

router
  .route('/')
  .get(sellController.getAllSellcurrencies)
  .post(sellController.createSellcurrency);
router
  .route('/:id')
  .get(sellController.getSellcurrency)
  .patch(sellController.updateSellcurrency)
  .delete(sellController.deleteSellcurrency);

module.exports = router;
