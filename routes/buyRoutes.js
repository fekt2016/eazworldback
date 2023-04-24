const express = require('express');
const buyController = require('../controller/buyController');
const authController = require('../controller/authController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, buyController.getAllBuycurrencies)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    buyController.createBuycurrency
  );
router
  .route('/:id')
  .get(buyController.getBuycurrency)
  .patch(buyController.updateBuycurrency)
  .delete(buyController.deleteBuycurrency);

module.exports = router;
