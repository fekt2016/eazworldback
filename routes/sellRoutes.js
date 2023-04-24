const express = require('express');
const authController = require('../controller/authController');

const router = express.Router();
const sellController = require('../controller/sellController');

router
  .route('/')
  .get(authController.protect, sellController.getAllSellcurrencies)
  .post(authController.protect, sellController.createSellcurrency);
router
  .route('/:id')
  .get(authController.protect, sellController.getSellcurrency)
  .patch(authController.protect, sellController.updateSellcurrency)
  .delete(authController.protect, sellController.deleteSellcurrency);

module.exports = router;
