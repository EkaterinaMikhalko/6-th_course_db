const loggerTwo = (request, response, next)=>{
    console.log ('log2');
    next();
    }

    module.exports = loggerTwo;