# Problems that faced me while doing this project

1. .env file and API_KEY:
- the file that contains API_KEY must named only '.env'
- write your API_KEY as : API_KEY : ********************* That's it
- in your server/index.js add the dotenv in the top with the following lines too:
  ``
const dotenv = require('dotenv');
dotenv.config({path:'.env'});
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key="
const API_KEY = process.env.API_KEY;
console.log (`your API Key is ${API_KEY}`);

``
