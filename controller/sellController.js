exports.createSellcurrency = (req, res) => {
    console.log(req.body);
    res.send('Done');
}
exports.getAllSellcurrencies = (req, res) => {
    res.status(200).json({
        status: 'success',
    });
};


exports.getSellcurrency = (req, res) => {
console.log(req.params);
res.status(200).json({
    status: "success"
});
};

exports.updateSellcurrency = (req, res) => {
res.status(200).json({
    status: 'success'
});
};

exports.deleteSellcurrency = (req, res) => {
console.log(req.params);
res.status(200).json({
    status: 'succes',
    message: "deleted"
});
};
