const loggerOne = (request, response, next)=>{
console.log ('log1');
next();
}

module.exports = loggerOne;