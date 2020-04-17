const express = require('express');      //importing express and saving it inside this file
const mongoose = require('mongoose');    //importing mongoose package
const app = express();                   //executing express
require('dotenv/config');                //requiering env for cryptografy

const routerPost = require('./routers/post');//importing the post router

app.use('/post', routerPost);            //middleware

app.get('/', (req,res) =>{               //creating routes
    res.send('Local Host')
});


// making the connection with mongodb using mongoose
mongoose.connect(process.env.DbConnect,{ useNewUrlParser: true },()=>
 console.log('connected to mongodb'))

app.listen(3000);                        //server listening


