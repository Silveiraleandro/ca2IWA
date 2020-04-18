var logger = require("morgan"),
cors = require("cors"),
http = require("http"),                   //importing http
express = require('express'),      //importing express and saving it inside this file
mongoose = require('mongoose'),    //importing mongoose package
app = express(),                  //executing express
bodyParser = require('body-parser');//importing body parser
require('dotenv/config');                //requiering env for cryptografy

app.use(bodyParser.json());

const routerPost = require('./routers/post');//importing the post router

app.use('/post', routerPost);            //middleware

app.get('/', (req,res) =>{               //creating routes
    res.send('Local Host')
});


// making the connection with mongodb using mongoose
mongoose.connect(process.env.DbConnect,{ useNewUrlParser: true },()=>
 console.log('connected to mongodb'))

app.listen(3000);                        //server listening


