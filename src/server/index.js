
let baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
let lang = '&lang=en'

const bodyParser = require('body-parser');
var axios = require ('axios');
var path = require('path');
const express = require('express');
var req = require ('request');
const dotenv = require('dotenv');

const app = express();


app.use(express.static('dist'));

dotenv.config();


console.log(__dirname);

let API_KEY = process.env.API_KEY;

console.log (`your API Key is ${API_KEY}`);


app.use(express.json());

const cors = require('cors');
app.use (cors()); 

app.use(express.urlencoded({extended:false}));


const mockAPIResponse = require('./mockAPI.js');
const { res } = require('express');





app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
const port = 8080;
app.listen(port, function () {
    console.log('Example app listening on port 8080!')
})

// 


/*app.get('/all' , function(req,res){
    res.send(mockAPIResponse);
    
    })*/
    
app.post('/add', async (req, res) =>  {

    try {
        const add = await axios.post(`${baseURL}?key=${API_KEY}${lang}&txt=${req.body.formText}&model=general`);
        
        const {data} = add;

        const {agreement} = data;
        const {subjectivity} = data;
        const {confidence} = data;
        const {irony} = data;

        sentiment = {
            agreement,
            subjectivity,
            confidence,
            irony
        };

        res.send(sentiment);
        console.log(data)
    }
    catch (error){
        console.log(`&{error}`);
    }

});

app.get('/all' , (req,res) => {
    res.send(sentiment);
    console.log (`returning => &{sentiment}`);
    
    });

 