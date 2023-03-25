const mongoose = require('mongoose');

const buySchema = new mongoose.Schema({
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
  },
});

const BuyCurrency = mongoose.model('Buycurrency', buySchema);

module.exports = BuyCurrency;
