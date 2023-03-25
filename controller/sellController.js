const SellCurrency = require('../models/sellModel');

exports.createSellcurrency = async (req, res) => {
  const newSellcurrency = await SellCurrency.create({
    currency: req.body.currency,
    amountUSD: req.body.amountUSD,
    amountGHC: req.body.amountGHC,
    payment: req.body.payment,
  });

  res.status(201).json({
    status: 'success',
    data: {
      Sellcurrency: newSellcurrency,
    },
  });
};
exports.getAllSellcurrencies = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

exports.getSellcurrency = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

exports.updateSellcurrency = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

exports.deleteSellcurrency = (req, res) => {
  res.status(200).json({
    status: 'succes',
    message: 'deleted',
  });
};
