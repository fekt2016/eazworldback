const AppError = require('../utils/appError');

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleValidatorErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data. ${errors.join(',')}`;
  return new AppError(message, 400);
};

const handleJWTErrorDB = () =>
  new AppError('Invalid token, Please log in again!!', 401);

const handleJWTExpiredErrorDB = () =>
  new AppError('Your token has expired! Please Log in again', 401);

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error('ERROR 🔥', err);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong!!',
    });
  }
};
module.exports = (err, req, res, next) => {
  // console.log(err.stack);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    console.log(err);
    let error = { ...err };
    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleValidatorErrorDB(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTErrorDB(error);
    if (error.name === 'TokenExpiredError')
      error = handleJWTExpiredErrorDB(error);
    sendErrorProd(error, res);
  }
};
