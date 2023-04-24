const express = require('express');
const testimonialController = require('../controller/testimonialController');
const authController = require('../controller/authController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, testimonialController.getAllTestimonial)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    testimonialController.createTestimonial
  );

router
  .route('/:id')
  // .get(testimonialController.getTestimonial)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    testimonialController.deleteTestimonial
  );

module.exports = router;
