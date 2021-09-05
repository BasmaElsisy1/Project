newData = {}

const dotenv = require('dotenv');
dotenv.config({path:'.env'});
var path = require('path')


//API Call's variables
const baseURL ="https://api.meaningcloud.com/sentiment-2.1?key=";
const API_KEY = process.env.API_KEY;
console.log (`your API Key is ${API_KEY}`);

// Start up an instance of app
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
app.use (cors()); 
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})


// 


app.get('/all' , function(req,res){
    res.send(newData);
    console.log(newData);
    })
    
    app.post("/add", async(req, res)=>{
        const getData = await fetch(`${baseURL}${apiKey}&lang=auto&url=${req.body.formY}`,{
            method: 'POST'
        });
        try{
            const data = await getData.json();
            console.log(getData, data)
            res.send(data);
        }catch(error){
            console.log("error", error);
    }
    
    });
