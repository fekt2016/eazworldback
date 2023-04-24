const mongoose = require('mongoose');

const buySchema = new mongoose.Schema(
  {
    currency: {
      type: String,
      required: ['currency must be select'],
      enam: ['Bitcoin', 'Ethereum', 'Bitcoin Cash', 'Tether'],
    },
    amountUSD: {
      type: Number,
      required: [true, 'Amount you are exchanging!!'],
    },
    amountGHC: {
      type: Number,
      required: [true, 'Amount you are exchanging!!'],
    },
    miner: {
      type: Number,
      default: 0.5,
      required: [true, 'miners fee must be selected'],
    },
    totaltopay: {
      type: Number,
    },
    walletAddress: {
      type: String,
      required: [true, 'please enter your wallet address.'],
    },
    payment: {
      type: String,
      enam: ['mtn momo', 'airtel/tigo cash', 'vodafone cash', 'gt bank'],
      required: [true, 'payment must been selected'],
    },
    status: {
      type: String,
      default: 'payment waiting',
      enam: ['payment waiting', 'payment added', 'order completed'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
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
buySchema.index({ amountUSD: 1 });
buySchema.pre(/^find/, function (next) {
  console.log('test');
  this.populate({
    path: 'user',
    select: 'name photo',
  });
  next();
});

const BuyCurrency = mongoose.model('Buycurrency', buySchema);

module.exports = BuyCurrency;
