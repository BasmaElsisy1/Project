newData = {}

const dotenv = require('dotenv');
dotenv.config({path:'.env'});

var path = require('path');


//API Call's variables
const baseURL ='https://api.meaningcloud.com/sentiment-2.1';
const API_KEY = process.env.API_KEY;
console.log (`your API Key is ${API_KEY}`);

// Start up an instance of app
const express = require('express');
const app = express();
app.use(express.static('dist'));
console.log(__dirname);

const cors = require('cors');
app.use (cors()); 

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const mockAPIResponse = require('./mockAPI.js');



// designates what port the app will listen to for incoming requests
const port = 8080;
app.listen(port, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// 


app.get('/all' , function(req,res){
    res.send(newData);
    console.log(newData);
    })
    
app.post('/add', async(req, res)=>{
    
    input = req.body.url;
    console.log(input);

    const getData = await fetch (`${baseURL}key=${API_KEY}&url=${req.body.formText}&lang=en`);
        console.log (getData);

    const finalData = await getData.json();
    console.log(finalData);

    newData = {
        agreement : finalData.agreement,
        subjectivity : finalData.subjectivity,
        confidence : finalData.confidence,
        irony : finalData.irony
    }

    res.send (newData);
},

app.get ('/add', function (req, resp) {
    res.send(newData);
}))


  