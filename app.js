const express = require('express');      //importing express and saving it inside this file
const mongoose = require('mongoose');    //importing mongoose package
const app = express();                   //executing express
require('dotenv/config');                //requiering env for cryptografy

app.get('/', (req,res) =>{               //creating routes
    res.send('we are on home')
});

app.get('/posts', (req,res) =>{          //creating routes
    res.send('we are on post')
});
// making the connection with mongodb using mongoose
mongoose.connect(process.env.DbConnect,{ useNewUrlParser: true },()=>
 console.log('connected to mongodb'))

app.listen(3000);                        //server listening


