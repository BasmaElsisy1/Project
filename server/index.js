//Declare my API credentials
var newApi =  process.env.application_key;


const dotenv = require('dotenv');
dotenv.config();
console.log (`your API Key is ${process.env.application_key}`);

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// You could call it aylienapi, or anything else
var textapi = new ally({
    application_key: process.env.application_key
  });

  const dotenv = require('dotenv');
dotenv.config();