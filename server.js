var logger = require("morgan"),
cors = require("cors"),
http = require("http"),                     //importing http
express = require('express'),               //importing express and saving it inside this file
mongoose = require('mongoose'),             //importing mongoose package
bodyParser = require("body-parser");        //importing body parser
require('dotenv/config');                   //requiering env for cryptografy

app = express(),                            //executing express
port = process.env.PORT || 3000;
nbaCont = require('./controllers/nba-controller');

app.use(bodyParser.json());                 //middleware

const routerPost = require('./controllers/routes');//importing the post router

app.use('/controllers', routerPost);               //middleware

app.get('/', (req,res) =>{                  //creating routes
    res.send('Local Host')
});


// making the connection with mongodb using mongoose
mongoose.connect(process.env.DbConnect,{ useNewUrlParser: true },()=>
 console.log('connected to mongodb'))
//server listening
app.listen(port, function(err){
    console.log("Listening on port:" + port);
});                       


