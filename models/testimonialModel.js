// review / rating / createdAt / ref to tour / ref to user
const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema(
  {
    testimonial: {
      type: String,
      required: [true, 'testimonial can not be empty!'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'testimonial must belong to a user'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
