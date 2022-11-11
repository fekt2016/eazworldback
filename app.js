const express = require('express');
const app = express();
const buyRouter = require('./routes/buyRoutes');
const sellRouter = require('./routes/sellRoutes');
const userRouter = require('./routes/userRoutes');

const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
    console.log('hello from the middleware 🤣')
    next();
});

app.use('/api/v1/buycurrencies', buyRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/sellcurrencies', sellRouter);

module.exports = app;