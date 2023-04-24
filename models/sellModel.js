const mongoose = require('mongoose');

const sellSchema = new mongoose.Schema(
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
    payment: {
      type: String,
      enam: ['mtn momo', 'airtel/tigo cash', 'vodafone cash', 'gt bank'],
    },
    status: {
      type: String,
      default: 'waiting currency',
      enam: ['waiting currency', 'currency sent', 'order completed'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'This order must belong to a User'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

sellSchema.pre(/^find/, function (next) {
  console.log('test');
  this.populate({
    path: 'user',
    select: 'name photo',
  });
  next();
});

const SellCurrency = mongoose.model('SellCurrency', sellSchema);

module.exports = SellCurrency;
