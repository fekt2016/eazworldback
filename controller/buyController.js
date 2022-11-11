const fs = require('fs');


const buycurrency = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/buycurrency.json`));

exports.getAllBuycurrencies = (req, res)=> {
  res.status(200).json({
    status: "success",
    results: buycurrency.length,
    buycurrency
  });
};


exports.createBuycurrency = (req, res) => {
    console.log(req.body);
    res.send('Done');
}

exports.getBuycurrency = (req, res) => {
console.log(req.params);
res.status(200).json({
    status: "success"
});
};

exports.updateBuycurrency = (req, res) => {
res.status(200).json({
    status: 'success'
});
};

exports.deleteBuycurrency = (req, res) => {
console.log(req.params);
res.status(200).json({
    status: 'succes',
    message: "deleted"
});
};