const errorHandler = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json({ msj: err.message });
  } else {
    res.status(500).json({ msj: err.message });
  }
};
export default errorHandler;

// const errorHandler = (err, req, res, next) => {
//     const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//     res.status(statusCode).json({
//       message: err.message,
//       stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
//     });
//   };
//   export default errorHandler;
