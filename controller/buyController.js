// const fs = require('fs');
const BuyCurrency = require('../models/buyModel');

// const buycurrency = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/buycurrency.json`)
// );

exports.getAllBuycurrencies = async (req, res) => {
  const buycurrency = await BuyCurrency.find();

  res.status(200).json({
    status: 'success',
    results: buycurrency.length,
    data: {
      buycurrency,
    },
  });
};
// exports.getAllBuycurrencies = (req, res) => {
//   res.send('sucess');
// };

exports.createBuycurrency = async (req, res) => {
  const newBuycurrency = await BuyCurrency.create({
    currency: req.body.currency,
    amountUSD: req.body.amountUSD,
    amountGHC: req.body.amountGHC,
    miner: req.body.miner,
    totaltopay: req.body.totaltopay,
    payment: req.body.payment,
    walletAddress: req.body.walletAddress,
  });

  res.status(201).json({
    status: 'success',
    data: {
      buycurrency: newBuycurrency,
    },
  });
};

exports.getBuycurrency = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

exports.updateBuycurrency = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

exports.deleteBuycurrency = (req, res) => {
  res.status(200).json({
    status: 'succes',
    message: 'deleted',
  });
};
