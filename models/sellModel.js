const mongoose = require('mongoose');

const sellSchema = new mongoose.Schema({
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
});

const SellCurrency = mongoose.model('SellCurrency', sellSchema);

module.exports = SellCurrency;
