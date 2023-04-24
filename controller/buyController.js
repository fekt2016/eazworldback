const WAValidator = require('@swyftx/api-crypto-address-validator');
const BuyCurrency = require('../models/buyModel');
const AppError = require('../utils/appError');
const catchasync = require('../utils/catchAsync');
const Factory = require('./handlerFactory');

exports.createBuycurrency = catchasync(async (req, res, next) => {
  if (!req.body.user) req.body.user = req.user.id;

  const newBuycurrency = await BuyCurrency.create({
    currency: req.body.currency,
    amountUSD: req.body.amountUSD,
    amountGHC: req.body.amountGHC,
    miner: req.body.miner,
    totaltopay: req.body.totaltopay,
    payment: req.body.payment,
    walletAddress: req.body.walletAddress,
    user: req.body.user,
  });

  const valid = WAValidator.validate(
    newBuycurrency.walletAddress,
    newBuycurrency.BuyCurrency
  );

  if (!valid) {
    return next(new AppError('Invalid address', 400));
  }

  res.status(201).json({
    status: 'success',
    data: {
      buycurrency: newBuycurrency,
    },
  });
});

exports.getAllBuycurrencies = Factory.getAll(BuyCurrency);
exports.deleteBuycurrency = Factory.deleteOne(BuyCurrency);
exports.getBuycurrency = Factory.getOne(BuyCurrency);
exports.updateBuycurrency = Factory.updateOne(BuyCurrency);
