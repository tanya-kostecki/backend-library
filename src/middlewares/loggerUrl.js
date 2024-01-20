const dotenv = require("dotenv");

dotenv.config();

const {
  PORT = 3005,
  API_URL = "http://127.0.0.1"
} = process.env;


const loggerUrl = (request, response, next) => {
	console.log(`Адрес, на который пришел запрос: ${API_URL}:${PORT}${request.path}`);
	next();
};
 
module.exports = loggerUrl;