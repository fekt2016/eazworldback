const Testimonial = require('../models/testimonialModel');
const catchasync = require('../utils/catchAsync');
const Factory = require('./handlerFactory');

exports.getAllTestimonial = catchasync(async (req, res, next) => {
  const testimonial = await Testimonial.find();

  res.status(200).json({
    status: 'success',
    results: Testimonial.length,
    data: {
      testimonial,
    },
  });
});

exports.createTestimonial = catchasync(async (req, res, next) => {
  if (!req.body.user) req.body.user = req.user.id;
  const newTestimonial = await Testimonial.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      testimonial: newTestimonial,
    },
  });
});

exports.deleteTestimonial = Factory.deleteOne(Testimonial);
