const loggerOne = (request, response, next) => {
  console.log(`Запрос по адресу ${request.originalUrl}`);
  next();
};

module.exports = loggerOne;
