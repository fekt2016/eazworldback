const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');

const buyRouter = require('./routes/buyRoutes');
const sellRouter = require('./routes/sellRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cookieParser());

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('hello from the middleware 🤣');
  // console.log(req.cookies);
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toDateString();
  console.log(req.cookies);
  next();
});
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.header('Access-Control-Allow-Credentials', true);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});
app.use(
  cors({
    origin: ['http://localhost:5000'],
    methods: ['GET', 'POST'],
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization, X-Requested-With',
  })
);

app.use('/api/v1/buycurrencies', buyRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/sellcurrencies', sellRouter);

module.exports = app;
