const errorHandler = (err, req, res, next) => {
    res.status(404).json({msj: 'Error'});
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
  