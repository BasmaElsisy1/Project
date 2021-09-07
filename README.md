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
**Webpack** : is a static module(bundle all js files into single js file) 

## Steps to install webpack:
1.	First know the vesion of npm and node by:
                 node -v
                 npm -v

2.	Install node-modules by:
          npm i

3.	Create webpack.config.js file and add the below code in it:
      const path = require (“path”);
      const webpack = require (“webpack”);
      module.exports = {}

**And in terminal install webpack and webpack-cli by:**

 npm i webpack webpack-cli

4.	In package.json add in script :

            “build” : “webpack”

**And be sure that in devDependencies :** webpack-dev-server
**And in dependencies :** webpack and webpack-cli

5.	Then in terminal write:

      npm run build 

And the dist folder will appears with main.js file
