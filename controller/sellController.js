const SellCurrency = require('../models/sellModel');
const Factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');

exports.createSellcurrency = catchAsync(async (req, res, next) => {
  if (!req.body.user) req.body.user = req.user.id;

  const newSellcurrency = await SellCurrency.create({
    currency: req.body.currency,
    amountUSD: req.body.amountUSD,
    amountGHC: req.body.amountGHC,
    payment: req.body.payment,
    user: req.body.user,
  });

  res.status(201).json({
    status: 'success',
    data: {
      Sellcurrency: newSellcurrency,
    },
  });
});
exports.getAllSellcurrencies = Factory.getAll(SellCurrency);
exports.getSellcurrency = Factory.getOne(SellCurrency);
exports.updateSellcurrency = Factory.updateOne(SellCurrency);
exports.deleteSellcurrency = Factory.deleteOne(SellCurrency);
