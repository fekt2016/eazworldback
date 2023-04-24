const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/errorController');
const buyRouter = require('./routes/buyRoutes');
const sellRouter = require('./routes/sellRoutes');
const userRouter = require('./routes/userRoutes');
const testimonialRouter = require('./routes/testimonialRoutes');

const app = express();

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);
app.use(helmet());

app.use(express.json({ limit: '10kb' }));
app.use(mongoSanitize());
app.use(xss());
app.use(
  hpp({
    whitelist: ['amountUSD', 'amountGHC'],
  })
);
app.use(cookieParser());

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('hello from the middleware 🤣');
  req.requestTime = new Date().toDateString();

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

app.use('/api/v1/testimonial', testimonialRouter);
app.use('/api/v1/buycurrencies', buyRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/sellcurrencies', sellRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
